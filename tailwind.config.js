module.exports = {
 purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
 darkMode: false, // or 'media' or 'class'
 theme: {
  extend: {
   colors: {
    "text": '#112875',
    "header": '#00269E',
    "btn": '#02175B',
    "otherHeader": 'rgba(0, 12, 50, 0.5)',
   },
 
  },
 },
 variants: {
  extend: {},
 },
 plugins: [],
}
