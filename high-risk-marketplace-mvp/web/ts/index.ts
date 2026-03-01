type Lang = 'en' | 'zh-TW' | 'hu' | 'fr';
type I18n = Record<Lang, Record<string, string>>;

const translations: I18n = {
  en: {
    brandSub: 'The Private Collection',
    navBoutique: 'Boutique',
    navMuses: 'The Muses',
    navPhilosophy: 'Philosophy',
    btnSignIn: 'Sign In',
    btnRequestAccess: 'Request Access',
    heroTitleLead: 'The Essence of',
    heroTitleEm: 'Intimacy.',
    heroExplore: 'Explore Collection',
    heroApplyMuse: 'Apply as a Muse',
    trustTitle: 'Unseen. Secure. Absolute.',
    trustCard1Title: 'Zero-Knowledge',
    trustCard1Copy: 'Your identity is cryptographically separated from transactions.',
    trustCard2Title: 'Impeccable Verification',
    trustCard2Copy: 'Every creator is manually reviewed before listing access.',
    trustCard3Title: 'Escrow Protection',
    trustCard3Copy: 'Funds remain protected until order integrity is complete.',
    archivesTitle: 'The Archives',
    cat1Title: 'Intimates',
    cat2Title: 'Hosiery',
    cat3Title: 'Footwear',
    museTitleLead: 'Become a Muse.',
    museTitleEm: 'Monetize Your Aura.',
    museSubmit: 'Submit',
    footerLegal1: 'Terms',
    footerLegal2: 'Privacy Vault',
    footerCopy: '© 2026 SCENTX.',
    footerBadge: 'Encrypted'
  },
  'zh-TW': {
    brandSub: '私密典藏艙',
    navBoutique: '典藏館',
    navMuses: '繆思名錄',
    navPhilosophy: '品牌哲學',
    btnSignIn: '登入',
    btnRequestAccess: '申請存取',
    heroTitleLead: '親密感的',
    heroTitleEm: '極致精華。',
    heroExplore: '探索藏品',
    heroApplyMuse: '申請成為 Creator',
    trustTitle: '隱密。安全。絕對。',
    trustCard1Title: '零知識隱私',
    trustCard1Copy: '身份與交易資料分層隔離，採雙盲寄送與安全路由機制。',
    trustCard2Title: '嚴格身分驗證',
    trustCard2Copy: '每位 Creator 在開放上架前都會通過人工審核。',
    trustCard3Title: '託管資金保護',
    trustCard3Copy: '資金先託管，待交付狀態確認後再釋放。',
    archivesTitle: '典藏檔案庫',
    cat1Title: 'Intimates',
    cat2Title: '襪類與褲襪',
    cat3Title: '鞋履',
    museTitleLead: '成為 Creator。',
    museTitleEm: '將影響力變現。',
    museSubmit: '提交',
    footerLegal1: '使用條款',
    footerLegal2: '隱私政策',
    footerCopy: '© 2026 SCENTX。',
    footerBadge: '加密金庫'
  },
  hu: {
    brandSub: 'A privát gyűjtemény',
    navBoutique: 'Butik',
    navMuses: 'A múzsák',
    navPhilosophy: 'Filozófia',
    btnSignIn: 'Bejelentkezés',
    btnRequestAccess: 'Hozzáférés kérése',
    heroTitleLead: 'Az intimitás',
    heroTitleEm: 'eszenciája.',
    heroExplore: 'Felfedezés',
    heroApplyMuse: 'Jelentkezés múzsának',
    trustTitle: 'Láthatatlan. Biztonságos. Abszolút.',
    trustCard1Title: 'Zero-Knowledge',
    trustCard1Copy: 'Személyazonossága kriptográfiailag elkülönül a tranzakcióktól.',
    trustCard2Title: 'Kifogástalan ellenőrzés',
    trustCard2Copy: 'Minden alkotót manuálisan ellenőrzünk.',
    trustCard3Title: 'Letéti védelem',
    trustCard3Copy: 'A pénzeszközök védve maradnak a szállításig.',
    archivesTitle: 'Az Archívum',
    cat1Title: 'Fehérneműk',
    cat2Title: 'Harisnyák',
    cat3Title: 'Lábbelik',
    museTitleLead: 'Legyen Ön is Múzsa.',
    museTitleEm: 'Monetizálja auráját.',
    museSubmit: 'Jelentkezés',
    footerLegal1: 'Feltételek',
    footerLegal2: 'Adatvédelem',
    footerCopy: '© 2026 SCENTX.',
    footerBadge: 'Titkosított'
  },
  fr: {
    brandSub: 'La Collection Privée',
    navBoutique: 'Boutique',
    navMuses: 'Les Muses',
    navPhilosophy: 'Philosophie',
    btnSignIn: 'Connexion',
    btnRequestAccess: "Demander l'accès",
    heroTitleLead: "L'essence de",
    heroTitleEm: "l'intimité.",
    heroExplore: 'Explorer',
    heroApplyMuse: 'Devenir une Muse',
    trustTitle: 'Invisible. Sécurisé. Absolu.',
    trustCard1Title: 'Confidentialité ZK',
    trustCard1Copy: 'Votre identité est cryptographiquement séparée.',
    trustCard2Title: 'Vérification',
    trustCard2Copy: 'Chaque créateur est examiné manuellement.',
    trustCard3Title: 'Protection Escrow',
    trustCard3Copy: 'Les fonds restent protégés jusqu’à la livraison.',
    archivesTitle: 'Les Archives',
    cat1Title: 'Lingerie',
    cat2Title: 'Bas',
    cat3Title: 'Chaussures',
    museTitleLead: 'Devenez une Muse.',
    museTitleEm: 'Monétisez votre Aura.',
    museSubmit: 'Soumettre',
    footerLegal1: 'Conditions',
    footerLegal2: 'Confidentialité',
    footerCopy: '© 2026 SCENTX.',
    footerBadge: 'Chiffré'
  }
};

