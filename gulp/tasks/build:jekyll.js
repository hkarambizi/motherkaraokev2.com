/**
 * Adapted from https://github.com/shakyShane/jekyll-gulp-sass-browser-sync
 *
 */
module.exports = function(gulp, plugins, config) {

	return function(done) {

		var message = {
			jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
		};

		plugins.browsersync.notify(message.jekyllBuild);

		return plugins.cp.spawn('bundle', ['exec', 'jekyll', 'build', '--config=_config.yml'] {stdio: 'inherit'})
	    .on('close', done);
	};

};
