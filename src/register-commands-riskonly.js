require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType, ApplicationCommand} = require('discord.js');
const { ServerDescriptionChangedEvent } = require('mongodb');
const { options } = require('node-superfetch');
const { type } = require('os');

const commands = [
    {
        name: 'setstatus',
        description: 'Sets the status of Asterisk. (Administrator)',
        options: [
            {
                name: "new-status",
                description: "the new status",
                
                type: ApplicationCommandOptionType.String,
                required: true
            }]

    },
    {
        name: 'observationmode',
        description: 'Enables observation mode. (Administrator)'

    },
    {
        name: 'freeforall',
        description: 'Enable free-for-all mode (Administrator)'

    }


]

const rest = new REST({ version: '10'}).setToken(process.env.TOKEN);


(async () => {
    try {
        console.log('Risk-exclusive commands are loading.')
        await rest.put(
            Routes.applicationGuildCommands("1255402846090825791", "1130967347742642290"),
            {body: commands},
        );


    }
    
    catch (error) {
        console.log(`There was an error ${error}`)
    }
})();