require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType, ApplicationCommand} = require('discord.js');
const { ServerDescriptionChangedEvent } = require('mongodb');
const { options } = require('node-superfetch');
const { type } = require('os');

const commands = [
    {
        name: 'submitcodes',
        description: 'submit one or more code! (Administrator)',

    },
    {
        name: 'clearcodelist',
        description: 'clear the codelist! (Administrator)',

    },
    {
        name: 'clearevents',
        description: 'clear all Brawlhalla-related events! (Administrator)',

    },
    {
        name: 'claninfo',
        description: 'set the info of your clan! (Administrator)',

    },
    {
        name: 'setfeaturedtweet',
        description: 'Set the required tweet for your giveaway.',
        options: [
            { 
                name: "tweet-url",
                description: "url of the tweet you want featured",
                type: ApplicationCommandOptionType.String,
                required: true
            }
        ]

    },
    {
        name: 'debugsetup',
        description: 'Set up base settings for Asterisk (Administrator)',
        options: [
            {
                name: "log-channel",
                description: "channel where you want the logs to go to",
                type: ApplicationCommandOptionType.Channel,
                required: true
            },
            {
                name: "event-channel",
                description: "channel where you want your hosted events to be seen",
                type: ApplicationCommandOptionType.Channel,
                required: true
            },
            {
                name: "administrator-role",
                description: "role that you want to give access to utilizing the features of the bot.",
                type: ApplicationCommandOptionType.Role,
                required: true
            },
            {
                name: "tweet-requirement",
                description: "whether you want code-based giveaways to be locked behind a tweet repost of your choosing",
                type: ApplicationCommandOptionType.Boolean,
                required: true
            }
        ]
    },
    {
        name: 'asterisksetup',
        description: 'Set up base settings for Asterisk (Administrator)',
        options: [
            {
                name: "log-channel",
                description: "channel where you want the logs to go to",
                type: ApplicationCommandOptionType.Channel,
                required: true
            },
            {
                name: "event-channel",
                description: "channel where you want your hosted events to be seen",
                type: ApplicationCommandOptionType.Channel,
                required: true
            },
            {
                name: "administrator-role",
                description: "role that you want to give access to utilizing the features of the bot.",
                type: ApplicationCommandOptionType.Role,
                required: true
            },
            {
                name: "tweet-requirement",
                description: "whether you want code-based giveaways to be locked behind a tweet repost of your choosing",
                type: ApplicationCommandOptionType.Boolean,
                required: true
            }
        ]
    },

    {
        name: 'brawlhallavfxresources',
        description: 'Resources to help you get started editing Brawlhalla.'
            
    },

    {
        name: 'riskreward',
        description: 'Redeem your code.',
        options: [
            {
                name: "twitter-username",
                description: "username as displayed on twitter.",
                
                type: ApplicationCommandOptionType.String,
                required: false
            }]
    },

    {
        name: 'codecheck',
        description: 'Check all codes in the codeslist (Administrator)',
    },
    {
        name: 'resetgiveaway',
        description: 'Reset your giveaway (Administrator)',
    },
    {
        name: 'eventlist',
        description: "List all of your team/clan/orgs's events!",
    },
    {
        name: 'info',
        description: 'Information about Risk Esports',
    },
    {
        name: 'scheduleevent',
        description: 'Schedule an event for your clan/team/org!',
        options: [
            {
                name: "month",
                description: "month of the event",
                
                type: ApplicationCommandOptionType.String,
                choices: [
                    {
                        name: "January",
                        value: "January"
                    },
                    {
                        name: "February",
                        value: "February"
                    },
                    {
                        name: "March",
                        value: "March"
                    },
                    {
                        name: "April",
                        value: "April"
                    },
                    {
                        name: "May",
                        value: "May"
                    },
                    {
                        name: "June",
                        value: "June"
                    },
                    {
                        name: "July",
                        value: "July"
                    },
                    {
                        name: "August",
                        value: "August"
                    },
                    {
                        name: "September",
                        value: "September"
                    },
                    {
                        name: "November",
                        value: "November"
                    },
                    {
                        name: "December",
                        value: "December"
                    }
                ],
                required: true,
            },
            {
                name: "day",
                description:"numbered day of the month. (0-30)",
                type: ApplicationCommandOptionType.Integer,
                required: true
            },
            {
                name: "hour",
                description:"hour of the event **(MILITARY FORMAT)**",
                type: ApplicationCommandOptionType.Integer,
                required: true
            },

            {
                name: "event-type",
                description: "event-type",
                type: ApplicationCommandOptionType.String,
                choices: [ 
                    {
                        name: "Crewbattle",
                        value: "Crewbattle"
                    },
                    {
                        name: "Tournament",
                        value: "Tournament"
                    },
                    {
                        name: "Deadline",
                        value: "Deadline"
                    },
                    {
                        name: "Season",
                        value: "Season"
                    }
                ],
                required: true
            },
            {
                name: "event-name",
                description: "name of the event.",
                required: true,
                type: ApplicationCommandOptionType.String
            },
            {
                name: "url",
                description: "The url (if applicable) related to the event.",
                type: ApplicationCommandOptionType.String,
                value: "https://riskesports.org"
            },
            {
                name: "minute",
                description:"minute that the event occurs **(MILITARY FORMAT)**",
                type: ApplicationCommandOptionType.Integer,
            }

        ]
    },
    {
        name: 'resetredeemstate',
        description: '(experimental)',
    }




]

const rest = new REST({ version: '10'}).setToken(process.env.TOKEN);


(async () => {
    try {
        console.log('Commands are loading.')
        await rest.put(
            Routes.applicationCommands("1255402846090825791"),
            {body: commands},
        );


    }
    
    catch (error) {
        console.log(`There was an error ${error}`)
    }
})();