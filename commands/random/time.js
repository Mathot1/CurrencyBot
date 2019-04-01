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
      description: 'Check UTC, PST or your local time'
    })

  }
  async run(message, args){
    //console.log(moment().utc().format("dddd, h:mm:ss a"));
    args = args.toUpperCase();

    if (args === `UTC`){
    message.channel.send(moment().utc().format("dddd, h:mm:ss a"));
    }
    else if (args === `PST`){
    message.channel.send(moment().utc().zone("-07:00").format("dddd, h:mm:ss a"));
    }
    else {
    message.channel.send(moment().format("dddd, h:mm:ss a"));
    }

}
}
  module.exports = TimeCommand;
