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
bot.login('NDc4NTMzNTgwMzg2MDc0NjI0.DlO2PQ.yCpBJvF47EMXIPnT2Ed2Br9IGjc')
