module.exports = function (grunt) {

  'use strict';

  // configure grunt
  grunt.initConfig({
    'mkdocs-jwplayer': {
      build: {},
      serve: {
        options: {
          serve: true
        }
      },
      deploy: {
        options: {
          deploy: true
        }
      }
    }
  });

  // load grunt plugins
  grunt.loadNpmTasks('grunt-mkdocs-jwplayer');

  // build docs
  grunt.registerTask('default', [
    'mkdocs-jwplayer:build'
  ]);

  // build docs and serve localhost
  grunt.registerTask('serve', [
    'mkdocs-jwplayer:serve'
  ]);

  // build docs and deploy via jenkins
  grunt.registerTask('deploy', [
    'mkdocs-jwplayer:deploy'
  ]);

};
