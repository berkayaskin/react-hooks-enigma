const enigma = require('enigma.js');
const schema = require('enigma.js/schemas/12.20.0.json');
const SenseUtilities = require('enigma.js/sense-utilities');

const config = {
  host: 'sense-demo.qlik.com',
  secure: true,
  port: 443,
  prefix: '',
  appId: '372cbc85-f7fb-4db6-a620-9a5367845dce',
};

const url = SenseUtilities.buildUrl(config);
const session = enigma.create({ schema, url, suspendOnClose: true });

// open doc and return promise which will resolve to doc
export const openDoc = () => (
  session.open().then((global) => global.openDoc(config.appId))
);

// close session
export const closeSession = () => (
  session.close()
);
