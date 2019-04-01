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
      name: 'weekly',
      group: 'random',
      memberName: 'weekly',
      description: 'Use it to receive weekly amount of money'
    })

  }

  async run(message, args){
    let mod = message.guild.roles.find("name", "moddomod");//5
    let og = message.guild.roles.find("name", "OG");//5
    let helper = message.guild.roles.find("name", "IIIIIIIIIIIIIIII");//3
    let birb = message.guild.roles.find("name", "birb");//3
    let assembler = message.guild.roles.find("name", "assembler"); //9
    let redd = message.guild.roles.find("name", "-,,``,."); //27

    let autor = "<@" + message.author.id + ">";
    let adm = message.guild.roles.find("name", "honda");
    let adm2 = message.guild.roles.find("name", "mad");



      if (message.member.roles.has(redd.id)){ //kropka przecinek kropka 27

        if (money[message.author.username + message.guild.name] != moment().format('dddd')) {
            money[message.author.username + message.guild.name] = moment().format('dddd')
            money.updateBal(autor, 27).then((i) => { // The daily ends of the day, so everyday they can get a daily bonus, if they missed it, they can't get it back again.
                message.channel.send({embed: {
                    color: 3447003,
                    description: 'Recieved your **27** \`!weekly`\ assemblyCoins! Check \`!balance\`.',
                    author: {
                        name: `${message.author.username}#${message.author.discriminator}`,
                        icon_url: message.author.avatarURL
                    }
                }});
            });
        } else {
            message.channel.send({embed: {
                color: 3447003,
                description: 'You already recieved your \`!weekly`\. Check later.', // When you got your daily already, this message will show up.
                author: {
                    name: `${message.author.username}#${message.author.discriminator}`,
                    icon_url: message.author.avatarURL
                }
            }});
        }
}

    else if (message.member.roles.has(assembler.id)){ //assembler 9

        if (money[message.author.username + message.guild.name] != moment().format('dddd')) {
            money[message.author.username + message.guild.name] = moment().format('dddd')
            money.updateBal(autor, 9).then((i) => { // The daily ends of the day, so everyday they can get a daily bonus, if they missed it, they can't get it back again.
                message.channel.send({embed: {
                    color: 3447003,
                    description: 'Recieved your **9** \`!weekly`\ assemblyCoins! Check \`!balance\`.',
                    author: {
                        name: `${message.author.username}#${message.author.discriminator}`,
                        icon_url: message.author.avatarURL
                    }
                }});
            });
        } else {
            message.channel.send({embed: {
                color: 3447003,
                description: 'You already recieved your \`!weekly`\. Check later.', // When you got your daily already, this message will show up.
                author: {
                    name: `${message.author.username}#${message.author.discriminator}`,
                    icon_url: message.author.avatarURL
                }
            }});
        }
}

        else if (message.member.roles.has(mod.id) ||message.member.roles.has(og.id)){ //mod i og 5

              if (money[message.author.username + message.guild.name] != moment().format('dddd')) {
                  money[message.author.username + message.guild.name] = moment().format('dddd')
                  money.updateBal(autor, 5).then((i) => { // The daily ends of the day, so everyday they can get a daily bonus, if they missed it, they can't get it back again.
                      message.channel.send({embed: {
                          color: 3447003,
                          description: 'Recieved your **5** \`!weekly`\ assemblyCoins! Check \`!balance\`.',
                          author: {
                              name: `${message.author.username}#${message.author.discriminator}`,
                              icon_url: message.author.avatarURL
                          }
                      }});
                  });
              } else {
                  message.channel.send({embed: {
                      color: 3447003,
                      description: 'You already recieved your \`!weekly`\. Check later.', // When you got your daily already, this message will show up.
                      author: {
                          name: `${message.author.username}#${message.author.discriminator}`,
                          icon_url: message.author.avatarURL
                      }
                  }});
              }
}
else if (message.member.roles.has(helper.id) ||message.member.roles.has(birb.id)){ //birb i helper 3

  if (money[message.author.username + message.guild.name] != moment().format('dddd')) {
      money[message.author.username + message.guild.name] = moment().format('dddd')
      money.updateBal(autor, 3).then((i) => { // The daily ends of the day, so everyday they can get a daily bonus, if they missed it, they can't get it back again.
          message.channel.send({embed: {
              color: 3447003,
              description: 'Recieved your **3** \`!weekly`\ assemblyCoins! Check \`!balance\`.',
              author: {
                  name: `${message.author.username}#${message.author.discriminator}`,
                  icon_url: message.author.avatarURL
              }
          }});
      });
  } else {
      message.channel.send({embed: {
          color: 3447003,
          description: 'You already recieved your \`!weekly`\. Check later.', // When you got your daily already, this message will show up.
          author: {
              name: `${message.author.username}#${message.author.discriminator}`,
              icon_url: message.author.avatarURL
          }
      }});
  }
}



}
}

  module.exports = WeeklyCommand;
