// @ts-nocheck
const I18N = {
    en: {
        personaLabel: 'Persona',
        brandTitle: 'Marketplace Control Center',
        brandSub: 'Enterprise operations console for creator commerce',
        btnLanding: 'Landing',
        navOverview: 'Overview',
        navOverviewSub: 'Revenue, risk, conversion pulse',
        navCustomer: 'Customer',
        navCustomerSub: 'Explore and pending orders',
        navCreator: 'Creator',
        navCreatorSub: 'Promotion and wallet operations',
        navOps: 'Operations',
        navOpsSub: 'Webhook, payout, moderation',
        navLogs: 'API Logs',
        navLogsSub: 'Request and response traces',
        kpiListings: 'Active listings',
        kpiListingsSub: 'Total visible catalog inventory',
        kpiPromoted: 'Promoted share',
        kpiPromotedSub: 'Inventory with active promotion plans',
        kpiAov: 'Projected AOV',
        kpiAovSub: 'Estimated total charged including buyer fee',
        kpiRole: 'Current entry role',
        kpiRoleSub: 'Role hint carried from Landing URL',
        flowTitle: 'Business flow health',
        flowSub: 'Critical checkpoints for checkout, payout, and reserve management.',
        flowPoint1: 'Pending order created',
        flowPoint1Sub: 'Customer initiates hosted checkout with fee breakdown.',
        flowPoint2: 'Webhook processed',
        flowPoint2Sub: 'Payment status transitions to held, failed, or chargeback.',
        flowPoint3: 'Payout release',
        flowPoint3Sub: 'Creator wallet splits available and reserve balances.',
        quickTitle: 'Quick persona switch',
        quickSub: 'Jump between role-centric workflows without returning to Landing.',
        btnCustomerRole: 'Switch to Customer',
        btnCreatorRole: 'Switch to Creator',
        btnAdminRole: 'Switch to Admin',
        customerTitle: 'Customer listing desk',
        customerSub: 'Search inventory, select listing, and generate pending order request.',
        btnRefresh: 'Refresh',
        orderTitle: 'Order workspace',
        orderSub: 'Creates pending order and returns hosted checkout URL.',
        btnCreateOrder: 'Create pending order',
        promoTitle: 'Promotion center',
        promoSub: 'Purchase ranking plans for creator listings.',
        promoGrowthTitle: 'Promotion & Growth',
        promoGrowthSub: 'Track exposure and boost your listings to reach more verified customers.',
        promoMetricViewsLabel: 'Profile Views',
        promoMetricBoostsLabel: 'Active Boosts',
        promoMetricBoostsNote: 'Listings promoted',
        promoMetricLiftLabel: 'Est. Revenue Lift',
        promoMetricLiftNote: 'From promoted clicks',
        activePromoTitle: 'Active Promotions',
        activePromoSub: 'Monitor active campaigns and click output.',
        activePromoEmpty: 'No active boosts yet. Buy a plan to start ranking.',
        activePromoChip: 'Top Ranking',
        activePromoDays: 'days remaining',
        activePromoClicks: 'Clicks',
        activePromoGenerated: 'Generated',
        promoBuyTitle: 'Buy Ranking Plans',
        promoBuySub: 'Select a model to push your profile to the top of Explore.',
        planDuration: 'Duration-Based',
        planClick: 'Click-Based (CPC)',
        promoListingLabel: 'Select Listing',
        promoWalletLabel: 'Pay from wallet balance',
        btnBuyPromo: 'Purchase promotion',
        promoBuyNote: 'Promotion spend is tracked in your wallet ledger.',
        btnLoadPromo: 'Sync campaigns',
        walletTitle: 'Wallet and withdrawals',
        walletSub: 'Track available and pending balances, then request withdrawal.',
        walletAvailableTitle: 'Available to Payout',
        walletAvailableHelp: 'Funds you can withdraw now after reserve holds and completed debits.',
        walletReserveTitle: 'Rolling Reserve (120d)',
        walletReserveHelp: 'Reserve funds are held to cover delayed chargeback risk and auto-release on maturity.',
        walletReserveEmpty: 'No pending reserve releases.',
        walletReserveReleasePrefix: 'Releasing',
        walletReserveNoDate: 'Date pending',
        walletLedgerTitle: 'Ledger Transactions',
        walletLedgerSub: 'Append-only movements for credits, reserve holds/releases, promotion fees, and withdrawals.',
        walletLedgerDate: 'Date',
        walletLedgerDesc: 'Description',
        walletLedgerType: 'Type',
        walletLedgerAmount: 'Amount',
        walletLedgerEmpty: 'No wallet ledger entries yet.',
        btnWalletLedgerRefresh: 'Refresh ledger',
        btnWalletRefresh: 'Refresh wallet',
        btnWithdraw: 'Withdraw',
        creatorTableTitle: 'Creator snapshot',
        webhookTitle: 'Webhook simulator',
        webhookSub: 'Post payment event callbacks to update order and payment state.',
        btnSendWebhook: 'Send webhook',
        opsTitle: 'Settlement operations',
        opsSub: 'Run payout release after delivery/dispute checks.',
        btnReleasePayout: 'Run payout release',
        moderationTitle: 'Moderation command board',
        moderationSub: 'Review pending creator listings before publish and capture audit-safe decisions.',
        btnModerationRefresh: 'Refresh queue',
        moderationKpiPending: 'Pending Queue',
        moderationKpiHighRisk: 'High Risk Flag',
        moderationKpiSlaRisk: 'SLA Breach Risk',
        moderationQueueEmptyTitle: 'Queue is empty',
        moderationQueueEmptySub: 'No listings are waiting for manual review.',
        moderationApprove: 'Approve',
        moderationReject: 'Reject',
        moderationRejectPrompt: 'Reject reason',
        moderationQueuedAt: 'Queued',
        moderationWait: 'wait',
        moderationRiskHigh: 'High Risk',
        moderationRiskMedium: 'Medium Risk',
        moderationRiskLow: 'Low Risk',
        moderationKycUnknown: 'KYC Unknown',
        logsTitle: 'API request log stream',
        logsSub: 'All actions are mirrored here for troubleshooting and demos.',
        tblListing: 'Listing',
        tblPrice: 'Price',
        tblPromo: 'Promoted',
        tblScore: 'Ranking score',
        tblEntity: 'Entity',
        tblType: 'Type',
        tblRisk: 'Risk',
        tblAction: 'Action'
    },
    'zh-TW': {
        personaLabel: '身份',
        brandTitle: 'Marketplace 控制中心',
        brandSub: 'Creator Commerce 的企業級營運 Console',
        btnLanding: '回 Landing',
        navOverview: '總覽',
        navOverviewSub: '營收、風險、轉換脈動',
        navCustomer: 'Customer',
        navCustomerSub: '探索與待付款訂單',
        navCreator: 'Creator',
        navCreatorSub: '推廣與錢包操作',
        navOps: '營運',
        navOpsSub: 'Webhook、撥款、審核',
        navLogs: 'API 紀錄',
        navLogsSub: '請求與回應追蹤',
        kpiListings: '有效商品數',
        kpiListingsSub: '目前可見的目錄總量',
        kpiPromoted: '置頂占比',
        kpiPromotedSub: '有啟用推廣方案的商品比例',
        kpiAov: '預估客單',
        kpiAovSub: '含 buyer fee 的預估 charged 金額',
        kpiRole: '目前入口角色',
        kpiRoleSub: '來自 Landing 的 role 參數',
        flowTitle: '商業流程健康度',
        flowSub: '結帳、撥款、保留金三大關鍵檢查點。',
        flowPoint1: '建立待付款訂單',
        flowPoint1Sub: 'Customer 建立含費率拆解的 hosted checkout 訂單。',
        flowPoint2: 'Webhook 回寫成功',
        flowPoint2Sub: '支付狀態轉移為 held、failed 或 chargeback。',
        flowPoint3: '撥款釋放',
        flowPoint3Sub: 'Creator 錢包拆成 available 與 reserve。',
        quickTitle: '快速切換角色',
        quickSub: '不回 Landing 也可切換角色導向流程。',
        btnCustomerRole: '切換 Customer',
        btnCreatorRole: '切換 Creator',
        btnAdminRole: '切換 Admin',
        customerTitle: 'Customer 商品工作台',
        customerSub: '搜尋商品、挑選 listing、建立 pending 訂單。',
        btnRefresh: '刷新',
        orderTitle: '下單工作區',
        orderSub: '建立待付款訂單並回傳 hosted checkout URL。',
        btnCreateOrder: '建立 pending 訂單',
        promoTitle: '推廣中心',
        promoSub: '為 Creator 商品購買排序方案。',
        promoGrowthTitle: '推廣與成長',
        promoGrowthSub: '追蹤曝光數據並提升商品觸及，觸達更多高信任買家。',
        promoMetricViewsLabel: '個人頁瀏覽',
        promoMetricBoostsLabel: '啟用中的置頂',
        promoMetricBoostsNote: '置頂中的商品數',
        promoMetricLiftLabel: '預估營收提升',
        promoMetricLiftNote: '來自推廣點擊',
        activePromoTitle: '目前推廣活動',
        activePromoSub: '追蹤正在執行的活動與點擊產出。',
        activePromoEmpty: '目前沒有啟用中的推廣，先購買方案開始衝刺曝光。',
        activePromoChip: '頂部排序',
        activePromoDays: '天剩餘',
        activePromoClicks: '點擊',
        activePromoGenerated: '已帶來',
        promoBuyTitle: '購買排序方案',
        promoBuySub: '選擇方案，把你的商品推到 Explore 前排。',
        planDuration: '天數型方案',
        planClick: '點擊型方案 (CPC)',
        promoListingLabel: '選擇商品',
        promoWalletLabel: '從錢包餘額扣款',
        btnBuyPromo: '購買推廣方案',
        promoBuyNote: '推廣支出會同步記錄在錢包帳本。',
        btnLoadPromo: '同步活動',
        walletTitle: '錢包與提現',
        walletSub: '查詢 available / pending 餘額並申請提現。',
        walletAvailableTitle: '可提現餘額',
        walletAvailableHelp: '此金額可立即提領，已扣除保留金與已完成扣款。',
        walletReserveTitle: '滾動保留金 (120 天)',
        walletReserveHelp: '保留金用於承擔延遲 chargeback 風險，時間到會自動解凍。',
        walletReserveEmpty: '目前沒有待解凍的保留金。',
        walletReserveReleasePrefix: '預計解凍',
        walletReserveNoDate: '待排程',
        walletLedgerTitle: '帳本交易明細',
        walletLedgerSub: '以 append-only 方式記錄收入、保留金凍結/解凍、推廣費與提現。',
        walletLedgerDate: '日期',
        walletLedgerDesc: '說明',
        walletLedgerType: '類型',
        walletLedgerAmount: '金額',
        walletLedgerEmpty: '目前沒有帳本資料。',
        btnWalletLedgerRefresh: '刷新帳本',
        btnWalletRefresh: '刷新錢包',
        btnWithdraw: '提現',
        creatorTableTitle: 'Creator 營運快照',
        webhookTitle: 'Webhook 模擬器',
        webhookSub: '送出支付事件回呼，更新訂單與支付狀態。',
        btnSendWebhook: '送出 webhook',
        opsTitle: '清算操作',
        opsSub: '在交付與爭議檢查後執行撥款釋放。',
        btnReleasePayout: '執行 payout release',
        moderationTitle: '內容審核指揮板',
        moderationSub: '先審後發：審核待上架 Creator 商品並留下可稽核決策紀錄。',
        btnModerationRefresh: '刷新審核佇列',
        moderationKpiPending: '待審核數',
        moderationKpiHighRisk: '高風險旗標',
        moderationKpiSlaRisk: 'SLA 逾時風險',
        moderationQueueEmptyTitle: '審核佇列為空',
        moderationQueueEmptySub: '目前沒有待人工審核的商品。',
        moderationApprove: '核准',
        moderationReject: '拒絕',
        moderationRejectPrompt: '拒絕原因',
        moderationQueuedAt: '送審',
        moderationWait: '等待',
        moderationRiskHigh: '高風險',
        moderationRiskMedium: '中風險',
        moderationRiskLow: '低風險',
        moderationKycUnknown: 'KYC 未知',
        logsTitle: 'API 操作紀錄流',
        logsSub: '所有操作會同步寫入，方便除錯與展示。',
        tblListing: '商品',
        tblPrice: '價格',
        tblPromo: '置頂',
        tblScore: '排序分數',
        tblEntity: '實體',
        tblType: '類型',
        tblRisk: '風險',
        tblAction: '動作'
    },
    hu: {
        personaLabel: 'Szerep',
        brandTitle: 'Marketplace Control Center',
        brandSub: 'Vallalati operations console creator commerce-hez',
        btnLanding: 'Landing',
        navOverview: 'Attekintes',
        navOverviewSub: 'Bevetel, kockazat, konverzio',
        navCustomer: 'Customer',
        navCustomerSub: 'Felfedezes es pending rendelesek',
        navCreator: 'Creator',
        navCreatorSub: 'Promotion es wallet muveletek',
        navOps: 'Operations',
        navOpsSub: 'Webhook, payout, moderacio',
        navLogs: 'API naplok',
        navLogsSub: 'Request/response tracek',
        kpiListings: 'Aktiv listingek',
        kpiListingsSub: 'Lathato katalogus mennyiseg',
        kpiPromoted: 'Promotalt arany',
        kpiPromotedSub: 'Aktiv promotion planes listingek aranya',
        kpiAov: 'Becsult AOV',
        kpiAovSub: 'Becsult charged osszeg buyer feevel',
        kpiRole: 'Aktiv belepesi szerep',
        kpiRoleSub: 'Landing URL-bol erkezo szerep',
        flowTitle: 'Uzleti flow allapot',
        flowSub: 'Checkout, payout es reserve kulcs pontok.',
        flowPoint1: 'Pending rendeles letrehozva',
        flowPoint1Sub: 'Customer hosted checkout rendelest indit dij bontassal.',
        flowPoint2: 'Webhook feldolgozva',
        flowPoint2Sub: 'Statusz atvalt held, failed vagy chargeback allapotba.',
        flowPoint3: 'Payout release',
        flowPoint3Sub: 'Creator wallet available es reserve egyenlegre bomlik.',
        quickTitle: 'Gyors szerepvaltas',
        quickSub: 'Landing nelkul is valthatsz workflow-t.',
        btnCustomerRole: 'Valtas Customer',
        btnCreatorRole: 'Valtas Creator',
        btnAdminRole: 'Valtas Admin',
        customerTitle: 'Customer listing desk',
        customerSub: 'Kereses, listing valasztas, pending rendeles generalas.',
        btnRefresh: 'Frissites',
        orderTitle: 'Rendeles workspace',
        orderSub: 'Pending rendeles es hosted checkout URL generalasa.',
        btnCreateOrder: 'Pending rendeles',
        promoTitle: 'Promotion center',
        promoSub: 'Ranking plan vasarlas creator listingekhez.',
        promoGrowthTitle: 'Promotion & Growth',
        promoGrowthSub: 'Track exposure and boost listings to reach more verified customers.',
        promoMetricViewsLabel: 'Profile Views',
        promoMetricBoostsLabel: 'Active Boosts',
        promoMetricBoostsNote: 'Listings promoted',
        promoMetricLiftLabel: 'Est. Revenue Lift',
        promoMetricLiftNote: 'From promoted clicks',
        activePromoTitle: 'Active Promotions',
        activePromoSub: 'Monitor active campaigns and click output.',
        activePromoEmpty: 'No active boosts yet. Buy a plan to start ranking.',
        activePromoChip: 'Top Ranking',
        activePromoDays: 'days remaining',
        activePromoClicks: 'Clicks',
        activePromoGenerated: 'Generated',
        promoBuyTitle: 'Buy Ranking Plans',
        promoBuySub: 'Select a model to push your profile to the top of Explore.',
        planDuration: 'Duration-Based',
        planClick: 'Click-Based (CPC)',
        promoListingLabel: 'Select Listing',
        promoWalletLabel: 'Pay from wallet balance',
        btnBuyPromo: 'Purchase promotion',
        promoBuyNote: 'A promotion koltes a wallet ledgerben kovetheto.',
        btnLoadPromo: 'Sync campaigns',
        walletTitle: 'Wallet es kiutalas',
        walletSub: 'Available/pending egyenleg kovetese es kiutalas kerese.',
        walletAvailableTitle: 'Kifizetheto egyenleg',
        walletAvailableHelp: 'Azonnal kiutalhato osszeg reserve holdok es teljesitett debitek utan.',
        walletReserveTitle: 'Gordulo tartalek (120 nap)',
        walletReserveHelp: 'A tartalek kesleltetett chargeback kockazatot fed, lejartkor automatikusan felszabadul.',
        walletReserveEmpty: 'Nincs varhato tartalek-felszabaditas.',
        walletReserveReleasePrefix: 'Felszabadul',
        walletReserveNoDate: 'Datum varhato',
        walletLedgerTitle: 'Ledger tranzakciok',
        walletLedgerSub: 'Append-only mozgasok: jovairas, reserve hold/release, promotion dij es kiutalas.',
        walletLedgerDate: 'Datum',
        walletLedgerDesc: 'Leiras',
        walletLedgerType: 'Tipus',
        walletLedgerAmount: 'Osszeg',
        walletLedgerEmpty: 'Meg nincs wallet ledger bejegyzes.',
        btnWalletLedgerRefresh: 'Ledger frissites',
        btnWalletRefresh: 'Wallet frissites',
        btnWithdraw: 'Withdraw',
        creatorTableTitle: 'Creator snapshot',
        webhookTitle: 'Webhook szimulator',
        webhookSub: 'Payment callback kuldese order/payment status frissiteshez.',
        btnSendWebhook: 'Webhook kuldese',
        opsTitle: 'Settlement operations',
        opsSub: 'Payout release futtatasa delivery/dispute ellenorzes utan.',
        btnReleasePayout: 'Payout release futtatasa',
        moderationTitle: 'Moderation board',
        moderationSub: 'Pending creator listingek ellenorzese publikacio elott, audit-biztos dontesekkel.',
        btnModerationRefresh: 'Queue frissites',
        moderationKpiPending: 'Pending Queue',
        moderationKpiHighRisk: 'High Risk Flag',
        moderationKpiSlaRisk: 'SLA Risk',
        moderationQueueEmptyTitle: 'Ures queue',
        moderationQueueEmptySub: 'Nincs manualis review-ra varo listing.',
        moderationApprove: 'Approve',
        moderationReject: 'Reject',
        moderationRejectPrompt: 'Reject reason',
        moderationQueuedAt: 'Queued',
        moderationWait: 'wait',
        moderationRiskHigh: 'High Risk',
        moderationRiskMedium: 'Medium Risk',
        moderationRiskLow: 'Low Risk',
        moderationKycUnknown: 'KYC Unknown',
        logsTitle: 'API naplo stream',
        logsSub: 'Minden muvelet itt is naplozva van demohoz es hibakereseshez.',
        tblListing: 'Listing',
        tblPrice: 'Ar',
        tblPromo: 'Promotalt',
        tblScore: 'Rang pont',
        tblEntity: 'Entity',
        tblType: 'Tipus',
        tblRisk: 'Risk',
        tblAction: 'Action'
    },
    fr: {
        personaLabel: 'Role',
        brandTitle: 'Marketplace Control Center',
        brandSub: 'Console operations niveau entreprise pour creator commerce',
        btnLanding: 'Landing',
        navOverview: 'Vue globale',
        navOverviewSub: 'Revenus, risque, conversion',
        navCustomer: 'Customer',
        navCustomerSub: 'Exploration et commandes pending',
        navCreator: 'Creator',
        navCreatorSub: 'Promotion et operations wallet',
        navOps: 'Operations',
        navOpsSub: 'Webhook, payout, moderation',
        navLogs: 'Logs API',
        navLogsSub: 'Traces request/response',
        kpiListings: 'Listings actifs',
        kpiListingsSub: 'Volume catalogue visible',
        kpiPromoted: 'Part promue',
        kpiPromotedSub: 'Inventaire avec plans promotion actifs',
        kpiAov: 'AOV projete',
        kpiAovSub: 'Montant charged estime avec buyer fee',
        kpiRole: 'Role dentree courant',
        kpiRoleSub: 'Role recu depuis Landing',
        flowTitle: 'Sante du flux business',
        flowSub: 'Points critiques checkout, payout et reserve.',
        flowPoint1: 'Commande pending creee',
        flowPoint1Sub: 'Le Customer initie hosted checkout avec decomposition des frais.',
        flowPoint2: 'Webhook traite',
        flowPoint2Sub: 'Le statut passe a held, failed ou chargeback.',
        flowPoint3: 'Payout release',
        flowPoint3Sub: 'Le wallet creator separe available et reserve.',
        quickTitle: 'Changement de role rapide',
        quickSub: 'Basculez de workflow sans revenir au Landing.',
        btnCustomerRole: 'Basculer Customer',
        btnCreatorRole: 'Basculer Creator',
        btnAdminRole: 'Basculer Admin',
        customerTitle: 'Customer listing desk',
        customerSub: 'Recherche, selection listing et creation de commande pending.',
        btnRefresh: 'Rafraichir',
        orderTitle: 'Espace commande',
        orderSub: 'Cree une commande pending et renvoie lURL hosted checkout.',
        btnCreateOrder: 'Creer commande pending',
        promoTitle: 'Centre promotion',
        promoSub: 'Acheter des plans de ranking pour listings creator.',
        promoGrowthTitle: 'Promotion & Growth',
        promoGrowthSub: 'Track exposure and boost listings to reach more verified customers.',
        promoMetricViewsLabel: 'Profile Views',
        promoMetricBoostsLabel: 'Active Boosts',
        promoMetricBoostsNote: 'Listings promoted',
        promoMetricLiftLabel: 'Est. Revenue Lift',
        promoMetricLiftNote: 'From promoted clicks',
        activePromoTitle: 'Active Promotions',
        activePromoSub: 'Monitor active campaigns and click output.',
        activePromoEmpty: 'No active boosts yet. Buy a plan to start ranking.',
        activePromoChip: 'Top Ranking',
        activePromoDays: 'days remaining',
        activePromoClicks: 'Clicks',
        activePromoGenerated: 'Generated',
        promoBuyTitle: 'Buy Ranking Plans',
        promoBuySub: 'Select a model to push your profile to the top of Explore.',
        planDuration: 'Duration-Based',
        planClick: 'Click-Based (CPC)',
        promoListingLabel: 'Select Listing',
        promoWalletLabel: 'Pay from wallet balance',
        btnBuyPromo: 'Purchase promotion',
        promoBuyNote: 'Les depenses promotion sont tracees dans votre ledger wallet.',
        btnLoadPromo: 'Sync campaigns',
        walletTitle: 'Wallet et retraits',
        walletSub: 'Suivre soldes available/pending et demander un retrait.',
        walletAvailableTitle: 'Disponible pour retrait',
        walletAvailableHelp: 'Montant retirable maintenant apres reserve et debits finalises.',
        walletReserveTitle: 'Reserve roulante (120j)',
        walletReserveHelp: 'La reserve couvre le risque de chargeback differe et se libere automatiquement a echeance.',
        walletReserveEmpty: 'Aucune liberation de reserve en attente.',
        walletReserveReleasePrefix: 'Liberation',
        walletReserveNoDate: 'Date en attente',
        walletLedgerTitle: 'Transactions ledger',
        walletLedgerSub: 'Mouvements append-only: credits, reserve hold/release, frais promotion et retraits.',
        walletLedgerDate: 'Date',
        walletLedgerDesc: 'Description',
        walletLedgerType: 'Type',
        walletLedgerAmount: 'Montant',
        walletLedgerEmpty: 'Aucune entree ledger pour le moment.',
        btnWalletLedgerRefresh: 'Rafraichir ledger',
        btnWalletRefresh: 'Rafraichir wallet',
        btnWithdraw: 'Withdraw',
        creatorTableTitle: 'Snapshot creator',
        webhookTitle: 'Simulateur webhook',
        webhookSub: 'Poster des callbacks paiement pour mettre a jour les statuts.',
        btnSendWebhook: 'Envoyer webhook',
        opsTitle: 'Operations de settlement',
        opsSub: 'Executer payout release apres verification delivery/dispute.',
        btnReleasePayout: 'Executer payout release',
        moderationTitle: 'Board moderation',
        moderationSub: 'Verifier les listings creator en attente avant publication avec decision auditable.',
        btnModerationRefresh: 'Rafraichir queue',
        moderationKpiPending: 'File en attente',
        moderationKpiHighRisk: 'Alerte haut risque',
        moderationKpiSlaRisk: 'Risque SLA',
        moderationQueueEmptyTitle: 'Queue vide',
        moderationQueueEmptySub: 'Aucun listing en attente de revue manuelle.',
        moderationApprove: 'Approve',
        moderationReject: 'Reject',
        moderationRejectPrompt: 'Motif de rejet',
        moderationQueuedAt: 'Queue',
        moderationWait: 'attente',
        moderationRiskHigh: 'High Risk',
        moderationRiskMedium: 'Medium Risk',
        moderationRiskLow: 'Low Risk',
        moderationKycUnknown: 'KYC Unknown',
        logsTitle: 'Flux de logs API',
        logsSub: 'Toutes les actions sont journalisees pour demo et diagnostic.',
        tblListing: 'Listing',
        tblPrice: 'Prix',
        tblPromo: 'Promu',
        tblScore: 'Score ranking',
        tblEntity: 'Entite',
        tblType: 'Type',
        tblRisk: 'Risque',
        tblAction: 'Action'
    }
};
const state = {
    lang: 'en',
    role: 'customer',
    activePanel: 'overview',
    listings: [],
    logs: [],
    selectedListingId: '',
    promotionMode: 'duration',
    selectedPromoPlan: 'top-7d',
    walletSummary: {
        available: 450,
        pending: 0,
        reserveBalance: 0,
        reserveWindowDays: 120,
        upcomingReserveReleases: [],
        currency: 'USD'
    },
    walletLedger: [],
    moderationQueue: [],
    moderationSummary: {
        pendingCount: 0,
        highRiskCount: 0,
        slaBreachRiskCount: 0
    },
    promotionSummary: null
};
const LISTING_PLACEHOLDER_IMAGE = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 1000'>
          <defs>
            <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
              <stop offset='0%' stop-color='#f3f4f6'/>
              <stop offset='100%' stop-color='#e5e7eb'/>
            </linearGradient>
          </defs>
          <rect width='800' height='1000' fill='url(#g)'/>
          <rect x='90' y='130' width='620' height='740' rx='28' fill='#ffffff' opacity='0.84'/>
          <text x='400' y='510' text-anchor='middle' fill='#6b7280' font-family='Arial, Helvetica, sans-serif' font-size='38'>
            Preview unavailable
          </text>
        </svg>`)}`;
