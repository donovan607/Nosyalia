const Discord = require('discord.js')
const bot = new Discord.Client()


//Connexion et set de l'activité
bot.on('ready', function () {
    console.log(`Connexion effectué !`);
    bot.user.setActivity('Nosyalia !')
});

//Message Ping/Pong
bot.on('message', msg => {
    if (msg.content === '!ping') {
        msg.reply('Pong!');
    }
});

//Message ip du serveur
bot.on('message', msg => {
    if (msg.content === '!ip') {
        msg.channel.send('IP du serveur minecraft Nosyalia :' + '\n' + '```markdown\n' + 'play.nosyalia.tk\n' + '```' + 'Rejoins nous dès maintenant !');
    }
});

//Login du bot sur le serveur
 bot.login(process.env.TOKEN)

///Embed
const ce = require("embed-creator");
bot.on('message', msg => {
    if (msg.content === '!bvn') {
    msg.channel.send(ce(
        "#FEAFEA", {"name": "Fire", "icon_url": msg.author.displayAvatarURL(), "url": "https://www.google.com"}, "Title", "Description",
        [{"name": "Field 1", "value": "Value 1"},
        {"name": "Field 2", "value": "Value 2"}],
        {"text": "This is footer text!", "icon_url": msg.guild.iconURL()},
        {"thumbnail": msg.guild.iconURL(), "image": msg.author.displayAvatarURL()}, false
}});
