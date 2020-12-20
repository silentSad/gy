const db = require("quick.db")
module.exports = {
  name: "setrole",
  description: "role for music",
  async  execute (message, client , Discord) {
  const setdj = await db.fetch(`dj_${message.guild.id}`);
  let args = message.content.split(" ");
  var role = message.content
    .split(" ")
    .slice(1)
    .join(" ")
    .toLowerCase();
  var role1 = message.guild.roles.cache
    .filter(r => r.name.toLowerCase().indexOf(role) > -1)
    .first();
  if (!message.member.hasPermission("MANAGE_GUILD")) return;
  //if (!me.includes(message.author.id)) return;
  if (role === "none") {
    if (!setdj)
      return message.channel.send({
        embed: {
          color: embedColor,
          description: `You not choose a role to reset it.`
        }
      });
    db.delete(`dj_${message.guild.id}`);
    message.channel.send({
      embed: {
        color: embedSuccess,
        description: `dj role setting has been reset.`
      }
    });
  } else {
    if (role.length < 1)
      return message.channel.send({
        embed: {
          color: embedFail,
          description: `Write role name to set`
        }
      });
    if (!role1)
      return message.channel.send({
        embed: {
          color: embedFail,
          description: `I can't find this role!`
        }
      });
  }
  if (role1.id === `${setdj}`)
    return message.channel.send({
      embed: {
        color: embedColor,
        description: `this role is already set , please choose other role.`
      }
    });
  await db.set(`dj_${message.guild.id}`, role1.id);
  message.channel.send({
    embed: {
      color: embedSuccess,
      description: `the role set is ${role1}`
    }
  });
}
}