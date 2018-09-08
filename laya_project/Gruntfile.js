'use strict';  

module.exports = function (grunt) {  

    // Project configuration.  
    grunt.initConfig({  

         connect: {

          options: {
            port: 8080,
            hostname: '*', //默认就是这个值，可配置为本机某个 IP，localhost 或域名
            livereload: 35729  //声明给 watch 监听的端口
          },

          server: {
            options: {
              open: true, //自动打开网页 http://
              base: [
                './'  //主目录
              ]
            }
          }
    },

   

      concat: {  
        options: {  
        },  
        dist: {  
          src: [
                'libs/laya.core.min.js',
                'libs/laya.webgl.min.js' ,
                'libs/laya.filter.min.js',
                'libs/laya.particle.min.js',
                'libs/laya.ani.min.js',
                'libs/laya.html.min.js',
                'libs/laya.tiledmap.min.js',
                'libs/laya.ui.min.js'

                ],//src文件夹下包括子文件夹下的所有文件  
          dest: 'libs/all_lib.js'//
        }  
    },  

    watch: {
          livereload: {
            options: {
              livereload: '<%=connect.options.livereload%>'  //监听前面声明的端口  35729
            },

            files: [  //下面文件的改变就会实时刷新网页
              'src/*.*',
              'src/page/*.*'
            ],
            tasks: ['browserify'/*,'minify'*/]
          }
     },

    
     uglify: {
        my_target: {
          files: {
            'bundle.js': ['bundle.js'],
            'libs/all_lib.min.js': ['libs/all_lib.js']
          }
        }
    },
    

    shell: {
        options: {
            stderr: false
        },
        target: {
            command: 'sh onlycomplie.sh'
        },

    } 

    });

    grunt.registerTask('serve', [
        'shell',
        'concat',
        'uglify',
        'connect:server',
        'watch'
    ]);

    
    grunt.registerTask('browserify',['shell']);
    grunt.registerTask('minify',['concat','uglify']);


    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify-es');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-concat');  

}