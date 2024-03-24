const { Client, GatewayIntentBits, Partials } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent,
  ],
  partials: [
    Partials.GuildMember,
    Partials.User,
    Partials.Message,
    Partials.Channel,
  ],
});

// Get settings js file
const settings = require("../settings.js");
const { log, error, debug, warning } = require("./logger.js");
const { initializeClient } = require("./initializers.js");
const database = require("./database/index.js");

// Import settings into the client
client.settings = settings;

// Client maps
client.textcommands = new Map();
client.slashcommands = new Map();
client.contexts = new Map();
client.aliases = new Map();
client.buttons = new Map();
client.modals = new Map();
client.selectmenus = new Map();

// Client logging
client.log = log;
client.error = error;
client.debug = debug;
client.warning = warning;
client.logqueue = [];

// MongoDB
client.db;

// BigInt JSON support
BigInt.prototype.toJSON = function () {
  const int = Number.parseInt(this.toString());
  return int ?? this.toString();
};

// Client initialization
client.once("ready", async () => {
  // Initialize the database
  client.db = new database(client);

  // Call the initialization function
  await initializeClient(client);
});

// Make sure no matter what error occurs, the bot doesn't crash
process.on("uncaughtException", (error) => {
  client.error(error.stack);
});

module.exports = {
  client,
};
