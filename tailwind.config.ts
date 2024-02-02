import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'hivePurple': '#9730FF',
        'hivePurpleLight': '#E8D9FF',
        'whisper': '#EEEEEE',
        'veryLightGrey': '#C8C8C8',
        'success': '#40713F',
        'successLight': '#E0FDE0',
        'error': '#FF0000',
        'errorLight': '#FFEBEB',
        'warning': '#FFA800',
        'warningLight': '#FFF5E0',
        'hiveBlack': '#1A1225',
      },
      fontFamily: {
        'satoshi': ['Satoshi', 'sans-serif'],
        'helvetica': ['Helvetica', 'sans-serif'],
        'plusJakartaSans': ['Plus Jakarta Sans', 'sans-serif'],
      },
      fontSize: {
        '3xs': ['32px', '30px'],
      },
      height: {
        '25': '6.25rem', // 100px
        '30': '7.5rem', // 120px
      },
      width: {
        '25': '6.25rem', // 100px
        '35': '8.75rem', // 140px
        '69': '17.25rem', // 276px
        '76': '19rem', // 304px
      },
      padding: {
        '1.25': '0.3125rem', // 5px
        '7.5': '1.875rem', // 30px
        '18': '4.5rem', // 72px
        '19.5': '4.875rem', // 78px
        '25': '6.25rem', // 100px
      },
      lineHeight: {
        '3.5': '0.875rem', // 14px
        '3.75': '0.9375rem', // 15px
        '19': '4.75rem', // 76px
      },
      borderRadius: {
        'lxl': '0.625rem', // 10px
      },
      animation: {
        'notif_in' : 'notif_in 0.75s normal forwards ease-in-out 1',
        'favtool_in' : 'favtool_in .8s normal forwards ease-out 1',
        'favtool_in-25': 'favtool_in .8s normal forwards ease-out 1 0.125s',
        'favtool_in-50' : 'favtool_in .8s normal forwards ease-out 1 0.25s',
        'favtool_in-75': 'favtool_in .8s normal forwards ease-out 1 0.375s',
        'favtool_in-100': 'favtool_in .8s normal forwards ease-out 1 0.5s',
        'favtool_in-125': 'favtool_in .8s normal forwards ease-out 1 0.625s',
        'favtool_in-150': 'favtool_in .8s normal forwards ease-out 1 0.75s',
        'favtool_in-175': 'favtool_in .8s normal forwards ease-out 1 0.875s',
      },
    },
  },
  plugins: [],
};
export default config;
