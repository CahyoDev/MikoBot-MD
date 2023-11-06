import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('proses..')
  let res = `https://api.zahwazein.xyz/ephoto/blueneon?text=${response[0]}&apikey=${global.zein}`
  conn.sendFile(m.chat, res, 'arrow.jpg', `Nih kak`, m, false)
}
handler.help = ['blueneon'].map(v => v + ' <text|text>')
handler.tags = ['maker']
handler.command = /^(blueneon)$/i
handler.register = true

handler.limit = true

export default handler