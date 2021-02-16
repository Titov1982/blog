
// gruntfile.js


// Вся конфигурация находится внутри этой функции
module.exports = function(grunt) {

    // ===========================================================================
    // Конфигурация GRUNT ===========================================================
    // ===========================================================================
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        // Настраиваем компиляцию scss в css
        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    compass: false,
                    sourcemap: false
                },
                files: [{
                    './public/css/style.css': [
                        './dev/scss/style.scss'
                    ]
                }]
            }
        },

        // Настраиваем отслеживание изменений файлов
        watch: {
            options: {
                livereload: true, // Включаем режим отслеживания
            },
            content : {
                files : '*.html',

            },
            css : {
                files : ['./dev/scss/**/*.scss'],
                tasks : ['sass'],
                options : {
                    spawn : false,
                }
            },
            // scripts : {
            //     files : ['./dev/js/**/*.js', './dist/js/**/*.js'],
            //     tasks : [/*'concat', 'uglify', 'browserSync'*/],
            //     options : {
            //         spawn : false,
            //     },
            // },
        },

        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 8', 'ie 9']
            },
            your_target: {
                // Target-specific file lists and/or options go here.
            },
        },



    });

    // ===========================================================================
    // Загружаем модули GRUNT ========================================================
    // ===========================================================================
    grunt.loadNpmTasks('grunt-contrib-sass')
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-autoprefixer');


    // ============= // Создаем задачи ========== //
    grunt.registerTask('default', ['sass', 'autoprefixer', 'watch'])

};