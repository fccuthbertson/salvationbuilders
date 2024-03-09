const accountSid = 'AC91eaeeb749522f216941212d47575ec5';
const authToken = '[AuthToken]';
const client = require('twilio')(accountSid, authToken);
const messagingServiceSid = 'MG8dd3b036d2fb533e2dc987e052015566';

export async function sendSms(body, to) {
    client.messages
        .create({body, messagingServiceSid, to })
        .then(message => console.log(message.sid))
        .done();
}
