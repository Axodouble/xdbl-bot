const {
  ModalBuilder,
  ActionRowBuilder,
  TextInputBuilder,
  TextInputStyle,
} = require("discord.js");

// @ts-check
module.exports = {
  /**
   * @param {import("discord.js").ChatInputCommandInteraction} interaction
   * @param {String} content
   */
  safeReply: function safeReply(interaction, content) {
    if (interaction.deferred || interaction.replied) {
      return interaction.editReply(content);
    }
    return interaction.reply(content);
  },

  /**
   *
   */
  messageBuilder: function messageBuilder(interaction) {
    // #TODO: Seperated system to create a full discord message
    // with all customization options.
  },
};

/**
 * Responds to the interaction with a message content builder.
 * @param {import("discord.js").ChatInputCommandInteraction} interaction
 */
function contentBuilderInteraction(interaction) {
  interaction.showModal(
    new ModalBuilder()
      .setTitle("Message Content")
      .setCustomId("builder-message-content")
      .addComponents(
        new ActionRowBuilder().addComponents(
          new TextInputBuilder()
            .setRequired(true)
            .setCustomId("message-content")
            .setMinLength(1)
            .setMaxLength(2000)
            .setStyle(TextInputStyle.Paragraph)
            .setLabel("Message Content")
            .setPlaceholder("Enter your message content here.")
            .setValue("Hello World!")
        )
      )
  );
}

/**
 * Responds to the interaction with an embed builder.
 * @param {import("discord.js").ChatInputCommandInteraction} interaction
 */
function embedBuilderInteraction(interaction) {
  interaction.showModal(
    new ModalBuilder()
      .setTitle("Embed Builder")
      .setCustomId("builder-embed")
      .addComponents(
        new ActionRowBuilder().addComponents(
          new TextInputBuilder()
            .setRequired(true)
            .setCustomId("embed-title")
            .setMinLength(1)
            .setMaxLength(256)
            .setStyle(TextInputStyle.Short)
            .setLabel("Embed Title")
            .setPlaceholder("Enter your embed title here.")
            .setValue("Hello World!")
        ),
        new ActionRowBuilder().addComponents(
          new TextInputBuilder()
            .setRequired(true)
            .setCustomId("embed-description")
            .setMinLength(1)
            .setMaxLength(2048)
            .setStyle(TextInputStyle.Paragraph)
            .setLabel("Embed Description")
            .setPlaceholder("Enter your embed description here.")
            .setValue("Hello World!")
        ),
        new ActionRowBuilder().addComponents(
          new TextInputBuilder()
            .setRequired(false)
            .setCustomId("embed-color")
            .setMinLength(1)
            .setMaxLength(7)
            .setStyle(TextInputStyle.Short)
            .setLabel("Embed Color")
            .setPlaceholder("Enter your embed color here.")
            .setValue("#FFFFFF")
        )
      )
  );
}
