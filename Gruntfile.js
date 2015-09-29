module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'assets/stylesheets/home.css': 'assets/stylesheets/src/home.scss',
          'assets/stylesheets/common.css': 'assets/stylesheets/src/common.scss',
          'assets/stylesheets/trip.css': 'assets/stylesheets/src/trip.scss',
          'assets/stylesheets/join.css': 'assets/stylesheets/src/join.scss',
          'assets/stylesheets/contact.css': 'assets/stylesheets/src/contact.scss'
        //   'assets/stylesheets/contact.css': 'assets/stylesheets/src/contact.scss'
         }
      }
    },
    watch: {
      css: {
        files: ['assets/stylesheets/src/*.scss'],
        tasks: ['sass', 'cssmin']
      }
    },
    cssmin: {
      target: {
        files: {
          'assets/stylesheets/app.min.css':
          [
           'assets/stylesheets/home.css',
           'assets/stylesheets/common.css', 
           'assets/stylesheets/trip.css',
           'assets/stylesheets/join.css',
           'assets/stylesheets/contact.css'
           // 'assets/stylesheets/testimonial.css',
           // 'assets/stylesheets/contact.css'
          ]  
        }
      }
    }  
  });


  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['sass', 'cssmin', 'watch']);
};