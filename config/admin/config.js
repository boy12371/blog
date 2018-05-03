import path from "path";

module.exports = {
  port: 4000,

  jekyll: {
    source: path.resolve(__dirname, "../../admin/"),
    default: path.resolve(__dirname, "./_config.yml"),
    development: "",
    production: "",
    dest: "dist",
    includes: "_includes",
    layouts: "_layouts",
    posts: "_posts"
  },

  sass: {
    src: "_sass",
    dest: "css",
    outputStyle: "compressed",
    autoprefixer: {
      browsers: [
        "last 1 major version",
        ">= 1%",
        "Chrome >= 45",
        "Firefox >= 38",
        "Edge >= 12",
        "Explorer >= 10",
        "iOS >= 9",
        "Safari >= 9",
        "Android >= 4.4",
        "Opera >= 30"
      ]
    }
  }
};
