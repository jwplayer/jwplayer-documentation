module.exports = function (grunt) {

  'use strict';

  // configure grunt
  grunt.initConfig({
    'mkdocs-jwplayer': {
      build: {
        options: {
          serve: false
        }
      },
      serve: {
        options: {
          serve: true
        }
      }
    }
  });

  // load grunt plugins
  grunt.loadNpmTasks('grunt-mkdocs-jwplayer');

  // default task runner
  grunt.registerTask('default', [
    'mkdocs-jwplayer:build'
  ]);

  // task runner for serving docs on localhost
  grunt.registerTask('serve', [
    'mkdocs-jwplayer:serve'
  ]);

};
