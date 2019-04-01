const Discord = require('discord.js-commando');
const money = require('discord-money');
const moment = require('moment');
const ms = require('parse-ms');
let cooldown = new Set();
let cdseconds = 58800;
global.coldown;
class TimeCommand extends Discord.Command {

  constructor(client){
    super(client, {
      name: 'time',
      group: 'random',
      memberName: 'time',
      description: 'Check UTC time'
    })

  }

  async run(message, args){
    if (args.content.toUpperCase() === `PST`){
      moment.utc("dddd, h:mm:ss a");
    }
    else if (args.content.toUpperCase() === `PST`){
      moment.pst("dddd, h:mm:ss a");
    }
    else {
      moment("dddd, h:mm:ss a");
    }

}
}
  module.exports = TimeCommand;
