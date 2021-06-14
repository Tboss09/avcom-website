module.exports = {
 purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
 darkMode: false, // or 'media' or 'class'
 theme: {
  extend: {
   colors: {
    text: '#112875',
    header: '#00269E',
    btn: '#02175B',
    'footer': '#F0F0F0',
    otherHeader: 'rgba(0, 12, 50, 0.5)',
   },
   screens: {
    'mini-laptop': '1366px',
   },
  },
 },
 variants: {
  extend: {
    width: ['first']
  },
 },
 plugins: [],
}
