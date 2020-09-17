const ExtractCssChunksPlugin = require('extract-css-chunks-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');

function getPath(...pathParts) {
  return path.resolve(__dirname, ...pathParts);
}

module.exports = (env) => {
  const isDev = !(env && env.production);

  return {
    entry: {
      app: getPath('src', 'main.ts')
    },

    output: {
      path: getPath('public', 'build'),
      filename: isDev ? '[name].js' : '[name].[contenthash].js',
      chunkFilename: isDev ? '[name].js' : '[name].[contenthash].js'
    },

    optimization: {
      minimize: !isDev,
      minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
      usedExports: true,
      splitChunks: {
        chunks: 'all',
        automaticNameDelimiter: '_'
      },
      runtimeChunk: { name: 'runtime' }
    },

    resolve: {
      alias: {
        svelte: getPath('node_modules', 'svelte'),
        src: getPath('src')
      },
      extensions: ['.ts', '.mjs', '.js', '.css', '.svelte'],
      mainFields: ['svelte', 'browser', 'module', 'main']
    },

    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          loader: 'ts-loader',
          options: {
            transpileOnly: isDev,
            context: getPath(),
            configFile: getPath('tsconfig.json')
          }
        },
        {
          test: /\.svelte$/,
          loader: isDev ? 'svelte-loader-hot' : 'svelte-loader',
          options: {
            dev: isDev,
            emitCss: true,
            hotReload: isDev,
            preprocess: require('svelte-preprocess')({})
          }
        },
        {
          test: /\.css$/,
          sideEffects: true, // So we don't remove global css. Running PurgeCSS post-build helps alleviate this
          use: [
            {
              loader: ExtractCssChunksPlugin.loader,
              options: {
                hmr: isDev,
                sourceMap: isDev
              }
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: isDev
              }
            }
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          loader: 'file-loader',
          options: { name: isDev ? '[name].[ext]' : '[name].[contenthash].[ext]', outputPath: 'image' }
        }
      ]
    },

    plugins: [
      new ForkTsCheckerWebpackPlugin({ typescript: { configFile: getPath('tsconfig.json') } }),
      new HtmlWebpackPlugin({ template: getPath('src', 'index.html'), favicon: getPath('src', 'favicon.png') }),
      new ExtractCssChunksPlugin({
        filename: isDev ? '[name].css' : '[name].[contenthash].css',
        chunkFilename: isDev ? '[name].css' : '[name].[contenthash].css'
      })
    ],

    mode: isDev ? 'development' : 'production',
    devtool: isDev ? 'source-map' : false,
    devServer: {
      overlay: true,
      hot: true,
      contentBase: getPath('public', 'build'),
      compress: true,
      port: 9000
    }
  };
};
