module.exports = {
  theme: {
    extend: {
      colors: {
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
        }
      },
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
