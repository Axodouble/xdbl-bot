const {
  SlashCommandBuilder,
  PermissionsBitField,
  ModalBuilder,
  ActionRowBuilder,
  TextInputBuilder,
  TextInputStyle,
} = require("discord.js");

module.exports = {
  name: "buttonrole",
  category: "admin",
  slashcommand: new SlashCommandBuilder()
    .setName("buttonrole")
    .setDefaultMemberPermissions(PermissionsBitField.Flags.Administrator)
    .setDMPermission(false)
    .setDescription("Button role commands.")
    .addSubcommandGroup((group) =>
      group
        .setName("create")
        .setDescription("Create a button role.")
        .addSubcommand((sub) =>
          sub
            .setName("message")
            .setDescription("Create a button role message.")
        )
    ),
  /**
   * @param {import("discord.js").ChatInputCommandInteraction} interaction
   * @param {import("@client").BotClient} client
   */
  async executeSlash(interaction, client) {
    if (interaction.options.getSubcommandGroup() === "create") {
      if (interaction.options.getSubcommand() === "message") {
        interaction.showModal(
          new ModalBuilder()
            .setTitle("Message for Button Roles")
            .setCustomId("reactionrole-message")
            .setComponents(
              new ActionRowBuilder().addComponents(
                new TextInputBuilder()
                  .setRequired(true)
                  .setCustomId("message")
                  .setLabel("Message")
                  .setPlaceholder("Message for button role.")
                  .setValue("Get your roles here!")
                  .setStyle(TextInputStyle.Paragraph)
                  .setMaxLength(2000)
                  .setMinLength(1)
              )
            )
        );
      }
    }
  },
};
