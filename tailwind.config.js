const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sky: colors.sky, // #e1f5fe
        teal: colors.teal, // #00b5ad
        gray: colors.trueGray, // #f8f8f8
        cyan: colors.cyan // '#9cdbff',
      },
      width: {
        "95p": "95%"
      },
      height: {
        "hr": "2px"
      },
      minWidth: {
        "4": "5rem"
      }
    }
  },
  variants: {
    extend: { opacity: ['disabled'] }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
};
