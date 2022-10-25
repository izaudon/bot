export const handler = async msg => {
  if(msg.author.bot) return
  if (/伴田|路子/.test(msg.content)) {
    msg.channel.send("本名で呼ぶのはやめくださいってば〜！");
  }
  if (/みちこ|路子/.test(msg.content)) {
    msg.channel.send("ロコはロコです！");
  }
  if(!/ロコ|ろこ|ROCO|roco/.test(msg.content)) return

  // msg.content
  // msg.author.username
  // `<@${msg.author.id}>`
  //console.log("message received from:", msg.author.username)
  //msg.channel.send(`hello! <@${msg.author.id}>`)


  switch(true) {
    case /かわい|可愛|カワイ|えらい|偉/.test(msg.content):
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
      msg.channel.send("ぽっぽ~です!")
      break
    case /アホ|あほ|阿呆|馬鹿|バカ|ばか|うんち|うんこ|クソ|くそ|糞|ボケ|ぼけ|カス|はげ|ハゲ/.test(msg.content):
      msg.channel.send("そんなこと言うなんて、ひどいです……")
      break
    case /バイバイ|さよなら|さようなら|またね|じゃ.*ね/.test(msg.content):
      msg.channel.send("バイバイです!プロデューサー！")
      break
    case /みくじ/.test(msg.content):
    let arr = ["\[大吉\]エクセレントです！", "\[吉\]グレイトです！", "\[中吉\]ベリーグッドです！", "\[小吉\]グッドです！", "\[末吉\]ナイスです！", "\[凶\]バッドですね……", "\[大凶\]テリブルです……", "\[ロコ吉\]ファンタスティックです!"];
    let weight = [5, 10, 7, 7, 5, 3, 2, 1];
    fortune(arr, weight);
    break;
    default:
      msg.channel.send("どうかしましたか？")
      // defaul
  }

  function fortune(arr, weight){
      let totalweight=0;
      for(var i=0;i<weight.length;i++){
        totalweight+=weight[i];
      }
      let random = Math.floor(Math.random()*totalweight);
      for(var i = 0;i<weight.length;i++){
        if(random<weight[i]){
          msg.reply(arr[i])
          return;
        }else{
          random -= weight[i];
        }
      }
      console.log("lottery error");
    }

}