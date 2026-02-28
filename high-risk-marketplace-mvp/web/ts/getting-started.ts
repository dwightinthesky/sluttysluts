      const TEXT = {
        en: {
          title: 'Getting Started',
          subtitle: 'Enterprise setup for Landing + Console + Backend flow',
          btnLanding: 'Landing',
          btnOpenApp: 'Open Console',
          heroTitle: 'Production-style local bring-up in under 5 minutes',
          heroCopy:
            'Run backend APIs, verify end-to-end payment lifecycle, and then open role-based workspaces from the Landing page.',
          stepTitle: '1) Boot backend services',
          stepCopy: 'Install dependencies and start the API server.',
          smokeTitle: '2) Run full smoke validation',
          smokeCopy: 'Execute the scripted journey: KYC, listing, order, webhook, payout, wallet, chat.',
          uiTitle: '3) Open SaaS interfaces',
          uiPoint1: 'Landing: role entry + language selector',
          uiPoint2: 'Console: customer, creator, operations, API logs',
          uiPoint3: 'Set API base to match your local backend',
          archTitle: 'Reference architecture (MVP)',
          archNode1: 'Landing + Console UI',
          archNode1Sub: 'GitHub Pages static frontend',
          archNode2: 'Backend API Layer',
          archNode2Sub: 'Order, promotion, wallet, webhook orchestration',
          archNode3: 'Data and ledger model',
          archNode3Sub: 'Orders, payments, reserve, payouts, audit events',
          footer: 'Tip: enter via Landing role buttons so role/lang is passed into the console URL.'
        },
        'zh-TW': {
          title: '快速開始',
          subtitle: 'Landing + Console + Backend 的企業級啟動流程',
          btnLanding: '回 Landing',
          btnOpenApp: '開啟 Console',
          heroTitle: '5 分鐘內完成接近正式環境的本地啟動',
          heroCopy: '先跑 API，再驗證完整支付生命週期，最後從 Landing 角色入口進入對應工作台。',
          stepTitle: '1) 啟動後端服務',
          stepCopy: '安裝套件並啟動 API server。',
          smokeTitle: '2) 執行完整 smoke 驗證',
          smokeCopy: '腳本會跑 KYC、上架、下單、webhook、撥款、錢包與聊天流程。',
          uiTitle: '3) 開啟 SaaS 介面',
          uiPoint1: 'Landing：角色入口 + 語言切換',
          uiPoint2: 'Console：customer / creator / operations / API logs',
          uiPoint3: '在 Console 中設定 API base 指向本地 backend',
          archTitle: '參考架構（MVP）',
          archNode1: 'Landing + Console 前端',
          archNode1Sub: '部署在 GitHub Pages 的靜態站',
          archNode2: 'Backend API 層',
          archNode2Sub: '處理訂單、推廣、錢包與 webhook 協調',
          archNode3: '資料與帳本模型',
          archNode3Sub: '訂單、支付、保留金、撥款、稽核事件',
          footer: '提示：建議從 Landing 角色入口進入，URL 會自動帶入 role/lang。'
        },
        hu: {
          title: 'Gyors kezdes',
          subtitle: 'Vallalati setup Landing + Console + Backend flow-hoz',
          btnLanding: 'Landing',
          btnOpenApp: 'Console megnyitasa',
          heroTitle: 'Production jellegu local inditas 5 perc alatt',
          heroCopy: 'Inditsd az API-t, ellenorizd az end-to-end payment lifecycle-t, majd lepj be szerep szerint.',
          stepTitle: '1) Backend szolgaltatasok inditasa',
          stepCopy: 'Fuggosegek telepitese es API server inditasa.',
          smokeTitle: '2) Teljes smoke validacio',
          smokeCopy: 'A script lefuttatja a KYC, listing, order, webhook, payout, wallet es chat lepeseit.',
          uiTitle: '3) SaaS feluletek megnyitasa',
          uiPoint1: 'Landing: szerepbelepes + nyelvvalaszto',
          uiPoint2: 'Console: customer, creator, operations, API logs',
          uiPoint3: 'A Console API base cimet allitsd a local backendre',
          archTitle: 'Referencia architektura (MVP)',
          archNode1: 'Landing + Console UI',
          archNode1Sub: 'GitHub Pages statikus frontend',
          archNode2: 'Backend API reteg',
          archNode2Sub: 'Order, promotion, wallet, webhook orchestration',
          archNode3: 'Adat es ledger modell',
          archNode3Sub: 'Orders, payments, reserve, payouts, audit events',
          footer: 'Tipp: Landing szerepgombokkal lepj be, igy a role/lang parameterek atadodnak.'
        },
        fr: {
          title: 'Demarrage rapide',
          subtitle: 'Setup niveau entreprise pour Landing + Console + Backend',
          btnLanding: 'Landing',
          btnOpenApp: 'Ouvrir Console',
          heroTitle: 'Mise en route locale type production en moins de 5 minutes',
          heroCopy: 'Lancez les APIs, validez le cycle paiement complet, puis ouvrez les workspaces selon le role.',
          stepTitle: '1) Demarrer les services backend',
          stepCopy: 'Installer les dependances puis lancer le serveur API.',
          smokeTitle: '2) Executer la validation smoke complete',
          smokeCopy: 'Le script couvre KYC, listing, order, webhook, payout, wallet et chat.',
          uiTitle: '3) Ouvrir les interfaces SaaS',
          uiPoint1: 'Landing: entree par role + selecteur de langue',
          uiPoint2: 'Console: customer, creator, operations, API logs',
          uiPoint3: 'Configurer API base dans la Console vers votre backend local',
          archTitle: 'Architecture de reference (MVP)',
          archNode1: 'UI Landing + Console',
          archNode1Sub: 'Frontend statique sur GitHub Pages',
          archNode2: 'Couche Backend API',
          archNode2Sub: 'Orchestration order, promotion, wallet, webhook',
          archNode3: 'Modele data et ledger',
          archNode3Sub: 'Orders, payments, reserve, payouts, audit events',
          footer: 'Astuce: entrez depuis les boutons role du Landing pour transmettre role/lang dans lURL.'
        }
      };

      function safeLang(lang) {
        return Object.prototype.hasOwnProperty.call(TEXT, lang) ? lang : 'en';
      }

      function applyLang(lang) {
        const resolved = safeLang(lang);
        const dict = TEXT[resolved];

        document.documentElement.lang = resolved;
        document.querySelectorAll('[data-i18n]').forEach((node) => {
          const key = node.getAttribute('data-i18n');
          if (dict[key]) node.textContent = dict[key];
        });

        const appBtn = document.getElementById('openAppBtn') as HTMLAnchorElement;
        appBtn.href = `./app.html?role=customer&lang=${encodeURIComponent(resolved)}`;

        (document.getElementById('langSelect') as HTMLSelectElement).value = resolved;
        localStorage.setItem('siteLang', resolved);
      }

      const langSelect = document.getElementById('langSelect') as HTMLSelectElement | null;
      langSelect?.addEventListener('change', (event) =>
        applyLang((event.currentTarget as HTMLSelectElement).value)
      );

      applyLang(localStorage.getItem('siteLang') || 'en');

export {};
