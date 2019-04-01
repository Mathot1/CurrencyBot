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


    let czas = 604800;


    let autor = "<@" + message.author.id + ">";
    let hajsik = money[autor];

    args = args.toUpperCase();

    if (args === "info"){ //zmien na duze

      message.channel.send({"embed":{
      title:"Item shop",
      color: 3442003,
      fields:[{
      name: "**Role name**",
      value:  "3\n5\n9\n27",
      inline:true

    },
    {
     name:"**Weekly assemblyBoins**",
     value: birb +" and"+ helper+"\n" + mod + " and" + og+"\n" + assembler+"\n" + redd,
     inline:true
   }
  ]


  }})
  return;
    }

    function zxp (x){
      if (money[autor] === undefined){
        money[autor] = moment().format('YYYYMMDD');
      }
console.log(money[autor] + " 1");
//undefined
      if (money[autor] <= moment().format('YYYYMMDD')) { //pomysl wszystko na liczby i wieksze rowne moment 7 days after
          console.log(money[autor] + " 2");
          money[autor] = moment().add(7, 'days').format('YYYYMMDD');
          console.log(money[autor] + " 3");
          money.updateBal(autor, x).then((i) => { // The daily ends of the day, so everyday they can get a daily bonus, if they missed it, they can't get it back again.
              message.channel.send({embed: {
                  color: 3447003,
                  description: 'Recieved your **'+ x +'** \`!weekly`\. Check \`!balance\`.',
                  author: {
                      name: `${message.author.username}#${message.author.discriminator}`,
                      icon_url: message.author.avatarURL
                  }
              }});
          })
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

if (message.member.roles.has(redd.id)){
zxp(27);

}
else if (message.member.roles.has(assembler.id)){
zxp(9);

}
else if (message.member.roles.has(mod.id) || message.member.roles.has(og.id)){
zxp(5);
}
else if (message.member.roles.has(birb.id) || message.member.roles.has(helper.id)){
zxp(3);
}


}
}

  module.exports = WeeklyCommand;
