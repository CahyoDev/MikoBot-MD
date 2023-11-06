import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text }) => {
  let res = await fetch(`https://api.lolhuman.xyz/api/storynime?apikey=085866`)
  let res2 = await res.json()
  let cap = `
nih kak
`
conn.sendFile(m.chat, 
res2.result, 'story.mp4', cap, m)
}
handler.help = ['storyanime']
handler.tags = ['internet']
handler.command = /^(storyanime)$/i

handler.limit = true

export default handler