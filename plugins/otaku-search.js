import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text }) => 
 {
 if (db.data.users[m.sender].premiumTime < 1) return m.reply('PREMIUM ONLY')
  if (!text) throw `Masukan Query\n*Example:* ${usedPrefix + command} Gotoubun`
  let res = await fetch(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=082138&query=${text}`)
  let res2 = await res.json()
  let x = res2.result
  let z = x.link_dl
  let cap = `*Hasil Pencarian Dari ${text}*\n`
  for (let json of res2.result) {
   cap += ` • *Title:* ${json.title} 
• *Link Neko Nya:* ${json.japanese}
• *Thumbnail:* ${json.judul}
• *Type:* ${json.type}
• *Episode:* ${json.episodes}
• *Ditayangkan:* ${json.aired}
• *Producers:* ${json.producers}
• *Genre:* ${json.genres}
• *Duration:* ${json.duration}
• *Studio:* ${json.studios}
• *Rating:* ${json.rating}
• *Credit:* ${json.credit}
`
cap += '\n' + '••••••••••••••••••••••••' + '\n'
  	}
  conn.sendButton(m.chat, cap, author, [['Owner', '.owner']], m)
}
handler.help = ['otakusearch <text>']
handler.command = /^(otakusearch)$/i
handler.tags = ['premium']

handler.premium = true

export default handler