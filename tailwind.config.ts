import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0A0A0A',
          secondary: '#101010',
          elevated: '#151515',
        },
        text: {
          primary: '#F3F3F0',
          secondary: '#A5A5A0',
          muted: '#707070',
        },
        border: {
          DEFAULT: '#292929',
          light: '#333333',
        },
        silver: {
          DEFAULT: '#C8C8C2',
          light: '#E2E2DC',
          dark: '#8E8E88',
        },
        accent: {
          dermaai: '#D4B895',
          pulsesafe: '#E63946',
          phishreflex: '#991B1B',
          icelog: '#8B5CF6',
          classtrack: '#4F46E5',
          civictrack: '#2563EB',
        },
      },
      fontFamily: {
        serif: ['Silver Editorial', 'Georgia', 'Cambria', 'serif'],
        bisoca: ['Bisoca', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'DM Sans', 'Helvetica Neue', 'sans-serif'],
      },
      borderRadius: {
        none: '0px',
        sm: '4px',
        DEFAULT: '8px',
        md: '10px',
        lg: '14px',
        xl: '20px',
      },
      boxShadow: {
        none: 'none',
      },
    },
  },
  plugins: [],
};

export default config;
