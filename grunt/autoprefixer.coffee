module.exports = (grunt) ->
  grunt.config "autoprefixer",
  files: 'build/*':'build/*'

  grunt.loadNpmTasks 'grunt-autoprefixer'