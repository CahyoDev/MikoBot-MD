import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
  let res = `https://telegra.ph/file/f41c3c64ecde7dbdd50ac.mp4`
  conn.sendFile(m.chat, res, 'sewa.jpg', `Hai °@${m.sender.split("@")[0]}°\n\n*Miko BOT* adalah bot Nodejs yg membantu membuat sticker, dan membuat kalian bermain dengan senang-senang\nBerikut list yang tersedia:\n• /allmenu [ Menampilkan Semua Perintah ]\n\n• /profile [ Info your profile ]\n• /dompet [ Check your money ] \n\n2023 © Miko Store \nBot masih dalam tahap Pengembangan\n\nYang Belum Daftar silahkan ketik\n*/daftar nama.umur*\nContoh:\n/daftar cahyo.18`, m, false)
}
handler.help = ["menu", "help"]
handler.tags = ["main"]
handler.command = ["menu", "help"]

export default handler