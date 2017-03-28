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
* [ESLint Loader for Webpack](https://github.com/MoOx/eslint-loader) for linting before building


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

## Style Guides [Check here](Styleguides.md)

The style guides are highlights from AirBnb Style guides and more detailed, long and boring version can be found at [https://github.com/airbnb/javascript](https://github.com/airbnb/javascript)

Also check [ES Lint Rules](http://eslint.org/docs/rules/) for rules.
All the coding standars are defined in `./.eslintrc.js`
