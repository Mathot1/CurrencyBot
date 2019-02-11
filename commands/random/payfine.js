//const err = require('./discord_modules/errormsg');
//const errormsg = require('errormsg');
const Discord = require('discord.js-commando');
const money = require('discord-money');


class PayFineCommand extends Discord.Command {

  constructor(client){
    super(client, {
      name: 'payfine',
      group: 'random',
      memberName: 'payfine',
      description: '**ADMIN ONLY** Use it to take money from someone'
    })

  }

  async run(message, args){

    let adm = message.guild.roles.find("name", "mad");
    if (!message.member.roles.has(adm.id)) {

    }
    else {


    var pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    let piece = args.split(" ");
    piece[1] = parseInt(piece[1]);


      if (piece[0].charAt(2) == "!") {
        piece[0] = piece[0].replace("!", "");
      }

    console.log(piece[0]);
    console.log(piece[1]);

    if (piece[0].charAt(2) == "!") {
      piece[0] = piece[0].replace("!", "");
    }

    money.fetchBal(piece[0]).then((i) => {
      if (piece[1] > i.money){
        message.channel.send(piece[0] + '** has not enough money!**');
      }
      else {



    money.updateBal(piece[0], -piece[1], -piece[1], "").then((i) => {



       if (piece[1] > 1){

        message.channel.send(`**${piece[0]} paid fine of** ${piece[1]} **AssemblyCoins!**\n**New Balance:** ${i.money}`);
      }
      else if (piece[1] == 1) {
          message.channel.send(`**${piece[0]} paid fine of** ${piece[1]} **AssemblyCoin!**\n**New Balance:** ${i.money}`);
        }
      else if (piece[1] < 1) {
          message.reply('**Wrong number!**');
      }

  })
}});
}

  }
  }
  module.exports = PayFineCommand;
