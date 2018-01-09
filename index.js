const Discord = require('discord.js');
const bot = new Discord.Client();

var guesses;
var num = 0;

var info = require('./info.json');


bot.on('message', (message) => {
    var mes = message.content.split(" ");
    if(message.content == '!pick') {
        message.reply('Picking a random number between 1 and 100');
        num = Math.floor((Math.random() * 100) + 1);
        guesses = 0;
    }
    if(mes[0] == '!guess') {
        if (num == 0)
        {
            message.reply('Picking a random number between 1 and 100');
            num = Math.floor((Math.random() * 100) + 1);
            guesses = 0;
        }
        else if(mes[1] == num)
        {
            guesses++;
            message.reply('You got it! Only took ' + guesses + ' tries.');
            message.reply('Picking a random number between 1 and 100');
            num = Math.floor((Math.random() * 100) + 1);
            guesses = 0;
        }
        else if(mes[1] < num)
        {
            message.reply(mes[1] + ' is too low');
            guesses++;
        }
        else if(mes[1] > num)
        {
            message.reply(mes[1] + ' is too high');
            guesses++;
        }
    }

});




bot.login(info.id);