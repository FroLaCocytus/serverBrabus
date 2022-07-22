const client = require('../whatsapp/index')

class ClientController {
    async postModuleEazy(req, res){
        const {mobile, other} = req.body
        console.log(req.body)


        client.getChats().then(chats => {
            const myGroup = chats.find((chat) => chat.name === 'Brabus')
            client.sendMessage(myGroup.id._serialized, `Цифры фраера: ${mobile}\nЗначит он базарит: ${other} вот такой расклад Санчоус. Что будешь делать?`)
        })
  

        return res.json(`Сервер обработал следующую инфу: \nТелефон: ${mobile} Другое ${other}`)


    }

    async postModuleHard(req, res){
        const {mobile, other, gosNumber,methodConnect} = req.body
        console.log(req.body)


        client.getChats().then(chats => {
            const myGroup = chats.find((chat) => chat.name === 'Brabus')
            client.sendMessage(myGroup.id._serialized, `Номер телефона: ${mobile}\nИнфа про тачку: ${other}\nГос номер: ${gosNumber}\nСпособ связи: ${methodConnect}`)
        })
  

        return res.json(`Сервер обработал следующую инфу: \nТелефон: ${mobile} Другое ${other} , ${gosNumber} , ${methodConnect} `)


    }

}

module.exports = new ClientController()