function normalizeLang(raw: string | null): Lang {
  return raw === 'zh-TW' || raw === 'hu' || raw === 'fr' || raw === 'en' ? raw : 'en';
}

function copyFor(lang: Lang, key: string): string {
  return translations[lang]?.[key] ?? translations.en[key] ?? '';
}

function applyLang(lang: Lang): void {
  document.documentElement.lang = lang;

  const select = document.getElementById('langSelect') as HTMLSelectElement | null;
  if (select) {
    select.value = lang;
  }

  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((node) => {
    const key = node.getAttribute('data-i18n');
    if (!key) return;
    node.textContent = copyFor(lang, key);
  });

  document.querySelectorAll<HTMLElement>('[data-role-link]').forEach((node) => {
    const role = node.getAttribute('data-role-link');
    if (!role) return;
    node.setAttribute('href', `./app.html?role=${encodeURIComponent(role)}&lang=${encodeURIComponent(lang)}`);
  });

  localStorage.setItem('siteLang', lang);
}

function setMenuState(open: boolean): void {
  const trigger = document.getElementById('menuTrigger');
  const overlay = document.getElementById('overlayMenu');

  document.body.classList.toggle('menu-open', open);

  if (trigger) {
    trigger.textContent = open ? 'Close' : 'Menu';
    trigger.setAttribute('aria-expanded', String(open));
  }

  if (overlay) {
    if (open) {
      overlay.removeAttribute('inert');
    } else {
      overlay.setAttribute('inert', '');
    }
  }
}

function boot(): void {
  const query = new URLSearchParams(window.location.search);
  const lang = normalizeLang(query.get('lang') || localStorage.getItem('siteLang'));
  applyLang(lang);

  const select = document.getElementById('langSelect') as HTMLSelectElement | null;
  select?.addEventListener('change', (event) => {
    applyLang(normalizeLang((event.currentTarget as HTMLSelectElement).value));
  });

  const menuTrigger = document.getElementById('menuTrigger');
  menuTrigger?.addEventListener('click', () => {
    setMenuState(!document.body.classList.contains('menu-open'));
  });

  document.querySelectorAll('#overlayMenu a').forEach((link) => {
    link.addEventListener('click', () => {
      if (document.body.classList.contains('menu-open')) {
        setMenuState(false);
      }
    });
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && document.body.classList.contains('menu-open')) {
      setMenuState(false);
    }
  });

  setMenuState(false);
}

boot();

export {};
