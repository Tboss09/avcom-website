module.exports = {
 purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
 darkMode: false, // or 'media' or 'class'
 theme: {
  extend: {
   colors: {
    text: '#112875',
    header: '#00269E',
    btn: '#02175B',
    textGray: '#515151',
    footer: '#F0F0F0',
    link: '#303030',
    textBlack: '#242424',
    otherHeader: 'rgba(0, 12, 50, 0.5)',
   },
   fontFamily: {
    secondary: ['Open Sans', 'sans-serif'],
    roboto: ['Roboto', 'sans-serif'],
   },
   screens: {
    'mini-laptop': '1366px',
   },
  },
 },
 variants: {
  extend: {
   backgroundColor: ['first', 'odd'],
   textColor: ['first'],
  },
 },
 plugins: [],
}
