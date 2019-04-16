// npm i -D @types/webpack-env
const webpackMarkdownLoader = require.context(`!raw-loader!./`, false, /\.md$/, );
const webpackTextLoader = require.context(`!raw-loader!./`, false, /\.txt$/, );

const readme = webpackMarkdownLoader("./README.md").default;
const example = webpackTextLoader("./code.txt").default

export { readme, example };
