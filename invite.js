const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  description: "To add/invite the bot to your server",
  execute(message, args) {
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 70282305;

    let invite = new MessageEmbed()
      .setTitle(`**The bot is from  developer Silent**`)
      .setDescription(
        `**The bot link from the developer silent** \n\n [Invite Link](https://discord.com/api/oauth2/authorize?client_id=735952303907143720&permissions=8&scope=bot)`
      )
      .setURL(
        `https://discord.com/api/oauth2/authorize?client_id=735952303907143720&permissions=8&scope=bot`
      )
      .setColor("RANDOM");
    return message.channel.send(invite);
  }
};
