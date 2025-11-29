import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";

dotenv.config();

// Create bot client
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// When bot starts
client.once("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
});

// Basic command
client.on("messageCreate", (message) => {
    if (message.author.bot) return;

    if (message.content === "!ping") {
        message.reply("Pong!");
    }
});

// Login using token from .env
client.login(process.env.TOKEN);
