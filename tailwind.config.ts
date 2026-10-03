import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          primary: '#0f172a',
          'primary-light': '#1e293b',
          accent: '#3b82f6',
          'accent-dark': '#2563eb',
          whatsapp: '#25D366',
          'whatsapp-dark': '#1da851',
          surface: '#ffffff',
          'surface-alt': '#f8fafc',
          border: '#e2e8f0',
          text: '#0f172a',
          'text-muted': '#64748b',
          'text-light': '#94a3b8',
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out both',
        'shimmer': 'shimmer 2s infinite linear',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
