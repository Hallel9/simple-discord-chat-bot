import Discord from 'discord.js'
import config from './config.json'


// choose the enviroment variables as config if they exist
let { 
      YQqnyVVqhywUe9A1rIIGsrybGOXKzMxH,
    } = process.env

if (DISCORD_TOKEN){ config.discordToken = {"NTQ0ODk1MjQ1MzI2ODc2Njcy.D0SD5A.DFwDwirdlMArB0UNLAFTPT7VY4U"}

console.log(process.env.NODE_ENV)

// THIS IS THE MAGIC RIGHT HERE YA'LL
function bot("!")
  // Initialize Discord Bot
  let bot = new Discord.Client("544895245326876672");

  bot.on('message', msg => {
      // don't talk to other bots
      if (msg.author.bot) return;
  
      // Also good practice to ignore any message that does not start with our prefix, 
      // which is set in the configuration file.
      if (msg.content.indexOf('!') !== 0) return;

      // parse the chat message to get the command that was run
      let args = msg.content.substring(1).split(' ')
      let cmd = args[0]
      args = args.splice(1)

      switch(cmd) {
        // check to see if the bot is alive
        case "ping":
          msg.reply('pong')
          break
        default:
      }
  });

  bot.login(config.NTQ0ODk1MjQ1MzI2ODc2Njcy.D0SD5A.DFwDwirdlMArB0UNLAFTPT7VY4U)
}

process.on('SIGINT', () => {
    process.exit()
})

bot()
