module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        watch: {
            files: [
                "*.html",
                "*.css",
                "*.js"
            ]
        },
        connect: {
            server: {
                options: {
                    hostname: "localhost",
                    port: 7000,
                    base: "./"
                }
            }
        },
        open: {
            dev: {
                path: "http://localhost:7000"
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-open");

    grunt.registerTask("default", ["connect", "open", "watch"]);
}
