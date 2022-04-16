const { call } = require("../common");
const config = require("../config.json");

module.exports = async function (context, myTimer) {
  return call(context, config.endpoint);
};
