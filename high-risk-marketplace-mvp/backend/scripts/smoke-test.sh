#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${BASE_URL:-http://localhost:8080}"

request() {
  local method="$1"
  local path="$2"
  local user_id="$3"
  local body="${4:-}"

  if [[ -n "$body" ]]; then
    curl -sS -X "$method" "$BASE_URL$path" \
      -H "Content-Type: application/json" \
      -H "x-user-id: $user_id" \
      -d "$body"
  else
    curl -sS -X "$method" "$BASE_URL$path" \
      -H "x-user-id: $user_id"
  fi
}

echo "[1/6] reset db"
request POST "/v1/dev/reset" "admin-demo" | python3 -m json.tool

echo "[2/6] buyer age verification"
request POST "/v1/age/verify" "buyer-demo" '{"userId":"buyer-demo","provider":"yoti"}' | python3 -m json.tool

echo "[3/6] seller kyc"
request POST "/v1/sellers/kyc" "seller-demo" '{"sellerId":"seller-demo","providerCaseId":"case-001","provider":"sumsub"}' | python3 -m json.tool

echo "[4/6] create listing"
LISTING_RESPONSE="$(request POST "/v1/listings" "seller-demo" '{"sellerId":"seller-demo","title":"Vintage sample listing","description":"clean compliance-safe text","price":120,"currency":"USD"}')"
echo "$LISTING_RESPONSE" | python3 -m json.tool
LISTING_ID="$(echo "$LISTING_RESPONSE" | python3 -c 'import json,sys; print(json.load(sys.stdin)["listing"]["id"])')"

echo "[5/6] place order"
ORDER_RESPONSE="$(request POST "/v1/orders" "buyer-demo" "{\"buyerId\":\"buyer-demo\",\"listingId\":\"$LISTING_ID\",\"amount\":120,\"currency\":\"USD\"}")"
echo "$ORDER_RESPONSE" | python3 -m json.tool
ORDER_ID="$(echo "$ORDER_RESPONSE" | python3 -c 'import json,sys; print(json.load(sys.stdin)["order"]["id"])')"

echo "[6/6] delivery + force release payout"
request POST "/v1/orders/$ORDER_ID/delivery-confirmation" "buyer-demo" | python3 -m json.tool
request POST "/v1/payouts/release" "admin-demo" '{"force":true}' | python3 -m json.tool

echo "smoke test completed"
