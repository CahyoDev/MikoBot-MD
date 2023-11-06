import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text }) => {
  if (!text) return m.reply(`Use Example: ${usedPrefix+ command} https://www.facebook.com/xxxxxxxxxxxx`)
  let res = await fetch(`https://saipulanuar.cf/api/download/fb?url=${text}`)
  let res2 = await res.json()
  let x = res2.result
  let z = x.author
  let cap = `
⬣━━⬡ Facebook Down Hd By Cahyo
✾ ➛ Link Fb: *${x.url}*
✾ ➛ Caption: *_${x.title}_*
✾ ➛ Link Download Sd: *_${x.sd}_*
✾ ➛ Link Donwload Audio: *_${x.audio}_*
⬣━━━⬡
*_Sukses Download Facebook*
*_Jangan Lupa Donasi ya Teman_*
`
conn.sendFile(m.chat, 
x.hd, 'fb.mp4', cap, m)
}
handler.command = /^(fb|facebook|fbdl)$/i
handler.help = ['fb', 'facebook']
handler.tags = ['downloader']
handler.limit = true

export default handler