let handler = async (m, { conn }) => {
 conn.sendFile(m.chat, 'https://api.zahwazein.xyz/randomasupan/natajadeh?apikey=cahyodev', 'asupan.mp4', 'Nih kak Random Asupan Natajadeh Jangan Lupa Foolow Ig https://instagram.com/cahyo_kuun', m)
}
handler.help = ['asupan']
handler.tags = ['hentai', 'premium']

handler.command = /^(asutes4)$/i
handler.premium = true
export default handler