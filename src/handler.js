export const handler = async msg => {
  if(msg.author.bot) return

  // msg.content
  // msg.author.username
  // `<@${msg.author.id}>`

  switch(true) {
    case /hello/.test(msg.content):
      msg.channel.send("こんばんは")
      break
    case /oyasumi/.test(msg.content):
      console.log("message received from:", msg.author.username)
      msg.channel.send(`hello! <@${msg.author.id}>`)
      break
    default:
      // default
  }
}
