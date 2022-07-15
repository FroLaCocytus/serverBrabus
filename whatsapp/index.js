const qrcode = require('qrcode-terminal');

const { Client, LocalAuth } = require('whatsapp-web.js');
const client = new Client({
    authStrategy: new LocalAuth()
});


client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
    client.getChats().then(chats => {
        const myGroup = chats.find((chat) => chat.name === 'Brabus')
        client.sendMessage(myGroup.id._serialized, "Я нашёл группу сучки")
    })
});

client.on('message', msg => {
    if (msg.body == 'Привет') {
        msg.reply('Привет!');
    }
});


module.exports = client

