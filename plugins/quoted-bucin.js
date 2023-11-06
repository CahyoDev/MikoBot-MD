// BY MIKO BOT MD
import fetch from 'node-fetch'
let handler = async (m, { text,  usedPrefix,  command }) => {
await m.reply('Sebentar...')
  let res = await fetch(`https://api.zahwazein.xyz/randomtext/bucinquote?apikey=cahyodev`)
  let res2 = await res.json()
  let x = res2.result
 m.reply(`*Quoted Bucin:* ${x.message}`.trim())
    }  
handler.help = ['quotedbucin', 'qb']
handler.tags = ['internet']
handler.command = /^(qb|quotedbucin)$/i
export default handler