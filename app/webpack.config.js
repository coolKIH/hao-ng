/**
 * Created by hao on 17-2-16.
 */
module.exports = [
  {
    entry: ["./app.js", "./home-outlook/home-outlook.js", "./core/navigation-bar/navigation-bar.js",
      "./articles/articles.js", "./intro/intro.js", "./showcase/showcase.js", "./article-detail/article-detail.js"
    ],
    output: {
      filename: "bundle.js"
    }
  }
];