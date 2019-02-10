const Discord = require('discord.js-commando');
const client = new Discord.Client();

class TestCommand extends Discord.Command {

  constructor(client){
    super(client, {
      name: 'test',
      group: 'random',
      memberName: 'test',
      description: 'test command'
    })

  }

  async run(message, args){
    let mad = 543923383952343041;
    console.log(mad);
    let adm = message.guild.roles.find("name", "mad");
    if (!message.member.roles.has(adm.id)) {
      return;
    }
    message.delete();
    //message.channels.get(543923383952343041).send('My Message');
    
  }


}
module.exports = TestCommand;
