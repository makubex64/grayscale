const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	//show errors by console 
   	devtool: 'inline-source-map',

	entry: {
		scripts: './js/scripts.js',
		index: './js/index.js'

	},

	output: {
		filename: './[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},

	plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'node_modules/bootstrap/dist/css/bootstrap.min.css', to: 'libraryes' },
        { from: 'node_modules/bootstrap/dist/js/bootstrap.min.js', to: 'libraryes'},
        { from: 'node_modules/jquery/dist/jquery.min.js', to: 'libraryes'},
        { from: 'node_modules/jquery.easing/jquery.easing.min.js', to: 'libraryes'}
      ],
    }),
  ],
}