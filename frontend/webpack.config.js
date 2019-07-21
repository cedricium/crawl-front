const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = (env) => {
  // for environment variables
  const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});
  return {
    context: __dirname,
    mode: 'production',
    entry: {
      index: './src/index.js'
    },
    resolve: {
      extensions: ['.js', '.jsx', '.css']
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
      publicPath: '/'
    },
    devServer: {
      historyApiFallback: true
    },
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_module/,
          use: ['babel-loader', 'eslint-loader']
        },
        {
          test: /\.css?$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg|gif|jpg|jpeg|bmp)(\?.*$|$)/,
          loader: 'url-loader?limit=100000'
        },
        {
          test: /\.(png|jpg|gif)$/i,
          loader: 'url-loader'
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebPackPlugin({
        template: path.resolve(__dirname, 'public/index.html'),
        filename: 'index.html',
        title: 'Caching'
      }),
      new webpack.DefinePlugin(envKeys)

    ],
    optimization: {
      moduleIds: 'hashed',
      runtimeChunk: 'single',
      minimizer: [new UglifyJsPlugin()],
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.css$/,
            chunks: 'all',
            enforce: true
          },
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            maxSize: 200000
          }
        }
      }
    }
  };
};
