const { error } = require('console');
const { channel } = require('diagnostics_channel');
const { Client, IntentsBitField, ActivityType, EmbedBuilder, InteractionResponse } = require('discord.js');
const { Admin } = require('mongodb');
const { permission } = require('process');
const { Rettiwt } = require('rettiwt-api');
const { styleText } = require('util');
const rettiwted = new Rettiwt();

const wait = require("timers/promises").setTimeout;

let skip = false

freeforalls = []
redeemedList = []

asyncEventList = []
function eventLog(bot, interaction, mmsg) {

    for (i = 0; i < globaloptionsList.length; i++) {
        try {
        
        
        if (globaloptionsList[i].server === interaction.guild.id) {
            quickString = `${globaloptionsList[i].eventchannel}`
            bot.channels.cache.get(quickString).send(mmsg)
        }
    } catch (error) {

    }
    }
}

function eventLogRemind(bot, guildid, mmsg) {

    for (i = 0; i < globaloptionsList.length; i++) {
        try {
        console.log(globaloptionsList[i].server)
        console.log(guildid)
        if (globaloptionsList[i].server === guildid) {


            console.log('Server found')
            quickString = `${globaloptionsList[i].eventchannel}`
            bot.channels.cache.get(quickString).send(mmsg)
        }
    } catch (error) {
            console.log('there was a baddie error')
    }
    }
}


require('dotenv').config();




const rettiwtapi = new Rettiwt({ apiKey: process.env.TWEETAPI});



let now = new Date();
let day = now.getDay(); 
let hours = now.getHours();
let minutes = now.getMinutes();
let month = now.getMonth();

let adminRole = "1242054030969147422"



lackpermmsg = "\<a:asteriskdeep:1277887470414860343> You do not meet the permissions or trusted role to perform this command!\n-# Message to server admins: set up trusted roles, log channels, and more, via **/asterisksetup.**"

const bot = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ],
});
let liveCodeList = []
let eventlist = []
let logChannelID = process.env.CONSOLEID
let indexer = 0
let deletedamnt = 0
waitertext = "plcehold"

function codeParse(codeshere) {
    return codeshere.split(/\r?\n|\r|\n/g);
    
}

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }


function eventdatabaseUpdate(bot) {
    bot.channels.cache.get(databasechannelID).messages.fetch("1262880329165832245").then(messages => {
        messages.edit(JSON.stringify(asyncEventList));
        console.log(asyncEventList)
      });
}

function globalCodeDBUpdate(bot) {
    nullClear(asyncCodeList)
    segmentdef = ''
    segmentOne = ''
    segmentTwo = ''
    
    segmentdef = JSON.stringify(asyncCodeList).substring(0, 2000)

    if (JSON.stringify(asyncCodeList).length > 2000) {
        segmentOne = JSON.stringify(asyncCodeList).substring(2000)
        console.log('Database is overflowing. Utilizing first backup.')
        bot.channels.cache.get(databasechannelID).messages.fetch(process.env.DATABASE_C).then(messages => {
            messages.edit(segmentOne.substring(0, 2000))
          });

        if (JSON.stringify(asyncCodeList).length > 4000) {
        segmentTwo = JSON.stringify(asyncCodeList).substring(4000) 
        console.log('URGENT! Database is SEVERELY overflowing. Utilizing second backup.')
        bot.channels.cache.get(databasechannelID).messages.fetch(process.env.DATABASE_D).then(messages => {
            messages.edit(segmentTwo.substring(0, 2000))
          });

        if (JSON.stringify(asyncCodeList).length > 8000) {
        segmentThree = JSON.stringify(asyncCodeList).substring(8000) 
        console.log('URGENT! Database is SEVERELY overflowing. Utilizing third backup.')
        bot.channels.cache.get(databasechannelID).messages.fetch(process.env.DATABASE_E).then(messages => {
            messages.edit(segmentThree.substring(0, 2000))
            
          })};

        if (JSON.stringify(asyncCodeList).length > 10000) {
        segmentFour = JSON.stringify(asyncCodeList).substring(10000) 
        console.log('URGENT! Database is SEVERELY overflowing. Utilizing fourth backup.')
        bot.channels.cache.get(databasechannelID).messages.fetch(process.env.DATABASE_F).then(messages => {
            messages.edit(segmentFour.substring(0, 2000))
          })};

          if (JSON.stringify(asyncCodeList).length > 12000) {
            segmentFour = JSON.stringify(asyncCodeList).substring(12000) 
            console.log('URGENT! Database is SEVERELY overflowing. Utilizing fifth backup.')
            bot.channels.cache.get(databasechannelID).messages.fetch(process.env.DATABASE_G).then(messages => {
                messages.edit(segmentFour.substring(0, 2000))
              })};

        
        
        }
    }
    bot.channels.cache.get(databasechannelID).messages.fetch(process.env.DATABASE).then(messages => {
        messages.edit(segmentdef);
      });
    
}

function optionsDatabaseUpdate(bot) {
    bot.channels.cache.get(databasechannelID).messages.fetch("1262841553139798118").then(messages => {
        messages.edit(JSON.stringify(globaloptionsList));
      });
}


let bbbb = 1

asyncCodeList = []
// COMMANDS

function permChecks(interaction) {
            for (i = 0; i < globaloptionsList.length; i++) {
            if (globaloptionsList[i].server === interaction.guild.id) {
                if (interaction.member.roles.cache.has(globaloptionsList[i].trustedrole)) {
            
                } else {
                    interaction.reply(lackpermmsg)
                    return
                }
}}}




