window.SITE_TRANSLATIONS = {
  common: {
    'zh-Hant': {
      htmlLang: 'zh-Hant',
      langLabel: '語言',
      navHome: '首頁',
      navStart: '快速開始'
    },
    en: {
      htmlLang: 'en',
      langLabel: 'Language',
      navHome: 'Home',
      navStart: 'Getting Started'
    },
    hu: {
      htmlLang: 'hu',
      langLabel: 'Nyelv',
      navHome: 'Kezdolap',
      navStart: 'Gyors kezdes'
    },
    fr: {
      htmlLang: 'fr',
      langLabel: 'Langue',
      navHome: 'Accueil',
      navStart: 'Demarrage rapide'
    }
  },
  pages: {
    index: {
      'zh-Hant': {
        pageTitle: 'High-Risk Marketplace MVP',
        title: 'High-Risk Marketplace MVP',
        subtitle: '法遵優先、風險驅動的新專案骨架',
        noticeTitle: '提醒：',
        noticeBody: '此專案為產品與技術框架，不構成法律意見。上線前請完成律師與合規顧問審查。',
        docsTitle: '文件導覽',
        docReadme: 'README',
        docPrd: '產品需求文件（PRD）',
        docCompliance: '法遵清單',
        docRisk: '風險登錄',
        docRoadmap: '90 天路線圖',
        docKpi: 'KPI 儀表板模板',
        docOpenapi: 'OpenAPI 規格',
        docSchema: '資料庫 Schema',
        docBackend: '後端快速開始頁'
      },
      en: {
        pageTitle: 'High-Risk Marketplace MVP',
        title: 'High-Risk Marketplace MVP',
        subtitle: 'Compliance-first, risk-driven project foundation',
        noticeTitle: 'Notice:',
        noticeBody: 'This project is a product and technical framework, not legal advice. Obtain legal review before launch.',
        docsTitle: 'Project Documents',
        docReadme: 'README',
        docPrd: 'Product Requirements Document (PRD)',
        docCompliance: 'Compliance Checklist',
        docRisk: 'Risk Register',
        docRoadmap: '90-Day Roadmap',
        docKpi: 'KPI Dashboard Template',
        docOpenapi: 'OpenAPI Spec',
        docSchema: 'Database Schema',
        docBackend: 'Backend Quick Start Page'
      },
      hu: {
        pageTitle: 'High-Risk Marketplace MVP',
        title: 'High-Risk Marketplace MVP',
        subtitle: 'Megfeleles-kozpontu, kockazatvezerelt projektalap',
        noticeTitle: 'Megjegyzes:',
        noticeBody: 'Ez a projekt termek- es technikai keretrendszer, nem jogi tanacsadas. Inditas elott kerj jogi felulvizsgalatot.',
        docsTitle: 'Projekt dokumentumok',
        docReadme: 'README',
        docPrd: 'Termekkovetelmeny-dokumentum (PRD)',
        docCompliance: 'Megfelelosegi ellenorzolista',
        docRisk: 'Kockazati nyilvantartas',
        docRoadmap: '90 napos utemterv',
        docKpi: 'KPI iranyitopult sablon',
        docOpenapi: 'OpenAPI specifikacio',
        docSchema: 'Adatbazis sema',
        docBackend: 'Backend gyors kezdes oldal'
      },
      fr: {
        pageTitle: 'High-Risk Marketplace MVP',
        title: 'High-Risk Marketplace MVP',
        subtitle: 'Base de projet axee sur la conformite et la gestion des risques',
        noticeTitle: 'Note :',
        noticeBody: 'Ce projet est un cadre produit et technique, pas un conseil juridique. Faites valider par un conseiller juridique avant lancement.',
        docsTitle: 'Documents du projet',
        docReadme: 'README',
        docPrd: 'Document dexigences produit (PRD)',
        docCompliance: 'Checklist de conformite',
        docRisk: 'Registre des risques',
        docRoadmap: 'Feuille de route sur 90 jours',
        docKpi: 'Modele de tableau de bord KPI',
        docOpenapi: 'Spec OpenAPI',
        docSchema: 'Schema de base de donnees',
        docBackend: 'Page de demarrage backend'
      }
    },
    getting_started: {
      'zh-Hant': {
        pageTitle: '快速開始 | High-Risk Marketplace MVP',
        title: '後端快速開始',
        subtitle: '三步驟啟動後端並跑完整 smoke test',
        stepsTitle: '啟動步驟',
        step1: '進入 backend 目錄並安裝套件',
        step2: '啟動 API 服務（預設 8080）',
        step3: '在另一個 terminal 執行 smoke test',
        notesTitle: '注意事項',
        note1: '所有受保護 API 需帶 x-user-id header。',
        note2: '預設內建 demo 帳號：buyer-demo / seller-demo / admin-demo / ops-demo。',
        note3: '此版本為 MVP 模擬流程，支付與 KYC 為測試 stub。'
      },
      en: {
        pageTitle: 'Getting Started | High-Risk Marketplace MVP',
        title: 'Backend Quick Start',
        subtitle: 'Run the backend and complete the end-to-end smoke test in three steps',
        stepsTitle: 'Startup Steps',
        step1: 'Enter the backend folder and install dependencies',
        step2: 'Start API service (default port 8080)',
        step3: 'Run smoke test in another terminal',
        notesTitle: 'Notes',
        note1: 'All protected APIs require the x-user-id header.',
        note2: 'Built-in demo accounts: buyer-demo / seller-demo / admin-demo / ops-demo.',
        note3: 'This is an MVP simulation. Payment and KYC are test stubs.'
      },
      hu: {
        pageTitle: 'Gyors kezdes | High-Risk Marketplace MVP',
        title: 'Backend gyors kezdes',
        subtitle: 'A backend inditasa es a teljes smoke test harom lepesben',
        stepsTitle: 'Inditasi lepesek',
        step1: 'Lepj be a backend mappaba es telepitsd a fuggosegeket',
        step2: 'Inditsd el az API szolgaltatast (alapertelmezett port: 8080)',
        step3: 'Futtasd a smoke tesztet egy masik terminalban',
        notesTitle: 'Megjegyzesek',
        note1: 'Minden vedett API-hoz kell az x-user-id header.',
        note2: 'Beepitett demo fiokok: buyer-demo / seller-demo / admin-demo / ops-demo.',
        note3: 'Ez egy MVP szimulacio. A fizetes es a KYC teszt stub.'
      },
      fr: {
        pageTitle: 'Demarrage rapide | High-Risk Marketplace MVP',
        title: 'Demarrage rapide du backend',
        subtitle: 'Lancez le backend et executez le smoke test complet en trois etapes',
        stepsTitle: 'Etapes de demarrage',
        step1: 'Entrez dans le dossier backend et installez les dependances',
        step2: 'Demarrez le service API (port 8080 par defaut)',
        step3: 'Lancez le smoke test dans un autre terminal',
        notesTitle: 'Notes',
        note1: 'Toutes les API protegees exigent le header x-user-id.',
        note2: 'Comptes demo integres : buyer-demo / seller-demo / admin-demo / ops-demo.',
        note3: 'Cette version est un MVP de simulation. Paiement et KYC sont des stubs de test.'
      }
    }
  }
};
