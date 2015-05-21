module.exports = (grunt) ->
  grunt.config "copy",
  main:
    files: [
      expand: true
      cwd:'source/assets/'
      src: ["**"]
      dest: "build/"
    ]

  grunt.loadNpmTasks 'grunt-contrib-copy'