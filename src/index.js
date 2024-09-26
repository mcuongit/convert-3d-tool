const { convert2xkt } = require('@xeokit/xeokit-convert/dist/xeokit-convert.cjs.js');
const defaultConfigs = require(`@xeokit/xeokit-convert/convert2xkt.conf.js`);
const WebIFC = require('web-ifc/web-ifc-api-node.js');
// const { output, source } = require('./data.json');
const db = require('./db.js');

const configs = defaultConfigs;
async function main() {
  for (let index = 0; index < db.length; index++) {
    const element = db[index];
    try {
      await convert2xkt({
        WebIFC,
        source: element.source,
        output: element.output,
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
}

main();
