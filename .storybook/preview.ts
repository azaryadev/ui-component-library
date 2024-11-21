import type { Preview } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-styling";

import "tailwindcss/tailwind.css";
import "./styles.css";

// import '../src/assets/styles/tailwind/index.css'

const preview: Preview = {
  // decorators: [
  //   // Properly handle theme/style application
  //   withThemeByClassName({
  //     themes: {
  //       light: "light",
  //       dark: "dark",
  //     },
  //     defaultTheme: "light",
  //   }),
  // ],
  parameters: {
    backgrounds: {
      default: "light",
      values: [
        {
          name: "dark",
          value: "#020617",
        },
        {
          name: "light",
          value: "#ffffff",
        },
      ],
    },
    layout: "fullscreen",
    docs: {
      toc: true,
      source: {
        state: "open", // Force source to be shown by default
        language: "tsx",
        excludeDecorators: true,
      },
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ["Introduction", "Components", "*"],
      },
    },
  },
};

export default preview;
