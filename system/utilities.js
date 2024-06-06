const { ModalBuilder, ActionRowBuilder, TextInputBuilder } = require("discord.js");

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

  }
};

function messageContentBuilder(interaction) {
  let modal = new ModalBuilder()
    .setTitle("Message Content")
    .setCustomId("builder-message-content")
    .addComponents(
      new ActionRowBuilder().addComponents(
        new TextInputBuilder()
      )
    )


}