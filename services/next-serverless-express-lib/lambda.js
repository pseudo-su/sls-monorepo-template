const next = require("next");
const es = require("aws-serverless-express");

// const { failure } = require("../utils/browserResponse");

const app = next({ dev: false });

const handle = app.getRequestHandler();
const server = es.createServer(handle);

exports.handler = async function handler(event, context, callback) {
  try {
    const result = await es.proxy(server, event, context, "PROMISE").promise;
    return result;
  } catch (e) {
    // TODO: better way to handle errors
    console.error(e);
    callback(null, {});
    // callback(null, {await failure({ status: false }, e)});
  }
}
