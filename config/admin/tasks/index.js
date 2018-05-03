import gulp from "gulp";
import jekyll from "./jekyll";
import webpack from "./webpack";

gulp.task("jekyll", jekyll);
gulp.task("webpack", webpack);

gulp.task("build", ["webpack"], () => {
  console.log("\n---------\nBuild success!\n---------\n");
});

export { jekyll, webpack };
