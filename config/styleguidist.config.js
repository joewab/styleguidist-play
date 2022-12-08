const { version } = require('../package.json')
module.exports={
    title: 'my-app',
    version,
    components: '../src/components/[A-Z]**/*.js', //index.js
    ignore: ["**/src/test.js"],
    require: ['./src/styles/index.scss'],
    webpackConfig: {
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                }, {
                    test: /\.scss$/,
                    use: ['style-loader', 'css-loader']
                }
            ]
        }
    }
}