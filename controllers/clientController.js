const client = require('../whatsapp/index')

class ClientController {
    async postClient(req, res){
        const {mobile, other} = req.body
        console.log('Виталик я хочу секса!;)')
        console.log(req.body)


        client.getChats().then(chats => {
            console.log('fdsfdsfsdfds')
            const myGroup = chats.find((chat) => chat.name === 'Brabus')
            client.sendMessage(myGroup.id._serialized, `Телефон клиента:\n ${mobile}\n Другое: ${other}`)
        })
  

        return res.json(`Сервер обработал следующую инфу: \nТелефон: ${mobile} Другое ${other}`)


    }



}

module.exports = new ClientController()