// @ts-nocheck
      const I18N = {
        en: {
          brandTitle: 'Product Detail',
          brandSub: 'Premium listing and seller trust panel',
          landing: 'Landing',
          explore: 'Explore',
          checkout: 'Checkout',
          crumbCurrent: 'Listing detail',
          promoted: 'Promoted',
          message: 'Message',
          descTitle: 'Item Description',
          addToCart: 'Add to Cart',
          buyNow: 'Continue to Checkout',
          secure: 'Secure and discreet checkout',
          toastAdded: 'Item added to cart.',
          toastMessage: 'Message channel opened (demo).',
          replies: 'Replies in',
          hour: '1 hour'
        },
        'zh-TW': {
          brandTitle: '商品詳情',
          brandSub: '高信任度商品與賣家面板',
          landing: 'Landing',
          explore: 'Explore',
          checkout: '結帳',
          crumbCurrent: '商品詳情',
          promoted: '置頂',
          message: '私訊',
          descTitle: '商品描述',
          addToCart: '加入購物車',
          buyNow: '前往結帳',
          secure: '安全且隱私保護的結帳流程',
          toastAdded: '已加入購物車。',
          toastMessage: '私訊視窗已開啟（示意）。',
          replies: '平均回覆',
          hour: '1 小時'
        },
        hu: {
          brandTitle: 'Termek reszletek',
          brandSub: 'Premium listing es seller trust panel',
          landing: 'Landing',
          explore: 'Explore',
          checkout: 'Checkout',
          crumbCurrent: 'Listing reszletek',
          promoted: 'Promoted',
          message: 'Uzenet',
          descTitle: 'Leiras',
          addToCart: 'Kosarba',
          buyNow: 'Tovabb a checkoutra',
          secure: 'Biztonsagos es diszkret checkout',
          toastAdded: 'A termek a kosarba kerult.',
          toastMessage: 'Uzenet csatorna megnyitva (demo).',
          replies: 'Valaszido',
          hour: '1 ora'
        },
        fr: {
          brandTitle: 'Detail produit',
          brandSub: 'Listing premium avec panneau de confiance vendeur',
          landing: 'Landing',
          explore: 'Explore',
          checkout: 'Checkout',
          crumbCurrent: 'Detail du listing',
          promoted: 'Promu',
          message: 'Message',
          descTitle: 'Description',
          addToCart: 'Ajouter au panier',
          buyNow: 'Continuer vers checkout',
          secure: 'Checkout securise et discret',
          toastAdded: 'Article ajoute au panier.',
          toastMessage: 'Canal message ouvert (demo).',
          replies: 'Repond en',
          hour: '1 heure'
        }
      };

      const CATALOG = {
        'sample-lst-001': {
          id: 'sample-lst-001',
          title: 'Premium Signature Bundle',
          subtitle: 'Worn 3 days - high intensity training set',
          price: 120,
          currency: 'USD',
          promoted: true,
          description:
            'Premium cotton set prepared immediately after training sessions and stored in sealed packaging. Discreet handling and private support included from checkout to delivery.',
          chips: ['Sealed package', 'Discreet shipping', 'Video confirmation available'],
          images: [
            'https://picsum.photos/id/1025/900/1125',
            'https://picsum.photos/id/1027/900/1125',
            'https://picsum.photos/id/1035/900/1125',
            'https://picsum.photos/id/1040/900/1125'
          ],
          seller: {
            name: 'Lina Atelier',
            verified: true,
            rating: 4.9,
            reviews: 120,
            replyHours: 1,
            avatar: 'https://i.pravatar.cc/150?img=47'
          },
          shipping: 5,
          platformFeeRate: 0.1
        },
        'sample-lst-002': {
          id: 'sample-lst-002',
          title: 'Express Daily Drop',
          subtitle: 'Fast dispatch - tracking included',
          price: 95,
          currency: 'USD',
          promoted: false,
          description:
            'Curated everyday listing with priority packing and express handoff. Optimized for repeat buyers who value predictable quality and quick confirmation.',
          chips: ['Express dispatch', 'Tracked shipping', 'Repeat-buyer favorite'],
          images: [
            'https://picsum.photos/id/1062/900/1125',
            'https://picsum.photos/id/1067/900/1125',
            'https://picsum.photos/id/1069/900/1125',
            'https://picsum.photos/id/1070/900/1125'
          ],
          seller: {
            name: 'Maya Studio',
            verified: true,
            rating: 4.8,
            reviews: 89,
            replyHours: 1,
            avatar: 'https://i.pravatar.cc/150?img=33'
          },
          shipping: 5,
          platformFeeRate: 0.1
        },
        'sample-lst-003': {
          id: 'sample-lst-003',
          title: 'Collectors Edition Drop',
          subtitle: 'Limited quantity - premium tier',
          price: 160,
          currency: 'USD',
          promoted: true,
          description:
            'Limited collector listing with premium handling workflow, clear communication milestones, and authenticity-focused delivery flow for high-value orders.',
          chips: ['Limited release', 'Priority support', 'Collector tier'],
          images: [
            'https://picsum.photos/id/1074/900/1125',
            'https://picsum.photos/id/1080/900/1125',
            'https://picsum.photos/id/1081/900/1125',
            'https://picsum.photos/id/1082/900/1125'
          ],
          seller: {
            name: 'Noir Archive',
            verified: true,
            rating: 5,
            reviews: 56,
            replyHours: 1,
            avatar: 'https://i.pravatar.cc/150?img=32'
          },
          shipping: 7,
          platformFeeRate: 0.1
        }
      };

      const state = {
        lang: 'en',
        listingId: 'sample-lst-001',
        activeImageIndex: 0
      };

      function safeLang(raw) {
        return Object.prototype.hasOwnProperty.call(I18N, raw) ? raw : 'en';
      }

      function getQuery() {
        const params = new URLSearchParams(window.location.search);
        return {
          lang: params.get('lang'),
          listing: params.get('listing')
        };
      }

      function formatPrice(currency, value) {
        return `${currency} ${Number(value || 0).toFixed(2)}`;
      }

      function getCurrentListing() {
        return CATALOG[state.listingId] || CATALOG['sample-lst-001'];
      }

      function showToast(message) {
        const toast = document.getElementById('toast');
        toast.textContent = message;
        toast.classList.add('show');
        window.clearTimeout(showToast.timer);
        showToast.timer = window.setTimeout(() => toast.classList.remove('show'), 2200);
      }

      function saveCart() {
        const listing = getCurrentListing();
        const payload = {
          listingId: listing.id,
          title: listing.title,
          sellerName: listing.seller.name,
          imageUrl: listing.images[state.activeImageIndex] || listing.images[0],
          price: listing.price,
          currency: listing.currency,
          shipping: listing.shipping,
          platformFeeRate: listing.platformFeeRate,
          savedAt: new Date().toISOString()
        };
        localStorage.setItem('saas_cart_v1', JSON.stringify(payload));
      }

      function renderThumbs() {
        const listing = getCurrentListing();
        const holder = document.getElementById('thumbs');
        holder.innerHTML = listing.images
          .map(
            (url, index) => `
              <button class="thumb ${index === state.activeImageIndex ? 'active' : ''}" type="button" data-index="${index}">
                <img src="${url}" alt="Gallery image ${index + 1}" loading="lazy" />
              </button>
            `
          )
          .join('');

        holder.querySelectorAll('[data-index]').forEach((button) => {
          button.addEventListener('click', () => {
            state.activeImageIndex = Number(button.getAttribute('data-index') || 0);
            document.getElementById('heroImage').src = listing.images[state.activeImageIndex] || listing.images[0];
            renderThumbs();
          });
        });
      }

      function renderLinks() {
        const lang = state.lang;
        const listing = encodeURIComponent(state.listingId);
        document.getElementById('linkLanding').setAttribute('href', `./index.html?lang=${encodeURIComponent(lang)}`);
        document.getElementById('linkExplore').setAttribute('href', `./app.html?role=customer&lang=${encodeURIComponent(lang)}`);
        document.getElementById('linkCheckout').setAttribute('href', `./checkout.html?lang=${encodeURIComponent(lang)}`);
        document.getElementById('crumbExplore').setAttribute('href', `./app.html?role=customer&lang=${encodeURIComponent(lang)}`);
        document.getElementById('buyNowBtn').setAttribute('data-checkout', `./checkout.html?lang=${encodeURIComponent(lang)}&listing=${listing}`);
      }

      function renderI18n() {
        const dict = I18N[state.lang] || I18N.en;
        document.documentElement.lang = state.lang;
        document.getElementById('brandTitle').textContent = dict.brandTitle;
        document.getElementById('brandSub').textContent = dict.brandSub;
        document.getElementById('linkLanding').textContent = dict.landing;
        document.getElementById('linkExplore').textContent = dict.explore;
        document.getElementById('linkCheckout').textContent = dict.checkout;
        document.getElementById('crumbCurrent').textContent = dict.crumbCurrent;
        document.getElementById('promoBadge').textContent = dict.promoted;
        document.getElementById('messageBtn').textContent = dict.message;
        document.getElementById('descTitle').textContent = dict.descTitle;
        document.getElementById('addToCartBtn').textContent = dict.addToCart;
        document.getElementById('buyNowBtn').textContent = dict.buyNow;
        document.getElementById('secureNoteText').textContent = dict.secure;
      }

      function renderListing() {
        const dict = I18N[state.lang] || I18N.en;
        const listing = getCurrentListing();
        document.getElementById('title').textContent = listing.title;
        document.getElementById('subtitle').textContent = listing.subtitle;
        document.getElementById('price').textContent = formatPrice(listing.currency, listing.price);
        document.getElementById('description').textContent = listing.description;
        document.getElementById('heroImage').src = listing.images[state.activeImageIndex] || listing.images[0];
        document.getElementById('heroImage').alt = `${listing.title} image`;

        const promoBadge = document.getElementById('promoBadge');
        promoBadge.hidden = !listing.promoted;

        document.getElementById('sellerAvatar').src = listing.seller.avatar;
        document.getElementById('sellerName').textContent = listing.seller.name;
        document.getElementById('verifiedIcon').hidden = !listing.seller.verified;
        document.getElementById('sellerMeta').textContent = `⭐ ${listing.seller.rating} (${listing.seller.reviews} reviews) - ${dict.replies} ${dict.hour}`;

        const chips = document.getElementById('chips');
        chips.innerHTML = listing.chips.map((chip) => `<span class="chip">${chip}</span>`).join('');

        renderThumbs();
      }

      function bindEvents() {
        document.getElementById('langSelect').addEventListener('change', (event) => {
          state.lang = safeLang(event.target.value);
          localStorage.setItem('siteLang', state.lang);
          renderI18n();
          renderLinks();
        });

        document.getElementById('messageBtn').addEventListener('click', () => {
          const dict = I18N[state.lang] || I18N.en;
          showToast(dict.toastMessage);
        });

        document.getElementById('addToCartBtn').addEventListener('click', () => {
          const dict = I18N[state.lang] || I18N.en;
          saveCart();
          showToast(dict.toastAdded);
        });

        document.getElementById('buyNowBtn').addEventListener('click', () => {
          saveCart();
          const target = document.getElementById('buyNowBtn').getAttribute('data-checkout') || './checkout.html';
          window.location.href = target;
        });
      }

      function boot() {
        const query = getQuery();
        state.lang = safeLang(query.lang || localStorage.getItem('siteLang') || 'en');
        state.listingId = CATALOG[query.listing] ? query.listing : 'sample-lst-001';

        document.getElementById('langSelect').value = state.lang;
        renderI18n();
        renderLinks();
        renderListing();
        bindEvents();
      }

      boot();

export {};
