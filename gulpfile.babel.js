import gulp from 'gulp';
import babel from 'gulp-babel';
import del from 'del';
import rename from 'gulp-rename';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import cssImport from 'postcss-import';
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


const copyAssets = () => gulp.src('src/public/**/*').pipe(gulp.dest('dist/public'));


const transpileScss = () => gulp.src('src/**/*.scss')
  .pipe(sass())
  .pipe(postcss([cssImport()]))
  .pipe(rename('index.css'))
  .pipe(gulp.dest('dist/public/css'));


const bundleClientJs = () => webpackStream(webpackConfig, webpack)
  .pipe(gulp.dest('dist/public/js'));


const clean = () => del(['dist']);


const watch = () => {
  gulp.watch('src/index.html', gulp.series(copyLayout, reloadDevServer));
  gulp.watch('src/**/*.scss', gulp.series(transpileScss, reloadDevServer));
};


const dev = gulp.series(
  clean,
  copyLayout,
  transpileScss,
  copyAssets,
  startDevServer,
  watch,
);


const prod = gulp.series(
  clean,
  copyLayout,
  bundleClientJs,
);


export { dev, prod, bundleClientJs };
