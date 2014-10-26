module.exports = function(grunt) {

  grunt.loadNpmTasks("grunt-contrib-cssmin");

  // Project configuration.
   grunt.registerTask("hello", "Prints hello world", function(){
    grunt.log.writeln("hello world!"); // login utility

   });

   grunt.config("cssmin", {
    combine: {
      'app/stylesheets/app.min.css' : [
        'app/components/bootstrap/dist/css/bootstrap.min.css',
          'app/stylesheets/*.css'
            ]

    }
   });

};