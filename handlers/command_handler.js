const { Client } = require('discord.js');
const fs = require('fs');

module.exports = (client) => {
    try {
        let command = 0;
        fs.readdirSync("./commands").forEach(dir => {
        
            let commands = fs.readdirSync(`./commands/${dir}/`).filter((file) => file.endsWith(".js"));
            for (cmd of commands) {
                let pull = require(`../commands/${dir}/${cmd}`);
                if (pull.name) {
                    client.commands.set(pull.name, pull);
                    command++
                } else {
                    console.log(`${cmds} Command is not Ready`);
                    continue;
                }
                if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));

            }
        })
        console.log(`${command} lOADED`);
    } catch (e) {
        console.log(e.message);
    }
}

fs.readdirSync("./commands/").map(dir => {
    const commands_list = fs.readdirSync(`./commands/${dir}/`).map(cmd=>{
        let pull_list = require(`../commands/${dir}/${cmd}`)
        console.log(`Loaded command ${pull_list.name}`)
    })
})