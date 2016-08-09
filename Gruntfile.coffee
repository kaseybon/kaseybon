module.exports = (grunt) ->

  grunt.initConfig pkg: require("./package.json")

  ##### Tasks ######
  grunt.loadTasks "grunt"

  # Build Task
  grunt.registerTask "build", ["assemble", "sass", "autoprefixer", "copy:main"]

  # Build Task
  grunt.registerTask "dev", ["build", "watch"]

  # Default task
  grunt.registerTask "default", "dev"
