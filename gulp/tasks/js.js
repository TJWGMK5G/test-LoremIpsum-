import concat from 'gulp-concat';
import minify from 'gulp-minify';

export const js = () => {
	return app.gulp.src(app.path.src.js)
		.pipe(minify({
			ext:{
				src:'-dev.js',
				min:'.js'
			},
			}	
		))
		.pipe(app.gulp.dest(app.path.build.js));
}