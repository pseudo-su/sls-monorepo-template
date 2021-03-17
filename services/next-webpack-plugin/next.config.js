const NextLambdaWebpackPlugin = require("next-aws-lambda-webpack-plugin");
const NextServerlessWebpackPlugin = require("@build-tool/next-serverless-webpack-plugin");

module.exports = {
  target: "serverless",
  webpack: (config, nextConfig) => {
    config.plugins.push(
      new NextLambdaWebpackPlugin(nextConfig, { prefix: "page" })
    );
    config.plugins.push(new NextServerlessWebpackPlugin(nextConfig));
    return config;
  },
};