bot.on('interactionCreate', async (interaction) => {
    if (!interaction.isChatInputCommand()) return;



    if (interaction.commandName === 'resetgiveaway') {

        permChecks(interaction)
        for (let i = 0; i < redeemedList.length; i++) {
            if (redeemedList[i].user === interaction.user.id) {
                if (redeemedList[i].server === interaction.guild.id) {
                    console.log(redeemedList[i].user)
                    redeemedList.splice(i, 1)
                }
            }
        }
        try {
            interaction.reply('\<a:asteriskcorrect:1277899443898941500> **Successfully reset the giveaway.** People who have previously redeemed a code can now redeem a code again.')
         guildLog(bot, interaction, `\\<a:asteriskeventglobe:1277895080216236106> **${interaction.user}** *reset* the giveaway.\n-# People who have previously redeemed a code can now redeem a code again.`)
        } catch (error) {
            
        }
        
    }


    if (interaction.commandName === 'observationmode') {
        permChecks(interaction)
        interaction.reply({content:' \<:riskeyes:1181811876645052446> **Observation mode enabled.**', ephemeral:true})
        observationMode = true
    }
    if (interaction.commandName === 'setstatus') {
        permChecks(interaction)
        let ns = interaction.options.get('new-status').value
        bot.user.setActivity({name: `${ns}`, type: ActivityType.Streaming, url: 'https://www.twitch.tv/teamriskbh'})
        interaction.reply('\<a:asteriskcorrect:1277899443898941500> Status change successful.')
    }

    if (interaction.commandName === 'clearcodelist') {
        permChecks(interaction)

                liveCodeList = []
                for (let i = 0; i < asyncCodeList.length; i++) {
                    try {
                    if (asyncCodeList[i].server === interaction.guild.id) {
                        console.log('Server check passed')
                        liveCodeList = liveCodeList.concat(`${asyncCodeList[i].code}`)
                    }
                } catch (error) {

                }
                


                try {
                    for (let i = 0; i <= asyncCodeList.length; i++) {
                       if (asyncCodeList[i].server === interaction.guild.id) {
                            asyncCodeList.splice(i, 1)
                            console.log('testst')
                            deletedamnt = deletedamnt + 1
                   }}
                } catch (error) {
                    
                }

                globalCodeDBUpdate(bot)

                }

                setTimeout(() => {
                    interaction.reply(`\<a:asteriskcorrect:1277899443898941500> You have cleared **${deletedamnt}** codes from the codepool.`)
                    guildLog(bot, interaction, `\<a:asterisklogglobe:1277892414513877037> **${interaction.user.username}** has CLEARED the codelist of **${deletedamnt}** codes.`)
                    
                }, 1000);
            
                globalCodeDBUpdate(bot)
            }

                
    if (interaction.commandName === "setfeaturedtweet") {
        for (i = 0; i < globaloptionsList.length; i++) {
            if (globaloptionsList[i].server === interaction.guild.id) {
                if (interaction.member.roles.cache.has(globaloptionsList[i].trustedrole)) {
            
                } else {
                    interaction.reply(lackpermmsg)
                    return
                }

                
                let qb = interaction.options.get('tweet-url').value.split('/')
                tweetid = qb.pop();

                rettiwted.tweet.details(tweetid)
                .then(details => {
            	console.log(details.media[0].url )
                const anewembed = new EmbedBuilder()
                .setColor(0xFF00BF)
                .setTitle(`\<:riskpinktrident:1255342376688418817> Featured tweet for future giveaways now set: `)
                .setImage(details.media[0].url)
                .setDescription(`\<:riskwave:1208968551377936414> ${details.fullText}`)
                .addFields(
                    {
                        name: 'Current Likes',
                        value: `${details.likeCount}`,
                        inline: true,
                    })
                interaction.reply({embeds: [anewembed], ephemeral: true})
                globaloptionsList[i].featuredtweet = tweetid
                globaloptionsList[i].url = interaction.options.get('tweet-url').value
                optionsDatabaseUpdate(bot)
                return
                })

            .catch(error => {
	            interaction.reply({content: 'Seems to be an invalid URL provided.', ephemeral: true})
                return
                });





            return
                
            }
        }
    }


    if (interaction.commandName === "debugsetup" || "asterisksetup") {
        // THERE NEEDS TO BE A PERMISSION CHECK IN THE FUTURE
        try {
        for (i = 0; i < globaloptionsList.length; i++) {
            if (globaloptionsList[i].server === interaction.guild.id) {
                if (interaction.member.roles.cache.has(globaloptionsList[i].trustedrole)) {
            
                } else {
                    interaction.reply(lackpermmsg)
                    return
                }}}
            } catch (err) {

            }
        for (let i = 0; i < globaloptionsList.length; i++) {
            console.log(globaloptionsList[i])
            console.log(interaction.guild.id)
            if (globaloptionsList[i].server === interaction.guild.id) {
                globaloptionsList.splice(i, 1)
                console.log('Successful SPLICE!')
            }
        }
        quickOption = new Object()
        quickOption.server = interaction.guild.id
        quickOption.logchannel = interaction.options.get('log-channel').value
        quickOption.trustedrole = interaction.options.get('administrator-role').value
        quickOption.eventchannel = interaction.options.get('event-channel').value
        quickOption.tweetreq = interaction.options.get('tweet-requirement').value

        globaloptionsList.push(quickOption)

        optionsDatabaseUpdate(bot)

        const embedfive = new EmbedBuilder()
        .setColor(0xFF00BF)
        .setTitle("\<:riskpinktrident:1255342376688418817> Setup complete!")
        .setDescription(`\<:riskwave:1208968551377936414> Thanks for setting everything up for **${interaction.guild.name}**! Your log channel is now **<#${quickOption.logchannel}>**, your channel for events is now **<#${quickOption.eventchannel}>** and the trusted role for usage of me is now  **<@&${quickOption.trustedrole}>**. The tweet interaction requirement for giveaways is now **${quickOption.tweetreq}**. \n-# If you encounter any issues with the bot, join the **RISK Esports** discord server. We are happy to help.`)
        interaction.reply({embeds: [embedfive]})
        return
    }

    if (interaction.commandName === "brawlhallavfxresources") {
        const embed = new EmbedBuilder()
        .setTitle('RISK ESPORTS: ADVANCED RESOURCES')
        .setThumbnail('https://cdn.discordapp.com/attachments/1242050916857937951/1246430114741485599/Color.png?ex=66a58740&is=66a435c0&hm=6e9bc76440f0508349330b6c800e33fd1045724da6dbda63e3aaaa64906ccc46&')
        .setDescription('Blender is an excellent tool due to its 3D capabilities, inbuilt extremely fast compositor, and optimized design. However, it was not natively made to handle largescale 2D-based editing projects such as those for After Effects by default. So, **thetruetrident** (creative director of RISK) has made a template that supplies the average editor with the essentials needed. Nodegroups for every chromakey, optimized project layout, compositor plugins, and more.\n-# KEY TIP! Always press V if graphs are not working how you want them to. You must set the handle type to "unbound/free" in order to get Adobe-style graphing.')
        .setColor(0xFF00BF)
        .addFields(
        {
            name: 'Blender (Advanced)',
            value: '[Template](https://drive.google.com/file/d/1JY2Evnyv9v6KcTPhvnyIkImJT1UEuSgb/view?usp=drive_link)',
            inline: true,
        },
        {
            name: 'Documentation',
            value: '[Documentation](https://drive.google.com/file/d/1PKvBczdAZbeJDC4Kzmtpm7k0PfF0_CRR/view?usp=drive_link)',
            inline: true,
        },
        {
            name: 'Theme (AE Style)',
            value: '[Theme](https://cdn.discordapp.com/attachments/1266506885251727525/1267633201661083728/Adobe-B.xml?ex=66a97eea&is=66a82d6a&hm=e4c640f04d80aa71203484b3ac7c3d6f14b8b309a22c44f95122b5bc509d4d38&)',
            inline: false,
        }
    ).setImage('https://cdn.discordapp.com/attachments/1266506885251727525/1266507285941719060/Causeb.png?ex=66a56653&is=66a414d3&hm=b6f5b16a56ed0be8f24123276df5f49cf130be31cebc9b491b2ab816cb00804e&');

    const embed2 = new EmbedBuilder()
    .setTitle('RISK ESPORTS: ADVANCED RESOURCES')
    .setThumbnail('https://cdn.discordapp.com/attachments/1242050916857937951/1246430114741485599/Color.png?ex=66a58740&is=66a435c0&hm=6e9bc76440f0508349330b6c800e33fd1045724da6dbda63e3aaaa64906ccc46&')
    .setDescription('Miscellaneous Resources')
    .setColor(0xFF00BF)
    .addFields(
    {
        name: 'Clip Packs (Supplied by BEC)',
        value: '[New Seasons Clip Pack](https://drive.google.com/drive/folders/1cBU-4WaxVWl2k2wWNOttOyBVGe8AJa7g)',
        inline: true,
    },
    {
        name: 'Risk Branding',
        value: '[Branding](https://discord.com/channels/1130967347742642290/1242050916857937951/1246430115395801100)',
        inline: true,
    },
    {
        name: 'Get Blender',
        value: '[Blender](https://www.blender.org/download/releases/4-0/)',
        inline: true,
    }
);



    
        interaction.reply({embeds: [embed, embed2], ephemeral: true})
        return
    }


    
    if (interaction.commandName === "clearevents") {
        //Permcheck
        eventlist = []
        indexer = 0
    
        for (i = 0; i < globaloptionsList.length; i++) {
            if (globaloptionsList[i].server === interaction.guild.id) {
                trustRole = globaloptionsList[i].trustedrole
            }}

            try {
                if (trustRole) {
                    
                } }catch (err) {
                    interaction.reply('**\<:riskendear:1263766651724238858> Seems like an administrator has not set up the bot correctly yet for this command to be used** *(error: no trusted role set).* || Message to administrators: use /debugsetup to setup everything and fix this issue. || \n-# Refer to **riskesports.org/asterisk** for further documentation.')
                    return
                }


        if (interaction.member.roles.cache.has(trustRole)) {
            
        } else {
            interaction.reply({content: `${lackpermmsg}`, ephemeral: true})
            return
        }

     
        for (i = 0; i < asyncEventList.length; i++) {
            try {
            if (asyncEventList[i].server === interaction.guild.id) {
                delete asyncEventList[i]
                indexer++
            }
        } catch (err) {

        }

        }

        interaction.reply(`**${indexer}** events cleared.`)
        guildLog(bot, interaction, `<:riskgoldx:1245018575375437895> ${interaction.user}` + ' has cleared all concurrent events.')
        eventlist = []
        eventdatabaseUpdate(bot)
        return
    }

    if (interaction.commandName === 'freeforall') {
        permChecks(interaction)

        try {
        for (i = 0; i < freeforalls.length; i++) {
            console.log(freeforalls[i].boolean)
            if (freeforalls[i].server === interaction.guild.id) {

            if (freeforalls[i].boolean === true) {
                freeforalls[i].boolean = false
                
                interaction.reply('\<a:asteriskcorrect:1277899443898941500> Free for all mode has been disabled.')
                guildLog(bot, interaction, `\<a:asteriskcorrect:1277899443898941500> ${interaction.user} has DISABLED free for all mode.`)
                
                return

                
            } else if (freeforalls[i].boolean === false)  {
                freeforalls[i].boolean = true

                interaction.reply('\<a:asteriskcorrect:1277899443898941500> **Free for all mode** has been **ENABLED** temporarily. GO HAM! \n-# Members can now use the **/riskreward** command as much as they would like.')
                guildLog(bot, interaction, `\<a:asteriskcorrect:1277899443898941500> ${interaction.user} has ENABLED free for all mode.`)
               
                return

            }
        }
        }
    } catch (err) {
        return
    }
        ffa = new Object()
        ffa.boolean = true
        ffa.server = interaction.guild.id

        freeforalls.push(ffa)
        interaction.reply('\<a:asteriskcorrect:1277899443898941500> **Free for all mode** has been **ENABLED** temporarily. GO HAM! \n-# Members can now use the **/riskreward** command as much as they would like.')
        guildLog(bot, interaction, `\<a:asteriskcorrect:1277899443898941500> ${interaction.user} has ENABLED free for all mode.`)
        return
    }

    if (interaction.commandName === "eventlist") {
        //Permcheck
       

    
        for (i = 0; i < globaloptionsList.length; i++) {
            if (globaloptionsList[i].server === interaction.guild.id) {
                trustRole = globaloptionsList[i].trustedrole
            }}


            try {
                if (trustRole) {
                    
                } }catch (err) {
                    interaction.reply('**\<:riskendear:1263766651724238858> Seems like an administrator has not set up the bot correctly yet for this command to be used** *(error: no trusted role set).* || Message to administrators: use /debugsetup to setup everything and fix this issue. || \n-# Refer to **riskesports.org/asterisk** for further documentation.')
                    return
                }


        if (interaction.member.roles.cache.has(trustRole)) {
            
        } else {
            interaction.reply({content: `${lackpermmsg}`, ephemeral: true})
            return
        }

        eventlist = []
        for (i = 0; i < asyncEventList.length; i++) {
            try {

            
            if (asyncEventList[i].server === interaction.guild.id) {
                console.log(asyncEventList[i])
                eventlist.push(asyncEventList[i])
            }}
            catch (err) {

            }

        }   

   //     console.log(eventlist)
        if (eventlist[0] != undefined) {
            let i = 0
            while (i < eventlist.length) {


                interaction.channel.send(`# \<a:asteriskeventglobe:1277895080216236106> ${eventlist[i].name} \<a:asteriskeventglobe:1277895080216236106> \n### \<a:asterisklogglobe:1277892414513877037> ${eventlist[i].type} \<a:asterisklogglobe:1277892414513877037>\n**${eventlist[i].month}** **${eventlist[i].day}rd** \n${eventlist[i].houredtime}\n**INDIVIDUALS OF INTEREST:**\n ${eventlist[i].associatedmembers}\n **URL:** *${eventlist[i].url}*\n-# Event details\n-#  **${i + 1}.**`);
                i++;
            }
            interaction.reply("Here's all the important influential **Brawlhalla-based** events coming up!");
            return

        } else {
            interaction.reply(`There are no crewbattles/tournaments/etc in circulation at the moment for **${interaction.guild.name}**.\n-# Use /scheduleevent to schedule an event.`)
            return
        }
        
    }


    if (interaction.commandName === "scheduleevent") {
        
        for (i = 0; i < globaloptionsList.length; i++) {
            if (globaloptionsList[i].server === interaction.guild.id) {
                trustRole = globaloptionsList[i].trustedrole
            }}

            try {
                if (trustRole) {
                    
                } }catch (err) {
                    interaction.reply('**\<:riskendear:1263766651724238858> Seems like an administrator has not set up the bot correctly yet for this command to be used** *(error: no trusted role set).* || Message to administrators: use **/debugsetup** or **/debugsetup** to setup everything and fix this issue. || \n-# Refer to **riskesports.org/asterisk** for further documentation.')
                    return
                }


        if (interaction.member.roles.cache.has(trustRole)) {
            
        } else {
            interaction.reply({content: `${lackpermmsg}`, ephemeral: true})
            return
        }

        eventlist = []
        for (let i = 0; i < asyncEventList.length; i++) {
            try {
            if (asyncEventList[i].server === interaction.guild.id) {
                console.log('Server check passed')
                eventlist = eventlist.concat(asyncEventList[i])
            }
        } catch (err) {

        }

        }


        let url3 = " "
        let day = interaction.options.get('day').value
        let minutes = 0
        let hour = interaction.options.get('hour').value
        let month = interaction.options.get('month').value
        let quickeventname = interaction.options.get('event-name').value
        let quickeventnameactual = interaction.options.get('event-name').value
        let quickeventtype = interaction.options.get('event-type').value
        if (interaction.options.get('url')) {
            url3 = interaction.options.get('url').value
        } else {
            url3 = "https://riskesports.org (default url)"
        }
        
        if (interaction.options.get('minute')) {
            minutes = interaction.options.get('minute').value
        } else {
            minutes = 0
        }

        if (day > 30) {
            interaction.reply({ content: '<:riskthumbsdown:1168656540102819910> The day of the month cannot be greater than thirty!', ephemeral: true })
            return
        }



        quickeventname = new Object()
        quickeventname.day = day
        quickeventname.server = interaction.guild.id
        quickeventname.hour = hour
        quickeventname.month = month
        quickeventname.minute = minutes
        quickeventname.type = quickeventtype
        quickeventname.name = quickeventnameactual
        quickeventname.url = url3

        qckhrs = quickeventname.hour;
        qckmin = quickeventname.minute;
        var ampm = qckhrs >= 12 ? 'pm' : 'am';
        qckhrs = qckhrs % 12;
        qckhrs = qckhrs ? qckhrs : 12; // the hour '0' should be '12'
        qckmin = qckmin < 10 ? '0'+qckmin : qckmin;
        quickeventname.houredtime = qckhrs+ ':' + qckmin + ' ' + ampm;
       

        asyncEventList.push(quickeventname)
        console.log(eventlist)
        console.log(quickeventname)



        interaction.user.commandprefab = quickeventname
        waiterchannel = interaction.channelId 

        eventdatabaseUpdate(bot)
        eventLog(bot, interaction, `## New **${quickeventtype} ** \n# <a:asteriskeventglobe:1277895080216236106> ${quickeventnameactual} \<a:asteriskeventglobe:1277895080216236106> \n### \<a:asterisklogglobe:1277892414513877037> ${quickeventtype} \<a:asterisklogglobe:1277892414513877037>\n**${quickeventname.month}** **${quickeventname.day}rd** \n${quickeventname.houredtime}\n**INDIVIDUALS OF INTEREST:**\n ???\n<a:asterisklogglobe:1277892414513877037> **URL:** *${quickeventname.url}* <a:asterisklogglobe:1277892414513877037>\n-# Event details`)
        guildLog(bot, interaction, `<:riskgoldx:1245018575375437895> ${interaction.user}` + ' has cataloged a ' + `**${quickeventname.type}** named ***${quickeventname.name}*** happening on **${quickeventname.month}, ${quickeventname.day}** at **${quickeventname.houredtime}**  ` + '. There are now' + ` ${Math.abs(eventlist.length)} ` + 'events in circulation.')
        interaction.reply({content: `\<a:asteriskcorrect:1277899443898941500>  New **${quickeventtype}** *(${quickeventname.name})* successfully scheduled for **${month}**,** ${day}**. **Please ping everyone involved below, so reminders can be sent as the day comes closer. Ping attendees in one message, with each ping separated by linebreaks.** Alternatively, ping a role for a similar effect role-wide.
-#  **riskesports.org**. Developed by Team RISK`, ephemeral: true})


        return
    }









	if (interaction.commandName === 'info') {
        interaction.reply({ content: "https://riskesports.org/info", ephemeral: true })
        return
    }
    if (interaction.commandName === 'resetredeemstate') {
        for (i = 0; i < globaloptionsList.length; i++) {
            if (globaloptionsList[i].server === interaction.guild.id) {
                if (interaction.member.roles.cache.has(globaloptionsList[i].trustedrole)) {
                    interaction.user.redeemed = false
                    interaction.reply({ content: "You may redeem more codes now.", ephemeral: true })
                    return
                } else {
                    interaction.reply(lackpermmsg)
                    return
                }}}

    }


    if (interaction.commandName === 'riskreward') {
         for (i = 0; i < globaloptionsList.length; i++) {
            if (globaloptionsList[i].server === interaction.guild.id) {

                if (globaloptionsList[i].tweetreq === false) {
                    console.log('NO TWEET REQUIREMENT IS ENABLED')
                    
                    liveCodeList = []

                    if (interaction.user.username.includes("swater4567")) {
                        interaction.reply({content: "You have been blacklisted from utilizing this command due to a violation of RISK Policies", ephemeral: true})
                        bot.channels.cache.get(logChannelID).send(`${interaction.user.username}` + " was disallowed from redeeming a code.")
                        return
                    } 
            
                    // Checks and sets livecodelist to the asynccodelist
                    for (let i = 0; i < asyncCodeList.length; i++) {
                        try {
                        if (asyncCodeList[i].server === interaction.guild.id) {
                            console.log('Server check passed')
                            liveCodeList = liveCodeList.concat(`${asyncCodeList[i].code}`)
                        }
                    } catch (error) {

                    }
                    }

                    

                    for (let i = 0; i < freeforalls.length; i++) {
                        if (freeforalls[i].server === interaction.guild.id) {
                            if (freeforalls[i].boolean === true) {
                                skip = true
                            }
                        }
                    }

                    for (let i = 0; i < redeemedList.length; i++) {
                        if (skip === false) {
                        if (redeemedList[i].user === interaction.user.id) {
                            if (redeemedList[i].server === interaction.guild.id) {
                                interaction.reply({content: `\<:risksunglassesmute:1223149081992626258> You already redeemed your code for this **${interaction.guild.name}** giveaway. Wait for the next one!\n-# If you believe this was an error, contact **RISK Esports** support.`, ephemeral:true})
                                return
                            }
                        }
                    }
                }



                    if (interaction.user.redeemed != true || undefined) {
                        
                        console.log(liveCodeList);
                        logtest = liveCodeList[0] + ''
                        console.log(logtest.length);
                        if (liveCodeList[0] != undefined) {
                            interaction.reply({ content: `\<a:asteriskmainglobe:1277889678183501825> ${liveCodeList[0]}\n-# Psst! there are more codes hidden on **riskesports.org**. Stick around for the next giveaway as well, as we do them weekly.`, ephemeral: true })
                            

                            quickRedeem = new Object()
                            quickRedeem.server = interaction.guild.id
                            quickRedeem.user = interaction.user.id
                            redeemedList.push(quickRedeem)
            
            
                    guildLog(bot, interaction, `${interaction.user}` + ' has redeemed a code. ' + `(${liveCodeList[0]})` + '. There are now' + ` ${Math.abs(liveCodeList.length - 1)} ` + 'code(s) left.')
                
                            
                         //   process.env.TEST = interaction.user.redeemed;
                           // indexer++
                                   // Checks and sets livecodelist to the asynccodelist
                            try {
                            for (let i = 0; i < asyncCodeList.length; i++) {
                               if (asyncCodeList[i].server === interaction.guild.id) {
                                console.log(asyncCodeList[i].code)
                                console.log(liveCodeList[0])
                                if (asyncCodeList[i].code === liveCodeList[0]) {
                                    asyncCodeList.splice(i, 1)
                                    console.log('Successful splice')
                           }}}
                        } catch (error) {

                        }
                           console.log(asyncCodeList)
            
                           
                           globalCodeDBUpdate(bot)
                            return
                        } else {
                            interaction.reply({content: '\<a:asterisklogglobe:1277892414513877037> Looks like there are no more codes in the code pool! Check again later.', ephemeral:true})
                            return
                        }
            
            
                    } else
                    interaction.reply({ content: "You already redeemed your code!", ephemeral: true })
                    
                    return
                }
                
                if (globaloptionsList[i].tweetreq === true) {
                    if (interaction.options.get('twitter-username') === null) {
                        interaction.reply('This server requires you to input your twitter username and like a featured post before redeeming a code.')
                        return
                    }
                    
                }


        








                await rettiwtapi.tweet.retweeters(globaloptionsList[i].featuredtweet)
                 .then(retweeters => {
                    usernameList = []

                    jsb = JSON.stringify(retweeters)
                    if (jsb.includes(`"userName":"${interaction.options.get('twitter-username').value}"`)) {
                        console.log('TWITTER FOUND')

                        liveCodeList = []

                        if (interaction.user.username.includes("swater4567")) {
                            interaction.reply({content: "You have been blacklisted from utilizing this command due to a violation of RISK Policies", ephemeral: true})
                            bot.channels.cache.get(logChannelID).send(`${interaction.user.username}` + " was disallowed from redeeming a code.")
                            return
                        } 
                
                        // Checks and sets livecodelist to the asynccodelist
                        for (let i = 0; i < asyncCodeList.length; i++) {
                            try {
                            if (asyncCodeList[i].server === interaction.guild.id) {
                                console.log('Server check passed')
                                liveCodeList = liveCodeList.concat(`${asyncCodeList[i].code}`)
                            }
                        } catch (error) {

                        }
                        }
                

                        for (let i = 0; i < freeforalls.length; i++) {
                            if (freeforalls[i].server === interaction.guild.id) {
                                if (freeforalls[i].boolean === true) {
                                    skip = true
                                }
                            }
                        }
    
                        for (let i = 0; i < redeemedList.length; i++) {
                            if (skip === false) {
                            if (redeemedList[i].user === interaction.user.id) {
                                if (redeemedList[i].server === interaction.guild.id) {
                                    interaction.reply({content: `\<:risksunglassesmute:1223149081992626258> You already redeemed your code for this **${interaction.guild.name}** giveaway. Wait for the next one!\n-# If you believe this was an error, contact **RISK Esports** support.`, ephemeral:true})
                                    return
                                }
                            }
                        }
                    }

                        
                        if (interaction.user.redeemed != true || undefined) {
                            console.log(liveCodeList);
                            logtest = liveCodeList[0] + ''
                            console.log(logtest.length);
                            if (liveCodeList[0] != undefined) {
                                interaction.reply({ content: `\<a:asteriskmainglobe:1277889678183501825> ${liveCodeList[0]}\n-# Psst! there are more codes hidden on **riskesports.org**. Stick around for the next giveaway as well, as we do them weekly.`, ephemeral: true })
                            
                                quickRedeem = new Object()
                                quickRedeem.server = interaction.guild.id
                                quickRedeem.user = interaction.user.id
                                redeemedList.push(quickRedeem)
                
                
                        guildLog(bot, interaction, `\<a:asterisklogglobe:1277892414513877037> ${interaction.user}` + ' has redeemed a code. ' + `(${liveCodeList[0]})` + '. There are now' + ` ${Math.abs(liveCodeList.length - 1)} ` + 'codes left.')
                    
                                
                             //   process.env.TEST = interaction.user.redeemed;
                               // indexer++
                                       // Checks and sets livecodelist to the asynccodelist
                                try {
                                for (let i = 0; i < asyncCodeList.length; i++) {
                                   if (asyncCodeList[i].server === interaction.guild.id) {
                                    console.log(asyncCodeList[i].code)
                                    console.log(liveCodeList[0])
                                    if (asyncCodeList[i].code === liveCodeList[0]) {
                                        asyncCodeList.splice(i, 1)
                                        console.log('Successful splice')
                               }}}
                            } catch (error) {

                            }
                               console.log(asyncCodeList)
                
                               
                               globalCodeDBUpdate(bot)
                                return
                            } else {
                                interaction.reply({content: '\<a:asterisklogglobe:1277892414513877037> Looks like there are no more codes in the code pool! Check again later.', ephemeral:true})
                                return
                            }
                
                
                        } else
                        interaction.reply({ content: "You already redeemed your code!", ephemeral: true })
                        
                        return
                    } else {
                        for (i = 0; i < globaloptionsList.length; i++) {
                        if (globaloptionsList[i].server === interaction.guild.id) {
                            barriy = globaloptionsList[i].url 
                        }}
                        interaction.reply({content: `\<:risksadcatalternate:1217748311117791303> Did you input the username incorrectly? **(Capitalization is important)** it appears you did not **like + retweet + follow** the featured tweet & user!
                            ${barriy}`, ephemeral:true});
                        return
                    }
                    

                 })
                 .catch(error => {
                    try {
                    interaction.reply({content: `\<:riskendear:1263766651724238858> We are having trouble connecting to the Twitter API at the moment. Try again later! || If you are an admin seeing this, it seems like /setfeaturedtweet was not set up correctly. \n-# For further support, check **https://riskesports.org**||
                        `, ephemeral:true});
                    } catch (err) {}

                    console.log(error)
                    }

                )
            }
        }


            
        
        

         

    }
    // AA

    if (interaction.commandName === 'codecheck') {
        for (i = 0; i < globaloptionsList.length; i++) {
            if (globaloptionsList[i].server === interaction.guild.id) {
                trustRole = globaloptionsList[i].trustedrole
            }}

        if (interaction.member.roles.cache.has(trustRole)) {
            console.log('ADMIN CHECK PASSED')
            
            liveCodeList = []
            for (let i = 0; i < asyncCodeList.length; i++) {
                try {
                    if (asyncCodeList[i].server === interaction.guild.id) {
                    console.log('Server check passed')
                    liveCodeList = liveCodeList.concat(`${asyncCodeList[i].code}`)
                }
            } catch (error) {
                
            }

            }

            formattedlist = []
            if (liveCodeList[0] != undefined) {
                let i = 0
                while (i < liveCodeList.length) {
                    formattedlist.push(`\<a:asteriskmainglobe:1277889678183501825> **${liveCodeList[i]}**`)
                    i++;
                }
                formattedlist = formattedlist.join("\n")
                

                let _qub = `\<a:asteriskdeep:1277887470414860343> **${liveCodeList.length}** ` + 'codes are currently in the pool for the ' + `**${interaction.guild.name}** code database.\n${formattedlist}`



                if (_qub.length < 2000) {
                interaction.reply({content: `\<a:asteriskdeep:1277887470414860343> **${liveCodeList.length}** ` + 'codes are currently in the pool for the ' + `**${interaction.guild.name}** code database.\n${formattedlist}`, ephemeral: true});
                return
                } else {
                    interaction.reply({content: `\<a:asteriskdeep:1277887470414860343> **${liveCodeList.length}** ` + 'codes are currently in the pool for the ' + `**${interaction.guild.name}** code database. **Too many codes to display in one message!**`, ephemeral: true});
                    return
                }
                
                
                


            } else {
                interaction.reply('There are no codes in the code pool!')
                return
            }
            
        } else {
            interaction.reply(lackpermmsg)
        }
        return
    }

    if (interaction.commandName === 'submitcodes') {
        for (i = 0; i < globaloptionsList.length; i++) {
            if (globaloptionsList[i].server === interaction.guild.id) {
                trustRole = globaloptionsList[i].trustedrole
            }}

        try {
        if (trustRole) {
            
        } }catch (err) {
            interaction.reply('**\<:riskendear:1263766651724238858> Seems like an administrator has not set up the bot correctly yet for this command to be used** *(error: no trusted role set).* || Message to administrators: use /asterisksetup to setup everything and fix this issue. || \n-# Refer to **riskesports.org/asterisk** for further documentation.')
            return
        }
        if (interaction.member.roles.cache.has(trustRole)) {
            interaction.reply('Ready to submit code(s). (Will time out in 30 seconds.)')
            console.log(interaction.user.username)
            waitertext = interaction.user.username
            waiterchannel = interaction.channelId
    
            setTimeout(() => {
                let waitertext = undefined;
                let waiterchannel = undefined;
            }, 50000);
    
        } else {
            interaction.reply({ content: lackpermmsg, ephemeral: true })
        }
        

        

        } 
    }

    
    
)




