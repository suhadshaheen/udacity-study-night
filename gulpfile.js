import gulp from "gulp";
import shell from "gulp-shell";

gulp.task("default", shell.task(["parcel starter/index.html --open"]));

gulp.task("test", shell.task(["mocha"]));
