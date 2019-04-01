

const Discord = require('discord.js-commando');
const money = require('discord-money');


class PayCommand extends Discord.Command {

  constructor(client){
    super(client, {
      name: 'pay',
      group: 'random',
      memberName: 'pay',
      description: 'Use this to send coins to someone'
    })

  }

  async run(message, args){

    var pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    let piece = args.split(" ");
    piece[1] = parseInt(piece[1]);
    if (isNaN(piece[1])){
      message.reply('**Wrong number!**');
      return;
    }
    else if (piece[1] <1){
      message.reply('**Wrong number!**');
      return;
    }
    let autor = "<@" + message.author.id + ">";
    //console.log(piece[0]);
    //console.log(autor);



    if (piece[0].charAt(2) == "!") {
      piece[0] = piece[0].replace("!", "");
    }

    money.fetchBal(autor).then((i) => {
      if (piece[1] > i.money){
        message.channel.send(piece[0] + '** has not enough coins!**');
      }
      else {

    money.updateBal(autor, -piece[1], -piece[1]).then(
      (i) => { // money.updateBal grabs the (userID, value) value being how much you want to add, and puts it into 'i'.
        money.updateBal(piece[0], piece[1], piece[1]).then((i) => { // money.updateBal grabs the (userID, value) value being how much you want to add, and puts it into 'i'.
            if (piece[1] > 1){


            message.channel.send(`**${piece[0]} got** ${piece[1]} **assemblyCoins!**\n**New Balance:** ${i.money}`);



          }
          else if (piece[1] == 1) {
              message.channel.send(`**${piece[0]} got** ${piece[1]} **assemblyCoin!**\n**New Balance:** ${i.money}`);
          }

      })
      }

  )
}})



}
}
module.exports = PayCommand;
