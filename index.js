const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
client.login(config.token);
var prefix = config.prefix;
client.on("ready", () => {
  console.log("Conectado como " + client.user.tag);
});
client.on("ready", () => {
  const activities_list = [
    "Rellena Esto!!",
    "Rellena Esto!!",
    "Rellena Esto!!",
    "Rellena Esto!!"
 ];
  client.user.setStatus("online
  setInterval(() => {
    const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
    client.user.setActivity(activities_list[index]);
  }, 10000);
});

client.on("message", async message => {
    if (!message.guild) return;
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    const args = message.content
      .slice(prefix.length)
      .trim()
      .split(/ +/g);
    const command = args.shift().toLowerCase();
    const akaneko = require("akaneko");////////////////furryy
////////////////NSFW////////////////////
if (command === "neko") {
  let neko = await akaneko.neko();
  const embed = new Discord.MessageEmbed()
    .setTitle("`💌`˚・Neko :")
    .setImage(`${neko}`)
    .setColor("RANDOM")
    .setFooter(`Solicitud de ${message.author.tag}`,message.author.displayAvatarURL({ dynamic: true, format: "png" }))
  if (!message.channel.nsfw)
    return message.channel.send("No creo q se vaya a poder hacer");
  message.channel.send(embed);
}
if (command === "ass"){
  let ass = await akaneko.nsfw.ass();
  const embed = new Discord.MessageEmbed()
    .setTitle("`💌`˚・Poto :")
    .setImage(`${ass}`)
    .setColor("RANDOM")
    .setFooter(`Solicitud de ${message.author.tag}`,message.author.displayAvatarURL({ dynamic: true, format: "png" }))
  if (!message.channel.nsfw)
    return message.channel.send("No creo q se vaya a poder hacer");
  message.channel.send(embed);
}
if (command === "bdsm"){
  let bdsm	 = await akaneko.nsfw.bdsm();
  const embed = new Discord.MessageEmbed()
    .setTitle("`💌`˚・._. :")
    .setImage(`${bdsm}`)
    .setColor("RANDOM")
    .setFooter(`Solicitud de ${message.author.tag}`,message.author.displayAvatarURL({ dynamic: true, format: "png" }))
  if (!message.channel.nsfw)
    return message.channel.send("No creo q se vaya a poder hacer");
  message.channel.send(embed);
}

if (command === "doujin"){
  let doujin	 = await akaneko.nsfw.doujin();
  const embed = new Discord.MessageEmbed()
    .setTitle("`💌`˚・nose :")
    .setImage(`${doujin}`)
    .setColor("RANDOM")
    .setFooter(`Solicitud de ${message.author.tag}`,message.author.displayAvatarURL({ dynamic: true, format: "png" }))
  if (!message.channel.nsfw)
    return message.channel.send("No creo q se vaya a poder hacer");
  message.channel.send(embed);
}
if (command === "cum"){
  let cum	 = await akaneko.nsfw.cum();
  const embed = new Discord.MessageEmbed()
    .setTitle("`💌`˚・cum :")
    .setImage(`${cum}`)
    .setColor("RANDOM")
    .setFooter(`Solicitud de ${message.author.tag}`,message.author.displayAvatarURL({ dynamic: true, format: "png" }))
  if (!message.channel.nsfw)
    return message.channel.send("No creo q se vaya a poder hacer");
  message.channel.send(embed);
}
if (command === "blowjob"){
  let blowjob 	 = await akaneko.nsfw.blowjob();
  const embed = new Discord.MessageEmbed()
    .setTitle("`💌`˚・ :")
    .setImage(`${blowjob}`)
    .setColor("RANDOM")
    .setFooter(`Solicitud de ${message.author.tag}`,message.author.displayAvatarURL({ dynamic: true, format: "png" }))
  if (!message.channel.nsfw)
    return message.channel.send("No creo q se vaya a poder hacer");
  message.channel.send(embed);
}
if (command === "feet"){
  let feet	 = await akaneko.nsfw.feet();
  const embed = new Discord.MessageEmbed()
    .setTitle("`💌`˚・patas :")
    .setImage(`${feet}`)
    .setColor("RANDOM")
    .setFooter(`Solicitud de ${message.author.tag}`,message.author.displayAvatarURL({ dynamic: true, format: "png" }))
  if (!message.channel.nsfw)
    return message.channel.send("No creo q se vaya a poder hacer");
  message.channel.send(embed);
}
if (command === "femdom"){
  let femdom	 = await akaneko.nsfw.femdom();
  const embed = new Discord.MessageEmbed()
    .setTitle("`💌`˚・e :")
    .setImage(`${femdom}`)
    .setColor("RANDOM")
    .setFooter(`Solicitud de ${message.author.tag}`,message.author.displayAvatarURL({ dynamic: true, format: "png" }))
  if (!message.channel.nsfw)
    return message.channel.send("No creo q se vaya a poder hacer");
  message.channel.send(embed);
}
if (command === "foxgirl"){
  let foxgirl = await akaneko.nsfw.foxgirl();
  const embed = new Discord.MessageEmbed()
    .setTitle("`💌`˚・Sorras 😈")
    .setImage(`${foxgirl}`)
    .setColor("RANDOM")
    .setFooter(`Solicitud de ${message.author.tag}`,message.author.displayAvatarURL({ dynamic: true, format: "png" }))
  if (!message.channel.nsfw)
    return message.channel.send("No creo q se vaya a poder hacer");
  message.channel.send(embed);
}
if (command === "gifs"){
  let gifs = await akaneko.nsfw.gifs();
  const embed = new Discord.MessageEmbed()
    .setTitle("`💌`˚・Gifs ")
    .setImage(`${gifs}`)
    .setColor("RANDOM")
    .setFooter(`Solicitud de ${message.author.tag}`,message.author.displayAvatarURL({ dynamic: true, format: "png" }))
  if (!message.channel.nsfw)
    return message.channel.send("No creo q se vaya a poder hacer");
  message.channel.send(embed);
}
if (command === "gifs"){
  let gifs = await akaneko.nsfw.gifs();
  const embed = new Discord.MessageEmbed()
    .setTitle("`💌`˚・Gifs ")
    .setImage(`${gifs}`)
    .setColor("RANDOM")
    .setFooter(`Solicitud de ${message.author.tag}`,message.author.displayAvatarURL({ dynamic: true, format: "png" }))
  if (!message.channel.nsfw)
    return message.channel.send("No creo q se vaya a poder hacer");
  message.channel.send(embed);
}
if (command === "glasses"){
  let glasses = await akaneko.nsfw.glasses();
  const embed = new Discord.MessageEmbed()
    .setTitle("`💌`˚・lentes? ")
    .setImage(`${glasses}`)
    .setColor("RANDOM")
    .setFooter(`Solicitud de ${message.author.tag}`,message.author.displayAvatarURL({ dynamic: true, format: "png" }))
  if (!message.channel.nsfw)
    return message.channel.send("No creo q se vaya a poder hacer");
  message.channel.send(embed);
}
if (command === "hentai"){
  let hentai = await akaneko.nsfw.hentai();
  const embed = new Discord.MessageEmbed()
    .setTitle("`💌`˚・Jentai ")
    .setImage(`${hentai}`)
    .setColor("RANDOM")
    .setFooter(`Solicitud de ${message.author.tag}`,message.author.displayAvatarURL({ dynamic: true, format: "png" }))
  if (!message.channel.nsfw)
    return message.channel.send("No creo q se vaya a poder hacer");
  message.channel.send(embed);
}
if (command === "netorare"){
  let netorare = await akaneko.nsfw.netorare();
  const embed = new Discord.MessageEmbed()
    .setTitle("`💌`˚・ q wea bo ")
    .setImage(`${netorare}`)
    .setColor("RANDOM")
    .setFooter(`Solicitud de ${message.author.tag}`,message.author.displayAvatarURL({ dynamic: true, format: "png" }))
    if (!message.channel.nsfw)
    return message.channel.send("No creo q se vaya a poder hacer");
    message.channel.send(embed);
}
////////////////////////////////Este comando incumple las normas del discord pero igual te lo dejo cualquier problema no me hago responsabe yo //////////////////////////////////////////////
if (command === "loli"){
  if (!["tu-id"].includes(message.author.id))
return message.channel.send(
    "⛔ Comando Restringido ⛔"
  );
  let loli = await akaneko.nsfw.loli();
  const embed = new Discord.MessageEmbed()
    .setTitle("`💌`˚・ .__.XD ")
    .setImage(`${loli}`)
    .setColor("RANDOM")
    .setFooter(`Solicitud de ${message.author.tag}`,message.author.displayAvatarURL({ dynamic: true, format: "png" }))
  if (!message.channel.nsfw)
    return message.channel.send("No creo q se vaya a poder hacer");
  message.channel.send(embed);
}
});/////////////////////////Final
