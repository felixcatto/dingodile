import gulp from 'gulp';
import babel from 'gulp-babel';
import del from 'del';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from './webpack.config.js';
import Browser from 'browser-sync';


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
    ],
  });
  done();
};
const reloadDevServer = (done) => {
  devServer.reload();
  done();
};


const copyLayout = () => gulp.src('src/index.html').pipe(gulp.dest('dist'));


const bundleClientJs = () => webpackStream(webpackConfig)
  .pipe(gulp.dest('dist/public/js'));


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


export { dev, bundleClientJs };
