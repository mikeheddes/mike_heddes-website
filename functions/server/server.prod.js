const express = require('express');

const clientConfig = require('../../src/webpack/client.config');
const clientManifest = require('../build/client-manifest.json');
const loadableStats = require('../build/react-loadable.json');
const serverBundle = require('../build/server.bundle.js');

const app = express();

app.use(
  clientConfig.output.publicPath,
  express.static(clientConfig.output.path)
);

app.get('*', (req, res) => {
  serverBundle.default(req, res, {
    clientBundle: clientManifest['client.js'],
    vendorBundle: clientManifest['vendors.js'],
    runtimeBundle: clientManifest['runtime.js'],
    loadableStats,
  });
});

serverBundle
  .loadablePreload()
  .then(() =>
    app.listen(3000, () =>
      console.log('prod-server running: http://localhost:3000')
    )
  )
  .catch(err => {
    throw err;
  });
