const client = global.client;
//const roleClaim = require('../role-claim');
const db = require('quick.db');
const counter = require("./member-count")

client.on('ready', () => {
    console.log(`${client.user.username} Is Online`);
    const guild = client.guilds.cache.get('891469617598439434');
    var man = db.get("manutencaostatus")
    var activitiesoff = [
      `Utilize +ajuda para obter Ajuda`,
      `${client.users.cache.size} membros!`,
      `GabrielDGamer`,
      `Codigo Aberto: +codigo`
      //`Em Manutenção`
    ];
    var activitieson = [
      `Em manutenção...`
    ];
    i = 0;
    if(man == "off") {
    setInterval( () => client.user.setActivity(`${activitiesoff[i++ % activitiesoff.length]}`, {
        type: "STREAMING",
        url: "https://twitch.tv/gabrieldgamer_"
      }), 1000 * 10)
      } else {
    setInterval( () => client.user.setActivity(`${activitieson[i++ % activitieson.length]}`, {
         type: "STREAMING",
         url: "https://twitch.tv/gabrieldgamer_"
      }), 1000 * 10)
      }
      //roleClaim(client);
      //counter(client);
});
