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

json_get() {
  local expr="$1"
  python3 -c "import json,sys; data=json.load(sys.stdin); print($expr)"
}

echo "[1/13] reset db"
request POST "/v1/dev/reset" "admin-demo" | python3 -m json.tool

echo "[2/13] buyer age verification"
request POST "/v1/age/verify" "buyer-demo" '{"userId":"buyer-demo","provider":"yoti"}' | python3 -m json.tool

echo "[3/13] seller kyc"
request POST "/v1/sellers/kyc" "seller-demo" '{"sellerId":"seller-demo","providerCaseId":"case-001","provider":"sumsub"}' | python3 -m json.tool

echo "[4/13] create listing"
LISTING_RESPONSE="$(request POST "/v1/listings" "seller-demo" '{"sellerId":"seller-demo","title":"Vintage sample listing","description":"clean compliance-safe text","price":120,"currency":"USD"}')"
echo "$LISTING_RESPONSE" | python3 -m json.tool
LISTING_ID="$(echo "$LISTING_RESPONSE" | json_get "data['listing']['id']")"

echo "[5/13] purchase click-based promotion"
PROMOTION_RESPONSE="$(request POST "/v1/promotions/purchase" "seller-demo" "{\"sellerId\":\"seller-demo\",\"listingId\":\"$LISTING_ID\",\"planId\":\"boost-200-clicks\",\"currency\":\"USD\"}")"
echo "$PROMOTION_RESPONSE" | python3 -m json.tool
PROMOTION_ID="$(echo "$PROMOTION_RESPONSE" | json_get "data['promotion']['id']")"

echo "[6/13] consume one promotion click"
request POST "/v1/promotions/$PROMOTION_ID/consume-click" "buyer-demo" | python3 -m json.tool

echo "[7/13] inspect ranked listings"
request GET "/v1/listings?status=all" "buyer-demo" | python3 -m json.tool

echo "[8/13] place order"
ORDER_RESPONSE="$(request POST "/v1/orders" "buyer-demo" "{\"buyerId\":\"buyer-demo\",\"listingId\":\"$LISTING_ID\",\"amount\":120,\"currency\":\"USD\"}")"
echo "$ORDER_RESPONSE" | python3 -m json.tool
ORDER_ID="$(echo "$ORDER_RESPONSE" | json_get "data['order']['id']")"

echo "[9/13] delivery + force release payout"
request POST "/v1/orders/$ORDER_ID/delivery-confirmation" "buyer-demo" | python3 -m json.tool
request POST "/v1/payouts/release" "admin-demo" '{"force":true}' | python3 -m json.tool

echo "[10/13] wallet summary"
request GET "/v1/wallets/seller-demo/summary?currency=USD" "seller-demo" | python3 -m json.tool

echo "[11/13] request and approve withdrawal"
WITHDRAWAL_RESPONSE="$(request POST "/v1/wallets/seller-demo/withdrawals" "seller-demo" '{"amount":50,"currency":"USD","payoutMethod":"wire"}')"
echo "$WITHDRAWAL_RESPONSE" | python3 -m json.tool
WITHDRAWAL_ID="$(echo "$WITHDRAWAL_RESPONSE" | json_get "data['withdrawal']['id']")"
request POST "/v1/withdrawals/$WITHDRAWAL_ID/approve" "admin-demo" | python3 -m json.tool

echo "[12/13] create chat thread + send message"
THREAD_RESPONSE="$(request POST "/v1/chat/threads" "buyer-demo" '{"buyerId":"buyer-demo","sellerId":"seller-demo"}')"
echo "$THREAD_RESPONSE" | python3 -m json.tool
THREAD_ID="$(echo "$THREAD_RESPONSE" | json_get "data['thread']['id']")"
request POST "/v1/chat/threads/$THREAD_ID/messages" "buyer-demo" '{"senderId":"buyer-demo","text":"Can you ship tomorrow?"}' | python3 -m json.tool

echo "[13/13] list chat messages"
request GET "/v1/chat/threads/$THREAD_ID/messages" "seller-demo" | python3 -m json.tool

echo "smoke test completed"
