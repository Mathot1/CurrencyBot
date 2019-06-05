
    const Discord = require('discord.js-commando');
    const money = require('discord-money');
    const moment = require('moment');
    // Define client for Discord
    const client = new Discord.Client();

    client.registry.registerGroup('random', 'AssemblyCoin');
    client.registry.registerGroup('admin', 'Admin');
    client.registry.registerDefaults();
    client.registry.registerCommandsIn(__dirname + "/commands");
      
let prefix = '!';
const time = setInterval(function(){ console.log('<<< 3 hours >>>');},10800000);

        client.on("guildMemberAdd", function(member) {

          //member.send("**Welcome to the Assemblyline server!**");
          let memberRole = member.guild.roles.find("name", "public");
          member.addRole(memberRole);
        });



    client.on('message', message => {


              
              if (message.content.toUpperCase() === `${prefix}TESTT`) {

               
                     // message.channel.send(`test`);



              }

    });





client.login("XXXXXXXXXXXXXXXXXXXXXXXXXXX");
