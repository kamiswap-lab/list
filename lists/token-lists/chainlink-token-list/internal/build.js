const { version } = require("../package.json");
const { sortTokens } = require("builder");

module.exports = function () {
  const parsed = version.split(".");

  return {
    name: "Chainlink Token List",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI:
      "https://raw.githubusercontent.com/kamiswap-lab/brading/master/logo-256x256.png",
    keywords: ["Kami", "chainlink", "tokenlist"],
    tokens: sortTokens([...require("../tokens/ethereum.json")]),
  };
};
