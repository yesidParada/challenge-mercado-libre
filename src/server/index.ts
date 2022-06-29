// this is needed, because we need to enable our server to handle JSX etc.
// Basicaly this is what react-scripts does for us in the frontend automatically
// require("ignore-styles");

// Babel register: https://babeljs.io/docs/en/babel-register
// Babel presets: https://babeljs.io/docs/en/presets
// import '@babel/register';


require('@babel/register')({
    ignore: [/(node_module)/],
    presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
    extensions: [".jsx", ".js", ".tsx", ".ts"]
})

require("./server");