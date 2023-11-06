import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text }) => {
  if (!text) return m.reply(`Use Example: ${usedPrefix+ command} yae miko`)
  let res = await fetch(`https://api.zahwazein.xyz/searching/animequotes?query=${text}&apikey=zenzkey_93a52ae6c5`)
  let res2 = await res.json()
  let x = res2.result
  let cap = `*Character :* ${x.character}
*Anime :* ${x.anime}
*Episode :* ${x.episode}
*Quotes :* *_${x.quotes}_*`
conn.sendFile(m.chat, 
x.thumb, 'quoted.jpg', cap, m)
}
handler.help = ['quotedanime']
handler.tags = ['internet']
handler.command = /^(quotedanime)$/i

handler.limit = true

export default handler