const { path } = require('@vuepress/utils')

const defaultLive2dOptions = {
  enable: true,
  model: {
    url: 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/hibiki/hibiki.model.json'
  },
  display: {
    position: 'right',
    width: '135px',
    height: '300px',
    xOffset: '35px',
    yOffset: '5px'
  },
  mobile: {
    show: true
  },
  react: {
    opacity: 0.8
  }
}

const live2dPlugin = (live2dOptions = {}, app) => {
  return {
    name: 'vuepress-plugin-live2d-plus',
    clientAppEnhanceFiles: path.resolve(__dirname, '../client/clientAppEnhance.js'),
    clientAppSetupFiles: path.resolve(__dirname, '../client/clientAppSetupFiles.js'),
    define: {
      __LIVE2D_OPTIONS__: { ...defaultLive2dOptions, ...live2dOptions }
    }
  }
}

module.exports = live2dPlugin
