const Discord = require('discord.js');
const bot = new Discord.Client();

var guesses;
var num = 0;


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
            message.reply('You got it! Only took ' + guesses + ' tries.');
            message.reply('Picking a random number between 1 and 100');
            num = Math.floor((Math.random() * 100) + 1);
            guesses = 0;
        }
        else if(mes[1] < num)
        {
            message.reply('Too low');
            guesses++;
        }
        else if(mes[1] > num)
        {
            message.reply('Too high');
            guesses++;
        }
    }

});




bot.login('MzkyNTMwNzE1MTk3MTc3ODU2.DRokTA.nE1FgSdgv6k07wxz435IEibvQQc');