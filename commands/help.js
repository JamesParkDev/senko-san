const fs = require("fs");
const Discord = require("discord.js");
const senko = new Discord.Client({disableEveryone: true});
module.exports.run = async(senko, message, args, con) => {
    let str = ''
    senko.commands.array().forEach( (i,v) =>{
            str += `${i.help.name}\n`
    })
    message.channel.send(`Commands list:\`\`\`${str}\`\`\``)
    
}

module.exports.help = {
    name: "help",
    description: "show all commands",
    usage: ""
}