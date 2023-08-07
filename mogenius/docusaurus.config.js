// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'mogenius Docs',
  tagline: 'Empowering Platform Engineering',
  url: 'https://docs.mogenius.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'mogenius', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.
  // blog: 'false',
  /**plugins: ['@docusaurus/plugin-ideal-image'],*/

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          // editUrl: 'https://github.com/mogenius/docs',
        },
       blog: false,
          //{
          // showReadingTime: true,
          // Please change this to your repo.
          // editUrl:'https://github.com/mogenius/docs',
          //  },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
          to: '/',
          from: ['/tutorials/*']
          }
        ],
        // createRedirects(existingPath) {
        // if (existingPath.includes('/')) {
            // Redirect from /tutorials to Home
        //    return [
        //      existingPath.replace('/tutorials', '/'),
        //    ];
        //  }
        //  return undefined; // Return a falsy value: no redirect created
        // },
        },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({ 
      Image: 'img/meta-image.jpeg',
      metadata: [
        {name: 'twitter:card', content: 'img/meta-image.jpeg'},
        {name: 'og:image', content: 'img/meta-image.jpeg'},
      ],
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
      },    
       navbar: {
        title: '',
        logo: {
          alt: 'mogenius logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo_dark.svg',
          href: '/'
        },
        items: [
          
          {
          href: 'https://mogenius.com',
            label: 'Home',
            position: 'right',
          },
          {
            href: 'https://studio.mogenius.com',
              label: 'Sign in',
              position: 'right',
            }
        ],
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'VV92UBZKRV',

        // Public API key: it is safe to commit it
        apiKey: 'ad3eaf5f78bccb6b6d24365364cc48cc',

        indexName: 'docs-dev',

        // Optional: see doc section below
        contextualSearch: true,
        
        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        //... other Algolia params
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'More',
            items: [
              {
                label: 'mogenius studio',
                href: 'https://studio.mogenius.com',
              },
              {
                label: 'API reference',
                href: 'https://api-docs.mogenius.com',
              },
              {
                label: 'Website',
                href: 'https://mogenius.com',
              },
              {
                label: 'Feedback',
                href: 'https://feedback.mogenius.com',
              },
              
            
            ],
          },
          
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/mogenius',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/mogenius',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Legal info',
                href: 'https://mogenius.com/legal-info',
              },
              {
                label: 'Privacy',
                href: 'https://mogenius.com/privacy',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} mogenius. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;