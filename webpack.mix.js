const mix = require('laravel-mix');
const s3Plugin = require('webpack-s3-plugin');
require('laravel-mix-versionhash');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
  .sass('resources/sass/app.scss', 'public/css');

if (mix.inProduction()) {
  mix.versionHash();
  mix.webpackConfig({
    plugins: [
      new s3Plugin({
        include: /.*\.(css|js)$/,
        s3Options: {
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
          region: process.env.AWS_DEFAULT_REGION,
        },
        s3UploadOptions: {
          Bucket: process.env.AWS_BUCKET,
          CacheControl: 'public, max-age=31536000'
        },
        directory: 'public'
      })
    ]
  });
}
