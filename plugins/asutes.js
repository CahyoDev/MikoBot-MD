let handler = async (m, { conn }) => {
 conn.sendFile(m.chat, 'https://api.zahwazein.xyz/randomasupan/asupan?apikey=cahyodev', 'asupan.mp4', 'Nih kak Random Asupan Jangan Lupa Foolow Ig https://instagram.com/cahyo_kuun', m)
}
handler.help = ['asupan']
handler.tags = ['hentai', 'premium']

handler.command = /^(asutes)$/i
handler.premium = true
export default handler