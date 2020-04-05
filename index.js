const Discord = require('discord.js');
const bot = new Discord.Client();

var guesses;
var num = 0;
var channel;

var info = require('./info.json');


bot.on('message', (message) => {
    var mes = message.content.split(" ");
    if(message.content == '!setnumber') {
        message.reply('Do !setnumber <channel> <number>');
        num = mes[2];
        channel = mes[1];
        guesses = 0;
        message.reply('Channel set up completely' + channel + 'number is' num);
    }
       if(mes[0] == num)
        {
            guesses++;
            message.reply('You got it! Only took ' + guesses + ' tries.');
        }
        else if(mes[0] < num)
        {
            guesses++;
        }
        else if(mes[0] > num)
        {
            guesses++;
        }
    });




bot.login(info.id);
