const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const tailwind = require('tailwindcss');

const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project 
  content: [
    './source/**/*.twig',
  ],
  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
})

module.exports = ({ file, options, env }) => {
  return {
    plugins: [
      tailwind,
      autoprefixer,
      ...options.mode === 'production'
        ? [purgecss]
        : [],
      cssnano({
        preset: 'default'
      })
    ]
  };
};