let token = ""
bot.login(process.env.TOKEN);

let databasechannelID = process.env.DATABASE_HOST

// Eventlist 
bot.on('ready', async (c) => {




    // List every guild its in
    bot.guilds.cache.forEach(guild => {
        console.log(`${guild.name}`);
      })

        bot.channels.cache.get(databasechannelID).messages.fetch("1262880329165832245").then(messages => {
            asyncEventList = JSON.parse(messages.content);
          
            console.log('Successfully retrieved events from database.')
          });
// Per-server options
    bot.channels.cache.get(databasechannelID).messages.fetch("1262841553139798118").then(messages => {
        globaloptionsList = JSON.parse(messages.content);
        
        console.log('Successfully retrieved per-server configuration from database.')
      });
      
      
          
    //Codelist and database extenders
      bot.channels.cache.get(databasechannelID).messages.fetch(process.env.DATABASE_C).then(messages => {
        extenderListC = messages.content
      });
      bot.channels.cache.get(databasechannelID).messages.fetch(process.env.DATABASE_D).then(messages => {
        extenderListD = messages.content

      });
      bot.channels.cache.get(databasechannelID).messages.fetch(process.env.DATABASE_E).then(messages => {
        extenderListE = messages.content

      });
      bot.channels.cache.get(databasechannelID).messages.fetch(process.env.DATABASE_F).then(messages => {
        extenderListF = messages.content
      });

      bot.channels.cache.get(databasechannelID).messages.fetch(process.env.DATABASE_G).then(messages => {
        extenderListG = messages.content

      });

      bot.channels.cache.get(databasechannelID).messages.fetch(process.env.DATABASE).then(messages => {

       try {
        asyncCodeList = JSON.parse(messages.content + extenderListC + extenderListD + extenderListE + extenderListF + extenderListG)
        console.log('Successfully retrieved globalized codes from database. (SFG)')}
        catch (err) {

        try {
            asyncCodeList = JSON.parse(messages.content + extenderListC + extenderListD + extenderListE + extenderListF)
            console.log('Successfully retrieved globalized codes from database. (SFF)')}
        catch (err){ 
            try {
                asyncCodeList = JSON.parse(messages.content + extenderListC + extenderListD + extenderListE)
                console.log('Successfully retrieved globalized codes from database. (SFE)')}
            catch (err){ 
                try {
                    asyncCodeList = JSON.parse(messages.content + extenderListC + extenderListD)
                    console.log('Successfully retrieved globalized codes from database. (SFD)')}
                catch (err){ 
                    try {
                        asyncCodeList = JSON.parse(messages.content + extenderListC)
                        console.log('Successfully retrieved globalized codes from database. (SFC)')}
                    catch (err){ 
                        try {
                            asyncCodeList = JSON.parse(messages.content)
                            console.log('Successfully retrieved globalized codes from database. (SF)')

                            //Clearing all other parts of Database if only the first  part is validated (not full proof, but good enough for now)
                            bot.channels.cache.get(databasechannelID).messages.fetch("1267876205038927953").then(messages => {
                                messages.edit('[]')
                              });
                              bot.channels.cache.get(databasechannelID).messages.fetch("1268089476476047462").then(messages => {
                                messages.edit('[]')
                        
                              });
                              bot.channels.cache.get(databasechannelID).messages.fetch("1268090040102158379").then(messages => {
                                messages.edit('[]')
                        
                              });
                              bot.channels.cache.get(databasechannelID).messages.fetch("1268097336064872532").then(messages => {
                                messages.edit('[]')
                        
                              });
                        
                              bot.channels.cache.get(databasechannelID).messages.fetch("1268097360991359086").then(messages => {
                                messages.edit('[]')
                        
                              });
                        }
                            
                        catch (err){ 
                            console.log('Could not read all stages of code json.')
                        }
                    }
                }
            }
        }







        
       };
       // console.log('Successfully retrieved globalized codes from database.')
       
      });
      
    console.log(`${c.user.tag} is online.`
    )

    bot.channels.cache.get(logChannelID).send('<:RiskLogo:1200686238668161024> **Asterisk v2.0 is online**; developed by thetruetrident \<a:asteriskeventglobe:1277895080216236106> for RISK Esports.')
    bot.user.setActivity({name: 'RISK Esports', type: ActivityType.Streaming, url: 'https://www.twitch.tv/teamriskbh'})

    
});


