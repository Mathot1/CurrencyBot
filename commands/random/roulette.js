

const Discord = require('discord.js-commando');
const money = require('discord-money');


class RouletteCommand extends Discord.Command {

  constructor(client){
    super(client, {
      name: 'roulette',
      group: 'random',
      memberName: 'roulette',
      description: 'Are you lucky enough? Avaible in the future'
    })

  }

  async run(message, args){
    let adm = message.guild.roles.find("name", "mad");
    if (!message.member.roles.has(adm.id)) {
	return;
    }
    var pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    let piece = args.split(" ");
    piece[0] = parseInt(piece[0]);
    let gamble = Math.random()*100;
    gamble = parseInt(gamble);
    let win = piece[0]*2;
    let autor = "<@" + message.author.id + ">";;



money.fetchBal(autor).then((i) => {
  if (piece[0] > i.money){
    message.channel.send(autor + '** has not enough money!**');
  }
  else {
    if (gamble >30){
      money.updateBal(autor, -piece[0], -piece[0]).then((i) => { // money.updateBal grabs the (userID, value) value being how much you want to add, and puts it into 'i'
        message.member.addRole(memberRole1);
        message.reply(`** lost **` + piece[0] + `** AssemblyCoins.**\n**New Balance:** ${i.money}`);

    })
      message.channel.send(autor + '** has not enough money!**');
    }
    else {
  money.updateBal(autor, win, win).then((i) => { // money.updateBal grabs the (userID, value) value being how much you want to add, and puts it into 'i'
    message.member.addRole(memberRole1);
    message.reply(`** won **`+ win +` **AssemblyCoins!**\n**New Balance:** ${i.money}`);

})

}
}

})
}
}
module.exports = RouletteCommand;
