const colors = require('tailwindcss/colors')
module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#FFF',
      ui: {
        white: '#fff',
        outline: '#e2e2e2',
        bgContrast: '#F9F8FD',
        textContrast: '#6e6d7a',
        textTitles: '#283848',
        textBody: '#33475B'
      },
      ux: {
        blue: '#337AB7',
        orange: '#FC7B27'
      },
      rose: {
        50: '#FFF1F2',
        100: '#FFE4E6',
        200: '#FECDD3',
        300: '#FDA4AF',
        400: '#FB7185',
        500: '#F43F5E',
        600: '#F71A5C',
        700: '#BB0A30',
        800: '#9F1239',
        900: '#881337'
      },
      blue: {
        50: '#EFF6FF',
        100: '#DBEAFE',
        200: '#BFDBFE',
        300: '#93C5FD',
        400: '#60A5FA',
        500: '#3B82F6',
        600: '#1A6BF7',
        700: '#1D4ED8',
        800: '#1E40AF',
        900: '#1E3A8A'
      },
      yellow: {
        50: '#FEFCE8',
        100: '#FEF9C3',
        200: '#FEF18B',
        300: '#FFEC41',
        400: '#FDE047',
        500: '#EAB308',
        600: '#CA8A04',
        700: '#A16207',
        800: '#854D0E',
        900: '#713F12'
      },
      truegray: {
        50: '#FAFAFA',
        100: '#F5F5F5',
        200: '#E5E5E5',
        300: '#D4D4D4',
        400: '#A3A3A3',
        500: '#737373',
        600: '#525252',
        700: '#444444',
        800: '#262626',
        900: '#171717'
      },
      gray: colors.gray,
      lightblue: colors.lightBlue,
      pink: colors.pink,
      purple: colors.purple,
      red: colors.red,
      green: colors.green,
      amber: colors.amber
    },
    extend: {
      fontSize: {
        h1: '3.052rem',
        h2: '1.953rem',
        h3: '1.563rem',
        h4: '1.125rem'
      },
      spacing: {
        px: '1px',
        0: '0',
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        8: '2rem',
        10: '2.5rem',
        12: '3rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        48: '12rem',
        56: '14rem',
        64: '16rem',
        68: '20rem'
      },
      maxWidth: {
        none: 'none',
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '7xl': '81rem',
        full: '100%'
      }
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/forms')],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
