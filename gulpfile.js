var gulp = require('gulp');
var path = require('path');
var webserver = require('gulp-webserver');
var clean = require('gulp-clean');
var concatCss = require('gulp-concat-css');
var stylus = require('gulp-stylus');

var base = {
    sender: 'sender/'
};

const paths = {
    images: 'img/**/*',
    concatcss: '/css/app.css',
    build: 'build',
    css: path.join(base.sender, '/app/**/*.css'),
    stylus: path.join(base.sender, '/app/**/*.styl'),
    libs: [
        'node_modules/angular/angular.js',
        'node_modules/angular-ui-router/release/angular-ui-router.min.js',
        'node_modules/angular-animate/angular-animate.min.js',
        'node_modules/angular-aria/angular-aria.min.js',
        'node_modules/angular-messages/angular-messages.min.js',
        'node_modules/angular-material/angular-material.min.js'
    ]
};

/* 
* Clean "build" folder
*/
gulp.task('clean', function() {
    return gulp.src(paths.build, {cwd: base.sender})
               .pipe(clean());
});

gulp.task('images', ['clean'], function () {
    gulp.src(paths.images, {cwd: base.sender})
        .pipe(gulp.dest( path.join(paths.build, 'img'), {cwd: base.sender}) );
});

/*
* Compile Stylus files into css and generate /css/app.css
*/
gulp.task('css', ['clean'], function () {
    return gulp.src(paths.stylus)
        .pipe(stylus( {compress: true} ))
        .pipe(concatCss(paths.concatcss))
        .pipe(gulp.dest( paths.build, {cwd: base.sender} ))
});

gulp.task('build', ['clean'], function() {
    // Copy external modules
    gulp.src(paths.libs, {cwd: base.sender})
        .pipe(gulp.dest(path.join(paths.build, 'js'), {cwd: base.sender}));
});

gulp.task('sender', ['images', 'css', 'build'], () => {

  gulp.src('sender')
    .pipe(webserver({
        livereload: true,
        open: true
    }));

});