const discord = require('discord.js'), fs = require('fs')

    module.exports.run = (client, message, args) => {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Nah you cant do that!')
        let stonks = args[0]
        if (!stonks) return message.channel.send('Which type i have to delete...')
        const restockable = './alts' + "/" + stonks + ".txt";
        fs.unlinkSync(restockable, err => {
            if (err) return message.channel.send("Failed to delete the **__" + args[0].toUpperCase() + "__**. Please make sure that the file exists.")
            else { 
              message.channel.send(` <a:success:899665242043338812>  | Deleted file for **__${args[0].toUpperCase()}__**`)
            }
        })

    }
module.exports.help = {
    name: "unstock",
    category: "sd",
    cooldown: 0,
    description: "sd",
    aliases: ['destock', 'removestock', 'removestonks'],
    usage: "sd"
}