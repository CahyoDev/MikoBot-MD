import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text }) => {
  if (!text) return m.reply(`Use Example: ${usedPrefix+ command} https://vt.tiktok.com/ZSJE2ffo4`)
  let res = await fetch(`https://api.lolhuman.xyz/api/tiktok?apikey=${global.lolkey}&url=${text}`)
  let res2 = await res.json()
  let x = res2.result
  let z = x.author
  let y = x.statistic
  let cap = `
✾ ➛ Nickname: *_${z.nickname}_*
✾ ➛ Viewers : *${y.play_count}*
✾ ➛ Like: *${y.like_count}*
✾ ➛ Comment: *${y.comment_count}*
✾ ➛ Share: *${y.share_count}*
✾ ➛ Caption: *${x.title}*

𝙑𝙄𝘿𝙊 𝙎𝙀𝘿𝘼𝙉𝙂 𝘿𝙄 𝙆𝙄𝙍𝙄𝙈! 𝙈𝙊𝙃𝙊𝙉 𝙏𝙐𝙉𝙂𝙂𝙐 𝙎𝙀𝘽𝙀𝙉𝙏𝘼𝙍... 
`
await conn.sendFile(m.chat,x.thumbnail, 'thumbnail.jpg',cap, m) 
conn.sendFile(m.chat,x.link, m)
}
handler.help = ['tiktok', 'tt']
handler.tags = ['downloader']
handler.command = /^(tiktok|tt|ttdl|ttd)$/i

handler.limit = true

export default handler