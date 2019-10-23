const path = require('path');
const globby = require('globby');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => ({
  entry: {
    main: globby.sync(['./source/js/main.js', './source/scss/style.scss'])
  },
  devtool: 'source-map',
  mode: process.env.NODE_ENV,
  output: {
    path: path.resolve(__dirname),
    filename: 'source/js/[name].bundle.js'
  },
  watchOptions: {
    ignored: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, 'images'),
      path.resolve(__dirname, 'css'),
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'source/css/style.bundle.css',
      chunkFilename: 'source/css/[id].bundle.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(sa|sc)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: './postcss.config.js',
                ctx: {
                  mode: argv.mode
                }
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
});
