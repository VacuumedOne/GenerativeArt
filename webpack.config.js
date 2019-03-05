const path = require('path')

module.exports = {
  //モード(develepment, productionなどがある)
  mode: 'development',
  //エントリーポイント
  entry: './src/main.js',
  //出力
  output: {
    //ファイル名
    filename: 'bundle.js',
    //出力先のパス(絶対パスを入力する必要がある)
    path: path.join(__dirname, 'public/js')
  },
  //ローダの設定
  module: {
    rules: [
      {
        //ローダの対象ファイル
        test: /\.js$/,
        //ローダの対象から外す範囲
        exclude: /node_modules/,
        use: [
          {
            //使用するローダ
            loader: 'babel-loader',
            //使用するローダのオプション
            options: {
              presets: [['@babel/preset-env', { modules: false }]]
            }
          }
        ]
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ]
  },
  //webpack-dev-serverの設定
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 8080,
    inline: true,
    hot: true,
    overlay: true,
    publicPath: '/js/'
  }
}