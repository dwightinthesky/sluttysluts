// @ts-nocheck
      const I18N = {
        en: {
          brandTitle: 'Secure Checkout',
          brandSub: 'Create pending order and proceed to hosted payment.',
          landing: 'Landing',
          detail: 'Product',
          explore: 'Explore',
          pageTitle: 'Secure Checkout',
          pageSub: 'Create pending order and proceed to hosted payment.',
          secureBadge: 'End-to-End Encrypted',
          deliveryTitle: 'Delivery Details',
          first: 'First Name / Alias',
          last: 'Last Name',
          email: 'Email Address',
          address: 'Shipping Address',
          privacyTitle: 'Require Discreet Packaging',
          privacySub: 'Item will arrive in a plain, unmarked mailer to protect your privacy.',
          summaryTitle: 'Order Summary',
          seller: 'Creator',
          subtotal: 'Subtotal',
          shipping: 'Priority Shipping',
          platform: 'Platform Assurance Fee',
          assuranceInfo: 'Covers secure hosted checkout, discreet routing, and 24/7 support.',
          total: 'Total Charge',
          totalSub: 'Includes all taxes and fees',
          pay: 'Proceed to Hosted Gateway',
          hint:
            'By proceeding, a pending order will be created. You will be redirected to our secure payment processor.',
          validating: 'Creating pending order...',
          success: 'Pending order created. Hosted checkout opened in a new tab.',
          fallback: 'API unavailable. Demo order generated locally: ',
          validationError: 'Please fill in first name, email, and shipping address.'
        },
        'zh-TW': {
          brandTitle: '安全結帳',
          brandSub: '先建立待付款訂單，再跳轉到 Hosted Payment。',
          landing: 'Landing',
          detail: '商品頁',
          explore: 'Explore',
          pageTitle: '安全結帳',
          pageSub: '先建立 pending order，再導向安全支付頁面。',
          secureBadge: '端對端加密',
          deliveryTitle: '收件與隱私資訊',
          first: '名字 / 暱稱',
          last: '姓氏',
          email: 'Email',
          address: '收件地址',
          privacyTitle: '需要隱私包裝',
          privacySub: '將使用無標示外包裝寄送，保護你的隱私。',
          summaryTitle: '訂單摘要',
          seller: '創作者',
          subtotal: '商品小計',
          shipping: '優先運送',
          platform: '平台保障費',
          assuranceInfo: '包含安全 Hosted Checkout、隱私路由與 24/7 客服支援。',
          total: '最終刷卡金額',
          totalSub: '已包含所有費用與稅項',
          pay: '前往 Hosted Gateway',
          hint: '按下後會先建立待付款訂單，再跳轉至第三方支付頁面完成付款。',
          validating: '正在建立待付款訂單...',
          success: '待付款訂單建立成功，已在新分頁開啟付款頁。',
          fallback: 'API 無法使用，已建立本地示範訂單：',
          validationError: '請先填寫名字、Email 與收件地址。'
        },
        hu: {
          brandTitle: 'Secure Checkout',
          brandSub: 'Create pending order and proceed to hosted payment.',
          landing: 'Landing',
          detail: 'Product',
          explore: 'Explore',
          pageTitle: 'Secure Checkout',
          pageSub: 'Create pending order and proceed to hosted payment.',
          secureBadge: 'End-to-End Encrypted',
          deliveryTitle: 'Delivery Details',
          first: 'First Name / Alias',
          last: 'Last Name',
          email: 'Email Address',
          address: 'Shipping Address',
          privacyTitle: 'Require Discreet Packaging',
          privacySub: 'Item will arrive in a plain, unmarked mailer to protect your privacy.',
          summaryTitle: 'Order Summary',
          seller: 'Creator',
          subtotal: 'Subtotal',
          shipping: 'Priority Shipping',
          platform: 'Platform Assurance Fee',
          assuranceInfo: 'Covers secure hosted checkout, discreet routing, and 24/7 support.',
          total: 'Total Charge',
          totalSub: 'Includes all taxes and fees',
          pay: 'Proceed to Hosted Gateway',
          hint:
            'By proceeding, a pending order will be created. You will be redirected to our secure payment processor.',
          validating: 'Creating pending order...',
          success: 'Pending order created. Hosted checkout opened in a new tab.',
          fallback: 'API unavailable. Demo order generated locally: ',
          validationError: 'Please fill in first name, email, and shipping address.'
        },
        fr: {
          brandTitle: 'Secure Checkout',
          brandSub: 'Create pending order and proceed to hosted payment.',
          landing: 'Landing',
          detail: 'Product',
          explore: 'Explore',
          pageTitle: 'Secure Checkout',
          pageSub: 'Create pending order and proceed to hosted payment.',
          secureBadge: 'End-to-End Encrypted',
          deliveryTitle: 'Delivery Details',
          first: 'First Name / Alias',
          last: 'Last Name',
          email: 'Email Address',
          address: 'Shipping Address',
          privacyTitle: 'Require Discreet Packaging',
          privacySub: 'Item will arrive in a plain, unmarked mailer to protect your privacy.',
          summaryTitle: 'Order Summary',
          seller: 'Creator',
          subtotal: 'Subtotal',
          shipping: 'Priority Shipping',
          platform: 'Platform Assurance Fee',
          assuranceInfo: 'Covers secure hosted checkout, discreet routing, and 24/7 support.',
          total: 'Total Charge',
          totalSub: 'Includes all taxes and fees',
          pay: 'Proceed to Hosted Gateway',
          hint:
            'By proceeding, a pending order will be created. You will be redirected to our secure payment processor.',
          validating: 'Creating pending order...',
          success: 'Pending order created. Hosted checkout opened in a new tab.',
          fallback: 'API unavailable. Demo order generated locally: ',
          validationError: 'Please fill in first name, email, and shipping address.'
        }
      };

      const FALLBACK_CART = {
        listingId: 'sample-lst-001',
        title: 'Premium Signature Bundle',
        sellerName: 'Lina Atelier',
        imageUrl: 'https://picsum.photos/id/1025/900/1125',
        price: 45,
        currency: 'USD',
        shipping: 8,
        platformFeeRate: 0.1222222222
      };

      const state = {
        lang: 'en',
        cart: FALLBACK_CART,
        discreet: true
      };

      function safeLang(raw) {
        return Object.prototype.hasOwnProperty.call(I18N, raw) ? raw : 'en';
      }

      function getQuery() {
        const p = new URLSearchParams(window.location.search);
        return {
          lang: p.get('lang')
        };
      }

      function formatPrice(currency, value) {
        return `${currency} ${Number(value || 0).toFixed(2)}`;
      }

      function readCart() {
        try {
          const raw = localStorage.getItem('saas_cart_v1');
          if (!raw) return FALLBACK_CART;
          const parsed = JSON.parse(raw);
          if (!parsed || typeof parsed !== 'object') return FALLBACK_CART;
          return {
            ...FALLBACK_CART,
            ...parsed
          };
        } catch (_error) {
          return FALLBACK_CART;
        }
      }

      function updateLinks() {
        const lang = encodeURIComponent(state.lang);
        document.getElementById('linkLanding').setAttribute('href', `./index.html?lang=${lang}`);
        document.getElementById('linkExplore').setAttribute('href', `./app.html?role=customer&lang=${lang}`);
        document.getElementById('linkDetail').setAttribute(
          'href',
          `./product-detail.html?listing=${encodeURIComponent(state.cart.listingId || 'sample-lst-001')}&lang=${lang}`
        );
      }

      function renderI18n() {
        const dict = I18N[state.lang] || I18N.en;
        document.documentElement.lang = state.lang;
        document.getElementById('brandTitle').textContent = dict.brandTitle;
        document.getElementById('brandSub').textContent = dict.brandSub;
        document.getElementById('linkLanding').textContent = dict.landing;
        document.getElementById('linkDetail').textContent = dict.detail;
        document.getElementById('linkExplore').textContent = dict.explore;
        document.getElementById('pageTitle').textContent = dict.pageTitle;
        document.getElementById('pageSub').textContent = dict.pageSub;
        document.getElementById('secureBadge').lastElementChild.textContent = dict.secureBadge;
        document.getElementById('deliveryTitle').textContent = dict.deliveryTitle;
        document.getElementById('labelFirst').textContent = dict.first;
        document.getElementById('labelLast').textContent = dict.last;
        document.getElementById('labelEmail').textContent = dict.email;
        document.getElementById('labelAddress').textContent = dict.address;
        document.getElementById('privacyTitle').textContent = dict.privacyTitle;
        document.getElementById('privacySub').textContent = dict.privacySub;
        document.getElementById('summaryTitle').textContent = dict.summaryTitle;
        document.getElementById('rowSubtotal').textContent = dict.subtotal;
        document.getElementById('rowShipping').textContent = dict.shipping;
        document.getElementById('rowPlatform').textContent = dict.platform;
        document.getElementById('assuranceInfo').textContent = dict.assuranceInfo;
        document.getElementById('totalLabel').textContent = dict.total;
        document.getElementById('totalSub').textContent = dict.totalSub;
        document.getElementById('payBtn').textContent = dict.pay;
        document.getElementById('payHint').textContent = dict.hint;
      }

      function renderSummary() {
        const dict = I18N[state.lang] || I18N.en;
        const cart = state.cart;
        const currency = cart.currency || 'USD';
        const subtotal = Number(cart.price || 0);
        const shipping = Number(cart.shipping || 0);
        const platformFee = subtotal * Number(cart.platformFeeRate || 0.1);
        const total = subtotal + shipping + platformFee;

        document.getElementById('itemImage').src = cart.imageUrl || FALLBACK_CART.imageUrl;
        document.getElementById('itemTitle').textContent = cart.title || FALLBACK_CART.title;
        document.getElementById('itemSeller').firstElementChild.textContent = `${dict.seller}: ${cart.sellerName || FALLBACK_CART.sellerName}`;
        document.getElementById('itemPrice').textContent = formatPrice(currency, subtotal);
        document.getElementById('subtotalValue').textContent = formatPrice(currency, subtotal);
        document.getElementById('shippingValue').textContent = formatPrice(currency, shipping);
        document.getElementById('platformValue').textContent = formatPrice(currency, platformFee);
        document.getElementById('totalValue').textContent = formatPrice(currency, total);
      }

      function renderDiscreet() {
        const card = document.getElementById('privacyCard');
        const checkbox = document.getElementById('discreet');
        checkbox.checked = state.discreet;
        card.classList.toggle('is-active', state.discreet);
      }

      function showStatus(message, type) {
        const box = document.getElementById('statusBox');
        box.textContent = message;
        box.classList.add('show');
        box.classList.remove('pending', 'success', 'error');
        box.classList.add(type || 'pending');
      }

      async function createPendingOrder() {
        const dict = I18N[state.lang] || I18N.en;

        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const email = document.getElementById('email').value.trim();
        const address = document.getElementById('address').value.trim();

        if (!firstName || !email || !address) {
          showStatus(dict.validationError, 'error');
          return;
        }

        const button = document.getElementById('payBtn');
        button.disabled = true;
        showStatus(dict.validating, 'pending');

        const cart = state.cart;
        const base = (localStorage.getItem('saas_api_base') || 'http://localhost:8080').replace(/\/$/, '');

        try {
          const response = await fetch(`${base}/v1/orders`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-user-id': 'buyer-demo'
            },
            body: JSON.stringify({
              buyerId: 'buyer-demo',
              listingId: cart.listingId || 'sample-lst-001',
              currency: cart.currency || 'USD',
              customerContext: {
                firstName,
                lastName,
                email,
                address,
                discreetPackaging: state.discreet
              }
            })
          });

          const raw = await response.text();
          const data = raw ? JSON.parse(raw) : {};
          if (!response.ok) {
            throw new Error(`${response.status}`);
          }

          const checkoutUrl =
            data.checkoutUrl ||
            (data.order && data.order.hostedCheckoutUrl) ||
            (data.order && data.order.checkoutUrl) ||
            '';

          if (checkoutUrl) {
            window.open(checkoutUrl, '_blank', 'noopener');
          }

          showStatus(dict.success + (data.order && data.order.id ? ` (${data.order.id})` : ''), 'success');
        } catch (_error) {
          const fakeId = `ord_demo_${Date.now()}`;
          showStatus(dict.fallback + fakeId, 'error');
        } finally {
          button.disabled = false;
        }
      }

      function bindEvents() {
        document.getElementById('langSelect').addEventListener('change', (event) => {
          state.lang = safeLang(event.target.value);
          localStorage.setItem('siteLang', state.lang);
          renderI18n();
          renderSummary();
          updateLinks();
        });

        const privacyCard = document.getElementById('privacyCard');
        privacyCard.addEventListener('click', () => {
          state.discreet = !state.discreet;
          renderDiscreet();
        });
        privacyCard.addEventListener('keydown', (event) => {
          if (event.key !== 'Enter' && event.key !== ' ') return;
          event.preventDefault();
          state.discreet = !state.discreet;
          renderDiscreet();
        });

        document.getElementById('discreet').addEventListener('click', (event) => {
          event.stopPropagation();
          state.discreet = !state.discreet;
          renderDiscreet();
        });

        document.getElementById('payBtn').addEventListener('click', createPendingOrder);
      }

      function boot() {
        const query = getQuery();
        state.lang = safeLang(query.lang || localStorage.getItem('siteLang') || 'en');
        state.cart = readCart();

        document.getElementById('langSelect').value = state.lang;
        renderI18n();
        renderSummary();
        renderDiscreet();
        updateLinks();
        bindEvents();
      }

      boot();

export {};
