var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',

    //public 디렉토리의 bundle.js로 저장
    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },

    //개발서버 설정
    devServer: {
        hot: true, //수정될 때 마다 리로딩
        inline: true, //hot reloading에서 필요한 dev server의 클라이언트를 bundle에 함께 저장
        host: '0.0.0.0',
        port: 7777,
        contentBase: __dirname + '/public/' //index 파일의 위치
    },

    module: {
            loaders: [ //loader를 통해 es6, react js 형식을 일반 js형식으로 변환해줌
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    query: {
                        cacheDirectory: true,
                        presets: ['es2015', 'react']
                    }
                }
            ]
        },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
};
