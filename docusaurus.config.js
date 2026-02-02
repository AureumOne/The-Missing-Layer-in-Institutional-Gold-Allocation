// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The Missing Layer in Institutional Gold Allocation',
  tagline: 'Documentation',
  favicon: 'img/favicon.ico',

  url: 'https://aureumone.github.io',
  baseUrl: '/missing-layer/',

  organizationName: 'AureumOne',
  projectName: 'missing-layer',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      es: {
        label: 'Español',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/logo.png',
    navbar: {
      title: '',
      logo: {
        alt: 'Aureum One Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Reading Contract',
              to: '/reading-contract',
            },
            {
              label: 'Gold Is Not the Problem',
              to: '/gold-is-not-the-problem',
            },
            {
              label: 'Why Institutional Allocation Breaks Down',
              to: '/why-institutional-allocation-breaks-down',
            },
            {
              label: 'The Missing Layer',
              to: '/the-missing-layer',
            },
            {
              label: 'What Changes When the Layer Exists',
              to: '/what-changes-when-the-layer-exists',
            },
            {
              label: "Aureum's Role",
              to: '/aureums-role',
            },
            {
              label: 'Closing',
              to: '/closing',
            },
          ],
        },
        {
          title: 'Contact',
          items: [
            {
              label: 'ricardo.daher@aureumone.io',
              href: 'mailto:ricardo.daher@aureumone.io',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Aureum One. Confidential Documentation.`,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  },
};

module.exports = config;
