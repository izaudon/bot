export const handler = async msg => {
  if(msg.author.bot) return
  if (/伴田|路子/.test(msg.content)) {
    msg.channel.send("本名で呼ぶのはやめくださいってば〜！");
  }
  if (/みちこ|路子/.test(msg.content)) {
    msg.channel.send("ロコはロコです！");
  }
  if (/ROCO|🇷 ?(🇴|🅾️) ?🇨 ?(🇴|🅾️) ?/.test(msg.content)){
    let react = ["🇷", "🅾️", "🇨", "🇴"]
    for (let i = 0;i<4;i++){
      msg.react(react[i])
    }
    msg.channel.send("🇷 🇴 🇨 🇴")
  }
  if (/art|Art|ART|アート|芸術/.test(msg.content)){
    msg.react("🎨")
  }
  if(!/ロコ|ろこ|ROCO|roco|Roco/.test(msg.content)) return

  switch(true) {
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
    case /ほめて|褒めて|できた|出来た/.test(msg.content): {
      let arr = ["コングラッチュレーションです！", "マーベラスです！", "ファンタスティックです！", "アメイジングです！", "エクセレントです！"]
      let weight = [1,1,1,1,1]
      fortune(arr,weight)
      break
    }
    case /みくじ/.test(msg.content): {
      let arr = ["> \[**大吉**\]\nエクセレントです！", "\> [**吉**\]\nグレイトです！", "> \[**中吉**\]\nベリーグッドです！", "> \[**小吉**\]\nグッドです！", "> \[**末吉**\]\nナイスです！", "> \[**凶**\]\nバッドですね……", "> \[**大凶**\]\nテリブルです……", "> \[**ロコ吉**\]\nファンタスティックです!", "> \[**チュパ吉**\]\nラッキーです……？", "> \[**崖吉**\]\nラッキーなんですかね……？", "> \[**百万吉**\]\nワンダフルです！"];
      let weight = [5, 10, 7, 7, 5, 3, 2, 1, 3, 3, 4];
      fortune(arr, weight);
      break;
    }
    default:{
      let arr = ["どうかしましたか？", "はい！", "はい！ロコですよ！", "ロコです！", "なんですか〜？プロデューサー！"]
      let weight = [1,1,1,1,1]
      fortune(arr, weight)
      break
    }

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