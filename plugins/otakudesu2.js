import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text }) => {
  if (!text) return m.reply(`Use Example: ${usedPrefix+ command} yae`)
  let res = await fetch(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=082138&query=${text}`)
  let res2 = await res.json()
  let x = res2.result
  let cap = `${x.title}

*Resolusi :* ${x.reso}
*Ukuran Video :* ${x.size}
*Creator :* CahyoKun
*Link Download :* ${x.link_dl}`
conn.sendFile(m.chat, cap, m)
}
handler.command = /^(otakudesu2)$/i
handler.tags = ['premium']

export default handler