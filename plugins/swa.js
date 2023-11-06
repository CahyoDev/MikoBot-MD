import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
  let res = `https://api.zahwazein.xyz/api/anime/sfw/wallpaper?apikey=zenzkey_93a52ae6c5`
  conn.sendFile(m.chat, res, 'sewa.jpg', `*Mau Sewa Bot Mas? Silahkan Hub Owner*
*Wa.me/6282138188516*

*Jan lupa juga kunjungi shop saya. untuk melihat harga² panel ,sewa ,dll*
*Link: https://linktr.ee/cahyo_kuun*`, m, false)
}
handler.help = ['internet']
handler.tags = ['sewabot', 'sewa']
handler.command = /^(sewabot|sewa)$/i

export default handler