// BY MIKO BOT MD
import fetch from 'node-fetch'
let handler = async (m, { text,  usedPrefix,  command }) => {
await m.reply('Sebentar...')
  let res = await fetch(`https://api.zahwazein.xyz/randomtext/faktaunik?apikey=cahyodev`)
  let res2 = await res.json()
  let x = res2.result
 m.reply(`*${x.message}*`.trim())
    }  
handler.help = ['faktaunik']
handler.tags = ['internet']
handler.command = /^(faktaunik)$/i
export default handler