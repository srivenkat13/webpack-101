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