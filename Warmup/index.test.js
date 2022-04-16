/**
 * @jest-environment node
 */

const timerFunction = require("./index");
const context = require("../testing/defaultContext");
const timer = require("../testing/defaultTimer");

test("Timer trigger Warm up should return 200", async () => {
  let result = await timerFunction(context, timer);

  expect(result).toEqual(200);
});
