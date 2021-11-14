//qalklnrxc1uyqi3j0d1vh3p4ls7d5n
require("http").createServer((req, res) => res.end(process.version)).listen()
const Discord = require("discord.js");
const { Client, Message, MessageEmbed, Collection, WebhookClient } = require("discord.js");
const express = require("express");
const fs = require('fs');
require('dotenv').config()
const tmi = require("tmi.js");
const app = express();
app.get("/", (request, response) => {
    const ping = new Date();
    ping.setHours(ping.getHours() - 3);
    console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
    response.sendStatus(200);
  });
app.listen(process.env.PORT);
console.log(`Hello from Node.js ${process.version}!`);

const config = require("./config/config.json");
const { prefix } = require("./config/config.json");
global.prefix = (config.prefix);
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

global.client = new Client({
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
client.prefix = config.prefix;
/*
const twitch = new tmi.Client({
	options: { debug: false, messagesLogLevel: "info" },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: 'gabrieldgamer_',
		password: `oauth:${process.env.OAUTH}`
	},
	channels: [ 'gabrieldgamer_' ]
});
twitch.connect().catch(console.error);
twitch.on('message', (channel, tags, message, self) => {
	if(self) return;
	if(message.toLowerCase() === '!hello') {
		twitch.say(channel, `@${tags.username}, heya!`);
	}
    if (message.startsWith("!test")) {
        var segundo_arg = message.split(' ')[1];
        if(typeof segundo_arg != 'undefined' || segundo_arg != null){
            console.log( message.split(' ')[1] )
        } else {
            twitch.say(channel, `@${tags.username}, Formato Incorreto`)
        }
    }
});
*/
//  HANDLER //

client.commands = new Collection();
client.aliases = new Collection();
client.events = new Collection();
client.cooldowns = new Collection();
client.slashCommands = new Collection();
client.categories = fs.readdirSync("./commands/");

["command_handler", "event_handler", "slash_handler"].forEach((handler) => {
   require(`./handlers/${handler}`)(client)
});

const guild = client.guilds.cache.get('891469617598439434');



//  HANDLER //

client.login("OTA5NTM3OTQ0NTgxMzA4NDE2.YZFvOA.WzXYnAlYmYT6_UY8kacrmK5XkMs"/*process.env.TOKEN*/);