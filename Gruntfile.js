module.exports = function(grunt) {
	grunt.initConfig({
		karma : {
			unit : {
				configFile : 'karma.conf.js',
				singleRun : true
			}
		},

		watch : {
			scripts : {
				files : ['**/*.js'],
				tasks : ['jshint']
			},
			sryles : {
				files : ['**/*.scss'],
				tasks : ['sass']
			}
		},

		jshint: {
			all: ['src/scripts/**/*.js']
		},

		sass : {
			dist: {
				files : [{
					expand: true,
					cwd: 'src/sass',
					src: ['*.scss'],
					dest: 'src/styles',
					ext: '.css'
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['jshint', 'sass', 'karma']);
}