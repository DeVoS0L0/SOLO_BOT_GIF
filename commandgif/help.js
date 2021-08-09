const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var config = require('../config.json');

exports.run = async (client, message, args, msg) => {

const embed = new Discord.MessageEmbed()
    
.setColor('RANDOM') 
.setThumbnail(message.author.avatarURL({dynamic: "true"}))
.setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
.setAuthor(`Gif Net Help`)
.setDescription(`
**Info Commands**
\&avatar\` - \&about\` - \&ping\`
\&invite\` - \&server\` - \&support\`
\&slop\`\&FiiXAbout\'

**Gifs Commands**
\&boy\` - \&girl\` - \&baby\`
\&neon\` - \&sad\` - \&smoking\`
\&animal\` - \&anime\` - \&cuople\`
\&emoji\`\&hack\' \&com\`\&anoymoys\'
\&snap\`\&dev\'\&ghot\`\&flet\'
\&rules\`\&welcome\'
**Links**
**[Invite]() - [Server Support]()**
`)
    
message.channel.send({embed});
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['help'],
permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'rexuss',
  usage: 'h'
};
