import type { ZudokuConfig } from "zudoku";
import { zuploMonetizationPlugin } from "@zuplo/zudoku-plugin-monetization";

const config: ZudokuConfig = {
  plugins: [
    zuploMonetizationPlugin()
  ],

  site: {
    title: "AI Data Gateway",
    logo: {
      src: {
        light: "none",
        dark: "none",
      },
      alt: "AI Data Gateway",
      width: "0px",
    },
    // Banner removed for cleaner look
  },

  footer: {
    borderTop: true,
    position: "center",
    columns: [
      {
        title: "Product",
        links: [
          { label: "Pricing", href: "/pricing" },
          { label: "API Reference", href: "/api" },
          { label: "Changelog", href: "/changelog" },
          { label: "SDKs", href: "/sdks" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "API Status", href: "/status" },
          { label: "FAQ", href: "/faq" },
          { label: "Support", href: "/support" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About Us", href: "/about" },
          { label: "Contact", href: "/contact" },
          { label: "Privacy", href: "/privacy" },
          { label: "Terms", href: "/terms" },
        ],
      },
      {
        title: "Connect",
        links: [
          { label: "GitHub", href: "https://github.com/aidata" },
          { label: "Twitter", href: "https://twitter.com/aidata" },
          { label: "LinkedIn", href: "https://linkedin.com/company/aidata" },
          { label: "Slack", href: "https://aidata.slack.com" },
        ],
      },
    ],
    copyright: `© ${new Date().getFullYear()} AI Data Gateway. All rights reserved.`,
  },

  css: `
    footer {
      border-top: 2px solid rgba(128, 128, 128, 0.15);
      margin-top: 3rem;
      padding-top: 2rem;
    }
    footer a {
      transition: opacity 0.2s ease;
    }
    footer a:hover {
      opacity: 0.7;
      text-decoration: underline;
    }
  `,

  theme: {
    light: {
      primary: "210 100% 50%",
      background: "0 0% 100%",
      card: "0 0% 100%",
      border: "210 10% 90%",
    },
    dark: {
      primary: "210 100% 60%",
      background: "222 47% 11%",
      card: "222 47% 11%",
      border: "210 20% 20%",
    },
  },

  metadata: {
    title: "AI Data Gateway",
    description: "Pay-per-request API providing compliance data for AI agents. Access logistics, real estate, healthcare, and finance data.",
  },

  navigation: [
    {
      type: "link",
      to: "/api",
      label: "API Reference",
    },
    {
      type: "link",
      to: "/pricing",
      label: "Pricing",
    },
    {
      type: "category",
      label: "Resources",
      items: [
        {
          type: "link",
          label: "FAQ",
          to: "/faq",
        },
        {
          type: "link",
          label: "Support",
          to: "/support",
        },
      ],
    },
  ],

  // Redirect root to API Reference
  redirects: [{ from: "/", to: "/api" }],

  apis: [
    {
      type: "file",
      input: "../config/routes.oas.json",
      path: "api",
    },
  ],

  authentication: {
    type: "auth0",
    domain: "auth.zuplo.site",
    clientId: "f8I87rdsCRo4nU2FHf0fHVwA9P7xi7Ml",
    audience: "https://api.example.com/",
  },

  apiKeys: {
    enabled: true,
  },
};

export default config;