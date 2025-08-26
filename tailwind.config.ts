import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)'], // อ้างอิงจาก layout.tsx
        body: ['var(--font-body)'],      // อ้างอิงจาก layout.tsx
      },
    },
  },
  plugins: [],
} satisfies Config