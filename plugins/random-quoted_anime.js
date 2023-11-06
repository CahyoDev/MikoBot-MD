// BY MIKO BOT MD
import fetch from 'node-fetch'
let handler = async (m, { text,  usedPrefix,  command }) => {
await m.reply('Matte Onichan...')
  let res = await fetch(`https://api.zahwazein.xyz/randomtext/animequotes?apikey=cahyodev`)
  let res2 = await res.json()
  let x = res2.result
 m.reply(`*Anime:* ${x.anime}\n*Character:* ${x.character}\n*---------QUOTED---------*\n*English:* ${x.en}\n*Indonesia:* ${x.id}`.trim())
    }  
handler.help = ['ramdomquotedanime', 'rqa']
handler.tags = ['internet']
handler.command = /^(rqa|randomquotedane)$/i
export default handler