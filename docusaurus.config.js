// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Codepuzz',
  tagline: 'Kodlamaya Ve Sistem Yönetimine Dair İşe Yarar Bilgiler...',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://codepuzz.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dvu', // Usually your GitHub org/user name.
  projectName: 'codepuzz', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false, // Disable the blog feature
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-Y6YQFF9V4E',
          anonymizeIP: true,
        },
        googleTagManager: {
          containerId: 'GTM-KNNVB3D',
        },
      }),
    ],
    '@docusaurus/theme-live-codeblock'

  ],

  themeConfig: 
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      
      image: 'img/docusaurus-social-card.jpg',
      algolia: {
        // The application ID provided by Algolia
        appId: 'X2FW1977E7',
  
        // Public API key: it is safe to commit it
        apiKey: '79fc7cfc52a1e9531999cbfcfe871dbf',
  
        indexName: 'codepuzz',
        contextualSearch: true,
      },
      navbar: {
        title: 'Codepuzz',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Konular',
          },
          
          {
            href: 'https://www.dvu.com.tr',
            label: 'DVU',
            position: 'right',
          },
          
        
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Dokümanlar',
            items: [
              {
                label: 'Konular',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/codepuzz',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DVU Software.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      onBrokenLinks: 'ignore', // or 'warn' or 'ignore',
      metadata: [{name: 'keywords', content: 'yazilim, markdown,commonmark,codepuzz,repo yazı formatı,yazılım,readme'}],
      markdown: {
        mermaid: true,
      },
      themes: ['@docusaurus/theme-mermaid','@docusaurus/theme-live-codeblock'],

      plugins: [
        // ...other plugins
        '@docusaurus/theme-mermaid',
       
      ],
    }),
   
};

module.exports = config;
