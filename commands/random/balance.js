const Discord = require('discord.js-commando');
const money = require('discord-money');
const hapl = require('.../err.js');
class BalanceCommand extends Discord.Command {

constructor(client){
    super(client, {
      name: 'balance',
      group: 'random',
      memberName: 'money',
      description: 'Show your or @user bank account, usage: !bank or !bank @user'
    })

  }

  async run(message, args){
var pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
//console.log(pUser);
let sender = message.author;
let msg = message.content.toUpperCase();
let tablica = args.split(" ");
let autor = "<@" + message.author.id + ">";
  //console.log(tablica[0]);
  //console.log(autor);
  hapl.getName();
  //console.log(tablica[0].charAt(2));
  let adm = message.guild.roles.find("name", "mad");
  if (!message.member.roles.has(adm.id)) {
    return;
  }
  if (tablica[0].charAt(2) == "!") {
    tablica[0] = tablica[0].replace("!", "");
  }

  //console.log(tablica[0]);

  if (pUser == undefined) {
    console.log('Bez oznaczenia');
    money.fetchBal(autor).then((i) => {
        message.channel.send({"embed":{
        title:"Balance",
        color: 3202003,
        fields:[{
        name: "**Account holder**",
        value:  message.author.username,
        inline:true

      },
      {
       name:"**Bank account**",
       value: i.money,
       inline:true
       }]


  }})
  })
  }
  else {
    console.log('Z oznaczeniem');
    money.fetchBal(tablica[0]).then((i) => {
        message.channel.send({"embed":{
        title:"Balance",
        fields:[{
        name: "**Account holder**",
        value:  tablica[0],
        inline:true

      },
      {
       name:"**Bank account**",
       value: i.money,
       inline:true
       }]


  }})
  })
  }

}
}
module.exports = BalanceCommand;