function nullClear(obj) {
    return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null));
  }

function codedatabaseUpdate(bot) {
    let _bstring = ""
    for (let i = 0; i < liveCodeList.length; i++)  {
        _bstring = `${_bstring.concat(liveCodeList[i])}\n`
    }
    bot.channels.cache.get(databasechannelID).messages.fetch("1262841553139798118").then(messages => {
        messages.edit(_bstring);
      });
}
function guildLog(bot, interaction, mmsg) {
    for (i = 0; i < globaloptionsList.length; i++) {

        if (globaloptionsList[i].server === interaction.guild.id) {
            quickString = `${globaloptionsList[i].logchannel}`
            try {
            bot.channels.cache.get(quickString).send(mmsg)

            if (observationMode === true) {
                bot.channels.cache.get('1258402731484516523').send(`${mmsg} **(${interaction.guild.name})**`)
            }
            
            } catch (err) {
                
            }
        }}
}



bot.on('messageCreate', async (message) => {
    console.log(message.content)
    if (message.content.includes("�")) {
        message.react("<:skullgrey:1173058965341483089>")
        console.log("tee")
    }
    eventlist = []
    for (i = 0; i < asyncEventList.length; i++) {
        try {

    
        if (asyncEventList[i].server === message.guild.id) {
            eventlist.push(asyncEventList[i])
        }}
        catch (err){

        }
    }   


    if (eventlist.includes(message.author.commandprefab) && message.channelId === waiterchannel) {
        for (let i = 0; i < eventlist.length; i++) {
            if (eventlist[i] === message.author.commandprefab) {
                eventlist[i].associatedmembers = codeParse(message.content)
                console.log(eventlist[i].associatedmembers[1])
                message.channel.send(`Successfully added **${eventlist[i].associatedmembers.length}** important figures for this event.`)
                eventdatabaseUpdate(bot)
                eventLog(bot, message, `${eventlist[i].type} ** ${eventlist[i].name}'s** list of attendees of interest is now: ${eventlist[i].associatedmembers} \n-# RISK Esports`)
            } ;
            
        }
        
        console.log('MODEL CHECK PASSED')
        message.author.commandprefab = undefined
        message.delete()
        return
    }
    if (message.author.username === waitertext && message.channelId === waiterchannel) {
        //Submit codes
        liveCodeList = []
        liveCodeList = liveCodeList.concat(codeParse(message.content));
        let amountCodes = 0
        let antiDupeCode = []

        for (i = 0; i < asyncCodeList.length; i++) {
            try {
            if (asyncCodeList[i].server === message.guild.id) {
                antiDupeCode.push(asyncCodeList[i].code)
                
            }
        }
        catch (error) {

        }
        }
        console.log(liveCodeList)
        for (i = 0; i < liveCodeList.length; i++) {
           // if (!antiDupeCode.includes(liveCodeList[i])) {
            quickCode = new Object()
            quickCode.code = liveCodeList[i]
            quickCode.server = message.guild.id
            asyncCodeList.push(quickCode)
            
        //    } else {
        //        message.reply('\<:riskdizzy:1233439365183705099> One or more of the codes provided is already in your codelist! || (error: duplicate code) ||')
         //       setTimeout(() => {
          //          message.delete()
          //      }, 10);
          //      return
          //  }
        }
        let largos = 0

        for (i = 0; i < asyncCodeList.length; i++) {
            try {
            if (asyncCodeList[i].server === message.guild.id) {
                largos += 1
                
            }
        }   catch (error) {

        }
        }
        globalCodeDBUpdate(bot)


        if (largos > 100) {
        message.reply('\<a:asteriskcorrect:1277899443898941500> You have added codes to the pool. ||Large amount of codes detected; You are at RISK of data loss, as Asterisk is having database issues currently. *Back up your codes*|| There are now ' +`**${largos}**` + ' codes recognized and pushed to the giveaway pool. Use /codecheck to check the code database.\n-# Members can now use **/riskreward** to redeem one code from your codepool. If you want individuals who have already redeemed a code to be able to another code again, simply use **/resetgiveaway.** Its common practice to use this command after submitting new codes to the codepool.');
        } else {
            message.reply('\<a:asteriskcorrect:1277899443898941500> You have added codes to the pool. There are now ' +`**${largos}**` + ' codes recognized and pushed to the giveaway pool. Use /codecheck to check the code database.\n-# Members can now use **/riskreward** to redeem one code from your codepool. If you want individuals who have already redeemed a code to be able to another code again, simply use **/resetgiveaway.** Its common practice to use this command after submitting new codes to the codepool.');
        }
        waitertext = undefined
        setTimeout(() => {
           //message.delete()
        }, 10);
        return
       
    } else {
        return
    }
});


