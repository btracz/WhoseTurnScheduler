const axios = require("axios");
const config = require("./config.json");

module.exports = {
  call,
};

function call(context, url) {
  return new Promise((resolve, reject) => {
    var timeStamp = new Date().toISOString();
    context.log("Calling", url, "at", timeStamp);

    axios({
      method: "get",
      url,
      auth: {
        username: config.login,
        password: config.password,
      },
    })
      .then(function (res) {
        context.log("done :", res.status);
        return resolve(res.status);
      })
      .catch(function (error) {
        context.log("error:", error); // Print the error if one occurred
        return reject(error);
      });
  });
}
