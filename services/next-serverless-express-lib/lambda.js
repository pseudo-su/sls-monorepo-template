// const next = require("next");
// const es = require("aws-serverless-express");

// // const { failure } = require("../utils/browserResponse");

// const app = next({ dev: false });

// const handle = app.getRequestHandler();
// const server = es.createServer(handle);

// exports.handler = async function handler(event, context, callback) {
//   try {
//     const result = await es.proxy(server, event, context, "PROMISE").promise;
//     return result;
//   } catch (e) {
//     // TODO: better way to handle errors
//     console.error(e);
//     callback(null, {});
//     // callback(null, {await failure({ status: false }, e)});
//   }
// }

// --------------

const next = require("next");
const { parse } = require("url");
const serverlessExpress = require("@vendia/serverless-express");

const app = next({ dev: false });
const requestHandler = app.getRequestHandler();

exports.handler = async function handler(event, context, callback) {
  // try {
  //   const result = await es.proxy(server, event, context, "PROMISE").promise;
  //   return result;
  // } catch (e) {
  //   // TODO: better way to handle errors
  //   console.error(e);
  //   callback(null, {});
  //   // callback(null, {await failure({ status: false }, e)});
  // }

  console.log({ event, context, callback });

  // type RequestListener = (req: IncomingMessage, res: ServerResponse) => void;
  const app = async (req, res) => {
    // console.log({ req, res });

    const parsedUrl = parse(req.url, true, false);

    const result = await requestHandler(req, res, parsedUrl);

    console.log(result);

    return result;
  };

  await serverlessExpress({ app })(event, context, callback);
};

// --------------

// const next = require("next");
// const { parse } = require("url");
// const express = require("express");
// const serverlessExpress = require("@vendia/serverless-express");

// const nApp = next({ dev: false });
// const handle = nApp.getRequestHandler();

// const app = express();

// app.get("/*", (req, res) => {
//   const parsedUrl = new parse(req.url, true);
//   handle(req, res, parsedUrl);
// });

// exports.handler = serverlessExpress({ app });
