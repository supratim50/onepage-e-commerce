const withCss = require("@zeit/next-css");
const withPurgeCss = require("next-purgecss");

module.exports = withCss(
  withPurgeCss({
    purgeCssPaths: [
      "pages/*.js",
      "components/**/*.jsx",
      "components/**/**/*.jsx",
      "other-components/**/*", // also scan other-components folder
    ],
  })
);
