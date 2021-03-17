const path = require("path");
const fs = require("fs");
const { mkdir } = require("./utils");

// const createHandlerFile = (lambdaPath, entry) => {
//   const content = `
// // Require next-aws-lambda layer
// const compat = require("next-aws-lambda");
// const page = require("./${entry}");

// module.exports.render = async (event, context, callback) => {
//   const responsePromise = compat(page)(event, context); // don't pass the callback parameter
//   return responsePromise;
// };
//                 `;
//   const handlerPath = path.join(lambdaPath, "handler.js");
//   fs.writeFileSync(handlerPath, content);
// };

// const createNpmPackageFile = (lambdaPath) => {
//   const content = `
// {
//   "name": "index",
//   "version": "0.0.0",
//   "main": "./index.js"
// }
//     `;

//   const npmPackagePath = path.join(lambdaPath, "package.json");
//   fs.writeFileSync(npmPackagePath, content);
// };

const inPages = (pathEntry, pages) => {
  if (pages.length === 0) {
    return true;
  }
  const pathEntryRel = pathEntry
    .replace(/^(.*?)\.next\/serverless\/pages/, "")
    .replace(/\.js$/, "");
  for (page of pages) {
    if (pathEntryRel === page) {
      return true;
    }
  }
  return false;
};

const explore = (args) => {
  console.log(args);
  const {
    // pagesManifest,
    // nextServerlessDir,
    // nextServerlessPagesDir,
    outputDir,
    options,
  } = args;
  const { prefix, pages } = options;

  mkdir(outputDir);

  console.log("TODO: implement generating the serverless.yaml function definitions");

  // fs.readdir(pagesDir, (err, entries) => {
  //   if (err) {
  //     throw "unable to scan directory" + err;
  //   }

  //   entries.forEach((entry) => {
  //     pathEntry = path.join(pagesDir, entry);

  //     if (fs.statSync(pathEntry).isDirectory()) {
  //       explore(pathEntry, path.join(outputDir, entry), options);
  //       return;
  //     }

  //     if (path.extname(entry) === ".js" && inPages(pathEntry, pages)) {
  //       const outputBase = path.join(
  //         outputDir,
  //         `${prefix}_${path.parse(entry).name}`
  //       );

  //       // Generate yaml file for every function
  //       const filePath = `${outputBase}.yaml`;
  //       // const fileContent = generateFunctionYaml(entry);
  //       console.log("TODO: auto-generate yaml config");
  //       console.log({
  //         filePath,
  //         entry,
  //       });
  //       const url = path.parse(entry).name;
  //       const handlerName = "url";
  //       const handler = {
  //         handler: {
  //           url: url,
  //         }
  //       };

  //       // hello:
  //       //   handler: ./out_lambda/lambda/l_index/handler.render
  //       //   events:
  //       //     - http:
  //       //         path: /
  //       //         method: ANY
  //       //     - http:
  //       //         path: /{any+}
  //       //         method: ANY

  //       // fs.writeFileSync(filePath, fileContent);
  //     }
  //   });
  // });
};

module.exports = { explore, inPages };
