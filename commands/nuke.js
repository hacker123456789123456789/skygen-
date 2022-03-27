const { MessageEmbed } = require("discord.js"), 
fs = require("fs"), 
getNow = () => { return { time: new Date().toLocaleString("en-GB", { timeZone: "Europe/Paris", hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" }), }; };


    module.exports.run = (client, message, args) => {
    if(!message.guild) return;
    if(!message.member.hasPermission("ADMINISTRATOR")) return;
    message.channel.clone({reason: `Nuked by ${message.author.tag} (${message.author.id})`}).then(c => c.setPosition(message.channel.position) && c.send(`:boom: The purge requested by ${message.author} has been performed. https://cdn.discordapp.com/attachments/842303468160286761/884475305501294683/standard.gif`))
    message.channel.delete() 
    };
    module.exports.help = {
    name: "nuke",
    category: "nuke",
    cooldown: 0,
    description: "Nuke Channel!",
    }