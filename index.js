const express = require('express');
const app = express();
const port = 3000;
const prefix = "+";
app.get('/',   (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

// ==================== START BOT CODE ============""=======
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


  
client.commands = new Discord.Collection();

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
const guild = message.guild;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    console.log( args );
    const command = args.shift().toLowerCase();




//support

if(command === 'support')
message.channel.send({embed: {
title: "Support",
description: "Do you need support? \n Come to our Server | https://discord.gg/xHDUvEJG7T |"
}})

//serverinfo 

if(command === 'serverinfo') {

const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Server Info")
            .setImage(message.guild.iconURL)
            .setDescription(`${message.guild}'s information`)
            .addField("Owner", `The owner of this server is ${message.guild.owner}`)
            .addField("Member Count", `This server has ${message.guild.memberCount} members`)
            .addField("Emoji Count", `This server has ${message.guild.emojis.cache.size} emojis`)
            .addField("Roles Count", `This server has ${message.guild.roles.cache.size} roles`)
            

        message.channel.send(embed)
		}
   

//||||||||||||||||||||||||||||||||uptime||||||
if (command === 'uptime'){
     
     {   var totalSeconds = (client.uptime / 1000);
        var days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        var hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        var minutes = Math.floor(totalSeconds / 60);
        var seconds = Math.floor(totalSeconds % 60);

        const embed = new Discord.MessageEmbed()
           .setTitle(`Uptime`)
           .addField("Days", `${days}`)
           .addField("Hours", `${hours}`)
           .addField("Minutes", `${minutes}`)
           .addField("Seconds", `${seconds}`);
       message.channel.send(embed);
    
}}

//||||||||||||||||||||||||||  ||||||ping||||||


  if(command === 'ping')

 {  
    message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
  }







//||||||||||||||||||||||||||     |||||help|||||

if (command === 'help') {
     
          message.channel.send({embed: {
       color: 3447003,
       title: '**__Help__**',
       description: prefix + '**support** = Get a link from our Support Server \n **General** \n' + prefix + 'serverinfo = See infos about your Server \n'+ prefix + 'help = Gives you help \n' + prefix + 'ping = Gives you the ping from the Bot \n'+ prefix + 'uptime = Says the Uptime from the Bot \n **Admin** \n' + prefix + 'addrole <Name> = Adds a role \n' + prefix + 'delrole <name> = delete a role \n' + prefix + 'resetrole <name> = Reset a role ID \n **Fun** \n' + prefix + 'coinflip <Tails/Heads>= Choose a variable (Tails/Heads) \n' + prefix + 'dice <number> = choose a number (1-6) \n' + prefix + 'answer <question> = answer a yes or no question \n' + prefix + 'cat = An cat embed \n' + prefix + 'dog = a dog embed \n' + prefix + 'fish = a fish embed '
           
       
    
          }})};
 
//|||||||||||||||||||||||||||||del/addrole||||
	

if (command === 'delrole' || command === 'resetrole') {

         var i = 0,
        len = args.length;

           for( ; i < len; i += 1 ){



   var role = message.guild.roles.cache.find(role => role.name === args[i]);

   if (role === undefined) {console.log("Role not found:"  + args[i] )}
    else 
     role.delete('The role needed to go')
     .then(deleted => console.log(`Deleted role ${deleted.name}`))
     .catch(console.error);
 message.channel.send({embed: {
 color: 15158332,
 description: " Roles for " + args[i] + " deleted successfully" ,
 }});
 
           
           
           }


 
 
 }




   
   if (command === 'addrole' || command === 'resetrole') {

       var i = 0,
        len = args.length;

           for( ; i < len; i += 1 ){


   

     guild.roles.create({
     data: {
     name:  args[i],
     },
     
    });
 message.channel.send({embed: {
 color: 3066993,
 description: " Roles for " + args[i] + " created successfully" ,
 }});

  //.then(console.log)
  //.catch(console.error);
   }
   }
	 



//||||||||||||||||||||||||||||||coinflip|||||
if(command == 'coinflip')
{
    function doRandHT() {
var rand = ['HEADS!','TAILS!'];

return rand[Math.floor(Math.random()*rand.length)];
}

 const embed = {
"title": `Here is the winner!`,
"description": doRandHT(),
"color": 7584788,
};
message.channel.send({ embed });


};



//||||||||||||||||||||||||||||||||Dice|||||||
if(command == "dice")
{
      function doRandHT() {
var rand = ['1','2','3','4','5','6'];

return rand[Math.floor(Math.random()*rand.length)];
}

 const embed = {
"title": `Here is the winner!`,
"description": doRandHT(),
"color": 7584788,
};
message.channel.send({ embed });


};


//|||||||||||||||||||||||||||||||8Ball||||||

if(command === "answer")
{
      function doRandHT() {
var rand = ['Yes!','No!','Probably','I do not know', 'Ask your mother','This question is dificilt','in any case!','Ask again'];

return rand[Math.floor(Math.random()*rand.length)];
}

 const embed = {
"title": `Here is your answer!`,
"description": doRandHT(),
"color": 7584788,
};
message.channel.send({ embed });
}

//////////////////////////////Animals///////

if(command === 'cat')
message.channel.send({embed: {
title: "Cat",
description: "Meow, do you love cats🐱❤️?",
}})


if(command === 'dog')
message.channel.send({embed: { 
title: "Dog",
description: "Wuff wuff, do you love dogs 🐶?",
}})



if(command === 'fish')
message.channel.send({embed: {
title: "Fish",
description: "Blub Blub, do you like fishys 🐠"
}})



});

client.login("ODA0NjU3OTEzNzg3MzE4Mjc0.YBPiFA.LmESZK7Q1T_wlct2NtwC7bJobWY");


