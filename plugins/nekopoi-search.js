import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text }) => 
 {
 if (db.data.users[m.sender].premiumTime < 1) return m.reply('PREMIUM ONLY')
  if (!text) throw `Masukan Query\n*Example:* ${usedPrefix + command} Isekai Harem`
  let res = await fetch(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=SGWN&query=${text}`)
  let res2 = await res.json()
  let cap = `*Hasil Pencarian Dari ${text}*\n`
  for (let json of res2.result) {
   cap += ` • *Title:* ${json.title} 
• *Link Neko Nya:* ${json.link}
• *Thumbnail:* ${json.thumbnail}
•
•
`
cap += '\n' + '••••••••••••••••••••••••' + '\n'
  	}
  conn.sendButton(m.chat, cap, author, [['Owner', '.owner']], m)
}
handler.help = ['nekopoisearch <text>']
handler.command = /^(nekopoisearch)$/i
handler.tags = ['premium']

handler.premium = true

export default handler