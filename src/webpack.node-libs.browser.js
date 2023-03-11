 NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  // ... other webpack configuration ...
  plugins: [
    new NodePolyfillPlugin()
  ]
};
