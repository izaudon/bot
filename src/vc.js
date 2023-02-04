import config from "../config.js"

export const vcHandler = client => async (oldState, newState) => {
  if (newState.channel && !oldState.channel) {
    const kikisenId = config.vcLog[newState.channel.guild.id]
    if (kikisenId) {
      const kikisenChannel = await client.channels.fetch(kikisenId);
      await kikisenChannel.send(
        `\`${newState.member.displayName}\`さんが` +
        `**${newState.channel.name}**にコネクトしました！`)
    }
  } else if (!newState.channel && oldState.channel) {
    const kikisenId = config.vcLog[oldState.channel.guild.id]
    if (kikisenId) {
      const kikisenChannel = await client.channels.fetch(kikisenId);
      await kikisenChannel.send(
          `\`${oldState.member.displayName}\`さんが` +
          `**${oldState.channel.name}**からディスコネクトしました`)
    }
  }
}

