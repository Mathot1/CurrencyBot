//const err = require('./discord_modules/errormsg');

const Discord = require('discord.js-commando');
const money = require('discord-money');

class BuyCommand extends Discord.Command {

  constructor(client){
    super(client, {
      name: 'buy',
      group: 'random',
      memberName: 'buy',
      description: 'Use this to buy for example a role'
    })

  }

  async run(message, args){
    let mad = "<@349309820886843394>";
    var honda = "<@389052753621811202>";

    var pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

    let piece = args.split(" ");
    piece[1] = parseInt(piece[1]);
  //  console.log(piece[0]);
  //  console.log(piece[1]);
      args = parseInt(args);
let autor = "<@" + message.author.id + ">";;
let adm = message.guild.roles.find("name", "mad");
if (!message.member.roles.has(adm.id)) {
  return;
}
      console.log(args);
      switch (args) {
        case 1:
        const memberRole1 = message.member.guild.roles.find("name", "birb");

        if (message.member.roles.has(memberRole1.id)) {
          message.reply(`**You already have this role!**`);
        }
        else {
          money.fetchBal(autor).then((i) => {
          if (piece[1] > i.money){
            message.channel.send(autor + '** has not enough money!**');
          }
          else {
        money.updateBal(autor, -50, -50).then((i) => { // money.updateBal grabs the (userID, value) value being how much you want to add, and puts it into 'i'
          message.member.addRole(memberRole1);
          message.reply(`** bought a new role for** 50 **AssemblyCoins!**\n**New Balance:** ${i.money}`);

    })
  }
})
}
          break;

          case 2:
          const memberRole2 = message.member.guild.roles.find("name", "assembler");

          if (message.member.roles.has(memberRole2.id)) {
            message.reply(`**You already have this role!**`);
          }
            else {
              money.fetchBal(autor).then((i) => {
              if (piece[1] > i.money){
                message.channel.send(autor + '** has not enough money!**');
              }
              else {

          money.updateBal(autor, -100, -100).then((i) => { // money.updateBal grabs the (userID, value) value being how much you want to add, and puts it into 'i'.



            // message.member.guild.createRole({
            //   name: message.member.user.username,
            //   color: "0xffffff",
            //   permissions:[]
            // }).then(function(role){
            //   message.member.addRole(role);
            //
            // })

            message.member.addRole(memberRole2);
            message.reply(`** bought a new role for** 100 **AssemblyCoins!**\n**New Balance:** ${i.money}`);


      })
    }
  })
}
            break;

            case 3:
            const memberRole3 = message.member.guild.roles.find("name", "-,,``,.");

            if (message.member.roles.has(memberRole3.id)) {
              message.reply(`**You already have this role!**`);
            }
            else {
              money.fetchBal(autor).then((i) => {
              if (piece[1] > i.money){
                message.channel.send(autor + '** has not enough money!**');
              }
              else {
            money.updateBal(autor, -1000, -1000).then((i) => { // money.updateBal grabs the (userID, value) value being how much you want to add, and puts it into 'i'.
              message.member.addRole(memberRole3);
              message.reply(`** bought a new role for** 1000 **AssemblyCoins!**\n**New Balance:** ${i.money}`);

        })
      }
    })
  }
              break;
              case 4:
              money.fetchBal(autor).then((i) => {
              if (piece[1] > i.money){
                message.channel.send(autor + '** has not enough money!**');
              }
              else {

              money.updateBal(autor, -420, -420).then((i) => { // money.updateBal grabs the (userID, value) value being how much you want to add, and puts it into 'i'.

                message.reply(`** bought a new samplepack for** 420 **AssemblyCoins!**\n**New Balance:** ${i.money}`);
                message.channel.id = '543923383952343041';
                message.channel.send(autor + " Has bought a sihiu sample pack!");

          })
}})
                break;
                case 5:
                money.fetchBal(autor).then((i) => {
                if (piece[1] > i.money){
                  message.channel.send(autor + '** has not enough money!**');
                }
                else {
                money.updateBal(autor, -444, -444).then((i) => { // money.updateBal grabs the (userID, value) value being how much you want to add, and puts it into 'i'.

                  message.reply(`** bought a new samplepack for** 444 **AssemblyCoins!**\n**New Balance:** ${i.money}`);
                  message.channel.id = '543923383952343041';
                  message.channel.send(autor + " Has bought a ankou sample pack!");

            })
}
})
                break;

        default:
        message.reply('**Wrong item id! Check !shop list**');
        break;
      }






}

  }

  module.exports = BuyCommand;
