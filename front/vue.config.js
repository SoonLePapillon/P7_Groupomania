const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./scss/_var.scss";`
      }
    }
  }
})
