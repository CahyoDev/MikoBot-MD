import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('proses..')
  let res = `https://api.zahwazein.xyz/ephoto/anonymous?text=${response[0]}&apikey=${global.zein}`
  conn.sendFile(m.chat, res, 'anonymous.jpg', `Nih kak`, m, false)
}
handler.help = ['anonymous'].map(v => v + ' <text|text>')
handler.tags = ['maker']
handler.command = /^(anonymous)$/i
handler.register = true

handler.limit = true

export default handler