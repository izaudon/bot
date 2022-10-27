import { Client, GatewayIntentBits } from "discord.js"
import { config } from "dotenv"
import { handler } from "./handler.js"
import { vcHandler } from "./vc.js"

config()

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildVoiceStates,
  ],
})

client.on("ready", () => console.log("ready!"))
client.on("messageCreate", handler)
client.on("voiceStateUpdate", vcHandler(client))

client.login(process.env.TOKEN)
