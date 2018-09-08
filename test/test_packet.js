var p = require('../common/packet_helper');
var packet = p.generate_create_user('彭总');
console.log(JSON.stringify(packet));
