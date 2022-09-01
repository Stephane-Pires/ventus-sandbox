import { resolve } from 'path'
import { defineWindiSetup } from '@slidev/types'
const colors = require('windicss/colors')

export default defineWindiSetup(() => ({
  darkMode: 'class',
  extract: {
    include: [resolve(__dirname, '**/*.{vue,ts}')],
  },
  shortcuts: {
   'bg-main':
      'bg-gradient-to-r from-light-background-left to-light-background-right dark:(bg-gradient-to-r from-dark-background-left to-dark-background-right)',
  },
  theme: {
    colors: {
      brand: {
        light: '#BBF7D0',
        logo: '#86EFAC',
        dark: '#22c55e',
        darker: '#15803d'
        },
      dark: {
        background: {
          left: '#23272F',
          right: '#23272F',
        },
        title: '#76c893',
        text: colors.white,
        warning: '#ff7b00',
        accent: '#86EFAC',
        highlight: '#C0B2F8',
        info: '#33BDEB'
      },
      light: {
        background: {
          
          left: '#dffce9',
          right: '#dffce9'
        },
        title: '#2d4781',
        text: colors.black,
        warning: '#FF4600',
        accent: '#22c55e',
        highlight: '#4D26EB',
        info: '#0d41e1'
      },
    },
  },
}))