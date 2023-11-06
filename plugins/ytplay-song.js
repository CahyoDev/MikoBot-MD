import youtube from '@yimura/scraper'
const yt = new youtube.default()

let handler = async (m, { conn, usedPrefix, command, text }) => {
if (!text) throw 'Masukan Query !'
let res = await yt.search(text)
let vidio = res.videos[0]
let { description, duration, duration_raw, uploaded, views, channel, id, link, thumbnail, title, shareLink } = vidio
let imgg = await conn.resize(thumbnail, 300, 150)
let playy = `${title}

📌 *ID :* ${id}
⏲️ *Duration :* ${duration}
⌚ *Duration Raw :* ${duration_raw}
⏰ *Uploaded :* ${uploaded}
👁️ *Views :* ${views}
🔗 *Link :* ${link}
Note!! Silahkan Salin Link Di Atas Untuk Mendownload Mp3/Mp4
Contoh  
.yta ${link} untuk download lagunya
.ytv ${link} untuk download video nya
trimakasih`
conn.sendFile(m.chat, imgg, 'tes.jpg', playy, m)
}
handler.help = ['song'].map(v => v + ' <pencarian>')
handler.tags = ['downloader', 'limitmenu']
handler.command = /^song?$/i

handler.exp = 0
handler.register = true

export default handler