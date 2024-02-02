let updateRoles = Date.now() + 1000 * 60;

let entropyAddedQueue = "";
let entropyRemovedQueue = "";

let clientLocal;

module.exports = {
  name: "guildMemberUpdate",
  once: false,
  /**
   * @param {import("discord.js").GuildMember} oldMember
   * @param {import("discord.js").GuildMember} newMember
   * @param {import("discord.js").Client} client
   */
  async execute(oldMember, newMember, client) {
    if (!clientLocal) clientLocal = client;
    if (newMember.guild.id !== "1009048008857493624") return;
    client.debug("Guild member updated.");
    const oldRoles = oldMember.roles.cache;
    const newRoles = newMember.roles.cache;

    const addedRoles = newRoles.filter((role) => !oldRoles.has(role.id));
    const removedRoles = oldRoles.filter((role) => !newRoles.has(role.id));

    addedRoles.forEach((role) => {
      if (role.id === client.settings.entropy.roles.unlinked) return;
      entropyAddedQueue += `[+] ${role.name} - <@!${newMember.id}>\n`;
    });

    removedRoles.forEach((role) => {
      if (role.id === client.settings.entropy.roles.unlinked) return;
      entropyRemovedQueue += `[-] ${role.name} - <@!${newMember.id}>\n`;
    });

    updateRoles = Date.now() + 1000 * 30;

    // Wait 30 seconds before updating the promotions
    setTimeout(() => updatePromotions(client), 1000 * 30);
  },
};

async function updatePromotions(client) {
  if (Date.now() < updateRoles) return client.debug("Not time to update yet.");
  client.debug("Checking for promotions...");
  updateRoles = Date.now() + 1000 * 60;
  try {
    const channel = await client.channels.fetch("1191786783898337310");

    if (entropyAddedQueue + entropyRemovedQueue === "") return;
    else
      channel.send(
        `# Payroll changes.\n\n${
          entropyAddedQueue === "" ? "" : "## Added"
        }\n${entropyAddedQueue}\n${
          entropyRemovedQueue === "" ? "" : "## Removed"
        }\n${entropyRemovedQueue}`
      );
    entropyAddedQueue = "";
    entropyRemovedQueue = "";

    channel.guild.members.fetch().then((members) => {
      members.forEach(async (member) => {
        let username = "";

        username += "[";
        await client.settings.entropy.roles.rankings.main.forEach((role) => {
          if (member.roles.cache.has(role.id)) {
            username += role.short;
          }
        });
        await client.settings.entropy.roles.rankings.sub.forEach((role) => {
          if (member.roles.cache.has(role.id)) {
            username += role.short;
          }
        });

        username +=
          "] " +
          (member.displayName.replace(" ", "⁗").split("⁗")[1] == undefined
            ? member.user.username
            : member.displayName.replace(" ", "⁗").split("⁗")[1]);
        //member.user.displayName;
        if (username.length > 32) username = username.slice(0, 32);
        if (username != member.nickname)
          member.setNickname(username).catch((err) => {});
      });
    });
  } catch (error) {
    client.debug("Error occurred while updating promotions:" + error.stack);
  }
}
