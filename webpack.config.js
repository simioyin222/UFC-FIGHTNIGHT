const path = require('path');

module.exports = {
  // The entry point of your application
  entry: './src/index.js', 

  // Output configuration
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output file
  },

  // Module rules for handling different file types
  module: {
    rules: [
      {
        test: /\.js$/, // Matches JavaScript files
        exclude: /node_modules/, // Excludes the node_modules directory
        use: {
          loader: 'babel-loader', // Use Babel for transpiling JavaScript
          options: {
            presets: ['@babel/preset-env'], // Preset for compiling ES6 and above
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Matches image files
        use: [
          {
            loader: 'file-loader', // Using file-loader for images
            options: {
              name: '[path][name].[ext]', // Naming convention for output files
              outputPath: 'images/', // Directory inside dist/ to output images
              publicPath: 'images/', // Public URL path for accessing images
            },
          },
        ],
      },
    ],
  },

  // Add plugins if needed
};