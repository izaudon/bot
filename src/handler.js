import { setTimeout } from "node:timers/promises"
import { Client, EmbedBuilder, GatewayIntentBits } from "discord.js"
import { config } from "dotenv"
import ping from "ping"

config()

export const handler = async msg => {
  if(msg.author.bot) return
  if (/伴田|路子/.test(msg.content)) {
    msg.channel.send("本名で呼ぶのはやめくださいってば〜！");
  }
  if (/みちこ|路子|コロちゃん/.test(msg.content)) {
    msg.channel.send("ロコはロコです！");
  }
  if (/ROCO|Roco|roco|🇷?(🇴|🅾️)?🇨?(🇴|🅾️)?/.test(msg.content)){
    let react = ["🇷", "🅾️", "🇨", "🇴"]
    for (let i = 0;i<4;i++){
      msg.react(react[i])
    }
  }
  if (/art|Art|ART|アート|芸術/.test(msg.content)){
    msg.react("🎨")
  }
  if(!/ロコ|ろこ|ROCO|roco|Roco|🇷?(🇴|🅾️)?🇨?(🇴|🅾️)?/.test(msg.content)) return

  switch(true) {
    case /みくじ/.test(msg.content): {
      let arr = ["> \[**大吉**\]", "\> [**吉**\]", "> \[**中吉**\]", "> \[**小吉**\]", "> \[**末吉**\]", "> \[**凶**\]", "> \[**大凶**\]", "> \[**ロコ吉**\]", "> \[**大々吉**]", "> \[**チュパ吉**\]", "> \[**崖吉**\]", "> \[**百万吉**\]", "> \[**令和**\]"]
      let arrComment = ["\nエクセレントです！", "\nグレイトです！", "\nベリーグッドです！", "\nグッドです！", "\nナイスです！", "\nバッドですね……", "\nテリブルです……", "\nファンタスティックです！", "\nアメイジングです！", "\nラッキーです……？", "\nラッキーなんですかね……？", "\nワンダフルです！", "\n🤔"]
      let weight = [5, 10, 7, 7, 5, 3, 2, 1, 3, 3, 4, 2]
      if(/\d/.test(msg.content)){
        loopFortune(msg.content, arr, weight)
      }else{
        let arrResult = await margeArray(arr, arrComment)
        fortune(arrResult, weight)
      }
      break
    }
    case /投票|集計/.test(msg.content):
      poll(msg.content)
      break
    case /オウム返し|真似/.test(msg.content):
      parrot()
      break
    case /ping/.test(msg.content):
      pingPong(msg.cleanContent)
      break
    case /かわい|可愛|カワイ|えらい|偉|すご|凄|流石|さすが/.test(msg.content):
      msg.channel.send("えへへ。サンクスです〜")
      break
    case /サンクス|さんくす/.test(msg.content):
      msg.channel.send("サンクスです〜")
      break
    case /おやすみ/.test(msg.content):
      msg.channel.send("おやすみなさい、プロデューサー！")
      break
    case /おはよ/.test(msg.content):
      msg.channel.send("おはようございます、プロデューサー！")
      break
    case /こんばん/.test(msg.content):
      msg.channel.send("こんばんは、プロデューサー！")
      break
    case /どうした|どないした/.test(msg.content):
      msg.channel.send("どうしたもこうしたもないで")
      break
    case /何かあったのか/.test(msg.content):
      msg.channel.send("何かあったのか、じゃないで")
      break
    case /はと|ハト|鳩|ぽっぽ|っぽ|ポッポ|ッポ/.test(msg.content):
      msg.channel.send("ぽっぽ〜です！")
      break
    case /アホ|あほ|阿呆|馬鹿|バカ|ばか|うんち|うんこ|クソ|くそ|糞|ボケ|ぼけ|カス|はげ|ハゲ|>排泄/.test(msg.content):
      msg.channel.send("そんなこと言うなんて、ひどいです……")
      break
    case /バイバイ|さよなら|さようなら|またね|じゃ.*ね/.test(msg.content):
      msg.channel.send("バイバイです！プロデューサー！")
      break
    case /やった(〜|ー|あ|ぁ)|わ(ー|〜|あ|ぁ)い/.test(msg.content):
      msg.channel.send("コングラッチュレーションです！")
      break
    case /あけおめ|あけまして|明けまして/.test(msg.content):
      msg.channel.send("ハッピーニューイヤーです！プロデューサー！")
      break
    case /ほめて|褒めて|できた|出来た/.test(msg.content): {
      let arr = ["コングラッチュレーションです！", "マーベラスです！", "ファンタスティックです！", "アメイジングです！", "エクセレントです！"]
      let weight = [1,1,1,1,1]
      fortune(arr,weight)
      break
    }
    case /存在意義|レゾンテートル/.test(msg.content): {
      let res = ["ロコのレゾンデートルって", "レプレゼンテーションそのものなんです！", "ロコモーティブにグラデーションする", "パッションのマニフェスト、プレゼンスがクレッシェンドして", "パラダイムシフトしちゃえば", "エモーションをコミットできちゃうんですよ！", "それって……って聞いてますか？プロデューサー！"]
      for (let i = 0;i<7;i++){
        msg.channel.sendTyping()
        await setTimeout(1200)
        msg.channel.send(res[i])
      }
      break
    }
    case /モチベ|(m|M)otivation|MOTIVATION/.test(msg.content): {
      let mot = ["クリエイションのモチベーションは", "インディビジュアルのストリームなんです！", "インセンティブされたインスティンクトがリジェクトされたパトスは", "ロコにオーサムなディスカバリーをギブしてくれるんです！"]
      for (let i = 0;i<4;i++){
        msg.channel.sendTyping()
        await setTimeout(1200)
        msg.channel.send(mot[i])
      }
      break
    }
    default:{
      let arr = ["どうかしましたか？", "はい！", "はい！ロコですよ！", "ロコです！", "なんですか〜？プロデューサー！"]
      let weight = [1,1,1,1,1]
      fortune(arr, weight)
      break
    }
  }

  function margeArray(element, add){
    const result = new Array()
    for(let [index, value] of element.entries()){
      result.push(`${value + add[index]}`)
    }
    return result
  }

  function fortune(element, weight){
    let totalWeight = 0
    for(let value of weight) totalWeight += value
    let randomNumber = Math.floor(Math.random()*totalWeight)
    for(let [index, value] of weight.entries()){
      if(randomNumber > value){
        randomNumber -= value
      }else{
        msg.channel.send(element[index])
        return
      }
    }
  }


  async function loopFortune(message, element, weight){
    let times = message.replace(/[^0-9]/g, "")
    if(times > 10) times = 10
    for(let i=0;i < times;i++){
      await setTimeout(1000)
      fortune(element, weight)
    }
  }

  async function awaitMsg(){
    const filter = msg => !msg.author.bot
    const collected = await msg.channel.awaitMessages({filter, max: 1, time: 30*1000})
    if(!collected.size) return msg.channel.send("何か言ってくださいよ〜……")
    return collected.first()
  }

  async function parrot(){
    msg.channel.send("イミテーションですね！")
    msg.channel.send(await awaitMsg().content)
  }

  async function pingPong(message){
    const elements = message.split(" ")
    if(elements.length < 2) return rawPong()
    const link = new Array()
    for(let value of elements){
      if(checkUrl(value)) link.push(value)
    }
    if(link.length === 0) return rawPong()
    for(let domain of link){
      let url = 0
      if(/https/.test(domain)){
        url = domain.replace("https://", "")
      }else if(/http/.test){
        url = domain.replace("http://","")
      }
      let result = await ping.promise.probe(url, {
        timeout: 10000,
        extra: ["-i","2"]
      })
      console.log(result)
      if(!result.alive) msg.channel.send(`${url}にコネクトできませんでした……`)
      if(result.alive) msg.channel.send(`${url}にコネクトできました！(${result.time}ms)`)
    }

    function rawPong(){
      msg.channel.send(":ping_pong:")
      msg.channel.send("pongです！")
    }
  }

  function checkUrl(string){
    const filter = /https?:\/\/[\w/:%#\$&\?\(\)~\.=\+\-]+/.test(string)
    if(filter){
      return true
    }else{
      return false
    }
  }

  function checkEmpty(element){
    return element !== undefined && element !== null
  }

  function margeResult(emoji, choice){
    const result = new Array()
    for(let [index, value] of choice.entries()){
      result.push(`${emoji[index]} : ${value}`)
    }
    return result
  }

  async function poll(message){
    const client = new Client({
      intents:[
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessageReactions,
      ]
    })
    const emojis = [`🇦`,`🇧`,`🇨`,`🇩`,`🇪`,`🇫`,`🇬`,`🇭`,`🇮`,`🇯`,`🇰`,`🇱`,`🇲`,`🇳`,`🇴`]
    if(/投票/.test(message)){
      msg.channel.send("ディテールを教えてください！\n_` <Title> <1> <2> <3> ... <n> `_")
      const origin = await awaitMsg()
      const detail = origin.content
      const elements = detail.split(" ")
      const [title, ...dist] = elements
      const choice = [...(new Set(dist))]
      const margeChoice = margeResult(emojis, choice)
      if(choice.length < 2 || choice.length > emojis.length){
        return msg.channel.send(`チョイスは2～${emojis.length}コにしてください！`)
      }
      let embed = await new EmbedBuilder()
        .setTitle(`Vote: ${title}`)
        .setFields({
          name: `by ${origin.member.displayName}`,
          value: `\n`
        },
        {
          name: `${margeChoice.join("\n")}`,
          value: `\n`
        })
        .setTimestamp()
      const pollEmbed = await msg.channel.send({embeds: [embed]})
      msg.channel.send("集計時は\n `ロコ集計#"+ pollEmbed.id+"#"+pollEmbed.channel.id+"`\n とセンドしてくださいね！")
      for(let [index, value] of choice.entries()){
        pollEmbed.react(emojis[index])
      }
  }else if(/集計/.test(message)){
      const elements = msg.content.split("#")
      if(elements.length !== 3) return msg.channel.send("コレクトなフォーマットでセンドしてください！")
      const [command, messageId, channelId] = elements
      const channel = await client.channels.cache.get(channelId)
      const pollMessage = await msg.channel.messages.fetch(messageId)
      const gld = msg.guild
      let votedNames = new Array()
      for(let i = 0;pollMessage.reactions.cache.get(emojis[i]);i++){
        let reactedUser = await pollMessage.reactions.cache.get(emojis[i]).users.fetch()
        let userId = reactedUser.filter(usr => usr.id !== process.env.CLIENT_ID).map(usr => usr.id)
        let names = new Array()
        for(let id of userId){
          names.push(await gld.members.fetch(id))
        }
        votedNames[i] = `${names.length}票(${names.join(", ")})`
      }
      votedNames = votedNames.filter(checkEmpty)
      const margeChoice = margeResult(emojis, votedNames)
      let embed = await new EmbedBuilder()
        .setTitle(`投票結果`)
        .setFields({
          name: `by ${msg.member.displayName}`,
          value: `${margeChoice.join("\n")}`
        })
        .setTimestamp()
      pollMessage.reply({embeds: [embed]})
    }
  }


}
