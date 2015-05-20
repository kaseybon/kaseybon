module.exports = (grunt) ->
  grunt.config "watch",
  stylesheets:
    files: "source/scss/**/*"
    tasks: "sass:dev"
    options:
      {livereload: true}
  
  autoprefixer:
    files: 'build/*':'build/*'
    tasks: "autoprefixer"

  partials:
    files: ["source/templates/**/*", "source/data/*"]
    tasks: "assemble"
    options:
      {livereload: true}

  grunt.loadNpmTasks 'grunt-contrib-watch'