'use strict';

// -------------------- NOTES

// -------------------- add App folder as a virtual directory to a website on local IIS webserver

// -------------------- use browser extensions for live reload (so we can run server-side code)
//      Chrome: bit.ly/IKI2MY
//      Firefox: mzl.la/1hnJqof

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        config: {
            // Configurable paths
            app: 'app',
            dist: 'dist'
        },

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            bower: {
                files: ['bower.json'],
                tasks: ['bowerInstall']
            },
            js: {
                files: ['<%= config.app %>/scripts/**/*.js'],
                tasks: ['jshint'],
                options: {
                    livereload: true
                }
            },
            jstest: {
                files: ['test/spec/{,*/}*.js'],
                tasks: ['test:watch']
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            compass: {
                files: ['<%= config.app %>/sass/**/*.{scss,sass}'],
                tasks: ['compass:server', 'autoprefixer']
            },
            // styles: {
            //     files: ['<%= config.app %>/styles/**/*.css'],
            //     tasks: ['newer:copy:styles', 'autoprefixer']
            // },

            html: {
                files: [
                    '<%= config.app %>/**/*.html',
                    '.tmp/styles/**/*.css',
                    '<%= config.app %>/**/*.php',
                    '<%= config.app %>/images/**/*'
                ],
                // copying the css files from the .tmp dir into the app/styles dir so the assets folders are correct when viewing
                // the app folder in a browser
                tasks: ['newer:copy:stylesback',],
                options: {
                    livereload: true,
                }
            }
        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= config.dist %>/**/*',
                        '!<%= config.dist %>/**/*.git*'
                    ]
                }]
            },
            server: '.tmp'
        },

        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                '<%= config.app %>/scripts/**/*.js',
                '!<%= config.app %>/scripts/vendor/*',
                'test/spec/**/*.js'
            ]
        },

        // Compiles Sass to CSS and generates necessary files if requested
        compass: {
            options: {
                sassDir: '<%= config.app %>/sass',
                cssDir: '.tmp/styles',
                generatedImagesDir: '.tmp/images/generated',
                imagesDir: '<%= config.app %>/images',
                javascriptsDir: '<%= config.app %>/scripts',
                fontsDir: '<%= config.app %>/styles/fonts',
                importPath: '<%= config.app %>/bc',
                httpImagesPath: '/images',
                httpGeneratedImagesPath: '/images/generated',
                httpFontsPath: '/styles/fonts',
                relativeAssets: false,
                assetCacheBuster: false
            },
            dist: {
                options: {
                    generatedImagesDir: '<%= config.dist %>/images/generated'
                }
            },
            server: {
                options: {
                    debugInfo: false
                }
            }
        },

        // Add vendor prefixed styles
        autoprefixer: {
            options: {
                browsers: ['last 2 versions']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '**/*.css',
                    dest: '.tmp/styles/'
                }]
            }
        },

        // Automatically inject Bower components into the HTML file
        bowerInstall: {
            app: {
                src: ['<%= config.app %>/index.html'],
                ignorePath: '<%= config.app %>/',
                exclude: ['<%= config.app %>/bc/bootstrap-sass/vendor/assets/javascripts/bootstrap.js']
            },
            sass: {
                src: ['<%= config.app %>/styles/{,*/}*.{scss,sass}'],
                ignorePath: '<%= config.app %>/bc/'
            }
        },

        // Renames files for browser caching purposes
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= config.dist %>/scripts/*.js',
                        '<%= config.dist %>/styles/**/*.css',
                        //'<%= config.dist %>/images/**/*.*',
                        '<%= config.dist %>/styles/fonts/**/*.*',
                        '<%= config.dist %>/**/*.{ico}'
                    ]
                }
            }
        },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them

        
        useminPrepare: {
            options: {
                dest: '<%= config.dist %>'
            },
            html: '<%= config.app %>/index.html'
        },

        // Performs rewrites based on rev and the useminPrepare configuration
        usemin: {
            options: {
                assetsDirs: ['<%= config.dist %>', '<%= config.dist %>/images']
            },
            html: ['<%= config.dist %>/**/*.html','<%= config.dist %>/**/*.php'],
            css: ['<%= config.dist %>/styles/**/*.css']
        },

        // The following *-min tasks produce minified files in the dist folder
        imagemin: {
            // added by mjl to elimate build error regarding image files
            options: { cache: false },
            // end mjl
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/images',
                    src: '**/*.{gif,jpeg,jpg,png}',
                    dest: '<%= config.dist %>/images'
                }]
            }
        },

        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/images',
                    src: '**/*.svg',
                    dest: '<%= config.dist %>/images'
                }]
            }
        },

        htmlmin: {
            dist: {
                options: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: true,
                    removeCommentsFromCDATA: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= config.dist %>',
                    src: '**/*.html',
                    dest: '<%= config.dist %>'
                }]
            }
        },

        // By default, your `index.html`'s <!-- Usemin block --> will take care of
        // minification. These next options are pre-configured if you do not wish
        // to use the Usemin blocks.
        cssmin: {
            dist: {
                files: {
                    '<%= config.dist %>/styles/main.css': [
                        '.tmp/styles/**/*.css',
                        '<%= config.app %>/styles/**/*.css'
                    ]
                }
            }
        },
        uglify: {
            dist: {
                files: {
                    '<%= config.dist %>/scripts/scripts.js': [
                        '<%= config.dist %>/scripts/scripts.js'
                    ]
                }
            }
        },
        concat: {
            dist: {}
        },




        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= config.app %>',
                    dest: '<%= config.dist %>',
                    src: [
                        '**/*.{ico,png,txt}',
                        '.htaccess',
                        'images/**/*.webp',
                        '**/*.html',
                        '**/*.php',
                        'styles/fonts/**/*.*',
                        '!bc/**/*.*'
                    ]
                }]
            },
            styles: {
                expand: true,
                dot: true,
                cwd: '<%= config.app %>/styles',
                dest: '.tmp/styles/',
                src: '**/*.css'
            },
            stylesback: {
                expand: true,
                dot: true,
                cwd: '.tmp/styles/',
                dest: '<%= config.app %>/styles',
                src: '**/*.css'
            },
            // copy the dist/scripts/vendor/modernizr.js file to app
            mdnzrcopy: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= config.dist %>',
                    dest: '<%= config.app %>',
                    src: [
                        'scripts/vendor/modernizr.js'
                    ]
                }]
            },
        },

        // Generates a custom Modernizr build that includes only the tests you
        // reference in your app
        modernizr: {
                devFile: '<%= config.app %>/bc/modernizr/modernizr.js',
                outputFile: '<%= config.dist %>/scripts/vendor/modernizr.js',
                files: [
                    '<%= config.dist %>/scripts/**/*.js',
                    '<%= config.dist %>/styles/**/*.css',
                    '!<%= config.dist %>/scripts/vendor/*'
                ],
                extra : {
                    shiv : false,
                    printshiv : false,
                    load : true,
                    mq : false,
                    cssclasses : true
                },
                uglify: true
            },

            // Run some tasks in parallel to speed up build process
            concurrent: {
                server: [
                    'compass:server',
                    'copy:styles'
                ],
                test: [
                    'copy:styles'
                ],
                dist: [
                    'compass',
                    'copy:styles',
                    'imagemin',
                    'svgmin'
                ]
            }
        });


    grunt.registerTask('serve', function (target) {
        if (target === 'dist') {
            // return grunt.task.run(['build', 'connect:dist:keepalive']);
            return grunt.task.run(['build']);
        }

        grunt.task.run([
            'clean:server',
            'concurrent:server',
            'autoprefixer',
            //'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('server', function (target) {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run([target ? ('serve:' + target) : 'serve']);
    });

    grunt.registerTask('test', function (target) {
        if (target !== 'watch') {
            grunt.task.run([
                'clean:server',
                'concurrent:test',
                'autoprefixer'
            ]);
        }
    });

    grunt.registerTask('build', [
        'clean:dist',
        'useminPrepare',
        'concurrent:dist',
        'autoprefixer',
        'concat',
        'cssmin',
        'uglify',
        'copy:dist',
        'modernizr',
        'copy:mdnzrcopy',
        'rev',
        'usemin',
        'htmlmin'
    ]);

    grunt.registerTask('default', [
        'newer:jshint',
        'test',
        'build'
    ]);
};