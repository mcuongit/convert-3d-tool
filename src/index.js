const { convert2xkt } = require('@xeokit/xeokit-convert/dist/xeokit-convert.cjs.js');
const defaultConfigs = require(`@xeokit/xeokit-convert/convert2xkt.conf.js`);
const WebIFC = require('web-ifc/web-ifc-api-node.js');
const { output, source } = require('./data.json');

const configs = defaultConfigs;
async function main() {
  try {
    await convert2xkt({
      WebIFC,
      source,
      output,
      log: (msg) => {
        console.log(msg);
      },
      configs,
    });
    console.log('Converted');
  } catch (error) {
    console.error(error);
  }
}

main();
