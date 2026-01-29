// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Aureum One — Structural Stress Test',
  tagline: 'Adversarial review for failure, governance and evidence integrity',
  favicon: 'img/favicon.ico',

  url: 'https://aureum-one.github.io',
  baseUrl: '/arquitectura-institucional-aureum/',

  organizationName: 'AureumOne',
  projectName: 'arquitectura-institucional-aureum',

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
        src: '/arquitectura-institucional-aureum/img/logo.png',
      },
      items: [
        {
          to: '/',
          label: 'Home',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Arquitectura Institucional Aureum',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentación',
          items: [
            {
              label: 'Qué es esto',
              to: '/docs/que-es-esto',
            },
            {
              label: 'El problema institucional',
              to: '/docs/el-problema-institucional',
            },
            {
              label: 'Restricciones de diseño',
              to: '/docs/restricciones-de-diseno',
            },
            {
              label: 'Arquitectura en cuatro capas',
              to: '/docs/arquitectura-en-cuatro-capas',
            },
            {
              label: 'Gobernanza sin opinión',
              to: '/docs/gobernanza-sin-opinion',
            },
            {
              label: 'Transparencia y verificabilidad',
              to: '/docs/transparencia-y-verificabilidad',
            },
            {
              label: 'Límites explícitos',
              to: '/docs/limites-explicitos',
            },
            {
              label: 'Revisión externa',
              to: '/docs/revision-externa',
            },
            {
              label: 'Aclaraciones',
              to: '/docs/aclaraciones',
            },
            {
              label: 'Cierre',
              to: '/docs/cierre',
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
