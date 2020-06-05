module.exports = {
    entry: './teste.js',
    output: {
        path: __dirname,
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [
                    /node_modules/,
                    /js/, 
                ],
                use: {
                    loader: 'babel-loader',
                },
            }
        ],
    }
};