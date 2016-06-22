
// Núcleo do Gulp
var gulp = require('gulp');
 
// Transforma o javascript em formato ilegível para humanos
var uglify = require("gulp-uglify");
 
// Agrupa todos os arquivos em um
var concat = require("gulp-concat");

//Deleta arquivos
var del = require('del');

//min images
var imagemin = require('gulp-imagemin');

//minificação do html
var htmlmin = require('gulp-htmlmin');

// Verifica alterações em tempo real, caso haja, compacta novamente todo o projeto 
var watch = require('gulp-watch');
 
// Minifica o CSS
var cssmin = require("gulp-cssmin");
 
// Remove comentários CSS
var stripCssComments = require('gulp-strip-css-comments');
 
// Processo que agrupará todos os arquivos CSS, removerá comentários CSS e minificará.
gulp.task('minify-css', function(){
    gulp.src('./css/style.css')
    .pipe(concat('style.css'))
    .pipe(stripCssComments({all: true}))
    .pipe(cssmin())
    .pipe(gulp.dest('./production/css/'));
});

gulp.task('copy-videos', function(){
   gulp.src(['./*.mp4'])
    .pipe(gulp.dest('./production'));
});

gulp.task('copy-images', function(){
   gulp.src(['./images/**'])
    .pipe(imagemin())
    .pipe(gulp.dest('./production/images'));
});

// Tarefa de minificação do Javascript
gulp.task('minify-js', function () {
    gulp.src('./js/*')                        // Arquivos que serão carregados, veja variável 'js' no início
    .pipe(concat('main.js'))      // Arquivo único de saída
    .pipe(uglify())                     // Transforma para formato ilegível
    .pipe(gulp.dest('./production/js/'));          // pasta de destino do arquivo(s)
});


//Tarefa de minificação HTML
gulp.task('minify-html', function() {
  return gulp.src('./*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./production'))
});
 
// Tarefa padrão quando executado o comando GULP
gulp.task('default',['copy-videos','copy-images','minify-js','minify-css','minify-html']);
 
// Tarefa de monitoração caso algum arquivo seja modificado, deve ser executado e deixado aberto, comando "gulp watch".
gulp.task('watch', function() {
    gulp.watch(js, ['minify-js']);
 	gulp.watch(css, ['minify-css']);
});