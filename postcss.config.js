module.exports = {
 plugins: [
  require('postcss-import'),
  require('tailwindcss'),
  [
   'postcss-preset-env',
   {
    stage: 3,
    features: {
     'nesting-rules': true,
    },
   },
  ],
 ],
}
