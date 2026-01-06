const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  publicPath: './',
  filenameHashing: false,
  transpileDependencies: true,
  configureWebpack: {
    optimization: {
      minimize: false,
    },
    output: {
      filename: '[name].js',
      chunkFilename: '[name].js',
    },
    module: {
      rules: [
        {
          // https://webpack.js.org/guides/asset-modules/
          test: /\.(png|jpe?g|gif|webp|mp4)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'Image/[name][ext]',
          },
        },
      ],
    },
    devtool:
      process.env.VUE_APP_NODE_ENV == 'development'
        ? 'source-map'
        : process.env.npm_config_build_type == 'DEBUG'
          ? 'inline-source-map'
          : false,
  },
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.performance.maxAssetSize(1024 * 1000).maxEntrypointSize(1024 * 1000);
    const mediaRule = config.module.rule('media');
    mediaRule.uses.clear();
    config.module
      .rule('media')
      .use('file-loader')
      .loader('file-loader')
      .tap((options) => {
        options = {
          name: '[name].[ext]',
        };
        return options;
      })
      .end();
  },
  css: {
    extract: {
      filename: '[name].css',
      chunkFilename: '[name].css',
    },
  },
});

setPageEntry('src/top/Main.ts', 'public/top.html', 'top.html');

function setPageEntry(entryProgramFileName, entryHTMLFileName, outputFileName) {
  module.exports.pages = {
    top: {
      entry: entryProgramFileName,
      template: entryHTMLFileName,
      filename: outputFileName,
    },
  };
}
