import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix }) => {
let pp = 'https://telegra.ph/file/f5c0826db552558264212.jpg'
let name = await conn.getName(m.sender)
let but1 = '𝐎𝐖𝐍𝐄𝐑'
let bit = usedPrefix + 'owner'
let donasi = `
⮕ *Mau Donasi? silahkan Scane qr di atas Dan hub owner kirim bukti tf*

𝐍𝗼𝐭𝐞 : Trimakasih Yg Udah Donasi Semoga Kesananya
Makin Lebih Baik

𝐀𝐭𝐚𝐮 𝐊𝐥𝐢𝐤 𝐃𝐢 𝐁𝐚𝐰𝐚𝐡`
await conn.sendButtonDoc(m.chat, ucapan + name, donasi, but1, bit, fkontak, {
			contextInfo: {
				forwardingScore: fsizedoc,
				externalAdReply: {
                    body: '© Miko𝐁𝗼𝐭',
    containsAutoReply: true,
    mediaType: 1,
    mediaUrl: hwaifu.getRandom(), 
    renderLargerThumbnail: true,
    showAdAttribution: true,
    sourceId: '© Miko𝐁𝗼𝐭',
    sourceType: 'PDF',
    previewType: 'PDF',
    sourceUrl: sgc,
    thumbnail: await(await fetch(pp)).buffer(),
    thumbnailUrl: sgc,
    title: '𝑺𝒄𝒂𝒏 𝑸𝑹 𝑰𝒏𝒊 𝑼𝒏𝒕𝒖𝒌 𝑩𝒂𝒚𝒂𝒓'  
				}
			}
})
}
handler.tags = ['donasi', 'donate']
handler.help = ['info']
handler.command = /^(donate|donasi)$/i

export default handler