const fallbackListings = [
    {
        id: 'sample-lst-001',
        title: 'Premium Signature Bundle',
        sellerName: 'Lina Atelier',
        sellerVerified: true,
        subtitle: 'Worn 3 days • Sealed package',
        description: 'Hand-curated creator bundle with premium packaging and fast processing.',
        imageUrl: 'https://picsum.photos/id/1025/900/1125',
        price: 120,
        currency: 'USD',
        isPromoted: true,
        ranking: { score: 88 }
    },
    {
        id: 'sample-lst-002',
        title: 'Express Daily Drop',
        sellerName: 'Maya Studio',
        sellerVerified: true,
        subtitle: 'Express dispatch • Tracking included',
        description: 'Fast turnaround listing designed for repeat buyers and high satisfaction.',
        imageUrl: 'https://picsum.photos/id/1062/900/1125',
        price: 95,
        currency: 'USD',
        isPromoted: false,
        ranking: { score: 71 }
    },
    {
        id: 'sample-lst-003',
        title: 'Collectors Edition Drop',
        sellerName: 'Noir Archive',
        sellerVerified: true,
        subtitle: 'Limited quantity • Video proof',
        description: 'High-ticket curated listing with limited stock and collector positioning.',
        imageUrl: 'https://picsum.photos/id/1074/900/1125',
        price: 160,
        currency: 'USD',
        isPromoted: true,
        ranking: { score: 93 }
    }
];
const PROMOTION_PLAN_CATALOG = {
    duration: [
        {
            id: 'top-24h',
            title: '24-Hour Spotlight',
            price: 15,
            description: 'Guaranteed top exposure shelf for 24 hours.'
        },
        {
            id: 'top-7d',
            title: '7-Day Dominance',
            price: 75,
            description: 'Continuous premium exposure with better weekly value.',
            badge: 'Best Value'
        }
    ],
    click: [
        {
            id: 'boost-200-clicks',
            title: '200 Guaranteed Clicks',
            price: 72,
            description: 'Pay only for verified profile clicks from high-intent buyers.'
        }
    ]
};
const el = {
    navButtons: document.querySelectorAll('.nav-btn'),
    panels: {
        overview: document.getElementById('panel-overview'),
        customer: document.getElementById('panel-customer'),
        creator: document.getElementById('panel-creator'),
        operations: document.getElementById('panel-operations'),
        logs: document.getElementById('panel-logs')
    },
    persona: document.getElementById('persona'),
    langSelect: document.getElementById('langSelect'),
    apiBase: document.getElementById('apiBase'),
    webhookToken: document.getElementById('webhookToken'),
    saveConfig: document.getElementById('saveConfig'),
    kpiListings: document.getElementById('kpiListings'),
    kpiPromoted: document.getElementById('kpiPromoted'),
    kpiAov: document.getElementById('kpiAov'),
    kpiRole: document.getElementById('kpiRole'),
    searchInput: document.getElementById('searchInput'),
    filterSelect: document.getElementById('filterSelect'),
    refreshListings: document.getElementById('refreshListings'),
    listingGrid: document.getElementById('listingGrid'),
    selectedListing: document.getElementById('selectedListing'),
    createOrderBtn: document.getElementById('createOrderBtn'),
    customerConsole: document.getElementById('customerConsole'),
    planSelect: document.getElementById('planSelect'),
    creatorListing: document.getElementById('creatorListing'),
    promoModeDuration: document.getElementById('promoModeDuration'),
    promoModeClick: document.getElementById('promoModeClick'),
    promoPlanOptions: document.getElementById('promoPlanOptions'),
    activePromotionsList: document.getElementById('activePromotionsList'),
    promoMetricViews: document.getElementById('promoMetricViews'),
    promoMetricViewsDelta: document.getElementById('promoMetricViewsDelta'),
    promoMetricBoosts: document.getElementById('promoMetricBoosts'),
    promoMetricBoostsNote: document.getElementById('promoMetricBoostsNote'),
    promoMetricLift: document.getElementById('promoMetricLift'),
    promoMetricLiftNote: document.getElementById('promoMetricLiftNote'),
    walletAvailable: document.getElementById('walletAvailable'),
    walletAvailablePrimary: document.getElementById('walletAvailablePrimary'),
    walletReserveTotal: document.getElementById('walletReserveTotal'),
    walletReserveDays: document.getElementById('walletReserveDays'),
    walletReserveReleases: document.getElementById('walletReserveReleases'),
    walletLedgerBody: document.getElementById('walletLedgerBody'),
    buyPromoBtn: document.getElementById('buyPromoBtn'),
    loadPromotions: document.getElementById('loadPromotions'),
    promoConsole: document.getElementById('promoConsole'),
    walletRefresh: document.getElementById('walletRefresh'),
    walletLedgerRefresh: document.getElementById('walletLedgerRefresh'),
    withdrawAmount: document.getElementById('withdrawAmount'),
    withdrawBtn: document.getElementById('withdrawBtn'),
    walletConsole: document.getElementById('walletConsole'),
    creatorTableBody: document.getElementById('creatorTableBody'),
    webhookOrder: document.getElementById('webhookOrder'),
    webhookStatus: document.getElementById('webhookStatus'),
    sendWebhook: document.getElementById('sendWebhook'),
    opsConsole: document.getElementById('opsConsole'),
    releasePayout: document.getElementById('releasePayout'),
    settlementConsole: document.getElementById('settlementConsole'),
    loadModerationQueue: document.getElementById('loadModerationQueue'),
    moderationKpiPending: document.getElementById('moderationKpiPending'),
    moderationKpiHighRisk: document.getElementById('moderationKpiHighRisk'),
    moderationKpiSlaRisk: document.getElementById('moderationKpiSlaRisk'),
    moderationQueueGrid: document.getElementById('moderationQueueGrid'),
    moderationConsole: document.getElementById('moderationConsole'),
    globalLog: document.getElementById('globalLog')
};
function safeLang(raw) {
    return Object.prototype.hasOwnProperty.call(I18N, raw) ? raw : 'en';
}
function getQuery() {
    const p = new URLSearchParams(window.location.search);
    return {
        role: p.get('role'),
        lang: p.get('lang')
    };
}
function persistConfig() {
    localStorage.setItem('saas_api_base', el.apiBase.value);
    localStorage.setItem('saas_webhook_token', el.webhookToken.value);
    localStorage.setItem('siteLang', state.lang);
}
function hydrateConfig() {
    const savedApi = localStorage.getItem('saas_api_base');
    const savedToken = localStorage.getItem('saas_webhook_token');
    if (savedApi)
        el.apiBase.value = savedApi;
    if (savedToken)
        el.webhookToken.value = savedToken;
}
function appendLog(title, payload) {
    const line = `[${new Date().toISOString()}] ${title}\n${typeof payload === 'string' ? payload : JSON.stringify(payload, null, 2)}\n`;
    state.logs.unshift(line);
    if (state.logs.length > 120)
        state.logs.pop();
    el.globalLog.textContent = state.logs.join('\n');
}
function writeConsole(target, title, payload) {
    const line = `[${new Date().toLocaleTimeString()}] ${title}\n${typeof payload === 'string' ? payload : JSON.stringify(payload, null, 2)}\n\n`;
    target.textContent = line + target.textContent;
    appendLog(title, payload);
}
function apiBase() {
    return (el.apiBase.value || '').replace(/\/$/, '');
}
async function request(path, options = {}) {
    const response = await fetch(`${apiBase()}${path}`, {
        method: options.method || 'GET',
        headers: {
            'Content-Type': 'application/json',
            ...(options.headers || {})
        },
        body: options.body ? JSON.stringify(options.body) : undefined
    });
    const raw = await response.text();
    const data = raw ? JSON.parse(raw) : {};
    if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText} ${JSON.stringify(data)}`);
    }
    return data;
}
function escapeHtml(value) {
    return String(value || '').replace(/[&<>"']/g, (char) => {
        if (char === '&')
            return '&amp;';
        if (char === '<')
            return '&lt;';
        if (char === '>')
            return '&gt;';
        if (char === '"')
            return '&quot;';
        return '&#39;';
    });
}
function resolveListingImage(item) {
    const candidates = [
        item.imageUrl,
        item.image,
        item.coverImage,
        item.coverUrl,
        item.thumbnailUrl,
        item.mediaUrl,
        Array.isArray(item.images) ? item.images[0] : null,
        item.media && Array.isArray(item.media.images) ? item.media.images[0] : null
    ];
    for (const candidate of candidates) {
        if (typeof candidate !== 'string')
            continue;
        const trimmed = candidate.trim();
        if (!trimmed)
            continue;
        if (trimmed.startsWith('http://') || trimmed.startsWith('https://') || trimmed.startsWith('data:image')) {
            return trimmed;
        }
        if (trimmed.startsWith('/')) {
            return `${apiBase()}${trimmed}`;
        }
        return trimmed;
    }
    return LISTING_PLACEHOLDER_IMAGE;
}
function setPanel(panel) {
    state.activePanel = panel;
    Object.entries(el.panels).forEach(([key, panelEl]) => {
        panelEl.classList.toggle('active', key === panel);
    });
    el.navButtons.forEach((button) => button.classList.toggle('active', button.dataset.panel === panel));
    if (panel === 'operations') {
        loadModerationQueue(true);
    }
}
function setRole(role) {
    const normalized = ['customer', 'creator', 'admin', 'ops'].includes(role) ? role : 'customer';
    state.role = normalized;
    const label = (I18N[state.lang] && I18N[state.lang].personaLabel) || 'Persona';
    el.persona.textContent = `${label}: ${normalized}`;
    el.kpiRole.textContent = normalized;
    if (normalized === 'creator') {
        setPanel('creator');
    }
    else if (normalized === 'admin' || normalized === 'ops') {
        setPanel('operations');
    }
    else {
        setPanel('customer');
    }
}
function renderI18n() {
    const dict = I18N[state.lang];
    document.documentElement.lang = state.lang;
    document.querySelectorAll('[data-i18n]').forEach((node) => {
        const key = node.getAttribute('data-i18n');
        if (dict[key])
            node.textContent = dict[key];
    });
    const label = dict.personaLabel || 'Persona';
    el.persona.textContent = `${label}: ${state.role}`;
    el.langSelect.value = state.lang;
}
function renderKpis() {
    const total = state.listings.length;
    const promoted = state.listings.filter((item) => item.isPromoted).length;
    const promotedRate = total ? Math.round((promoted / total) * 100) : 0;
    const avg = total
        ? state.listings.reduce((sum, item) => sum + Number(item.price || 0), 0) / total
        : 0;
    el.kpiListings.textContent = String(total);
    el.kpiPromoted.textContent = `${promotedRate}%`;
    el.kpiAov.textContent = `$${(avg * 1.05).toFixed(2)}`;
}
function renderListings() {
    const search = (el.searchInput.value || '').trim().toLowerCase();
    const filter = el.filterSelect.value;
    const rows = state.listings.filter((item) => {
        const text = `${item.title || ''} ${item.description || ''} ${item.sellerName || ''} ${item.subtitle || ''}`.toLowerCase();
        const bySearch = !search || text.includes(search) || String(item.id).toLowerCase().includes(search);
        const byFilter = filter === 'all' ||
            (filter === 'promoted' && item.isPromoted) ||
            (filter === 'organic' && !item.isPromoted);
        return bySearch && byFilter;
    });
    if (!rows.length) {
        el.listingGrid.innerHTML =
            '<article class="card"><h4>No matching listings</h4><p>Try a different keyword or filter.</p></article>';
        return;
    }
    el.listingGrid.innerHTML = rows
        .map((item) => {
        const listingId = escapeHtml(item.id || 'unknown-listing');
        const rawListingId = String(item.id || 'unknown-listing');
        const title = escapeHtml(item.title || item.id || 'Untitled Listing');
        const sellerName = escapeHtml(item.sellerName || item.sellerId || 'Creator');
        const subtitle = escapeHtml(item.subtitle || 'Curated listing');
        const currency = escapeHtml(item.currency || 'USD');
        const price = Number(item.price || 0).toFixed(2);
        const imageUrl = escapeHtml(resolveListingImage(item));
        const alt = escapeHtml(`${item.title || 'Listing'} preview`);
        const isSelected = state.selectedListingId === rawListingId;
        const isVerified = item.sellerVerified === true ||
            item.verified === true ||
            item.kycStatus === 'approved' ||
            item.kycStatus === 'verified';
        return `
              <article class="listing ${isSelected ? 'is-selected' : ''}" data-select="${listingId}" role="button" tabindex="0">
                <div class="listing-media">
                  <img src="${imageUrl}" alt="${alt}" loading="lazy" data-listing-image="1" data-fallback="${escapeHtml(LISTING_PLACEHOLDER_IMAGE)}" />
                  ${item.isPromoted ? '<span class="badge promo badge-overlay">Promoted</span>' : ''}
                </div>
                <div class="listing-info">
                  <p class="listing-sub listing-seller">
                    <span class="seller-name truncate-1">${sellerName}</span>
                    ${isVerified
            ? `<svg class="verified-icon" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                          </svg>`
            : ''}
                  </p>
                  <h4 class="listing-title truncate-1">${title}</h4>
                  <p class="listing-sub truncate-1">${subtitle}</p>
                  <div class="listing-bottom">
                    <p class="listing-price">${currency} ${price}</p>
                    <div class="listing-cta">
                      <a class="listing-view" data-view="1" href="./product-detail.html?listing=${encodeURIComponent(item.id || '')}&lang=${encodeURIComponent(state.lang)}">View</a>
                      <span class="listing-select">${isSelected ? 'Selected' : 'Select'}</span>
                    </div>
                  </div>
                </div>
              </article>
            `;
    })
        .join('');
    document.querySelectorAll('.listing[data-select]').forEach((card) => {
        card.addEventListener('click', (event) => {
            if (event.target.closest('[data-view]'))
                return;
            const listingId = card.getAttribute('data-select') || '';
            state.selectedListingId = listingId;
            el.selectedListing.value = listingId;
            el.creatorListing.value = listingId;
            writeConsole(el.customerConsole, 'Listing Selected', { listingId });
            renderListings();
        });
        card.addEventListener('keydown', (event) => {
            if (event.target.closest('[data-view]'))
                return;
            if (event.key !== 'Enter' && event.key !== ' ')
                return;
            event.preventDefault();
            const listingId = card.getAttribute('data-select') || '';
            state.selectedListingId = listingId;
            el.selectedListing.value = listingId;
            el.creatorListing.value = listingId;
            writeConsole(el.customerConsole, 'Listing Selected', { listingId });
            renderListings();
        });
    });
    document.querySelectorAll('[data-listing-image]').forEach((img) => {
        img.addEventListener('error', () => {
            const fallback = img.getAttribute('data-fallback');
            if (fallback && img.getAttribute('src') !== fallback) {
                img.setAttribute('src', fallback);
            }
        });
    });
}
function t(key, fallback) {
    const dict = I18N[state.lang] || I18N.en;
    return dict[key] || fallback;
}
function money(amount, currency) {
    return `${currency || 'USD'} ${Number(amount || 0).toFixed(2)}`;
}
function firstNumeric(candidates, fallback = 0) {
    for (const value of candidates) {
        const n = Number(value);
        if (Number.isFinite(n))
            return n;
    }
    return fallback;
}
function parseWalletSummary(payload) {
    const currency = (payload && payload.currency) ||
        (payload && payload.wallet && payload.wallet.currency) ||
        (payload && payload.summary && payload.summary.currency) ||
        (payload && payload.balances && payload.balances.currency) ||
        state.walletSummary.currency ||
        'USD';
    const reserveRows = (payload && payload.upcomingReserveReleases) ||
        (payload && payload.summary && payload.summary.upcomingReserveReleases) ||
        [];
    return {
        available: firstNumeric([
            payload && payload.available,
            payload && payload.availableBalance,
            payload && payload.wallet && payload.wallet.available,
            payload && payload.wallet && payload.wallet.availableBalance,
            payload && payload.summary && payload.summary.available,
            payload && payload.summary && payload.summary.availableBalance,
            payload && payload.balances && payload.balances.available
        ], state.walletSummary.available),
        pending: firstNumeric([
            payload && payload.pending,
            payload && payload.pendingBalance,
            payload && payload.wallet && payload.wallet.pending,
            payload && payload.wallet && payload.wallet.pendingBalance,
            payload && payload.summary && payload.summary.pending,
            payload && payload.summary && payload.summary.pendingBalance,
            payload && payload.balances && payload.balances.pending
        ], state.walletSummary.pending),
        reserveBalance: firstNumeric([
            payload && payload.reserveBalance,
            payload && payload.summary && payload.summary.reserveBalance,
            payload && payload.wallet && payload.wallet.reserveBalance
        ], state.walletSummary.reserveBalance),
        reserveWindowDays: Math.max(1, Math.round(firstNumeric([
            payload && payload.reserveWindowDays,
            payload && payload.summary && payload.summary.reserveWindowDays,
            payload && payload.wallet && payload.wallet.reserveWindowDays
        ], state.walletSummary.reserveWindowDays))),
        upcomingReserveReleases: Array.isArray(reserveRows)
            ? reserveRows
                .map((row) => ({
                id: row && row.id ? String(row.id) : '',
                amount: firstNumeric([row && row.amount], 0),
                currency: (row && row.currency) || currency,
                availableAt: row && row.availableAt ? String(row.availableAt) : ''
            }))
                .filter((row) => row.amount > 0)
            : state.walletSummary.upcomingReserveReleases,
        currency
    };
}
function renderCreatorListingOptions() {
    const rows = state.listings.length ? state.listings : fallbackListings;
    const previous = (el.creatorListing.value || '').trim();
    const preferred = previous || state.selectedListingId || (rows[0] && rows[0].id) || '';
    el.creatorListing.innerHTML = rows
        .map((item) => `<option value="${escapeHtml(item.id)}">${escapeHtml(item.title || item.id)}</option>`)
        .join('');
    if (preferred) {
        el.creatorListing.value = preferred;
    }
    if (!el.creatorListing.value && rows[0]) {
        el.creatorListing.value = rows[0].id;
    }
}
function setPromotionMode(mode) {
    state.promotionMode = mode === 'click' ? 'click' : 'duration';
    el.promoModeDuration.classList.toggle('active', state.promotionMode === 'duration');
    el.promoModeClick.classList.toggle('active', state.promotionMode === 'click');
    const plans = PROMOTION_PLAN_CATALOG[state.promotionMode];
    const hasCurrent = plans.some((plan) => plan.id === state.selectedPromoPlan);
    if (!hasCurrent && plans[0])
        state.selectedPromoPlan = plans[0].id;
}
function renderPromotionPlans() {
    setPromotionMode(state.promotionMode);
    const plans = PROMOTION_PLAN_CATALOG[state.promotionMode];
    el.planSelect.innerHTML = plans
        .map((plan) => `<option value="${escapeHtml(plan.id)}">${escapeHtml(plan.title)}</option>`)
        .join('');
    el.planSelect.value = state.selectedPromoPlan;
    el.promoPlanOptions.innerHTML = plans
        .map((plan) => `
              <article class="promo-plan ${state.selectedPromoPlan === plan.id ? 'active' : ''}" data-plan-id="${escapeHtml(plan.id)}">
                <div class="promo-plan-top">
                  <p class="promo-plan-title">
                    ${escapeHtml(plan.title)}
                    ${plan.badge ? `<span class="promo-plan-badge">${escapeHtml(plan.badge)}</span>` : ''}
                  </p>
                  <span class="promo-plan-price">$${Number(plan.price).toFixed(2)}</span>
                </div>
                <p class="promo-plan-desc">${escapeHtml(plan.description)}</p>
              </article>
            `)
        .join('');
    el.promoPlanOptions.querySelectorAll('[data-plan-id]').forEach((node) => {
        node.addEventListener('click', () => {
            state.selectedPromoPlan = node.getAttribute('data-plan-id');
            renderPromotionPlans();
        });
    });
}
function renderPromotionMetrics() {
    const rows = state.listings.length ? state.listings : fallbackListings;
    const promotedCount = rows.filter((item) => item.isPromoted).length;
    const rankScore = rows.reduce((sum, item) => sum + Number((item.ranking && item.ranking.score) || 64), 0);
    const views = Math.round(760 + rankScore * 4.6 + promotedCount * 105);
    const trend = (6 + promotedCount * 2.2).toFixed(1);
    const estLift = Math.round(promotedCount * 160 + rankScore * 1.6);
    el.promoMetricViews.textContent = views.toLocaleString();
    el.promoMetricViewsDelta.textContent = `+${trend}%`;
    el.promoMetricBoosts.textContent = String(promotedCount);
    el.promoMetricBoostsNote.textContent = t('promoMetricBoostsNote', 'Listings promoted');
    el.promoMetricLift.textContent = `+$${estLift.toLocaleString()}`;
    el.promoMetricLiftNote.textContent = t('promoMetricLiftNote', 'From promoted clicks');
}
function renderActivePromotions() {
    const rows = (state.listings.length ? state.listings : fallbackListings).filter((item) => item.isPromoted);
    if (!rows.length) {
        el.activePromotionsList.innerHTML = `<article class="promo-active-item"><p class="promo-active-meta">${escapeHtml(t('activePromoEmpty', 'No active boosts yet. Buy a plan to start ranking.'))}</p></article>`;
        return;
    }
    el.activePromotionsList.innerHTML = rows
        .slice(0, 4)
        .map((item) => {
        const clicks = Math.max(14, Math.round(Number((item.ranking && item.ranking.score) || 68) * 0.58));
        const daysLeft = Math.max(1, Math.round(Number((item.ranking && item.ranking.score) || 68) % 7));
        return `
              <article class="promo-active-item">
                <div class="promo-active-left">
                  <div class="promo-active-media">
                    <img src="${escapeHtml(resolveListingImage(item))}" alt="${escapeHtml(item.title || item.id)}" loading="lazy" />
                  </div>
                  <div>
                    <p class="promo-active-name">${escapeHtml(item.title || item.id)}</p>
                    <p class="promo-active-meta">
                      <span class="promo-chip">${escapeHtml(t('activePromoChip', 'Top Ranking'))}</span>
                      ${daysLeft} ${escapeHtml(t('activePromoDays', 'days remaining'))}
                    </p>
                  </div>
                </div>
                <div class="promo-active-right">
                  <strong>${clicks} ${escapeHtml(t('activePromoClicks', 'Clicks'))}</strong>
                  <span>${escapeHtml(t('activePromoGenerated', 'Generated'))}</span>
                </div>
              </article>
            `;
    })
        .join('');
}
function renderWalletSummaryDisplay() {
    const currency = state.walletSummary.currency || 'USD';
    if (el.walletAvailable) {
        el.walletAvailable.textContent = money(state.walletSummary.available, currency);
    }
    if (el.walletAvailablePrimary) {
        el.walletAvailablePrimary.textContent = money(state.walletSummary.available, currency);
    }
    if (el.walletReserveTotal) {
        el.walletReserveTotal.textContent = money(state.walletSummary.reserveBalance, currency);
    }
    if (el.walletReserveDays) {
        el.walletReserveDays.textContent = `${state.walletSummary.reserveWindowDays || 120}d`;
    }
    if (el.walletReserveReleases) {
        const releases = Array.isArray(state.walletSummary.upcomingReserveReleases)
            ? state.walletSummary.upcomingReserveReleases
            : [];
        if (!releases.length) {
            el.walletReserveReleases.innerHTML = `<div class="reserve-release-empty">${escapeHtml(t('walletReserveEmpty', 'No pending reserve releases.'))}</div>`;
        }
        else {
            el.walletReserveReleases.innerHTML = releases
                .slice(0, 4)
                .map((row) => {
                const rawDate = row.availableAt ? new Date(row.availableAt) : null;
                const hasDate = rawDate && Number.isFinite(rawDate.getTime());
                const dateLabel = hasDate
                    ? rawDate.toLocaleDateString(state.lang, { month: 'short', day: 'numeric' })
                    : t('walletReserveNoDate', 'Date pending');
                return `
                  <div class="reserve-release-row">
                    <span>${escapeHtml(t('walletReserveReleasePrefix', 'Releasing'))} ${escapeHtml(dateLabel)}</span>
                    <strong>+${escapeHtml(money(row.amount, row.currency || currency))}</strong>
                  </div>
                `;
            })
                .join('');
        }
    }
}
function parseWalletLedger(payload) {
    const rows = (payload && payload.entries) || [];
    if (!Array.isArray(rows))
        return [];
    return rows
        .map((row) => ({
        id: row && row.id ? String(row.id) : '',
        postedAt: row && row.postedAt ? String(row.postedAt) : '',
        description: row && row.description ? String(row.description) : 'Wallet transaction',
        code: row && row.code ? String(row.code) : 'CREDIT',
        amount: firstNumeric([row && row.amount], 0),
        currency: (row && row.currency) || state.walletSummary.currency || 'USD'
    }))
        .sort((a, b) => new Date(b.postedAt || 0).getTime() - new Date(a.postedAt || 0).getTime());
}
function walletLedgerCodeClass(code) {
    const normalized = String(code || '').toLowerCase();
    if (normalized === 'reserve_hold')
        return 'reserve_hold';
    if (normalized === 'reserve_release')
        return 'reserve_release';
    if (normalized === 'withdrawal')
        return 'withdrawal';
    if (normalized === 'promo_fee')
        return 'promo_fee';
    if (normalized === 'debit')
        return 'debit';
    return 'credit';
}
function renderWalletLedger() {
    if (!el.walletLedgerBody)
        return;
    if (!Array.isArray(state.walletLedger) || !state.walletLedger.length) {
        el.walletLedgerBody.innerHTML = `
            <tr>
              <td colspan="4" class="wallet-ledger-empty">${escapeHtml(t('walletLedgerEmpty', 'No wallet ledger entries yet.'))}</td>
            </tr>
          `;
        return;
    }
    el.walletLedgerBody.innerHTML = state.walletLedger
        .slice(0, 80)
        .map((row) => {
        const dateObj = row.postedAt ? new Date(row.postedAt) : null;
        const dateLabel = dateObj && Number.isFinite(dateObj.getTime())
            ? dateObj.toLocaleDateString(state.lang, { year: 'numeric', month: 'short', day: 'numeric' })
            : '-';
        const amountClass = row.amount >= 0 ? 'in' : 'out';
        const amountLabel = `${row.amount >= 0 ? '+' : '-'}${money(Math.abs(row.amount), row.currency)}`;
        const code = row.code || 'CREDIT';
        return `
              <tr>
                <td class="wallet-ledger-date">${escapeHtml(dateLabel)}</td>
                <td class="wallet-ledger-desc">${escapeHtml(row.description || 'Wallet transaction')}</td>
                <td>
                  <span class="wallet-ledger-pill ${walletLedgerCodeClass(code)}">${escapeHtml(code)}</span>
                </td>
                <td class="wallet-ledger-amount ${amountClass}">${escapeHtml(amountLabel)}</td>
              </tr>
            `;
    })
        .join('');
}
function opsActorId() {
    return state.role === 'ops' ? 'ops-demo' : 'admin-demo';
}
function moderationRiskTone(riskBand) {
    if (riskBand === 'high')
        return 'high';
    if (riskBand === 'medium')
        return 'medium';
    return 'low';
}
function moderationRiskLabel(riskBand) {
    if (riskBand === 'high')
        return t('moderationRiskHigh', 'High Risk');
    if (riskBand === 'medium')
        return t('moderationRiskMedium', 'Medium Risk');
    return t('moderationRiskLow', 'Low Risk');
}
function renderModerationSummary() {
    if (el.moderationKpiPending) {
        el.moderationKpiPending.textContent = String(state.moderationSummary.pendingCount || 0);
    }
    if (el.moderationKpiHighRisk) {
        el.moderationKpiHighRisk.textContent = String(state.moderationSummary.highRiskCount || 0);
    }
    if (el.moderationKpiSlaRisk) {
        el.moderationKpiSlaRisk.textContent = String(state.moderationSummary.slaBreachRiskCount || 0);
    }
}
function renderModerationQueue() {
    renderModerationSummary();
    if (!el.moderationQueueGrid)
        return;
    const rows = Array.isArray(state.moderationQueue) ? state.moderationQueue : [];
    if (!rows.length) {
        el.moderationQueueGrid.innerHTML = `
            <article class="moderation-empty" style="grid-column: 1 / -1">
              <h4>${escapeHtml(t('moderationQueueEmptyTitle', 'Queue is empty'))}</h4>
              <p>${escapeHtml(t('moderationQueueEmptySub', 'No listings are waiting for manual review.'))}</p>
            </article>
          `;
        return;
    }
    el.moderationQueueGrid.innerHTML = rows
        .map((item) => {
        const riskTone = moderationRiskTone(item.riskBand);
        const riskLabel = moderationRiskLabel(item.riskBand);
        const submitted = item.submittedAt
            ? new Date(item.submittedAt).toLocaleTimeString(state.lang, { hour: '2-digit', minute: '2-digit' })
            : '--:--';
        const waitMinutes = Number.isFinite(Number(item.waitMinutes)) ? Math.max(0, Number(item.waitMinutes)) : 0;
        const kycLabel = item.kycLabel || t('moderationKycUnknown', 'KYC Unknown');
        const imageUrl = typeof item.imageUrl === 'string' && item.imageUrl.trim()
            ? item.imageUrl
            : LISTING_PLACEHOLDER_IMAGE;
        return `
              <article class="moderation-item">
                <div class="moderation-item-head">
                  <div>
                    <span class="moderation-item-id">${escapeHtml(item.id || item.listingId || '-')}</span>
                    <p class="moderation-item-creator">${escapeHtml(item.creatorName || item.creatorId || 'Creator')}</p>
                    <span class="moderation-kyc">${escapeHtml(kycLabel)}</span>
                  </div>
                  <div class="moderation-item-meta">
                    <div>${escapeHtml(t('moderationQueuedAt', 'Queued'))} ${escapeHtml(submitted)}</div>
                    <div>${escapeHtml(waitMinutes)}m ${escapeHtml(t('moderationWait', 'wait'))}</div>
                    <span class="risk-flag ${riskTone}">${escapeHtml(riskLabel)} • ${Number(item.riskScore || 0).toFixed(1)}</span>
                  </div>
                </div>
                <div class="moderation-item-body">
                  <div class="moderation-media">
                    <img src="${escapeHtml(imageUrl)}" alt="${escapeHtml(item.title || item.id || 'Listing')}" loading="lazy" />
                  </div>
                  <div>
                    <h4 class="moderation-title">${escapeHtml(item.title || item.listingId || 'Untitled listing')}</h4>
                    <p class="moderation-desc">${escapeHtml(item.description || '')}</p>
                  </div>
                </div>
                <div class="moderation-foot">
                  <button class="moderation-btn reject" data-mod-action="reject" data-mod-id="${escapeHtml(item.listingId || item.id || '')}">${escapeHtml(t('moderationReject', 'Reject'))}</button>
                  <button class="moderation-btn approve" data-mod-action="approve" data-mod-id="${escapeHtml(item.listingId || item.id || '')}">${escapeHtml(t('moderationApprove', 'Approve'))}</button>
                </div>
              </article>
            `;
    })
        .join('');
}
async function loadModerationQueue(silent = false) {
    try {
        const data = await request('/v1/ops/moderation/queue?limit=24', {
            headers: { 'x-user-id': opsActorId() }
        });
        state.moderationSummary = {
            pendingCount: firstNumeric([data && data.summary && data.summary.pendingCount], 0),
            highRiskCount: firstNumeric([data && data.summary && data.summary.highRiskCount], 0),
            slaBreachRiskCount: firstNumeric([data && data.summary && data.summary.slaBreachRiskCount], 0)
        };
        state.moderationQueue = Array.isArray(data && data.queue) ? data.queue : [];
        renderModerationQueue();
        if (!silent && el.moderationConsole) {
            writeConsole(el.moderationConsole, 'Moderation Queue', {
                count: state.moderationQueue.length,
                summary: state.moderationSummary
            });
        }
    }
    catch (error) {
        state.moderationQueue = [];
        state.moderationSummary = { pendingCount: 0, highRiskCount: 0, slaBreachRiskCount: 0 };
        renderModerationQueue();
        if (!silent && el.moderationConsole) {
            writeConsole(el.moderationConsole, 'Moderation Queue Error', String(error));
        }
    }
}
async function applyModerationDecision(listingId, action, reason) {
    try {
        const data = await request(`/v1/ops/moderation/listings/${encodeURIComponent(listingId)}/decision`, {
            method: 'POST',
            headers: { 'x-user-id': opsActorId() },
            body: {
                action,
                reason
            }
        });
        if (el.moderationConsole) {
            writeConsole(el.moderationConsole, `Moderation ${action}`, data);
        }
        await loadModerationQueue(true);
        await loadListings();
    }
    catch (error) {
        if (el.moderationConsole) {
            writeConsole(el.moderationConsole, `Moderation ${action} Error`, String(error));
        }
    }
}
function renderCreatorMonetization() {
    renderCreatorListingOptions();
    renderPromotionPlans();
    renderPromotionMetrics();
    renderActivePromotions();
    renderWalletSummaryDisplay();
    renderWalletLedger();
}
function renderCreatorTable() {
    el.creatorTableBody.innerHTML = state.listings
        .map((item) => `
            <tr>
              <td>${item.id}</td>
              <td>${item.currency || 'USD'} ${Number(item.price || 0).toFixed(2)}</td>
              <td>${item.isPromoted ? 'Yes' : 'No'}</td>
              <td>${item.ranking && item.ranking.score ? item.ranking.score : '-'}</td>
            </tr>
          `)
        .join('');
}
async function loadListings() {
    try {
        const data = await request('/v1/listings?status=all', {
            headers: { 'x-user-id': 'buyer-demo' }
        });
        if (Array.isArray(data.listings) && data.listings.length) {
            state.listings = data.listings;
        }
        else {
            state.listings = fallbackListings;
        }
        writeConsole(el.customerConsole, 'Listings Loaded', { count: state.listings.length });
    }
    catch (error) {
        state.listings = fallbackListings;
        writeConsole(el.customerConsole, 'Listings Fallback', String(error));
    }
    renderListings();
    renderCreatorMonetization();
    renderCreatorTable();
    renderKpis();
}
async function createOrder() {
    const listingId = (el.selectedListing.value || '').trim();
    if (!listingId) {
        writeConsole(el.customerConsole, 'Validation', 'Listing ID is required.');
        return;
    }
    try {
        const data = await request('/v1/orders', {
            method: 'POST',
            headers: { 'x-user-id': 'buyer-demo' },
            body: {
                buyerId: 'buyer-demo',
                listingId,
                currency: 'USD'
            }
        });
        if (data.order && data.order.id) {
            el.webhookOrder.value = data.order.id;
        }
        writeConsole(el.customerConsole, 'Order Created', data);
    }
    catch (error) {
        writeConsole(el.customerConsole, 'Order Error', String(error));
    }
}
async function buyPromotion() {
    const listingId = (el.creatorListing.value || '').trim();
    if (!listingId) {
        writeConsole(el.promoConsole, 'Validation', 'Listing ID is required.');
        return;
    }
    try {
        const data = await request('/v1/promotions/purchase', {
            method: 'POST',
            headers: { 'x-user-id': 'seller-demo' },
            body: {
                sellerId: 'seller-demo',
                listingId,
                planId: state.selectedPromoPlan || el.planSelect.value,
                currency: 'USD'
            }
        });
        writeConsole(el.promoConsole, 'Promotion Purchased', data);
        await loadListings();
        await refreshWallet();
    }
    catch (error) {
        writeConsole(el.promoConsole, 'Promotion Error', String(error));
    }
}
async function loadPromotions() {
    try {
        const data = await request('/v1/sellers/seller-demo/promotions', {
            headers: { 'x-user-id': 'seller-demo' }
        });
        state.promotionSummary = data;
        writeConsole(el.promoConsole, 'Promotion Summary', data);
        renderActivePromotions();
    }
    catch (error) {
        writeConsole(el.promoConsole, 'Promotion Load Error', String(error));
    }
}
async function refreshWallet() {
    try {
        const data = await request('/v1/wallets/seller-demo/summary?currency=USD', {
            headers: { 'x-user-id': 'seller-demo' }
        });
        state.walletSummary = parseWalletSummary(data);
        writeConsole(el.walletConsole, 'Wallet Summary', data);
        renderWalletSummaryDisplay();
        await refreshWalletLedger(true);
    }
    catch (error) {
        writeConsole(el.walletConsole, 'Wallet Error', String(error));
    }
}
async function refreshWalletLedger(silent = false) {
    try {
        const data = await request('/v1/wallets/seller-demo/ledger?currency=USD&limit=80', {
            headers: { 'x-user-id': 'seller-demo' }
        });
        state.walletSummary = parseWalletSummary(data);
        state.walletLedger = parseWalletLedger(data);
        renderWalletSummaryDisplay();
        renderWalletLedger();
        if (!silent) {
            writeConsole(el.walletConsole, 'Wallet Ledger', { count: state.walletLedger.length });
        }
    }
    catch (error) {
        if (!silent) {
            writeConsole(el.walletConsole, 'Wallet Ledger Error', String(error));
        }
        renderWalletLedger();
    }
}
async function requestWithdrawal() {
    const amount = Number(el.withdrawAmount.value);
    if (!Number.isFinite(amount) || amount <= 0) {
        writeConsole(el.walletConsole, 'Validation', 'Withdraw amount must be positive.');
        return;
    }
    try {
        const data = await request('/v1/wallets/seller-demo/withdrawals', {
            method: 'POST',
            headers: { 'x-user-id': 'seller-demo' },
            body: {
                amount,
                currency: 'USD',
                payoutMethod: 'wire'
            }
        });
        writeConsole(el.walletConsole, 'Withdrawal Requested', data);
        await refreshWallet();
    }
    catch (error) {
        writeConsole(el.walletConsole, 'Withdrawal Error', String(error));
    }
}
async function sendWebhook() {
    const orderId = (el.webhookOrder.value || '').trim();
    if (!orderId) {
        writeConsole(el.opsConsole, 'Validation', 'Order ID is required.');
        return;
    }
    try {
        const data = await request('/v1/payments/webhooks/high-risk', {
            method: 'POST',
            headers: {
                'x-webhook-token': el.webhookToken.value
            },
            body: {
                eventId: `evt-${orderId}-${Date.now()}`,
                orderId,
                paymentStatus: el.webhookStatus.value,
                pspTxnId: `txn-${Date.now()}`
            }
        });
        writeConsole(el.opsConsole, 'Webhook Sent', data);
    }
    catch (error) {
        writeConsole(el.opsConsole, 'Webhook Error', String(error));
    }
}
async function runPayoutRelease() {
    try {
        const data = await request('/v1/payouts/release', {
            method: 'POST',
            headers: { 'x-user-id': 'admin-demo' },
            body: { force: true }
        });
        writeConsole(el.settlementConsole, 'Payout Release', data);
        await refreshWallet();
    }
    catch (error) {
        writeConsole(el.settlementConsole, 'Payout Error', String(error));
    }
}
function bindEvents() {
    el.navButtons.forEach((button) => {
        button.addEventListener('click', () => setPanel(button.dataset.panel));
    });
    document.querySelectorAll('[data-switch-role]').forEach((button) => {
        button.addEventListener('click', () => setRole(button.getAttribute('data-switch-role')));
    });
    el.saveConfig.addEventListener('click', () => {
        persistConfig();
        appendLog('Config Saved', { apiBase: el.apiBase.value, webhookToken: '***' });
    });
    el.searchInput.addEventListener('input', renderListings);
    el.filterSelect.addEventListener('change', renderListings);
    el.refreshListings.addEventListener('click', loadListings);
    el.createOrderBtn.addEventListener('click', createOrder);
    el.buyPromoBtn.addEventListener('click', buyPromotion);
    el.loadPromotions.addEventListener('click', loadPromotions);
    el.walletRefresh.addEventListener('click', refreshWallet);
    if (el.walletLedgerRefresh) {
        el.walletLedgerRefresh.addEventListener('click', () => refreshWalletLedger(false));
    }
    el.withdrawBtn.addEventListener('click', requestWithdrawal);
    el.promoModeDuration.addEventListener('click', () => {
        setPromotionMode('duration');
        renderPromotionPlans();
    });
    el.promoModeClick.addEventListener('click', () => {
        setPromotionMode('click');
        renderPromotionPlans();
    });
    el.creatorListing.addEventListener('change', () => {
        const current = (el.creatorListing.value || '').trim();
        if (current) {
            state.selectedListingId = current;
            el.selectedListing.value = current;
        }
    });
    el.sendWebhook.addEventListener('click', sendWebhook);
    el.releasePayout.addEventListener('click', runPayoutRelease);
    if (el.loadModerationQueue) {
        el.loadModerationQueue.addEventListener('click', () => loadModerationQueue(false));
    }
    if (el.moderationQueueGrid) {
        el.moderationQueueGrid.addEventListener('click', async (event) => {
            const btn = event.target.closest('[data-mod-action][data-mod-id]');
            if (!btn)
                return;
            const listingId = btn.getAttribute('data-mod-id') || '';
            const action = btn.getAttribute('data-mod-action') || '';
            if (!listingId || !action)
                return;
            let reason = '';
            if (action === 'reject') {
                const promptLabel = t('moderationRejectPrompt', 'Reject reason');
                const input = window.prompt(promptLabel, 'policy_violation');
                if (input === null)
                    return;
                reason = String(input || '').trim() || 'policy_violation';
            }
            btn.disabled = true;
            try {
                await applyModerationDecision(listingId, action, reason);
            }
            finally {
                btn.disabled = false;
            }
        });
    }
    el.langSelect.addEventListener('change', (event) => {
        state.lang = safeLang(event.target.value);
        renderI18n();
        renderCreatorMonetization();
        renderModerationQueue();
        persistConfig();
    });
}
function boot() {
    hydrateConfig();
    const query = getQuery();
    state.lang = safeLang(query.lang || localStorage.getItem('siteLang') || 'en');
    renderI18n();
    setRole(query.role || 'customer');
    bindEvents();
    loadListings();
    refreshWallet();
    loadModerationQueue(true);
    appendLog('Boot', {
        role: state.role,
        lang: state.lang,
        apiBase: apiBase()
    });
}
boot();
export {};
