# ABN Fixit Front End Documentation

## Introduction
Here will be some description to the project information and goals.

## Dependencies and Tools Used

* [YIUDoc](https://github.com/yui/yuidoc) is used for automated documentation
* [Webpack 2.0](https://webpack.js.org/) is for module bundling
* [Babel-Loader](https://github.com/babel/babel-loader) for Transpiling from [ES6] to ES5
* [Sass-Loader](https://github.com/webpack-contrib/sass-loader) for Sass builds with webpack
* [extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin) Because we want a separate CSS bundle
* UglifyJsPlugin which is built in webpack for minifying the javascript bundle
* [ESLint](http://eslint.org) For identifying and reporting on patterns, which is very similar to `JSLint` and `JSHint`
* [Webpack-shell-plugin](https://www.npmjs.com/package/webpack-shell-plugin) for running tasks before/after webpack-builds

```js
new webpack.optimize.UglifyJsPlugin({
    sourceMap: "source-map",
    comments:false,
    sourceMap:true
})
```

###### Note on `babel-loader` :

Webpack 2.x comes with built-in support for ES6 modules but doesn't
transpile to ES2015 (like the let,const,class tokens) .


###### Note on `webpack-shell-plugin` :

By default webpack-shell-plugin will run `webpack:before` and `webpack:after` scripts in `package.json`
if you don't change the config in `webpack.config.js` accordingly

## Development

To minimize the 3rd party dependencies builds are assigned to webpack and tasks are configured
as `npm scripts`

```sh
# Runs a development server with webpack-dev-server
$ npm run dev

# Lints your code
$ npm run lint

# Generates Documentation
$ npm run doc

# Builds for the production / test environment
$ npm run build
```

**Please do not forget to update Readme as you add any scripts to package.json**
