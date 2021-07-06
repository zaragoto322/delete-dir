# delete-dir

A plugin to delete the file you choose in output directory

## Installation
```bash
npm install --save-dev delete-dir
```

## Usage
```js


const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanPlugin = require('delete-dir')


module.exports = {

	plugins: [
		new CleanPlugin({include: 'a'}),
	]
}
```