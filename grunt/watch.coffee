module.exports = (grunt) ->
  grunt.config "watch",
  stylesheets:
    files: "scss/**/*"
    tasks: "sass:dev"
    options:
      {livereload: true}
  
  autoprefixer:
    files: 'build/css/*':'build/css/*'
    tasks: "autoprefixer"

  partials:
    files: ["source/templates/**/*", "source/data/*", "source/content/*"]
    tasks: "assemble"
    options:
      {livereload: true}

  grunt.loadNpmTasks 'grunt-contrib-watch'