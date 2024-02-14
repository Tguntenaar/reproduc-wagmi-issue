import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        violet: '#6C50F4',
        'light-violet': '#927CFF',
        'logo-violet': '#DB80F6',
        'dark-desaturated-blue': '#344054',
        'grayish-blue': '#667085',
        'gray-gray-silver': '#CACACA',
        backgroundColor: '#14161A',
        'dark-grayish-blue': '#5F5C6A',
        'navigation-gray': '#2B2E35',
        'header-dark': '#25262B',
        'header-dark-border': '#404349',
        'side-bar': '#24272DE5',
      },
    },
    fontFamily: {
      pathwayExtreme: ['Pathway Extreme', 'sans-serif'],
      plusJakartaSans: ['Plus Jakarta Sans', 'sans-serif'],
      urbanist: ['Urbanist', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    },
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/forms'), nextui()],
} satisfies Config
