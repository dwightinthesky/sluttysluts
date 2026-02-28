(function () {
  const state = {
    lang: localStorage.getItem('saasLang') || 'zh-Hant',
    apiBase: localStorage.getItem('saasApiBase') || 'http://localhost:8090',
    actorId: 'admin_demo'
  };

  const dom = {
    lang: document.getElementById('lang-select'),
    apiBase: document.getElementById('api-base'),
    saveApi: document.getElementById('save-api'),
    actor: document.getElementById('actor-select'),
    output: document.getElementById('output')
  };

  function t(key) {
    return (window.I18N[state.lang] && window.I18N[state.lang][key]) || (window.I18N.en && window.I18N.en[key]) || key;
  }

  function applyLanguage() {
    document.documentElement.lang = state.lang;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      el.textContent = t(key);
    });
    dom.lang.value = state.lang;
  }

  function setOutput(title, data) {
    const text = typeof data === 'string' ? data : JSON.stringify(data, null, 2);
    dom.output.textContent = `[${new Date().toLocaleTimeString()}] ${title}\n${text}\n\n` + dom.output.textContent;
  }

  async function apiRequest(path, method = 'GET', body) {
    const url = `${state.apiBase}${path}`;
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
        'x-user-id': state.actorId
      }
    };

    if (body !== undefined) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(url, options);
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(`${response.status} ${payload.code || 'ERROR'}: ${payload.message || 'request failed'}`);
    }
    return payload;
  }

  async function runAction(label, fn) {
    try {
      const result = await fn();
      setOutput(label, result);
    } catch (error) {
      setOutput(`${label} - ERROR`, String(error.message || error));
    }
  }

  function bindTabs() {
    const tabs = Array.from(document.querySelectorAll('.tab'));
    const panes = Array.from(document.querySelectorAll('.tab-pane'));

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        tabs.forEach((x) => x.classList.remove('active'));
        panes.forEach((x) => x.classList.remove('active'));
        tab.classList.add('active');
        const pane = document.getElementById(`tab-${tab.dataset.tab}`);
        if (pane) pane.classList.add('active');
      });
    });
  }

  function bindControls() {
    dom.lang.addEventListener('change', (e) => {
      state.lang = e.target.value;
      localStorage.setItem('saasLang', state.lang);
      applyLanguage();
    });

    dom.actor.addEventListener('change', (e) => {
      state.actorId = e.target.value;
      setOutput('Actor switched', { actor: state.actorId });
    });

    dom.saveApi.addEventListener('click', () => {
      state.apiBase = dom.apiBase.value.trim().replace(/\/$/, '');
      localStorage.setItem('saasApiBase', state.apiBase);
      setOutput('API base saved', { apiBase: state.apiBase });
    });

    document.getElementById('btn-reset').addEventListener('click', () =>
      runAction('Reset demo', () => apiRequest('/api/dev/reset', 'POST'))
    );

    document.getElementById('btn-dashboard').addEventListener('click', () =>
      runAction('Dashboard', () => apiRequest('/api/tenants/tenant_demo/dashboard'))
    );

    document.getElementById('btn-metrics').addEventListener('click', () =>
      runAction('Metrics', () => apiRequest('/api/analytics/metrics?tenantId=tenant_demo'))
    );

    document.getElementById('btn-age-verify').addEventListener('click', () => {
      const body = {
        userId: document.getElementById('age-user-id').value.trim(),
        provider: document.getElementById('age-provider').value.trim()
      };
      runAction('Age verification', () => apiRequest('/api/verification/age', 'POST', body));
    });

    document.getElementById('btn-kyc-verify').addEventListener('click', () => {
      const body = {
        userId: document.getElementById('kyc-user-id').value.trim(),
        providerCaseId: document.getElementById('kyc-case-id').value.trim(),
        provider: 'sumsub'
      };
      runAction('Seller KYC', () => apiRequest('/api/verification/kyc', 'POST', body));
    });

    document.getElementById('btn-create-listing').addEventListener('click', () => {
      const body = {
        sellerId: document.getElementById('listing-seller-id').value.trim(),
        title: document.getElementById('listing-title').value.trim(),
        description: document.getElementById('listing-desc').value.trim(),
        price: Number(document.getElementById('listing-price').value),
        currency: 'USD',
        inventory: 1
      };

      runAction('Create listing', async () => {
        const result = await apiRequest('/api/listings', 'POST', body);
        const listingId = result?.listing?.id;
        if (listingId) {
          document.getElementById('order-listing-id').value = listingId;
        }
        return result;
      });
    });

    document.getElementById('btn-place-order').addEventListener('click', () => {
      const body = {
        buyerId: document.getElementById('order-buyer-id').value.trim(),
        listingId: document.getElementById('order-listing-id').value.trim(),
        quantity: Number(document.getElementById('order-qty').value),
        paymentMethod: document.getElementById('order-method').value
      };

      runAction('Place order', async () => {
        const result = await apiRequest('/api/orders', 'POST', body);
        const orderId = result?.order?.id;
        if (orderId) {
          document.getElementById('delivery-order-id').value = orderId;
          document.getElementById('dispute-order-id').value = orderId;
        }
        return result;
      });
    });

    document.getElementById('btn-confirm-delivery').addEventListener('click', () => {
      const orderId = document.getElementById('delivery-order-id').value.trim();
      runAction('Confirm delivery', () => apiRequest(`/api/orders/${orderId}/confirm-delivery`, 'POST'));
    });

    document.getElementById('btn-release-payout').addEventListener('click', () => {
      const body = { force: document.getElementById('force-release').checked };
      runAction('Release payout', () => apiRequest('/api/payouts/release', 'POST', body));
    });

    document.getElementById('btn-moderate').addEventListener('click', () => {
      const body = {
        entityType: document.getElementById('mod-entity-type').value.trim(),
        entityId: document.getElementById('mod-entity-id').value.trim(),
        text: document.getElementById('mod-text').value.trim()
      };
      runAction('Moderation screen', () => apiRequest('/api/moderation/screen', 'POST', body));
    });

    document.getElementById('btn-dispute').addEventListener('click', () => {
      const body = {
        orderId: document.getElementById('dispute-order-id').value.trim(),
        reason: document.getElementById('dispute-reason').value.trim()
      };
      runAction('Open dispute', () => apiRequest('/api/disputes', 'POST', body));
    });
  }

  function init() {
    dom.apiBase.value = state.apiBase;
    dom.actor.value = state.actorId;
    applyLanguage();
    bindTabs();
    bindControls();
    setOutput('Ready', { apiBase: state.apiBase, actor: state.actorId });
  }

  init();
})();
