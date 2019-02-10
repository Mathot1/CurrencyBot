

const Discord = require('discord.js-commando');
const money = require('discord-money');
const kup = require('./buy.js');

class ShopCommand extends Discord.Command {

  constructor(client){
    super(client, {
      name: 'shop',
      group: 'random',
      memberName: 'shop',
      description: 'Use this to show items in shop'
    })

  }

  async run(message, args){

    //let tablica = args.split(" ");
    let adm = message.guild.roles.find("name", "mad");
    if (!message.member.roles.has(adm.id)) {
      return;
    }
    if (args === "list") {
      const memberRole1 = message.member.guild.roles.find("name", "birb");
      const memberRole2 = message.member.guild.roles.find("name", "assembler");
      const memberRole3 = message.member.guild.roles.find("name", "-,,``,.");



    message.channel.send({"embed":{
    title:"Item shop",
    color: 3442003,
    fields:[{
    name: "**Item id**",
    value:  "1\n2\n3\n4\n5",
    inline:true

  },
  {
   name:"**Description**",
   value: memberRole1 + " role\n"+  memberRole2 +" role\n" + memberRole3 +" role\n sihiu sample pack \n ankou sample pack",
   inline:true
 },
{
  name:"**Price**",
  value: "50\n100\n1000\n420\n444",
  inline:true
}
]


}})


}
else {
message.channel.send('Use **!shop list** to view avaible items and **!buy** to buy item with specific id');
}
}

  }

  module.exports = ShopCommand;
