const {
  SlashCommandBuilder,
  PermissionsBitField,
  ButtonStyle,
  ActionRowBuilder,
  ButtonBuilder,
} = require("discord.js");

module.exports = {
  name: "fun",
  category: "fun",
  slashcommand: new SlashCommandBuilder()
    .setName("fun")
    .setDescription("Fun commands.")
    .setDMPermission(false)
    .addSubcommand((subcommand) =>
      subcommand
        .setName("aesthetic")
        .setDescription("Change text to look like ｔｈｉｓ.")
        .addStringOption((option) =>
          option
            .setName("text")
            .setDescription("The text to change.")
            .setRequired(true)
            .setMaxLength(2000)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("upside-down")
        .setDescription("Flip text.")
        .addStringOption((option) =>
          option
            .setName("text")
            .setDescription("The text to flip.")
            .setRequired(true)
            .setMaxLength(2000)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("uwu")
        .setDescription("UwUify text.")
        .addStringOption((option) =>
          option
            .setName("text")
            .setDescription("The text to UwUify.")
            .setRequired(true)
            .setMaxLength(2000)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("mock")
        .setDescription("Mock text.")
        .addStringOption((option) =>
          option
            .setName("text")
            .setDescription("The text to mock.")
            .setRequired(true)
            .setMaxLength(2000)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("clap")
        .setDescription("Clap text.")
        .addStringOption((option) =>
          option
            .setName("text")
            .setDescription("The text to clap.")
            .setRequired(true)
            .setMaxLength(2000)
        )
    ),

  /**
   * @param {import("discord.js").ChatInputCommandInteraction} interaction
   * @param {import("discord.js").Client} client
   */
  async executeSlash(interaction, client) {
    await interaction.deferReply({ ephemeral: false });
    let response = await execute(interaction);
    return await interaction.editReply({
      content: response,
      allowedMentions: { parse: [] },
    });
  },
};

/**
 * @param {import("discord.js").CommandInteraction} interaction
 */
async function execute(interaction) {
  const subcommand = interaction.options.getSubcommand();

  if (subcommand === "aesthetic") {
    return interaction.options
      .getString("text")
      .replace(/ /g, "　")
      .replace(/a/g, "ａ")
      .replace(/b/g, "ｂ")
      .replace(/c/g, "ｃ")
      .replace(/d/g, "ｄ")
      .replace(/e/g, "ｅ")
      .replace(/f/g, "ｆ")
      .replace(/g/g, "ｇ")
      .replace(/h/g, "ｈ")
      .replace(/i/g, "ｉ")
      .replace(/j/g, "ｊ")
      .replace(/k/g, "ｋ")
      .replace(/l/g, "ｌ")
      .replace(/m/g, "ｍ")
      .replace(/n/g, "ｎ")
      .replace(/o/g, "ｏ")
      .replace(/p/g, "ｐ")
      .replace(/q/g, "ｑ")
      .replace(/r/g, "ｒ")
      .replace(/s/g, "ｓ")
      .replace(/t/g, "ｔ")
      .replace(/u/g, "ｕ")
      .replace(/v/g, "ｖ")
      .replace(/w/g, "ｗ")
      .replace(/x/g, "ｘ")
      .replace(/y/g, "ｙ")
      .replace(/z/g, "ｚ")
      .replace(/A/g, "Ａ")
      .replace(/B/g, "Ｂ")
      .replace(/C/g, "Ｃ")
      .replace(/D/g, "Ｄ")
      .replace(/E/g, "Ｅ")
      .replace(/F/g, "Ｆ")
      .replace(/G/g, "Ｇ")
      .replace(/H/g, "Ｈ")
      .replace(/I/g, "Ｉ")
      .replace(/J/g, "Ｊ")
      .replace(/K/g, "Ｋ")
      .replace(/L/g, "Ｌ")
      .replace(/M/g, "Ｍ")
      .replace(/N/g, "Ｎ")
      .replace(/O/g, "Ｏ")
      .replace(/P/g, "Ｐ")
      .replace(/Q/g, "Ｑ")
      .replace(/R/g, "Ｒ")
      .replace(/S/g, "Ｓ")
      .replace(/T/g, "Ｔ")
      .replace(/U/g, "Ｕ")
      .replace(/V/g, "Ｖ")
      .replace(/W/g, "Ｗ")
      .replace(/X/g, "Ｘ")
      .replace(/Y/g, "Ｙ")
      .replace(/Z/g, "Ｚ");
  }
  if (subcommand === "upside-down") {
    return interaction.options
      .getString("text")
      .split("")
      .reverse()
      .join("")
      .replace(/a/g, "ɐ")
      .replace(/b/g, "q")
      .replace(/c/g, "ɔ")
      .replace(/e/g, "ǝ")
      .replace(/f/g, "ɟ")
      .replace(/g/g, "ƃ")
      .replace(/h/g, "ɥ")
      .replace(/i/g, "ᴉ")
      .replace(/j/g, "ɾ")
      .replace(/k/g, "ʞ")
      .replace(/l/g, "l")
      .replace(/m/g, "ɯ")
      .replace(/n/g, "u")
      .replace(/o/g, "o")
      .replace(/p/g, "d")
      .replace(/q/g, "b")
      .replace(/r/g, "ɹ")
      .replace(/s/g, "s")
      .replace(/t/g, "ʇ")
      .replace(/u/g, "n")
      .replace(/v/g, "ʌ")
      .replace(/w/g, "ʍ")
      .replace(/x/g, "x")
      .replace(/y/g, "ʎ")
      .replace(/z/g, "z")
      .replace(/A/g, "∀")
      .replace(/B/g, "q")
      .replace(/C/g, "Ɔ")
      .replace(/D/g, "p")
      .replace(/d/g, "p")
      .replace(/E/g, "Ǝ")
      .replace(/F/g, "Ⅎ")
      .replace(/G/g, "פ")
      .replace(/H/g, "H")
      .replace(/I/g, "I")
      .replace(/J/g, "ſ")
      .replace(/K/g, "ʞ")
      .replace(/L/g, "˥")
      .replace(/M/g, "W")
      .replace(/N/g, "N")
      .replace(/O/g, "O")
      .replace(/P/g, "Ԁ")
      .replace(/Q/g, "Q")
      .replace(/R/g, "ɹ")
      .replace(/S/g, "S")
      .replace(/T/g, "┴")
      .replace(/U/g, "∩")
      .replace(/V/g, "Λ")
      .replace(/W/g, "M")
      .replace(/X/g, "X")
      .replace(/Y/g, "⅄")
      .replace(/Z/g, "Z");
  }
  if (subcommand === "uwu") {
    return interaction.options
      .getString("text")
      .replace(/(?:r|l)/g, "w")
      .replace(/(?:R|L)/g, "W")
      .replace(/n([aeiou])/g, "ny$1")
      .replace(/N([aeiou])/g, "Ny$1")
      .replace(/N([AEIOU])/g, "Ny$1")
      .replace(/ove/g, "uv")
      .replace(/th/g, "d")
      .replace(/Th/g, "D")
      .replace(/TH/g, "D")
      .replace(/ove/g, "uv");
  }
  if (subcommand === "mock") {
    return interaction.options
      .getString("text")
      .split("")
      .map((c, i) => (i % 2 === 0 ? c.toUpperCase() : c.toLowerCase()))
      .join("");
  }
  if (subcommand === "clap") {
    return interaction.options.getString("text").replace(/ /g, " 👏 ");
  }
}
