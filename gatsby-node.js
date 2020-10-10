require("dotenv").config()
const path = require("path")

exports.onCreateWebpackConfig  = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "./src/components/"),
        "@styles": path.resolve(__dirname, "./src/styles/"),
      },
      extensions: [".js", ".json", ".ts", ".tsx"],
    },
  });
};
