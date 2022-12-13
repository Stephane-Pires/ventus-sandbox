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
        light: '#b7f6ce',
        logo: '#86EFAC',
        dark: '#125b38',
        darker: '#092e1c'
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
          left: '#d0ffb7',
          right: '#d0ffb7'
        },
        title: '#0e2331',
        text: colors.black,
        warning: '#d11149',
        accent: '#092e1c', 
        highlight: '#6610f2',
        info: '#0015ff'
      },
    },
  },
}))