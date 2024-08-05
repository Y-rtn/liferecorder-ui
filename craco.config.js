// const { ModuleFederationPlugin } = require('@module-federation/webpack-module-federation-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.plugins.push(
        new ModuleFederationPlugin({
          name: 'liferecorderui',
          remotes: {
            compoKit: 'compoKit@http://localhost:3001/remoteEntry.js', // CompoKit 项目的 URL
          },
          shared: {
            react: {
              singleton: true,
              eager: true
            },
            'react-dom': {
              singleton: true,
              eager: true
            },
          },
        })
      );
      return webpackConfig;
    },
  },
};
