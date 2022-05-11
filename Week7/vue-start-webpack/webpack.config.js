const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  resolve: {
    // 생략할 확장자
    extensions: ['.vue', '.js'],
    // 경로 별칭 (절대경로 설정시 필요)
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  // 웹펙 진입점
  entry: './src/main.js',
  // 웹펙 빌드 결과 위치
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  // 라이브러리 모듈 적용
  // test는 파일 확장자들 필터링
  // use는 모듈 이름
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.s?css$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  // 플러그인 입력란 생성자형태로 입력됨
  plugins: [
    new VueLoaderPlugin(),
    new HtmlPlugin({
      template: './src/index.html',
      favicon: './static/favicon.ico',
    }),
    new CopyPlugin({
      patterns: [{ from: 'static' }],
    }),
  ],
};