now = new Date();
setInterval(function() {

    day = now.getDate(); // returns a number representing the day of the week, starting with 0 for Sunday
    hours = now.getHours();
    minutes = now.getMinutes();
    month = now.getMonth();
    
    if (month === 0) {
        month = "January"
    } else
    if (month === 1) {
        month = "February"
    } else
    if (month === 2) {
        month = "March"
    } else
    if (month === 3) {
        month = "April"
    } else
    if (month === 4) {
        month = "May"
    } else  
    if (month === 5) {
        month = "June"
    } else
    if (month === 6) {
        month = "July"
    } else
    if (month === 7) {
        month = "August"
    } else
    if (month === 8) {
        month = "September"
    } else
    if (month === 9) {
        month = "October"
    } else
    if (month === 10) {
        month = "November"
    } else
    if (month === 11) {
        month = "December"
    }
    guildsID = []
    eventlist = []

    
    for (i = 0; i < asyncEventList.length; i++) {
        
        bot.guilds.cache.forEach(guild => {
            
            try {if (asyncEventList[i].server != undefined ) {
                
            }
        } catch (err) {
            return
        }


           if (asyncEventList[i].server === guild.id) {
            

                if (asyncEventList[i].month === month) {
                    
                    if (asyncEventList[i].associatedmembers === undefined) {
                        return
                    }
                    
                    try {
                    if (asyncEventList[i].day === day) {
                        if (asyncEventList[i].dr != true) {
                            asyncEventList[i].dr = true
                            eventdatabaseUpdate(bot)
                            eventLogRemind(bot,`${guild.id}`, `# \<a:bwdt:1172460968484290570> AN IMPORTANT ${asyncEventList[i].type} IS HAPPENING TODAY! \<a:bwdt:1172460968484290570> \n# \<a:asteriskeventglobe:1277895080216236106> ${asyncEventList[i].name} \<a:asteriskeventglobe:1277895080216236106> \n### \<a:asterisklogglobe:1277892414513877037> TYPE: ${asyncEventList[i].type} \<a:asterisklogglobe:1277892414513877037>\n**${asyncEventList[i].month}** **${asyncEventList[i].day}rd** \n${asyncEventList[i].houredtime}\n**INDIVIDUALS OF INTEREST:**\n ${asyncEventList[i].associatedmembers}\n<a:heartgoon2:1168656538622238790> **URL:** *${asyncEventList[i].url}* <a:heartgoon2:1168656538622238790> \n-# Event details`)
        
                        } else if (asyncEventList[i].dayreminder === true) {
                            if (asyncEventList[i].hr != true) {
                                if (asyncEventList[i].hour === hours) {
                                    asyncEventList[i].hr = true
                                    eventdatabaseUpdate(bot)
                                    eventLogRemind(bot, `${guild.id}`, `# \<a:bwdt:1172460968484290570> AN IMPORTANT ${asyncEventList[i].type} IS HAPPENING WITHIN THE HOUR! (LAST WARNING) \<a:bwdt:1172460968484290570> \n# \<a:asteriskeventglobe:1277895080216236106> ${asyncEventList[i].name} \<a:asteriskeventglobe:1277895080216236106> \n### \<a:asterisklogglobe:1277892414513877037> TYPE: ${asyncEventList[i].type} \<a:asterisklogglobe:1277892414513877037>\n**${asyncEventList[i].month}** **${asyncEventList[i].day}rd** \n${asyncEventList[i].houredtime}\n**INDIVIDUALS OF INTEREST:**\n ${asyncEventList[i].associatedmembers}\n<a:heartgoon2:1168656538622238790> **URL:** *${asyncEventList[i].url}* <a:heartgoon2:1168656538622238790> \n-# Event details`)
                                }
                            }
                        }
                    } else if (asyncEventList[i].day === (day + 5)) {
                        if (asyncEventList[i].fdr != true) {
                            asyncEventList[i].fdr = true
                            eventdatabaseUpdate(bot)
                            eventLogRemind(bot, `${guild.id}`, `## REMINDER FOR UPCOMING ${asyncEventList[i].type} IN 5 DAYS (BE PREPARED.) \n# \<a:asteriskeventglobe:1277895080216236106> ${asyncEventList[i].name} \<a:asteriskeventglobe:1277895080216236106> \n### \<a:asterisklogglobe:1277892414513877037> TYPE: ${asyncEventList[i].type} \<a:asterisklogglobe:1277892414513877037>\n**${asyncEventList[i].month}** **${asyncEventList[i].day}rd** \n${asyncEventList[i].houredtime}\n**INDIVIDUALS OF INTEREST:**\n ${asyncEventList[i].associatedmembers}\n<a:heartgoon2:1168656538622238790> **URL:** *${asyncEventList[i].url}* <a:heartgoon2:1168656538622238790>\n-# Event details`)
        
                        } 
                    } else if (asyncEventList[i].day === (day + 2)) {
                        if (asyncEventList[i].tdr != true) {
                            asyncEventList[i].tdr = true
                            eventdatabaseUpdate(bot)
                            eventLogRemind(bot, `${guild.id}`, `## REMINDER FOR UPCOMING ${asyncEventList[i].type} IN 2 DAYS (BE PREPARED.) \n# \<a:asteriskeventglobe:1277895080216236106> ${asyncEventList[i].name} \<a:asteriskeventglobe:1277895080216236106> \n### \<a:asterisklogglobe:1277892414513877037> TYPE: ${asyncEventList[i].type} \<a:asterisklogglobe:1277892414513877037>\n**${asyncEventList[i].month}** **${asyncEventList[i].day}rd** \n${asyncEventList[i].houredtime}\n**INDIVIDUALS OF INTEREST:**\n ${asyncEventList[i].associatedmembers}\n<a:heartgoon2:1168656538622238790> **URL:** *${asyncEventList[i].url}* <a:heartgoon2:1168656538622238790>\n-# Event details`)
        
                        } 
                    } else if (asyncEventList[i].day === (day + 1)) {
                        if (asyncEventList[i].odr != true) {
                            asyncEventList[i].odr = true
                            console.log('ONE DAY REMINDER')
                            eventdatabaseUpdate(bot)
                            eventLogRemind(bot, `${guild.id}`, `## REMINDER FOR UPCOMING ${asyncEventList[i].type} IN 1 DAYS (BE PREPARED.) \n# \<a:asteriskeventglobe:1277895080216236106> ${asyncEventList[i].name} \<a:asteriskeventglobe:1277895080216236106> \n### \<a:asterisklogglobe:1277892414513877037> TYPE: ${asyncEventList[i].type} \<a:asterisklogglobe:1277892414513877037>\n**${asyncEventList[i].month}** **${asyncEventList[i].day}rd** \n${asyncEventList[i].houredtime}\n**INDIVIDUALS OF INTEREST:**\n ${asyncEventList[i].associatedmembers}\n<a:heartgoon2:1168656538622238790> **URL:** *${asyncEventList[i].url}* <a:heartgoon2:1168656538622238790>\n-# Event details`)
        
                        } 
                    } 
                } catch (err) {
                    
                }
                

            }
            
        
          }
        });
    }

    

    


    

  }, 10000);

function logListtoDB(array) {
    let _bstring = ""
    for (let i = 0; i < array.length; i++)  {
        _bstring = `${_bstring.concat(array[i])}\n`
    }
    


}

let testarray = [
    "1",
    "2",
    "3",
    "4",
]



logListtoDB(testarray)

bot.on('guildCreate', guild => {
    //will do smthn later
});
