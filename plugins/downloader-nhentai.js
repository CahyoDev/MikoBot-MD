import fetch from 'node-fetch'

let handler = async (m, { conn, args }) => {
	
if (db.data.users[m.sender].premiumTime < 1) return m.reply('KHUSUS PREMIUM USER')
if (!args[0]) throw 'Masukan code'
await m.reply('Sebentar Ya Sayang....')
let res = await fetch(`https://api.lolhuman.xyz/api/nhentaipdf/${args[0]}?apikey=${global.lolkey}`)
let jso = await res.json()
conn.sendMessage(m.chat, { document: { url: jso.result }, fileName: 'nhentai.pdf', mimetype: 'application/pdf' }, { quoted: m })
}
handler.help = ['nhentai']
handler.tags = ['premium','nsfw']
handler.command = /^(nhentai)$/i
handler.premium = true

export default handler