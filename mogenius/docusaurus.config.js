// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'mogenius Documentation',
  tagline: 'Dinosaurs are cool',
  url: 'https://doc.mogenius.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'mogeniuscom', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          editUrl: 'https://github.com/mogeniuscom/documentation',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/mogeniuscom/documentation',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
          href: 'https://mogenius.com'
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
      footer: {
        style: 'dark',
        links: [
          {
            title: 'More',
            items: [
              {
                label: 'Website',
                href: 'https://mogenius.com',
              },
              {
                label: 'mogenius studio',
                href: 'https://studio.mogenius.com',
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
                href: 'https://github.com/mogeniuscom',
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
