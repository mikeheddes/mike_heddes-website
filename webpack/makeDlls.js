// No need to build the DLL in production
if (process.env.NODE_ENV === 'production') {
  process.exit(0);
}

const shelljs = require('shelljs');
const path = require('path');
const fs = require('fs');
const defaults = require('lodash/defaultsDeep');
const webpack = require('webpack');

const pkg = require(path.join(process.cwd(), 'package.json'));
const dllConfig = require('./dllConfig');
const webpackDll = require('./webpack.dll');
const logger = require('../server/logger');

const exists = fs.existsSync;
const writeFile = fs.writeFileSync;
const { mkdir, exec } = shelljs;

const outputPath = dllConfig.path;
const dllManifestPath = path.join(outputPath, 'package.json');
const previousDepsPath = path.join(outputPath, 'previousDeps.json');


/**
 * I use node_modules/react-boilerplate-dlls by default just because
 * it isn't going to be version controlled and babel wont try to parse it.
 */
mkdir('-p', outputPath);

console.log('Building the Webpack DLL...');

/**
 * Create a manifest so npm install doesn't warn us
 */
if (!exists(dllManifestPath)) {
  writeFile(
    dllManifestPath,
    JSON.stringify(defaults({
      name: 'project-dlls',
      private: true,
      author: pkg.author,
      repository: pkg.repository,
      version: pkg.version,
    }), null, 2),
    'utf8'
  );
}

let updateDlls = true;
const { dependencies, devDependencies } = pkg;

if(exists(previousDepsPath)){
  const previousDeps = require(previousDepsPath);
  updateDlls = JSON.stringify(previousDeps) != JSON.stringify({dependencies, devDependencies});
}

console.log(`should update Dlls: ${updateDlls}`);

// the BUILDING_DLL env var is set to avoid confusing the development environment
if (updateDlls) {
  exec('cross-env BUILDING_DLL=true');
  exec('webpack --display-chunks --color --config webpack/webpack.dll.js --hide-modules');
  exec('cross-env BUILDING_DLL=false');
}

// update latest known dependencies
writeFile(
  previousDepsPath,
  JSON.stringify({
    dependencies,
    devDependencies
  })
)
