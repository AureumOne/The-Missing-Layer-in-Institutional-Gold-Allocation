// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Aureum One — Structural Stress Test',
  tagline: 'Adversarial review for failure, governance and evidence integrity',
  favicon: 'img/favicon.ico',

  url: 'https://aureum-one.github.io',
  baseUrl: '/aureum-structural-stress-test/',

  organizationName: 'AureumOne',
  projectName: 'aureum-structural-stress-test',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs',
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
          to: '/home',
          label: 'Home',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/review',
          label: 'Submit Review',
          position: 'left',
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
              label: 'Purpose & Reading Contract',
              to: '/docs/purpose',
            },
            {
              label: 'Scope & Assumptions',
              to: '/docs/scope',
            },
            {
              label: 'Architecture',
              to: '/docs/architecture',
            },
            {
              label: 'Failure Modes',
              to: '/docs/failure-modes',
            },
            {
              label: 'Evidence & Verifiability',
              to: '/docs/evidence',
            },
            {
              label: 'Open Questions',
              to: '/docs/open-questions',
            },
          ],
        },
        {
          title: 'Contact',
          items: [
            {
              label: 'Email',
              href: 'mailto:ricardo.daher@aureumone.io',
            },
            {
              label: 'Submit Review',
              to: '/review',
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
