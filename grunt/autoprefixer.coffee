module.exports = (grunt) ->
  grunt.config "autoprefixer",
  files: 'build/css/*':'build/css/*'

  grunt.loadNpmTasks 'grunt-autoprefixer'