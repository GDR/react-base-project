const fs = require("fs");
const path = require("path");
const stylelint = require("stylelint");
const junitFormatter = require("stylelint-junit-formatter");

const stylelintOptions = {
  files: "./src/styles/**/*.scss",
  configFile: ".stylelintrc.js",
  formatter: junitFormatter,
};

const reportsFolder = path.join("./reports");

stylelint.lint(stylelintOptions)
  .then((resultObject) => {
    if (!fs.existsSync(reportsFolder)) {
      fs.mkdirSync(path.join(reportsFolder));
    }

    fs.writeFileSync(
      path.join(reportsFolder, "/style.report.xml"),
      resultObject.output,
    );

    if (resultObject.errored) {
      process.exit(2);
    }
  });
