const path = require('path');

const PATHS = {
    source: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
}

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/build/'
    },
    devtool: 'cheap-module-source-map',
    devServer: {
        port: 3000,
        open: false
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: [/\.less$/, /\.css$/],
                use: [
                  {
                    loader: "style-loader"
                  },
                  {
                    loader: "css-loader",
                    options: {
                      sourceMap: true,
                      modules: true,
                      localIdentName: "[local]___[hash:base64:5]"
                    }
                  },
                  {
                    loader: "less-loader"
                  }
                ]
              }
        ]
    }
};
