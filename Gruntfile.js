module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        typescript: {
            base: {
                src: ['scripts/*.ts'],
                dest: 'scripts/',
                options: {
                    module: 'amd',
                    target: 'es5',
                    basePath: "scripts",
                    sourceMap: false,
                    declaration: true,
                    removeComments: true,
                    references: [
                        "scripts/ts/jquery.d.ts",
                        "scripts/ts/angular.d.ts", 
                        "scripts/ts/angular-route.d.ts",
                        "scripts/ts/showdown.d.ts"
                    ]
                }
            }
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
        watch: {
            files: '*'
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
    grunt.loadNpmTasks('grunt-typescript');

    grunt.registerTask('default', ["typescript",'connect', 'open', 'watch']);
}
