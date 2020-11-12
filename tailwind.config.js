module.exports = {
  theme: {
    extend: {
      maxWidth: {
        content: '70ch',
      },
      gridTemplateRows: {
        layout: 'auto 1fr',
      },
      boxShadow: {
        outline: "0 0 0 3px theme('colors.orange.300')",
      },
    },
    typography: {
      default: {
        css: {
          pre: false,
          code: false,
          'pre code': false,
          'code::before': false,
          'code::after': false,
        },
      },
    },
  },
  variants: {
    opacity: ['hover', 'focus', 'disabled'],
    backgroundColor: ['hover', 'focus', 'active'],
  },
  plugins: [require('@tailwindcss/typography')],
  purge: ['./src/**/*.js'],
};
