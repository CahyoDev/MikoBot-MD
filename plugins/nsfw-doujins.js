import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text }) => 
 {
  if (!text) throw `Masukan Query\n*Example:* ${usedPrefix + command} manhwa`
  let res = await fetch(`https://api.zahwazein.xyz/animeweb/doujindesu/search?query=${text}&apikey=zenzkey_93a52ae6c5`)
  let res2 = await res.json()
  let cap = `*Hasil Pencarian Dari ${text}*\n`
  for (let json of res2.result) {
   cap += `Thumbnail:* ${json.thumb}
Title: ${json.title}
Rating: ${json.score}
Status: ${json.status}
Link: ${json.link}
`
cap += '\n' + '••••••••••••••••••••••••' + '\n'
  	}
  m.reply(m.chat, cap, m)
}
handler.help = ['doujin']
handler.tags = ['nsfw']
handler.command = /^(doujin)$/i
export default handler