import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text }) => {
  let res = await fetch(`https://api.zahwazein.xyz/randomanime/hololive?apikey=cahyodev`)
  let res2 = await res.json()
  let x = res2.result
  let cap = `*Caption :* *_${x.caption}_*`
conn.sendFile(m.chat, 
x.image, 'hololive.jpg', cap, m)
}
handler.help = ['hololive']
handler.tags = ['anime']
handler.command = /^(hololive)$/i

handler.limit = true

export default handler