const Discord = require('discord.js')
const fs = require('fs')
 module.exports.run = async (bot, message, args, gen) => {
     if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send({embed:{title:`Vous n'êtes pas autorisé à utiliser gen !`, color:bot.color}})
     let type = args[0]
     if(!type) return message.channel.send({embed:{title:`Usage: ${bot.prefix}addnewfile <type>`, color:bot.color}})
     fs.writeFileSync(`./alts/${type}.txt`, '', 'utf8', (err) => {if(err) console.log(err)})
     message.channel.send({embed:{title:`Vous avez ajoutez un nouveaux dossier !`, color:bot.color}})
 }
 module.exports.help = {
     name: 'addnewfile',
     aliases: ['create']
 }