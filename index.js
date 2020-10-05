const Discord = require("discord.js");
const words = require("./adam.json");
const cuma = require("./cuma.json");
const nargile = require("./nargile.json");
const config = require("./config.json");

const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  try {
    if (msg.content.startsWith("+adamm")) {
      let word = words[Math.floor(Math.random() * 31)];
      const taggedUser = msg.mentions.users.first();
      msg.channel.send(`<@${taggedUser.id}> ${word}`);
    } else if (msg.content === "+cuma") {
      let cumaMessage = cuma[Math.floor(Math.random() * 11)];
      msg.channel.send("" + cumaMessage);
    } else if (msg.content === "+yüzde") {
      let percentage = Math.floor(Math.random() * 100);
      msg.reply(`Hesaplamalarıma göre %${percentage} adamsın`);
    } else if (msg.content.startsWith("+ısmarla")) {
      let hookah = nargile[Math.floor(Math.random() * 24)];
      const taggedUser = msg.mentions.users.first();
      msg.channel.send(
        `<@${taggedUser.id}> adamlığına bir ${hookah} aromalı nargile söylüyorum `
      );
    } else if (msg.content === "+nargile") {
      let hookah = nargile[Math.floor(Math.random() * 24)];
      msg.reply(`Bugün ${hookah} aromalı nargile içmelisin `);
    } else if (msg.content === "+yardım") {
      const help = new Discord.MessageEmbed()
        .setTitle("Komutlar")
        .setColor(0xff0000).setDescription(`
      **+adamm @kullaniciadi** - Etiketlenen kullanıcının adamlığını över      

       **+cuma** - Cumanızı kutlar                                          
      
       **+yüzde** - Bilimsel hesaplamalar yaparak adamlık yüzdenizi söyler   
      
       **+nargile** - Bugün hangi nargileyi içeceğinize dair öneride bulunur   
      
       **+ısmarla @kullaniciadi** - Etiketlenen kullanıcının adamlığına bir nargile ısmarlar `);
      msg.reply(help);
    }
  } catch (error) {
    msg.channel.send("Buralarda bir adam göremedim.");
  }
});

client.login(config.token);
