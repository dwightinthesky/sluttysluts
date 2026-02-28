#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${BASE_URL:-http://localhost:8090}"

req() {
  local method="$1"
  local path="$2"
  local user="$3"
  local body="${4:-}"

  if [[ -n "$body" ]]; then
    curl -sS -X "$method" "$BASE_URL$path" -H "Content-Type: application/json" -H "x-user-id: $user" -d "$body"
  else
    curl -sS -X "$method" "$BASE_URL$path" -H "x-user-id: $user"
  fi
}

echo "[1/8] reset"
req POST "/api/dev/reset" "admin_demo" | python3 -m json.tool

echo "[2/8] buyer age verification"
req POST "/api/verification/age" "buyer_demo" '{"userId":"buyer_demo","provider":"yoti"}' | python3 -m json.tool

echo "[3/8] seller kyc"
req POST "/api/verification/kyc" "seller_demo" '{"userId":"seller_demo","provider":"sumsub","providerCaseId":"case_001"}' | python3 -m json.tool

echo "[4/8] create listing"
LISTING_JSON="$(req POST "/api/listings" "seller_demo" '{"sellerId":"seller_demo","title":"Compliant demo product","description":"No blocked keywords","price":120,"currency":"USD","inventory":2}')"
echo "$LISTING_JSON" | python3 -m json.tool
LISTING_ID="$(echo "$LISTING_JSON" | python3 -c 'import json,sys; print(json.load(sys.stdin)["listing"]["id"])')"

echo "[5/8] place order"
ORDER_JSON="$(req POST "/api/orders" "buyer_demo" "{\"buyerId\":\"buyer_demo\",\"listingId\":\"$LISTING_ID\",\"quantity\":1,\"paymentMethod\":\"card\"}")"
echo "$ORDER_JSON" | python3 -m json.tool
ORDER_ID="$(echo "$ORDER_JSON" | python3 -c 'import json,sys; print(json.load(sys.stdin)["order"]["id"])')"

echo "[6/8] delivery confirm"
req POST "/api/orders/$ORDER_ID/confirm-delivery" "buyer_demo" | python3 -m json.tool

echo "[7/8] payout release"
req POST "/api/payouts/release" "ops_demo" '{"force":true}' | python3 -m json.tool

echo "[8/8] analytics"
req GET "/api/analytics/metrics?tenantId=tenant_demo" "admin_demo" | python3 -m json.tool

echo "smoke test done"
