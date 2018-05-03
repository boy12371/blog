import webpack from "webpack";
import webpackConfig from "../../webpack/webpack.babel";

export default () => {
  return new Promise(resolve =>
    webpack(webpackConfig, (err, stats) => {
      if (err) console.log("Webpack", err);

      console.log(stats.toString());

      resolve();
    })
  );
};
