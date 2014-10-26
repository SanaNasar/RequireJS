module.exports = function(grunt) {

  grunt.loadNpmTasks("grunt-contrib-cssmin");

  // Project configuration.
   grunt.registerTask("hello", "Prints hello world", function(){
    grunt.log.writeln("hello world!"); // login utility

   });

   grunt.config("cssmin", {
    combine: {
      files: {

      'app/stylesheets/app.min.css' : [
        'app/components/bootstrap/**/*bootstrap/dist/css/bootstrap.min.css', // any subfolder with bootstrap in their name and bootstrap.css
          'app/stylesheets/*.css' // * means grabs anything with .css
        ]
      
      }
    }
   });

   grunt.registerTask("clean", "removes built files", function(){
      grunt.file.delete("app/stylesheets/app.min.css");
   });

   grunt.registerTask("build", ["clean", "cssmin"]);

};