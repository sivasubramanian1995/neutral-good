const airbnb = require("@neutrinojs/airbnb");
const react = require("@neutrinojs/react");
const copy = require("@neutrinojs/copy");

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    airbnb(),
    react({
      html: {
        title: "neutral-good",
      },
    }),
    copy({
      patterns: [
        {
          from: "images/**/*",
        },
      ],
      options: {
        logLevel: "warn",
      },
      pluginId: "copy",
    }),
  ],
};
