const Discord = require("discord.js");
const client = require("..");

module.exports = async (client) =>{
    const guild = client.guilds.cache.get('736846645211168820');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('890115077326376960');
        channel.TextChannel.setTopic(`Membros no CLUBE DO VINHO:wine_glass:: **${memberCount.toLocaleString()}**`);
        console.log('Updating Member Count');
    }, 5000);
}