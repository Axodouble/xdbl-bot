// @ts-check
const { Client, GatewayIntentBits, Partials } = require("discord.js");
const { log, error, debug, warning } = require("./logger.js");
const { initializeClient } = require("./initializers.js");
const database = require("./database/index.js");

class BotClient extends Client {
  constructor(options) {
    super(options);

    // Load settings
    this.settings = require("../settings.js");

    // Initialize Maps
    this.textcommands = new Map();
    this.slashcommands = new Map();
    this.contexts = new Map();
    this.aliases = new Map();
    this.buttons = new Map();
    this.modals = new Map();
    this.selectmenus = new Map();

    // Load logger functions
    this.log = log;
    this.error = error;
    this.debug = debug;
    this.warning = warning;

    // Load client utilities
    this.safeReply = require("./utilities").safeReply;

    // Initialize database
    this.db = null; // Database will be initialized in the `initializeDatabase` method

    // Client initialization
    this.once("ready", async () => {
      // Initialize the database
      this.db = new database(this);

      // Call the initialization function
      await initializeClient(this);
    });

    // Make sure no matter what error occurs, the bot doesn't crash
    process.on("uncaughtException", (error) => {
      this.error(error.stack?.toString() ?? error.toString());
    });
  }
}

const client = new BotClient({
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

module.exports = {
  client,
  BotClient
};
