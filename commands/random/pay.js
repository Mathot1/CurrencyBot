

const Discord = require('discord.js-commando');
const money = require('discord-money');


class PayCommand extends Discord.Command {

  constructor(client){
    super(client, {
      name: 'pay',
      group: 'random',
      memberName: 'pay',
      description: 'use it to pay some money to someone'
    })

  }

  async run(message, args){

    var pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    let piece = args.split(" ");
    piece[1] = parseInt(piece[1]);
    let autor = "<@" + message.author.id + ">";
    //console.log(piece[0]);
    //console.log(autor);
    let adm = message.guild.roles.find("name", "mad");
    if (!message.member.roles.has(adm.id)) {
      return;
    }


    if (piece[0].charAt(2) == "!") {
      piece[0] = tablica[0].replace("!", "");
    }

    money.updateBal(autor, -piece[1], -piece[1]).then(
      (i) => { // money.updateBal grabs the (userID, value) value being how much you want to add, and puts it into 'i'.
        if (piece[1] < 1){
          message.reply('**Wrong number!**');
      }
      else if (errmsg != ""){
        message.reply('**You have not enough money!**');
        errmsg = "";
      }
      else {
        money.updateBal(piece[0], piece[1], piece[1]).then((i) => { // money.updateBal grabs the (userID, value) value being how much you want to add, and puts it into 'i'.
            if (piece[1] > 1){


            message.channel.send(`**${piece[0]} got** ${piece[1]} **AssemblyCoins!**\n**New Balance:** ${i.money}`);



          }
          else if (piece[1] == 1) {
              message.channel.send(`**${piece[0]} got** ${piece[1]} **AssemblyCoin!**\n**New Balance:** ${i.money}`);
          }
          else {
              message.reply('**Wrong number!**');
          }

      })
      }

  })




}
}
module.exports = PayCommand;
