let client = require('./client');

async function init() {
    let result = await client.sadd("ip", 4);
    console.log('Result => ', result);
}

init();