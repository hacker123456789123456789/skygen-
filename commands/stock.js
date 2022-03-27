const Discord = require('discord.js')
module.exports.run = async (bot, message, args, gen) => {
/*let embedTemp = new Discord.MessageEmbed()
.setTitle('Stock')
.setColor(bot.color);*/
gen.calculateStock()
setTimeout(() => {
const stock = gen.stock
let stockArr=[];
let embed = [new Discord.MessageEmbed()
.setTitle('Stock')
.setColor(bot.color)];
for(const type of stock) {
stockArr[stockArr.length]=[type[0], type[1]];
}
let embedFields=0;
for(let i=0;i<stockArr.length;i++){embedFields++;if(embedFields>24){if(!embed[embed.length])embed[embed.length]=new Discord.MessageEmbed().setTitle('Stock').setColor(bot.color);embedFields=0;}
embed[embed.length-1].addField(stockArr[i][0],stockArr[i][1],true);
}
for(let i=0;i<embed.length;i++){
message.channel.send(embed[i])
} 
}, 200);
}
module.exports.help = {
name: 'stock',
aliases: []
}
