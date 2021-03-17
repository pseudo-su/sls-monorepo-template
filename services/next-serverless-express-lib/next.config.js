module.exports = {
  target: "serverless",
  // TODO: eliminate the need for this
  // https://forum.serverless.com/t/url-path-mismatch-in-response-between-serverless-offline-aws-lambda/4541
  
  // The default base URL for the API Gateway is https://{api-id}.execute-api.{region}.amazonaws.com/{stage}.
  // You’re getting /dev at the start of the path because you’re deploying to the dev stage.
  // If you were deploying to a stage like prod it would be /prod instead. To the best of my knowledge
  // the only way around this is to attach a custom domain name to the API gateway.

  // If you’re requesting https://{api-id}.execute-api.{region}.amazonaws.com/{channelCode} instead
  // of https://{api-id}.execute-api.{region}.amazonaws.com/{stage}/{channelCode} then it’s going
  // to fail because the URL doesn’t map to anything.

  // Also, the path in your serverless.yml is generally written relative {channelCode} rather than
  // absolute /{channelCode} but I don’t think it makes an actual difference.
  basePath: '/dev',
};
