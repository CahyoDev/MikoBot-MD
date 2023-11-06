import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text }) => {
  let res = await fetch(`https://api.zahwazein.xyz/islami/asmaulhusna?apikey=cahyodev`)
  let res2 = await res.json()
  let x = res2.result
  let cap = `
*Latin :* ${res.latin}
*Arab :* ${res.arabic}
*Text Indo :* ${res.translation_id}
*Text English :* ${res.translation_en}
`
}
handler.help = ['asmaulhusna']
handler.tags = ['internet']
handler.command = /^(asmaulhusna)$/i


export default handler