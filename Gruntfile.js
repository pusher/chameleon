'use strict';

module.exports = function(grunt) {
   
  grunt.initConfig({
    project: {
      app: 'app',
      css: [
        'stylesheets/chameleon.scss'
      ]
    },
    sass: {
      dev: {
        options: {
          expand: true
        },
        files: {
          'dist/chameleon.css': 'stylesheets/chameleon.scss'
        }
      }
    },
    watch: {
      sass: {
        files: 'stylesheets/**/*.scss',
        tasks: ['sass:dev']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass', 'watch']);

};