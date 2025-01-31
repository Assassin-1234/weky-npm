// DJSv12

const Discord = require('discord.js');
const client = new Discord.Client();
require('discord-buttons')(client);
const Calculator = require('../src/v12/Calculator');
require('@weky/inlinereply');
client.on('ready', async () => {
	console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', async (message) => {
	if(message.content === '!calculator') {
		await Calculator({
			message: message,
			embed: {
				title: 'Calculator | Weky Development',
				color: '#5865F2',
				footer: '©️ Weky Development',
				timestamp: true,
			},
			disabledQuery: 'Calculator is disabled!',
			invalidQuery: 'The provided equation is invalid!',
			othersMessage: 'Only <@{{author}}> can use the buttons!',
		});
	}
});

client.login('');

// DJSv13
/** const Discord = require('discord.js');
const client = new Discord.Client();
const { Calculator } = require('../index');

client.on('ready', async () => {
	console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
	if (message.content === '!calculator') {
		await Calculator({
			message: message,
			embed: {
				title: 'Calculator | Weky Development',
				color: '#5865F2',
				footer: '©️ Weky Development',
				timestamp: true,
			},
			disabledQuery: 'Calculator is disabled!',
			invalidQuery: 'The provided equation is invalid!',
			othersMessage: 'Only <@{{author}}> can use the buttons!',
		});
	}
});

client.login('DISCORD_BOT_TOKEN');
*/