import fetch from 'node-fetch'
let handler = async (m, {text, args}) => {
  if (!args[0]) throw `Use example .simi halo`
  let api = await fetch(`https://api.zahwazein.xyz/entertainment/simisimi?text=${text}&apikey=zenzkey_93a52ae6c5`)
  let res2 = await api.json()
  let res = res2.result
  m.reply(res.message)
}
handler.command = ['simi']
handler.tags = ['fun']
handler.help = ['simi']

export default handler