module.exports = {
  devServer: {
    port: 8888,
    open: true
  },
  css: {
    extract: false,
    sourceMap: true,
    loaderOptions: {
      sass: {
        // https://webpack.docschina.org/loaders/sass-loader/#options
        // https://webpack.docschina.org/loaders/sass-loader/#additionaldata
        // https://cli.vuejs.org/guide/css.html#passing-options-to-pre-processor-loaders
        prependData:
          '@import "~@/style/global.color.scss";@import "~@/style/global.animate.scss";'
      }
    }
  }
}
