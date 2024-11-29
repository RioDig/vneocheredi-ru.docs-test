import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const remarkStepResult = require('./src/remark-plugins/remark-step-result');

const config: Config = {
  future: {
    experimental_faster: true,
  },

  customFields: {
    version: '2410.1',
  },

  title: 'ВнеОчереди',
  tagline: 'Документация',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'VneOcheredi', // Usually your GitHub org/user name.
  projectName: 'vneocheredi-ru.docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru',],

  },
  plugins: [
    'docusaurus-plugin-sass',
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          lastVersion: 'current',
          versions: {
            current: {
              label: '2410.1',
              badge: true,
            },
          },
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/VneOcheredi/vneocheredi-ru.docs',
          // Кастомная обработка MDX
          remarkPlugins: [remarkStepResult],
          admonitions: {
            keywords: ['troubleshooting'],
            extendDefaults: true,
          },
        },
        blog: {
          blogTitle: 'Список изменений',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/VneOcheredi/vneocheredi-ru.docs',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          blogSidebarTitle: 'Последние записи',
        },
        theme: {
          customCss: './src/css/custom.scss',
        },
      } satisfies Preset.Options,
    ],
  ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ["ru"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      }),
    ],
  ],
  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'ВнеОчереди',
      logo: {
        alt: 'Логотип ВнеОчереди',
        src: 'img/favicon.png',
      },
      items: [
        {
          to: '/docs/intro',
          // sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Руководство пользователя',
        },
        {to: '/blog', label: 'Список изменений', position: 'left'},
        {
          href: 'https://github.com/VneOcheredi/vneocheredi-ru.docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Руководство пользователя',
          items: [
            {
              label: 'Введение',
              to: '/docs/intro',
            },
          ],
        },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        {
          title: 'Другое',
          items: [
            {
              label: 'Список изменений',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/VneOcheredi/vneocheredi-ru.docs',
            },
          ],
        },
      ],
      copyright: `© ООО «ВнеОчереди», 2023–${new Date().getFullYear()}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
