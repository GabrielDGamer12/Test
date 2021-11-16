require('dotenv').config()
const { Discord, Client, Intents } = require('discord.js');
const client = new Client({
    messageCacheLifetime: 60,
    fetchAllMembers: false,
    messageCacheMaxSize: 10,
    restTimeOffset: 0,
    restWsBridgetimeout: 100,
    shards: "auto",
    allowedMentions: {
        parse: ["roles", "users", "everyone"],
        repliedUser: true,
    },
    partials: ["MESSAGE", "CHANNEL", "REACTION"],
    intents: 32767,
});
//console.log(process.env.TOKEN)

["command_handler", "event_handler"].forEach((handler) => {
    require(`./handlers/${handler}`)(client)
 });

client.login(process.env.TOKEN);