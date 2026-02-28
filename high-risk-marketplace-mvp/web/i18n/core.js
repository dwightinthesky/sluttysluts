(function initI18nCore() {
  const LANGUAGE_KEY = 'siteLang';
  const SUPPORTED = ['zh-Hant', 'en', 'hu', 'fr'];

  function resolveInitialLanguage() {
    const stored = localStorage.getItem(LANGUAGE_KEY);
    if (stored && SUPPORTED.includes(stored)) return stored;

    const browserLang = (navigator.language || '').toLowerCase();
    if (browserLang.startsWith('zh')) return 'zh-Hant';
    if (browserLang.startsWith('fr')) return 'fr';
    if (browserLang.startsWith('hu')) return 'hu';
    return 'en';
  }

  function getTexts(pageKey, lang) {
    const all = window.SITE_TRANSLATIONS || {};
    const common = (all.common && (all.common[lang] || all.common.en)) || {};
    const pages = all.pages || {};
    const pageMap = pages[pageKey] || {};
    const page = pageMap[lang] || pageMap.en || {};
    return { ...common, ...page };
  }

  function applyTexts(texts) {
    if (texts.htmlLang) {
      document.documentElement.lang = texts.htmlLang;
    }
    if (texts.pageTitle) {
      document.title = texts.pageTitle;
    }

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (Object.prototype.hasOwnProperty.call(texts, key)) {
        el.textContent = texts[key];
      }
    });

    document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      const descriptor = el.getAttribute('data-i18n-attr') || '';
      descriptor.split(';').forEach((entry) => {
        const [attr, key] = entry.split(':').map((item) => item && item.trim());
        if (!attr || !key) return;
        if (Object.prototype.hasOwnProperty.call(texts, key)) {
          el.setAttribute(attr, texts[key]);
        }
      });
    });
  }

  window.initI18nPage = function initI18nPage(pageKey) {
    const select = document.getElementById('language-select');
    const language = resolveInitialLanguage();

    function setLanguage(next) {
      const lang = SUPPORTED.includes(next) ? next : 'en';
      applyTexts(getTexts(pageKey, lang));
      if (select) select.value = lang;
      localStorage.setItem(LANGUAGE_KEY, lang);
    }

    if (select) {
      select.addEventListener('change', (event) => {
        setLanguage(event.target.value);
      });
    }

    setLanguage(language);
  };
})();
