import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "โรงพยาบาลพุทไธสง",
  tagline: "โรงพยาบาลพุทไธสง",
  favicon: "img/logo.png",

  // Set the production url of your site here
  url: "https://phutthaisong.vercel.app/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: "en",
  //   locales: ["en", "th"],
  //   localeConfigs: {
  //     th: {
  //       label: "ไทย",
  //       direction: "ltr",
  //     },
  //     en: {
  //       label: "En",
  //       direction: "ltr",
  //     },
  //   },
  // },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/dev4geo/docs/tree/main/packages/create-docusaurus/templates/shared/",
        },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl: 'https://github.com/dev4geo/docs/tree/main/packages/create-docusaurus/templates/shared/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/logo.png",
    navbar: {
      title: "คู่มือการใช้เว็บโรงพยาบาลพุทไธสง",
      logo: {
        alt: "Logo",
        src: "img/logo.png",
      },
      items: [
        {
          to: "/docs/quick_start",
          label: "วิธีใช้งานเริ่มต้น(ฉบับย่อ)",
          position: "right",
        },
        {
          to: "/docs/FAQ",
          label: "คำถามที่พบบ่อย",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      // links: [
      //   {
      //     title: "About",
      //     items: [
      //       {
      //         label: "Dev4Geo",
      //         to: "/docs/intro",
      //       },
      //     ],
      //   },
      //   {
      //     title: "Community",
      //     items: [
      //       {
      //         label: "Discord",
      //         href: "https://discord.com/invite/uVdJr2Xnex",

      //       },
      //       {
      //         label: "Facebook",
      //         href: "https://www.facebook.com/dev4geo",
      //       },
      //       {
      //         label: "GitHub",
      //         href: "https://github.com/Dev4Geo/",
      //       },
      //     ],
      //   },
      //   {
      //     title: "More",
      //     items: [
      //       {
      //         label: "GitHub Repos",
      //         href: "https://github.com/orgs/Dev4Geo/repositories",
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} โรงพยาบาลพุทไธสง`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
