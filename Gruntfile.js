module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            files: "*"
        },
        connect: {
            server: {
                options: {
                    hostname: "localhost",
                    port: 8080,
                    base: './'
                }
            }
        },
        open: {
            dev: {
                path: 'http://localhost:8080'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');

    grunt.registerTask('default', ['connect', 'open', 'watch']);
}
