module.exports = (grunt) ->

  grunt.initConfig pkg: require("./package.json")

  ##### Tasks ######
  grunt.loadTasks "grunt"
  
  # CircleCI Continuous Deployment Task
  grunt.registerTask "ci", ["assemble", "sass", "autoprefixer"]

  # Build Task
  grunt.registerTask "build", ["assemble", "sass", "autoprefixer", "watch"]
 
  # Default task
  grunt.registerTask "default", "build"

