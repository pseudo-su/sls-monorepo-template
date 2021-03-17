const fs = require("fs");
const path = require("path");
const { mkdir, assertExistDirectory } = require("./utils");
const { explore } = require("./lambda");

const workflow = async (context, dev, isServer, nextDistDir, options) => {
  if (!isServer || dev) {
    return;
  }

  const nextServerlessDir = path.join(context, nextDistDir, "/serverless");
  assertExistDirectory(nextServerlessDir);

  const nextServerlessPagesDir = path.join(context, nextServerlessDir, "/pages");
  assertExistDirectory(nextServerlessPagesDir);

  const outputDir = path.join(context, options.outputDir);
  mkdir(outputDir);

  const pagesManifest = JSON.parse(
    fs.readFileSync(path.join(nextServerlessDir, "serverless/pages-manifest.json"))
  );

  explore({
    pagesManifest,
    nextServerlessDir,
    nextServerlessPagesDir,
    outputDir,
    options,
  });
};

module.exports = workflow;
