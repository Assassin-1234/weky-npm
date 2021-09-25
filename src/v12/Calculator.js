const math = require('mathjs');
const Discord = require('discord.js');
const { MessageButton } = require('discord-buttons');
const {
	randomHexColor,
	// checkForUpdates,
	getRandomString,
	GetButtonsV12,
} = require('../../functions/function');
module.exports = async (options) => {
	// checkForUpdates();
	if (!options.message) {
		throw new Error('Weky Error: message argument was not specified.');
	}
	if (typeof options.message !== 'object') {
		throw new TypeError('Weky Error: Invalid Discord Message was provided.');
	}

	if (!options.embed) options.embed = {};
	if (typeof options.embed !== 'object') {
		throw new TypeError('Weky Error: embed must be an object.');
	}

	if (!options.embed.title) {
		options.embed.title = 'Calculator | Weky Development';
	}
	if (typeof options.embed.title !== 'string') {
		throw new TypeError('Weky Error: embed title must be a string.');
	}

	if (!options.embed.color) options.embed.color = randomHexColor();
	if (typeof options.embed.color !== 'string') {
		throw new TypeError('Weky Error: embed color must be a string.');
	}

	if (!options.embed.footer) {
		options.embed.footer = '©️ Weky Development';
	}
	if (typeof options.embed.footer !== 'string') {
		throw new TypeError('Weky Error: embed footer must be a string.');
	}

	if (!options.embed.timestamp) options.embed.timestamp = true;
	if (typeof options.embed.timestamp !== 'boolean') {
		throw new TypeError('Weky Error: timestamp must be a boolean.');
	}

	if (!options.disabledQuery) {options.disabledQuery = 'Calculator is disabled!';}
	if (typeof options.disabledQuery !== 'string') {
		throw new TypeError('Weky Error: disabledQuery must be a string.');
	}

	if (!options.invalidQuery) {
		options.invalidQuery = 'The provided equation is invalid!';
	}
	if (typeof options.invalidQuery !== 'string') {
		throw new TypeError('Weky Error: invalidQuery must be a string.');
	}

	if (!options.othersMessage) {
		options.othersMessage = 'Only <@{{author}}> can use the buttons!';
	}
	if (typeof options.othersMessage !== 'string') {
		throw new TypeError('Weky Error: othersMessage must be a string.');
	}

	// Button ID generator
	async function generateID() {
		return getRandomString(5) + '-' + getRandomString(5);
	}
	let str = ' ';
	let stringify = '```\n' + str + '\n```';
	const calc_irrc = await generateID();
	const empty_1 = await generateID();
	const empty_2 = await generateID();
	const calc_percent = await generateID();
	const calculator_7 = await generateID();
	const calculator_8 = await generateID();
	const calculator_9 = await generateID();
	const calculator_1 = await generateID();
	const calculator_2 = await generateID();
	const calculator_3 = await generateID();
	const calculator_4 = await generateID();
	const calculator_5 = await generateID();
	const calculator_0 = await generateID();
	const calculator_6 = await generateID();
	const calculator_e1 = await generateID();
	const calculator_e2 = await generateID();
	const calculator_dot = await generateID();
	const calculator_plus = await generateID();
	const calculator_star = await generateID();
	const calculator_equal = await generateID();
	const calculator_clear = await generateID();
	const calculator_minus = await generateID();
	const calculator_devide = await generateID();
	const calculator_backspace = await generateID();
	const calculator_uppercase = await generateID();

	// Buttons
	const ac = await GetButtonsV12('AC', calculator_clear, 'red');
	const e1 = await GetButtonsV12('(', calculator_e1, 'blurple');
	const e2 = await GetButtonsV12(')', calculator_e2, 'blurple');
	const uppercase = await GetButtonsV12('^', calculator_uppercase, 'blurple');
	const seven = await GetButtonsV12('7', calculator_7, 'gray');
	const eight = await GetButtonsV12('8', calculator_8, 'gray');
	const nine = await GetButtonsV12('9', calculator_9, 'gray');
	const slash = await GetButtonsV12('÷', calculator_devide, 'blurple');
	const four = await GetButtonsV12('4', calculator_4, 'gray');
	const five = await GetButtonsV12('5', calculator_5, 'gray');
	const six = await GetButtonsV12('6', calculator_6, 'gray');
	const star = await GetButtonsV12('x', calculator_star, 'blurple');
	const one = await GetButtonsV12('1', calculator_1, 'gray');
	const two = await GetButtonsV12('2', calculator_2, 'gray');
	const three = await GetButtonsV12('3', calculator_3, 'gray');
	const minus = await GetButtonsV12('-', calculator_minus, 'blurple');
	const zero = await GetButtonsV12('0', calculator_0, 'gray');
	const dot = await GetButtonsV12('.', calculator_dot, 'blurple');
	const equal = await GetButtonsV12('=', calculator_equal, 'green');
	const plus = await GetButtonsV12('+', calculator_plus, 'blurple');
	const backspace = await GetButtonsV12('⌫', calculator_backspace, 'red');
	const destroy = await GetButtonsV12('DC', calc_irrc, 'red');
	const empty1 = await GetButtonsV12('\u200b', empty_1, 'gray');
	const empty2 = await GetButtonsV12('\u200b', empty_2, 'gray');
	const percent = await GetButtonsV12('%', calc_percent, 'blurple');

	// Lock
	const qac = await GetButtonsV12('AC', calculator_clear, 'red');
	const qe1 = await GetButtonsV12('(', calculator_e1, 'blurple');
	const qe2 = await GetButtonsV12(')', calculator_e2, 'blurple');
	const quppercase = await GetButtonsV12('^', calculator_uppercase, 'blurple');
	const qseven = await GetButtonsV12('7', calculator_7, 'gray');
	const qeight = await GetButtonsV12('8', calculator_8, 'gray');
	const qnine = await GetButtonsV12('9', calculator_9, 'gray');
	const qslash = await GetButtonsV12('÷', calculator_devide, 'blurple');
	const qfour = await GetButtonsV12('4', calculator_4, 'gray');
	const qfive = await GetButtonsV12('5', calculator_5, 'gray');
	const qsix = await GetButtonsV12('6', calculator_6, 'gray');
	const qstar = await GetButtonsV12('x', calculator_star, 'blurple');
	const qone = await GetButtonsV12('1', calculator_1, 'gray');
	const qtwo = await GetButtonsV12('2', calculator_2, 'gray');
	const qthree = await GetButtonsV12('3', calculator_3, 'gray');
	const qminus = await GetButtonsV12('-', calculator_minus, 'blurple');
	const qzero = await GetButtonsV12('0', calculator_0, 'gray');
	const qdot = await GetButtonsV12('.', calculator_dot, 'blurple');
	const qequal = await GetButtonsV12('=', calculator_equal, 'green');
	const qplus = await GetButtonsV12('+', calculator_plus, 'blurple');
	const qbackspace = await GetButtonsV12('⌫', calculator_backspace, 'red');
	const qdestroy = await GetButtonsV12('DC', calculator_devide, 'red');
	const qpercent = await GetButtonsV12('%', calc_percent, 'blurple');

	// ----------------------------------------------------------------------
	const embed = new Discord.MessageEmbed()
		.setTitle(options.embed.title)
		.setDescription(stringify)
		.setColor(options.embed.color)
		.setFooter(options.embed.footer);
	if (options.embed.timestamp) {
		embed.setTimestamp();
	}
	const msg = await options.message.inlineReply(embed);
	msg.edit({
		embed: embed,
		components: [
			{
				type: 1,
				components: [e1, e2, uppercase, percent, ac],
			},
			{
				type: 1,
				components: [seven, eight, nine, slash, destroy],
			},
			{
				type: 1,
				components: [four, five, six, star, backspace],
			},
			{
				type: 1,
				components: [one, two, three, minus, empty1],
			},
			{
				type: 1,
				components: [dot, zero, equal, plus, empty2],
			},
		],
	});
	async function edit() {
		const _embed = new Discord.MessageEmbed()
			.setTitle(options.embed.title)
			.setDescription(stringify)
			.setColor(options.embed.color)
			.setFooter(options.embed.footer);
		if (options.embed.timestamp) {
			_embed.setTimestamp();
		}
		msg.edit({
			embed: _embed,
			components: [
				{
					type: 1,
					components: [e1, e2, uppercase, percent, ac],
				},
				{
					type: 1,
					components: [seven, eight, nine, slash, destroy],
				},
				{
					type: 1,
					components: [four, five, six, star, backspace],
				},
				{
					type: 1,
					components: [one, two, three, minus, empty1],
				},
				{
					type: 1,
					components: [dot, zero, equal, plus, empty2],
				},
			],
		});
	}
	async function lock() {
		const _embed = new Discord.MessageEmbed()
			.setTitle(options.embed.title)
			.setColor(options.embed.color)
			.setDescription(stringify)
			.setFooter(options.embed.footer);
		if (options.embed.timestamp) {
			_embed.setTimestamp();
		}
		msg.edit({
			embed: _embed,
			components: [
				{
					type: 1,
					components: [qe1, qe2, quppercase, qpercent, qac],
				},
				{
					type: 1,
					components: [qseven, qeight, qnine, qslash, qdestroy],
				},
				{
					type: 1,
					components: [qfour, qfive, qsix, qstar, qbackspace],
				},
				{
					type: 1,
					components: [qone, qtwo, qthree, qminus, empty1],
				},
				{
					type: 1,
					components: [qdot, qzero, qequal, qplus, empty2],
				},
			],
		});
	}
	const calc = msg.createButtonCollector((fn) => fn);

	calc.on('collect', async (btn) => {
		if (btn.clicker.user.id !== options.message.author.id) {
			return btn.reply.send(
				options.othersMessage.replace(
					'{{author}}',
					options.message.author.id,
				),
				true,
			);
		}
		btn.reply.defer();
		switch (btn.id) {
		case calculator_0:
			str += '0';
			stringify = '```\n' + str + '\n```';
			edit();
			break;
		case calculator_1:
			str += '1';
			stringify = '```\n' + str + '\n```';
			edit();
			break;
		case calculator_2:
			str += '2';
			stringify = '```\n' + str + '\n```';
			edit();
			break;
		case calculator_3:
			str += '3';
			stringify = '```\n' + str + '\n```';
			edit();
			break;
		case calculator_4:
			str += '4';
			stringify = '```\n' + str + '\n```';
			edit();
			break;
		case calculator_5:
			str += '5';
			stringify = '```\n' + str + '\n```';
			edit();
			break;
		case calculator_6:
			str += '6';
			stringify = '```\n' + str + '\n```';
			edit();
			break;
		case calculator_7:
			str += '7';
			stringify = '```\n' + str + '\n```';
			edit();
			break;
		case calculator_8:
			str += '8';
			stringify = '```\n' + str + '\n```';
			edit();
			break;
		case calculator_9:
			str += '9';
			stringify = '```\n' + str + '\n```';
			edit();
			break;
		case calculator_plus:
			str += '+';
			stringify = '```\n' + str + '\n```';
			edit();
			break;
		case calculator_minus:
			str += '-';
			stringify = '```\n' + str + '\n```';
			edit();
			break;
		case calculator_devide:
			str += '/';
			stringify = '```\n' + str + '\n```';
			edit();
			break;
		case calculator_uppercase:
			str += '^';
			stringify = '```\n' + str + '\n```';
			edit();
			break;
		case calculator_star:
			str += '*';
			stringify = '```\n' + str + '\n```';
			edit();
			break;
		case calculator_dot:
			str += '.';
			stringify = '```\n' + str + '\n```';
			edit();
			break;
		case calculator_clear:
			str = ' ';
			stringify = '```\n' + str + '\n```';
			edit();
			break;
		case calculator_e1:
			str += '(';
			stringify = '```\n' + str + '\n```';
			edit();
			break;
		case calculator_e2:
			str += ')';
			stringify = '```\n' + str + '\n```';
			edit();
			break;
		case calculator_backspace:
			if (
				str === ' ' ||
							str === '' ||
							str === null ||
							str === undefined
			) {
				return;
			} else {
				str = str.split('');
				str.pop();
				str = str.join('');

				stringify = '```\n' + str + '\n```';
				edit();
				break;
			}
		case calc_percent:
			str += '%';
			stringify = '```\n' + str + '\n```';
			edit();
			break;
		}

		if (btn.id === calculator_equal) {
			if (str === ' ' || str === '' || str === null || str === undefined) {
				return;
			} else {
				try {
					str += ' = ' + math.evaluate(str);
					stringify = '```\n' + str + '\n```';
					edit();
					str = ' ';
					stringify = '```\n' + str + '\n```';
				} catch (e) {
					str = options.invalidQuery;
					stringify = '```\n' + str + '\n```';
					edit();
					str = ' ';
					stringify = '```\n' + str + '\n```';
				}
			}
		} else if (btn.id === calc_irrc) {
			str = options.disabledQuery;
			stringify = '```\n' + str + '\n```';
			edit();
			calc.stop();
			lock();
		}
	});
};