module.exports = function(grunt){

  grunt.initConfig({
    ngconstant : {

      options: {
        space: ' ',
        wrap: '"use strict";\n\n {\%= __ngModule %}',
        name: 'config',
      },
      development: {
        options: {
          dest: 'public/config/config.js'
        },
        constants: {
          ENV: {
            name: 'development',
            apiUrl: 'http://localhost:3000'
          }
        }
      },
      production: {
        options: {
          dest: 'public/config/config.js'
        },
        constants: {
          ENV: {
            name: 'production',
            apiUrl: 'http://10.24.216.105:3000'
          }
        }
      },

    }
  });

  grunt.loadNpmTasks('grunt-ng-constant');

  grunt.registerTask('dev', function (target) {

    grunt.task.run([
      'ngconstant:development'
    ]);

  });

  grunt.registerTask('prod', function (target) {

    grunt.task.run([
      'ngconstant:production'
    ]);

  });
}
