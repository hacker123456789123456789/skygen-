const discord = require('discord.js'),
	fs = require('fs');
	
	exports.run = (client, message, args) => {
		if (!message.member.hasPermission('ADMINISTRATOR'))
			return message.channel.send('Nah you cant do that!');
		if (!message.attachments.size <= 0) {
			let stonks = args[0];
			if (!stonks)
				return message.channel.send('Which type i have to restock...');
			const restockable = './alts' + '/' + stonks + '.txt';

			var Attachment = message.attachments.array();
			let thing = Attachment[0];
			const { DownloaderHelper } = require('node-downloader-helper');
			const dl = new DownloaderHelper(thing.url, './alts');

			dl.on('end', file => {
				fs.readFile(`${file.filePath}`, 'utf8', (err, data) => {
					fs.appendFile(restockable, `${data}\n`, err => {});
					fs.unlink(file.filePath, function(err) {
						if (err) throw err;
						// if no error, file has been deleted successfully
					});

					let accs = data.split('\n').length;
					message.channel.send(
						` <a:success:899665242043338812>  | Restocked **${stonks.toUpperCase()}** with \`${accs}\` accounts!`
					);
				});
			});
			dl.start();
		} else {
			const restockable = './alts' + '/' + args[0] + '.txt';
			let accounts = args.slice(1).join(' ');
			let accountss = accounts.split('\n');
			if (!accounts) return message.channel.send('Please provide something.');
			fs.appendFile(restockable, `${accounts}\n`, err => {
				if (err)
					return message.channel.send(
						'Failed to restock the **__' +
							args[0].toUpperCase() +
							'__**. Please make sure that the file exists.'
					);
				if (!err)
					return message.channel.send(
						` <a:check:875142764906577940>  | Restocked **${
							accountss.length
						}** accounts for **__${args[0].toUpperCase()}__**`
					);
			});
		}
		setTimeout(() => {
			message.delete();
		}, 2000);
	};

module.exports.help = {
	name: 'restock',
	category: 'sd',
	cooldown: 0,
	description: 'sd',
	aliases: ['restonk', 'restocks', 'restonks']
}