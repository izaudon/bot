import { setTimeout } from "node:timers/promises"

export const handler = async msg => {
  if(msg.author.bot) return
  if (/伴田|路子/.test(msg.content)) {
    msg.channel.send("本名で呼ぶのはやめくださいってば〜！");
  }
  if (/みちこ|路子|コロちゃん/.test(msg.content)) {
    msg.channel.send("ロコはロコです！");
  }
  if (/ROCO|Roco|roco|🇷 ?(🇴|🅾️) ?🇨 ?(🇴|🅾️) ?/.test(msg.content)){
    let react = ["🇷", "🅾️", "🇨", "🇴"]
    for (let i = 0;i<4;i++){
      msg.react(react[i])
    }
  }
  if (/art|Art|ART|アート|芸術/.test(msg.content)){
    msg.react("🎨")
  }
  if(!/ロコ|ろこ|ROCO|roco|Roco|🇷 ?(🇴|🅾️) ?🇨 ?(🇴|🅾️) ?/.test(msg.content)) return

  switch(true) {
    case /みくじ/.test(msg.content): {
      let arr = ["> \[**大吉**\]\nエクセレントです！", "\> [**吉**\]\nグレイトです！", "> \[**中吉**\]\nベリーグッドです！", "> \[**小吉**\]\nグッドです！", "> \[**末吉**\]\nナイスです！", "> \[**凶**\]\nバッドですね……", "> \[**大凶**\]\nテリブルです……", "> \[**ロコ吉**\]\nファンタスティックです!", "> \[**チュパ吉**\]\nラッキーです……？", "> \[**崖吉**\]\nラッキーなんですかね……？", "> \[**百万吉**\]\nワンダフルです！", "> \[**令和**\]\n🤔"];
      let weight = [5, 10, 7, 7, 5, 3, 2, 1, 3, 3, 4, 2];
      fortune(arr, weight);
      break;
    }
    case /オウム返し|真似/.test(msg.content):
      parrot()
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
    case /こんにち/.test(msg.content):
      msg.channel.send("こんにちは、プロデューサー！")
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
      msg.channel.send("ぽっぽ〜です!")
      break
    case /アホ|あほ|阿呆|馬鹿|バカ|ばか|うんち|うんこ|クソ|くそ|糞|ボケ|ぼけ|カス|はげ|ハゲ|排泄/.test(msg.content):
      msg.channel.send("そんなこと言うなんて、ひどいです……")
      break
    case /バイバイ|さよなら|さようなら|またね|じゃ.*ね/.test(msg.content):
      msg.channel.send("バイバイです!プロデューサー！")
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
      let res = ["ロコのレゾンデートルって", "レプレゼンテーションそのものなんです！", "ロコモーティブにグラデーションする", "パッションのマニフェスト、プレゼンスがクレッシェンドして", "パラダイムシフトしちゃえば", "エモーションをコミットできちゃうんですよ！", "それって……って、聞いてますか？プロデューサー！"]
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

  function parrot(){
    msg.channel.send("イミテーションですね！")
    const filter = msg => !msg.author.bot
    const collected = msg.channel.awaitMessages({filter, max: 1, time: 20 * 1000 })
    .then(collected => {
      if(!collected.size) return msg.channel.send("何か言ってくださいよ〜……")
      msg.channel.send(collected.first().content)
    })
  }

  function fortune(arr, weight){
      let totalweight=0;
      for(var i=0;i<weight.length;i++){
        totalweight+=weight[i];
      }
      let random = Math.floor(Math.random()*totalweight);
      for(var i = 0;i<weight.length;i++){
        if(random<weight[i]){
          msg.channel.send(arr[i])
          return;
        }else{
          random -= weight[i];
        }
      }
      console.log("lottery error");
    }

}
