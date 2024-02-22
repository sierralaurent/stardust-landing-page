import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'Purple':'#3B3170',
        'DarkPurple': '#271F4F',
        'LightPurple': '#9183bA',
        'Dark': '#171233',
        'White': '#FFFFFF',
        'Yellow': '#F5DF60'
      },
    },
    daisyui: {
      themes: [
        {
          mytheme: {
            'primary':'#3B3170', //Purple
            'base-200': '#271F4F', //DarkPurple
            'secondary': '#9183bA', //LightPurple
            'base-100': '#171233', //Dark
            'neutral': '#FFFFFF', //White
            'accent': '#F5DF60' //Yellow
          },
        },
      ],
    },
    screens: {

      'mobile': {'max': '767px'},
      // => @media (min-width: 350px and max-width: 767px) { ... }

      'tablet': {'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'desktop': {'min': '1024px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
    }
  },
  plugins: [require("daisyui")],
};
export default config;
