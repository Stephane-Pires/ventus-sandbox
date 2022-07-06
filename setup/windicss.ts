import { resolve } from 'path'
import { defineWindiSetup } from '@slidev/types'
const colors = require('windicss/colors')
const plugin = require('windicss/plugin')

const aspectRatioPlugin = plugin(({ addUtilities }) => {
  const newUtilities = {
    '.aspect-none': {
      aspectRatio: 'none',
    },
    '.aspect-16-9': {
      aspectRatio: '16/9',
    },
    '.aspect-4-3': {
      aspectRatio: '4/3',
    },
    '.aspect-1-1': {
      aspectRatio: '1/1',
    },
  }
  addUtilities(newUtilities, ['responsive', 'hover'])
})

export default defineWindiSetup(() => ({
  darkMode: 'class',
  extract: {
    include: [resolve(__dirname, '**/*.{vue,ts}')],
  },
  shortcuts: {
    // custom the default background÷
   'bg-main':
   // MODIFY THE COLOR NAMES & STRUCTURE
      'bg-gradient-to-r from-light-background-left to-light-background-right dark:(bg-gradient-to-r from-dark-background-left to-dark-background-right)',
  },
  theme: {
    colors: {
         // MODIFY THE COLOR NAMES & STRUCTURE
      dark: {
        background: {
          left: '#184e77',
          right: '#1a759f'
        },
        title: '#76c893',
        text: colors.white,
        warning: '#ff8800',
        success: '#d9ed92',
        fail: '#f94144',
        accent: '#ffc8dd',
      },
      light: {
        background: {
          
          left: '#fcd5ce',
          right: '#f8edeb'
        },
        title: '#2d4781',
        text: colors.black,
        warning: '#fca311',
        success: '#2a9d8f',
        fail: '#ee6c4d',
        accent: '#f72585',

      },
    },
    extend: {
      fontFamily: {
        sans: ['Nunito', 'system-ui', 'sans-serif'],
        title: ['Gilroy', 'Georgia', 'serif'],
        mono: ['Fira Code', 'ui-monospace'],
      },
    }
  },
  plugins: [
    aspectRatioPlugin,
    plugin(function ({ addUtilities, theme, variants }) {
      const newUtilities = {
        '.flip-y': {
          '--tw-scale-y': '-1 !important',
        },
        '.flip-x': {
          '--tw-scale-x': '-1 !important',
        },
      }
      addUtilities(newUtilities, variants('flip'))
    }),
  ],
}))