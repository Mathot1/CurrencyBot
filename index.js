

    const hapl = require('./err.js');
    const Discord = require('discord.js-commando');
    const money = require('discord-money');
    const moment = require('moment');
    // Define client for Discord
    const client = new Discord.Client();

    client.registry.registerGroup('random', 'AssemblyCoin');
    client.registry.registerDefaults();
    client.registry.registerCommandsIn(__dirname + "/commands");
      // This runs when a message is recieved...
let prefix = '!';

        client.on("guildMemberAdd", function(member) {

          member.send("**Welcome to the Assemblyline server!**");
          let memberRole = member.guild.roles.find("name", "public");
          member.addRole(memberRole);
        });



    client.on('message', message => {

        // Prefix

      //  halp.getName();

        // Example: Getting a daily reward



    });





client.login(process.env.BOT_TOKEN);
