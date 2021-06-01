# React-Webpack-From-Scratch
Creating React App using Webpack Bundler from scratch

# Find Webpack Basics [Here](https://youtu.be/MpGLUVbqoYQ)

# Flow

- Run Following Commands

  ```
  npm init -y
  npm i react react-dom
  npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader css-loader file-loader mini-css-extract-plugin sass sass-loader style-loader webpack webpack-cli webpack-dev-server
  ```
  
- Create `.babelrc` file in root folder with following content
   ```
    {
        "presets": ["@babel/preset-env","@babel/preset-react"]
    }
   ```
- Create `webpack.config.js` for Configuring Webpack for Our React App - Add Following Modules one After Other
  ```
  const path = require('path'); // For getting path of current directory
  const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // Plugin for creating separate css files, not included in final bundle
  ```
  ```
  module.exports = {

    output:{
        path: path.join(__dirname,'/dist'), // Location For Output bundled file
        filename: 'index.bundle.js', // Specify Bundled File name
    },

    devServer:{
        port:3000, // Explicitly Defined Port of server
        watchContentBase: true, // Live Server
    },

    module:{
        rules:[ // Specifying Rules for Converting Files using loaders
            {
                test: /\.(js|jsx)$/, // Finding Files with .js or .jsx extensions
                exclude: /node_modules/, // Exclude node_modules from Search
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/, // Can be understandable as Previous Rule
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },

    plugins: [new MiniCssExtractPlugin()], // Defining Used Plugins)

  };
  ```
- Create `src` folder under root foler
- Create `App.js, App.scss, index.js, index.html` under `src`
  - Copy the content From this repo, its quite Understandable.
  
- To run development server and build Project Add following Snippet in `package.json`
  ```
  ...

  "scripts": {
      "dev": "webpack serve --mode development",
      "build": "webpack --mode production"
    },

  ...
  ```
   
- To run development Server run following command
  ```
  npm run dev
  ```
  
- To Build App run following command, it will generate `/dist` and buldle app in this folder with some files, some of which are frankly not readable
  ```
  npm run build
  ```
