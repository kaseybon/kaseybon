module.exports = (grunt) ->
  grunt.config "assemble",
    options:
      partials: "source/templates/partials/*"
      data: "data/*.yml"
      layoutdir: "source/templates/layouts/"
      layout: ['default.hbs']
    files:
      expand: true
      cwd: 'source/templates/pages'
      src: ['*.hbs']
      dest: 'build/'

  grunt.loadNpmTasks 'assemble'