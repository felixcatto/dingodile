const gulp = require('gulp');
const del = require('del');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config.js');
const Browser = require('browser-sync');
const historyApiFallback = require('connect-history-api-fallback');


const devServer = Browser.create();
const bundler = webpack(webpackConfig);
bundler.plugin('done', () => devServer.reload());


const startDevServer = (done) => {
  devServer.init({
    open: false,
    notify: false,
    server: 'dist',
    middleware: [
      webpackDevMiddleware(bundler, {
        publicPath: webpackConfig.output.publicPath,
      }),
      historyApiFallback(),
    ],
  });
  done();
};
const reloadDevServer = (done) => {
  devServer.reload();
  done();
};


const copyLayout = () => gulp.src('src/index.html').pipe(gulp.dest('dist'));


const bundleClientJs = done => bundler.run(done);


const clean = () => del(['dist']);


const watch = () => {
  gulp.watch('src/index.html', gulp.series(copyLayout, reloadDevServer));
};


const dev = gulp.series(
  clean,
  copyLayout,
  startDevServer,
  watch,
);


const prod = gulp.series(
  clean,
  copyLayout,
  bundleClientJs,
);


module.exports = { dev, prod };
