### Steps to configure webpack from scratch.

> for JS Projects

1. Initialize project with `npm init -y`.
2. Install webpack and webpack-cli as dev dependencies 
   `npm i webpack webpack-cli --save-dev`
3. To configure webpack, create `webpack.config.js` file
4. Adding entry point (path to source folder index file) to config file
   ```
   module.exports = {
    entry : './src/index.js',
    
    }
    ``` 
5. Then we define rules to handle css/svg/ other asset files
   1. we install loaders as dev dependencies for each file type.  e.g., `css-loader` `style-loader` for css files
    ```
    module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
        {
            test: /\.css$/i,
            use: ["style.loader", "css-loader"],
        },
        ],
    },
    };
    ``` 
    here in `use`, array of loaders is passed, which are executed from  right to left.

6. To convert modern JS to support in older browsers we add `babel-loader`
   ```
    {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: "babel-loader",
    },
    ```
7. We specify output path where the bundled file should be present. usualy the `dist` folder
   ```
   const path = require('path)
   output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
  }
  ```
8. `html-webpack-plugin` is create html file in dist which will have link to `bundle.js` file.
9. finally we set mode, if production it gets stricter.

After this we add scripts in package.json to build and serve for development.
```
"scripts": {
    "start": "webpack serve",
    "build": "NODE_END='production' webpack",
  },
```


