const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.plugin('define').tap(args => {
      args[0]['process.env.VITE_API_BASE_URL'] = JSON.stringify(process.env.VITE_API_BASE_URL)
      return args
    })
  }
})