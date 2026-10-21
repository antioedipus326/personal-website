// webpack.config.js
const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
// const { StatsWriterPlugin } = require('webpack-stats-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production'
    return {
      entry: './src/index.tsx',
      mode: isProduction ? 'production' : 'development',
      watchOptions: {
        ignored: '**/node_modules/',
        poll: 1000 
          // src: https://webpack.js.org/configuration/watch/#not-enough-watchers
          // abt: Check for changes every second
      },
      output: {
        path: path.resolve(__dirname, 'dist'), 
        filename: './bundle.js',
        publicPath: isProduction ? './' : '/',
      },
      resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
      },
      module: {
        rules: [
          {
          test: /\.(ts|tsx|js|jsx)$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'ts-loader',
            },
          },
          {
            test: /\.css$/, //checks for .css files
            use: ["style-loader", "css-loader"],
          },
          { 
            enforce: "pre", 
            test: /\.js$/, 
            exclude: /(node_modules)/, 
            loader: "source-map-loader" }
        ]
      },
      devServer: {
        port: 3693,
        historyApiFallback: true // for production, this should be done via httpd
      },
      // devtool: "source-map",
      //  src: https://github.com/Microsoft/TypeScript-React-Conversion-Guide#typescript-react-conversion-guide
      plugins: [
        new HtmlWebpackPlugin({
          template: "./src/index.html",
        }),
        // new BundleAnalyzerPlugin(), // Automatically opens the analysis report after build. 
        //     // src: https://medium.com/@robinviktorsson/complete-guide-to-setting-up-react-with-typescript-and-webpack-2025-141ae1899c0c 
        // new StatsWriterPlugin({
        //   filename: 'stats.json', // Will be written to your output directory
        //   stats: {
        //     all: false,
        //     assets: true,
        //     modules: true,
        //     chunks: true,
        //   },
        // }),
            // src: https://medium.com/@robinviktorsson/complete-guide-to-setting-up-react-with-typescript-and-webpack-2025-141ae1899c0c
      ]
    }
}

// src: https://www.geeksforgeeks.org/reactjs/building-a-react-boilerplate-from-scratch-without-using-create-react-app/