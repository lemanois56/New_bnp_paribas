export let menuData = [
    {
        menuTitle: 'ACCUEIL'
    },
    {
        type: 'link',
        title: 'Tableau de Bord',
        icon: 'bx bx-home',
        path: '/dashboard/overview',
        selected: false,
        active: false,
        dirchange: false,
    },
    {
        menuTitle: 'COMPTES'
    },
    {
        type: 'sub',
        title: 'Comptes',
        icon: 'bx bx-wallet',
        selected: false,
        active: false,
        dirchange: false,
        children: [
            {
                path: '/accounts/overview',
                type: 'link',
                title: 'Vue d\'ensemble',
                selected: false,
                active: false,
                dirchange: false,
            },
            {
                path: '/accounts/checking',
                type: 'link',
                title: 'Compte Courant',
                selected: false,
                active: false,
                dirchange: false,
            },
            {
                path: '/accounts/savings',
                type: 'link',
                title: 'Compte Épargne',
                selected: false,
                active: false,
                dirchange: false,
            },
            {
                path: '/accounts/cards',
                type: 'link',
                title: 'Cartes Bancaires',
                selected: false,
                active: false,
                dirchange: false,
            },
            {
                path: '/accounts/loans',
                type: 'link',
                title: 'Prêts',
                selected: false,
                active: false,
                dirchange: false,
            }
        ]
    },
    {
        menuTitle: 'TRANSACTIONS'
    },
    {
        type: 'sub',
        title: 'Transactions',
        icon: 'bx bx-transfer',
        selected: false,
        active: false,
        dirchange: false,
        children: [
            {
                path: '/transactions/recent',
                type: 'link',
                title: 'Transactions Récentes',
                selected: false,
                active: false,
                dirchange: false,
            },
            {
                path: '/transactions/history',
                type: 'link',
                title: 'Historique Complet',
                selected: false,
                active: false,
                dirchange: false,
            },
            {
                path: '/transactions/pending',
                type: 'link',
                title: 'Transactions en Attente',
                selected: false,
                active: false,
                dirchange: false,
            },
            {
                path: '/transactions/search',
                type: 'link',
                title: 'Rechercher Transactions',
                selected: false,
                active: false,
                dirchange: false,
            }
        ]
    },
    {
        menuTitle: 'VIREMENTS & PAIEMENTS'
    },
    {
        type: 'sub',
        title: 'Virements',
        icon: 'bx bx-money',
        selected: false,
        active: false,
        dirchange: false,
        children: [
            {
                path: '/transfers/new',
                type: 'link',
                title: 'Nouveau Virement',
                selected: false,
                active: false,
                dirchange: false,
            },
            {
                path: '/transfers/scheduled',
                type: 'link',
                title: 'Virements Programmés',
                selected: false,
                active: false,
                dirchange: false,
            },
            {
                path: '/transfers/recipients',
                type: 'link',
                title: 'Gestion des Bénéficiaires',
                selected: false,
                active: false,
                dirchange: false,
            },
        ]
    },
    {
        type: 'sub',
        title: 'Paiements',
        icon: 'bx bx-receipt',
        selected: false,
        active: false,
        dirchange: false,
        children: [
            {
                path: '/payments/bills',
                type: 'link',
                title: 'Paiement de Factures',
                selected: false,
                active: false,
                dirchange: false,
            },
            {
                path: '/payments/scheduled',
                type: 'link',
                title: 'Paiements Programmés',
                selected: false,
                active: false,
                dirchange: false,
            },
            {
                path: '/payments/mortgage',
                type: 'link',
                title: 'Crédits Immobiliers',
                selected: false,
                active: false,
                dirchange: false,
            }
        ]
    },
    {
        menuTitle: 'ANALYSES & RAPPORTS'
    },
    {
        type: 'sub',
        title: 'Analyses',
        icon: 'bx bx-bar-chart',
        selected: false,
        active: false,
        dirchange: false,
        children: [
            {
                path: '/analytics/spending',
                type: 'link',
                title: 'Analyse des Dépenses',
                selected: false,
                active: false,
                dirchange: false,
            },
            {
                path: '/analytics/income',
                type: 'link',
                title: 'Analyse des Revenus',
                selected: false,
                active: false,
                dirchange: false,
            },
            {
                path: '/analytics/budgets',
                type: 'link',
                title: 'Budgets',
                selected: false,
                active: false,
                dirchange: false,
            },
            {
                path: '/analytics/investments',
                type: 'link',
                title: 'Investissements',
                selected: false,
                active: false,
                dirchange: false,
            }
        ]
    },
    {
        menuTitle: 'SERVICES'
    },
    {
        type: 'sub',
        title: 'Services',
        icon: 'bx bx-cog',
        selected: false,
        active: false,
        dirchange: false,
        children: [
            {
                path: '/services/alerts',
                type: 'link',
                title: 'Alertes de Compte',
                selected: false,
                active: false,
                dirchange: false,
            },
            {
                path: '/services/customer-support',
                type: 'link',
                title: 'Support Client',
                selected: false,
                active: false,
                dirchange: false,
            },
            {
                path: '/services/settings',
                type: 'link',
                title: 'Paramètres',
                selected: false,
                active: false,
                dirchange: false,
            }
        ]
    },
    {
        menuTitle: 'AIDE'
    },
    {
        type: 'link',
        title: 'FAQ & Aide',
        icon: 'bx bx-help-circle',
        path: '/help',
        selected: false,
        active: false,
        dirchange: false,
    },
    {
        type: 'link',
        title: 'Contactez-nous',
        icon: 'bx bx-phone',
        path: '/contact-us',
        selected: false,
        active: false,
        dirchange: false,
    }
];
