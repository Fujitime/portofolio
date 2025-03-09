import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import UnoCss from "unocss/astro";
import yaml from "@rollup/plugin-yaml";

import expressiveCode from "astro-expressive-code";
import { pluginCollapsibleSections } from "@expressive-code/plugin-collapsible-sections";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";

import rehypeExternalLinks from "rehype-external-links";
import remarkMath from "remark-math";
import rehypeMath from "rehype-katex";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";

// https://astro.build/config
export default defineConfig({
  site: "https://waltahh.netlify.app",
  integrations: [
    expressiveCode({
      themes: ["catppuccin-frappe", "catppuccin-latte"],
      plugins: [pluginCollapsibleSections(), pluginLineNumbers()],
      defaultProps: {
        showLineNumbers: true,
        wrap: true,
      },
    }),
    mdx(),
    sitemap(),
    UnoCss({ injectReset: true }),
  ],
  vite: {
    plugins: [yaml()],
  },
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      rehypeAccessibleEmojis,
      [
        rehypeExternalLinks,
        {
          rel: ["external", "nofollow", "noopener", "noreferrer"],
          target: ["_blank"],
        },
      ],
      rehypeMath,
    ],
  },
  output: "static",  // Make sure you want to output static files
});
