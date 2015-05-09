/**
 * Created by xinpan on 05/08/2015.
 */

var StringDecoder = require('string_decoder').StringDecoder;

var jsonString = '{"topic":"This is a json string", "from":"321@gmail.com", "to":"123@gmail.com"}';

var jsonObj = JSON.parse(jsonString);

console.log(jsonObj.topic);
console.log(jsonObj.from);
console.log(jsonObj.to);

var accountObj = {
    id: 12345,
    name: 'Jim Green',
    address: {
        street: '3303 Hillview Ave',
        city: 'Palo Alto',
        state: 'CA',
        zipCode: 94304
    },
    memberType: 'VIP'
};

var accountString = JSON.stringify(accountObj);
console.log(accountString);

var buffer = new Buffer(128);
buffer.fill(0);
buffer.write('jksajkdjfskjfksdjfk');
console.log(buffer.toString('utf8'));

var decoder = new StringDecoder('utf8');

console.log(decoder.write(buffer));

console.log('123'.length);
console.log(Buffer.byteLength('123'));
console.log(Buffer('123').length);