export const vcHandler = client => async (oldState, newState) => {
  if (newState.channel && !oldState.channel) {
    const channel = newState.channel;
    if (channel.guild.id) {
      //
      const kikisenId = kikisen[channel.guild.id]
      const kikisenChannel = await client.channels.fetch(kikisenId);
      kikisenChannel.send(
        (
          "`" +
          newState.member.displayName +
          "`" +
          "さんが" +
          "**" +
          channel.name +
          "**`" +
          "にコネクトしました！"
        ).replace("@", "＠")
      );
    }
  } else if (!newState.channel && oldState.channel) {
    const channel = oldState.channel;
    if (channel.guild.id) {
      const kikisenId = kikisen[channel.guild.id]
      const kikisenChannel = await client.channels.fetch(kikisenId);
      kikisenChannel.send(
        (
          "`" +
          newState.member.displayName +
          "`" +
          "さんが" +
          "**" +
          channel.name +
          "**" +
          "からディスコネクトしました"
        ).replace("@", "＠")
      );
    }
  }
};
