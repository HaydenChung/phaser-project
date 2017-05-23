var path = require("path");
var webpack = require("webpack");
var CompressionPlugin = require("compression-webpack-plugin");

var phaserModule = path.join(__dirname, '/node_modules/phaser-ce/');
var phaser = path.join(phaserModule, 'build/custom/phaser-split.js'),
  pixi = path.join(phaserModule, 'build/custom/pixi.js'),
  p2 = path.join(phaserModule, 'build/custom/p2.js');

module.exports = {
    entry: {
        app: './src/app.js',
        vendor: ['pixi', 'p2', 'phaser']
    },
    // devtool: 'cheap-source-map',
    output: {
        path: path.join(__dirname,'/build'),
        filename: 'bundle.js',
    },
    // watch: true,
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.bundle.js'}),
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0
        })
    ],
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        'env'
                    ],
                }
            }
        },{
            test: /pixi\.js/, use: ['expose-loader?PIXI']
        },{
            test: /phaser-split\.js$/, use: ['expose-loader?Phaser']
        },{
            test: /p2\.js/, use: ['expose-loader?p2']
        }]
    },
    resolve: {
        alias: {
            'phaser': phaser,
            'pixi': pixi,
            'p2': p2,
        }
    }
}