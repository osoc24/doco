import { defineConfig } from "vitepress";

const projectSidebar = {
  text: "Project",
  items: [
    {
      text: "Brand",
      link: "/project/brand",
    },
    {
      text: "Audience",
      link: "/project/audience",
    },
    {
      title: "Lexicon",
      link: "/project/lexicon",
    },
  ],
};

const loamaSidebar = {
  text: "Loama",
  items: [
    {
      text: "Design",
      link: "deliverables/loama/design.md",
    },
    {
      text: "Development",
      link: "deliverables/loama/development",
    },
    {
      text: "Current Limitations",
      link: "deliverables/loama/limitations",
    },
  ],
};

const mockAppSidebar = {
  text: "Mock Apps",
  items: [
    {
      text: "Mockbook",
      link: "deliverables/toco/mockbook/index",
    },
    {
      text: "Doctorapp",
      link: "deliverables/toco/doctorapp/index",
    },
  ],
};

const deliverablesSidebar = {
  text: "Deliverables",
  items: [
    loamaSidebar,
    mockAppSidebar,
    { text: "Controller", link: "deliverables/controller" },
  ],
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/doco/",
  title: "Loama",
  description: "The documentation & handover website of the LOAMA project",
  themeConfig: {
    logo: "/loama-logo.svg",
    socialLinks: [
      { icon: "github", link: "https://github.com/osoc24" },
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/company/open-summer-of-code/posts/?feedView=all",
      },
    ],
    search: {
      provider: "local",
    },
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Project",
        items: [
          { text: "Branding", link: "/project/brand" },
          { text: "For whom?", link: "/project/audience" },
        ],
      },
      {
        text: "Deliverables",
        items: [
          {
            text: "Loama",
            items: [
              { text: "Design", link: "/deliverables/loama/design.md" },
              { text: "Development", link: "/deliverables/loama/development" },
            ],
          },
          {
            text: "Mock Apps",
            items: [
              { text: "MockBook", link: "/deliverables/toco/mockbook/index" },
              { text: "Doctorapp", link: "/deliverables/toco/doctorapp/index" },
            ],
          },
          {
            text: "Controller",
            link: "/deliverables/controller",
          },
        ],
      },
    ],

    sidebar: {
      "/": [
        { text: "Home", link: "/" },
        {
          text: "Lexicon",
          link: "/lexicon",
        },
        {
          ...projectSidebar,
          collapsed: true,
        },
        {
          ...deliverablesSidebar,
          collapsed: true,
        },
        { text: "Team", link: "/team" },
      ],
      "/project": [
        projectSidebar,
        {
          ...deliverablesSidebar,
          collapsed: true,
        },
      ],
      "/deliverables": [
        {
          ...projectSidebar,
          collapsed: true,
        },
        deliverablesSidebar,
      ],
    },
  },
});
