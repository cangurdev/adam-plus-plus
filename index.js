const Discord = require("discord.js");
const words = require("./adam.json");
const cuma = require("./cuma.json");
const token = require("./config.json");

const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  try {
    if (msg.content.startsWith("+adamm")) {
      let word = words[Math.floor(Math.random() * 31)];
      const taggedUser = msg.mentions.users.first();
      msg.channel.send(`<@${taggedUser.id}>` + " " + word);
    } else if (msg.content === "+cuma") {
      let cumaMessage = cuma[Math.floor(Math.random() * 11)];
      msg.channel.send("" + cumaMessage);
    } else if (msg.content === "+yüzde") {
      let percentage = Math.floor(Math.random() * 100);
      msg.reply("Hesaplamalarıma göre %" + percentage + " adamsın");
    }
  } catch (error) {
    msg.channel.send("Buralarda bir adam göremedim.");
  }
});

client.login(token.token);
