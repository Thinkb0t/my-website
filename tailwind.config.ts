/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        quantum: {
          50: '#e6e7ff',
          100: '#c4c7ff',
          200: '#9fa2ff',
          300: '#757aff',
          400: '#4b52ff',
          500: '#212aff',
          600: '#0008ff',
          700: '#0007d1',
          800: '#0005a3',
          900: '#000475',
        },
        neuro: {
          50: '#ecfdf5',
          100: '#d6fef0',
          200: '#bafce8',
          300: '#94fbe0',
          400: '#5ef9d4',
          500: '#26f7c8',
          600: '#00f5bc',
          700: '#00c492',
          800: '#009368',
          900: '#00623e',
        },
        ai: {
          50: '#f0f0f0',
          100: '#d9d9d9',
          200: '#bfbfbf',
          300: '#a6a6a6',
          400: '#8c8c8c',
          500: '#737373',
          600: '#595959',
          700: '#404040',
          800: '#262626',
          900: '#0d0d0d',
        },
      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui', ...require('tailwindcss/defaultTheme').fontFamily.sans],
        'serif': ['ui-serif', 'Georgia', ...require('tailwindcss/defaultTheme').fontFamily.serif],
        'mono': ['ui-monospace', 'SFMono-Regular', ...require('tailwindcss/defaultTheme').fontFamily.mono],
        'display': ['Oswald'],
        'body': ['"Open Sans"'],
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        slideUp: "slideUp 0.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: '0' },
          "100%": { opacity: '1' },
        },
        slideUp: {
          "0%": { transform: 'translateY(10px)', opacity: '0' },
          "100%": { transform: 'translateY(0px)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
