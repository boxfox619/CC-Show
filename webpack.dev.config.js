var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        './src/index.js',
        'webpack-dev-server/client?http://0.0.0.0:3001',
        'webpack/hot/only-dev-server'
    ],

    //public 디렉토리의 bundle.js로 저장
    output: {
        path: '/',
        filename: 'bundle.js'
    },

    //개발서버 설정
    devServer: {
        hot: true,
        filename: 'bundle.js',
        publicPath: '/',
        historyApiFallback: true,
        contentBase: './public',
        proxy: {
            "**": "http://localhost:3000"
        }
    },


    module: {
        loaders: [ //loader를 통해 es6, react js 형식을 일반 js형식으로 변환해줌
            {
                test: /\.js$/,
                loader: ['react-hot-loader', 'babel-loader?' + JSON.stringify({
                    cacheDirectory: true,
                    presets: ['es2015', 'react'],
                    plugins: ["transform-object-rest-spread"]
                })], //hot load가 되더라도 state를 유지시키기 위해 react hot loader 적용
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]

    resolve: {
      modules: [
        path.resolve(__dirname + '/src'),
        path.resolve(__dirname + '/node_modules')
      ]
    }
};
