const workflow = require("./src/workflow");

const DefaultOptions = {
  outputDir: ".",
  pages: [],
};

/**
 * Plugin Webpack
 */
class NextServerlessWebpackPlugin {
  constructor(nextJsConfig, options) {
    const {
      dev,
      isServer,
      config: { distDir },
    } = nextJsConfig;
    this.dev = dev;
    this.isServer = isServer;
    this.nextDistDir = distDir;
    this.options = Object.assign(DefaultOptions, options);
  }

  apply(compiler) {
    const { context } = compiler;
    compiler.hooks.done.tapPromise("AwsLambda", () => {
      return workflow(
        context,
        this.dev,
        this.isServer,
        this.nextDistDir,
        this.options
      );
    });
  }
}

module.exports = NextServerlessWebpackPlugin;
