module.exports = function(grunt) {

  // Load the plugin that provides the "concat" task.
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    concat :{
      vendor: {
        files : {
          'app/js/vendor/jquery.min.js' : ['vendor/jquery/jquery.min.js'],
          'app/js/vendor/bootstrap.min.js' : ['vendor/bootstrap/docs/assets/js/bootstrap.min.js'],
          'app/js/vendor/baas.io.min.js' : ['vendor/baasio/baas.io.min.js'],
          'app/css/vendor/bootstrap.css' : ['vendor/bootstrap/docs/assets/css/bootstrap.css'],
          'app/css/vendor/bootstrap-responsive.css' : ['vendor/bootstrap/docs/assets/css/bootstrap-responsive.css']
        }
      }
    }
  });

  // Default task(s).
  grunt.registerTask('default', []);
  grunt.registerTask('vendor', ['concat:vendor']);
};