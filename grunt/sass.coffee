module.exports = (grunt) ->
  grunt.config "sass",
  dev:
    options:
      sourceMap: true
    files: [
      expand: true # Enable dynamic expansion.
      cwd: "scss/" # Src matches are relative to this path.
      src: ["**/*.scss"] # Actual pattern(s) to match.
      dest: "dist/css/" # Destination path prefix.
      ext: ".css" # Dest filepaths will have this extension.
      extDot: "first" # Extensions in filenames begin after the first dot
    ]

  grunt.loadNpmTasks "grunt-sass"