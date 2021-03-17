const NextLambdaWebpackPlugin = require("next-aws-lambda-webpack-plugin");
const NextServerlessWebpackPlugin = require("next-serverless-webpack-plugin");

module.exports = {
  target: "serverless",
  webpack: (config, nextConfig) => {
    config.plugins.push(new NextLambdaWebpackPlugin(nextConfig));
    config.plugins.push(new NextServerlessWebpackPlugin(nextConfig));
    return config;
  },
};
