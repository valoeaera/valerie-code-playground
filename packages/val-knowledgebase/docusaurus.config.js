// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Val Knowledgebase",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-test-site.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  organizationName: "valoeaera", // Usually your GitHub org/user name.
  projectName: "valerie-code-playground", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/valoeaera/valerie-code-playground",
        },
        blog: {
          blogTitle: "Val's Challenge Reports",
          blogDescription:
            "This blog contains all of my HTB and Crackmes challenge reports",
          blogSidebarTitle: "All posts",
          blogSidebarCount: "ALL",
          routeBasePath: "/challenges",
          showReadingTime: true,
          editUrl: "https://github.com/valoeaera/valerie-code-playground",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    require.resolve("@cmfcmf/docusaurus-search-local"),
    [
      "docusaurus2-dotenv",
      {
        systemvars: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Val Knowledgebase",
        logo: {
          alt: "Val Knowledgebase Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Tutorial",
          },
          { to: "/challenges/tags", label: "Challenges", position: "left" },
          {
            href: "https://github.com/valoeaera",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Where am I?",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/valoeaera",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Challenges",
                to: "/challenges/tags",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Val Roudebush | Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
