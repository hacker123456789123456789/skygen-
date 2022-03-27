const Discord = require('discord.js')
module.exports.run = async (bot, message, args, gen) => {
    let embed = new Discord.MessageEmbed()
    .setTitle('Liste des commandes')
    .setColor(bot.color)
    .setDescription('SkyGen - générateur de compte')
    .addFields(
		{ name: 'Générer des comptes', value: 'Exemple: `.gen <Nom du service>`' },
		{ name: 'Créer un service', value: 'Exemple: `.create <Nom du service>` **(only admin)**'},
	    { name: 'Ajouter des comptes', value: 'Exemple: `.add <mail:pass> <Nom du service>` **(only admin)**'},
        { name: 'Afficher le stock', value: 'Exemple: `.stock`' },
	)

       message.channel.send(embed) 
    }
    
module.exports.help = {
    name: 'help',
    aliases: []
}
 