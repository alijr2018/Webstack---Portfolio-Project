const path = require('path');

module.exports = {
  // Other webpack configurations...

  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'raw-loader',
      },
    ],
  },
};
