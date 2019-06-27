module.exports = {
  reporters: ["default",
    [
      "jest-junit",
      {
        "outputName": "test.report.xml",
        "outputDirectory": "./reports"
      }
    ]
  ],
};
