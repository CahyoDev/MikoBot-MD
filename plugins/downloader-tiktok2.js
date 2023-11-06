import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text }) => {
  if (!text) return m.reply(`Use Example: ${usedPrefix+ command} https://vt.tiktok.com/ZSJE2ffo4`)
  await m.reply('Sebentar Ya Sayang....')
  let res = await fetch(`https://api.zahwazein.xyz/downloader/tiktok?apikey=zenzkey_93a52ae6c5&url=${text}`)
  let res2 = await res.json()
  let x = res2.result
  let z = x.author
  let y = x.statistic
  let cap = `
⬣━━━━⬡ Tiktok Down By Cahyo Kun
✾ ➛ Author: *_Miko Store_*
✾ ➛ Video Original: *_${x.video_original}_*
✾ ➛ Vido No Wm: *_${x.nowm}_*
⬣━━━⬡
*_Sukses Download Tiktok No Watermark_*
*_Jangan Lupa Donasi ya Teman_*
`
conn.sendFile(m.chat, 
x.nowm, 'tt.mp4', cap, m)
}
handler.help = ['tiktok', 'tt']
handler.tags = ['downloader']
handler.command = /^(yyyy)$/i

handler.limit = true

export default handler