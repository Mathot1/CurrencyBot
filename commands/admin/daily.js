const Discord = require('discord.js-commando');
const money = require('discord-money');
const moment = require('moment');
const ms = require('parse-ms');
let cooldown = new Set();
let cdseconds = 58800;
global.coldown;
class WeeklyCommand extends Discord.Command {

  constructor(client){
    super(client, {
      name: 'daily',
      group: 'admin',
      memberName: 'daily',
      description: 'Use it to receive daily amount of money'
    })

  }

  async run(message, args){
    let autor = "<@" + message.author.id + ">";
    let adm = message.guild.roles.find("name", "honda");
    if (!message.member.roles.has(adm.id)) {

    }
    else {
              if (money[message.author.username + message.guild.name] != moment().format('L')) {
                  money[message.author.username + message.guild.name] = moment().format('L')
                  money.updateBal(autor, 20).then((i) => { // The daily ends of the day, so everyday they can get a daily bonus, if they missed it, they can't get it back again.
                      message.channel.send({embed: {
                          color: 3447003,
                          description: 'Recieved your **20** \`!daily`\. Check \`!balance\`.',
                          author: {
                              name: `${message.author.username}#${message.author.discriminator}`,
                              icon_url: message.author.avatarURL
                          }
                      }});
                  })
              } else {
                  message.channel.send({embed: {
                      color: 3447003,
                      description: 'You already recieved your \`!daily`\. Check later **' + moment().endOf('day').fromNow() + '**.', // When you got your daily already, this message will show up.
                      author: {
                          name: `${message.author.username}#${message.author.discriminator}`,
                          icon_url: message.author.avatarURL
                      }
                  }});
              }

}
}
}
  module.exports = DailyCommand;
