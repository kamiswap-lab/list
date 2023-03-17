const { version } = require("../package.json");
const { sortTokens } = require("builder");

module.exports = function () {
  const parsed = version.split(".");
  return {
    name: "Kamiswap Testnet",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI:
    "https://raw.githubusercontent.com/kamiswap-lab/branding/master/logo-256x256.png",
    keywords: ["kamiswap", "default"],
    tokens: sortTokens([
      ...require("../tokens/kovan.json"),
      ...require("../tokens/rinkeby.json"),
      ...require("../tokens/ropsten.json"),
    ]),
  };
};
