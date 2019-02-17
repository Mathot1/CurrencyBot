

const Discord = require('discord.js-commando');
const money = require('discord-money');


class GiveCommand extends Discord.Command {

  constructor(client){
    super(client, {
      name: 'give',
      group: 'random',
      memberName: 'give',
      description: '**ADMIN ONLY** use to give someone cash'
    })

  }

  async run(message, args){

    let adm = message.guild.roles.find("name", "honda");
    if (!message.member.roles.has(adm.id)) {
	return;
    }
    else {



    var pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    let piece = args.split(" ");
    piece[1] = parseInt(piece[1]);
  //  console.log(piece[0]);
  //  console.log(piece[1]);
  if (piece[0].charAt(2) == "!") {
    piece[0] = piece[0].replace("!", "");
  }


    money.updateBal(piece[0], piece[1], 0).then((i) => { // money.updateBal grabs the (userID, value) value being how much you want to add, and puts it into 'i'.
        if (piece[1] > 1){

        message.channel.send(`**${piece[0]} got** ${piece[1]} **AssemblyCoins!**\n**New Balance:** ${i.money}`);
      }
      else if (piece[1] == 1) {
          message.channel.send(`**${piece[0]} got** ${piece[1]} **AssemblyCoin!**\n**New Balance:** ${i.money}`);
      }
      else if (piece[1] < 1) {
          message.reply('**Wrong number!**');
      }

  })
}

}
}
module.exports = GiveCommand;
