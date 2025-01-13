import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'samim': ['samim', 'sans-serif'],
        'vazir': ['vazir', 'sans-serif']
      },
      fontSize: {
        md: '15px'
      },
      height: {
        '450': '450px',
        '500': '500px',
        '550': '550px'
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        green1: {
          100: '#f8f9e9',
          200: '#eef0dc',
          300: '#dcdfbb',
          400: '#c9ce97',
          500: '#b8bf78',
          600: '#aeb564',
          700: '#a9b159',
          800: '#939b48',
          900: '#828a3d',
          1000: "#6f772f"
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
