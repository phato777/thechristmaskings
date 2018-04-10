export default [
    {
        path: '/',
        name: 'Login',
        component: require('../components/LoginPage').default,
    },
    {
        path: '/manage',
        component: require('../components/ManagePage').default,
        children: [
            {
                path: '',
                name: 'Overview',
                component: require('../components/HomePage').default,
            },
            {
                path: 'settings',
                name: 'Settings',
                component: require('../components/SettingsPage').default,
            }
        ]
    },
];