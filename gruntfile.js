
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

        // Настраиваем плагин объединения js файлов
        concat: {
            dist: {
                // Исходные файлы
                src: ['./dev/js/auth.js'],
                dest: './public/js/script.js',  // Целевой объединенный файл
                options: {
                    separator: ';'
                }
            },
        },

        // Настройка плагина сжатия js файлов
        uglify: {
            build: {
                src: './public/js/script.js',
                dest: './public/js/script.min.js'
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

            js : {
                files : ['./dev/js/**/*.js'],
                tasks : ['concat'],
                options : {
                    spawn : false,
                }
            },

            ugl: {
                files : ['./public/js/script.js'],
                tasks : ['uglify'],
                options : {
                    spawn : false,
                }
            }

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

    grunt.loadNpmTasks('grunt-contrib-concat')
    grunt.loadNpmTasks('grunt-contrib-uglify')



    // ============= // Создаем задачи ========== //
    grunt.registerTask('default', ['sass', 'concat', 'uglify', 'autoprefixer', 'watch'])

};