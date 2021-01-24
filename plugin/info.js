let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Nama bot : DABOT
║
╠➥ Instagram: @deniambrose_
║
╠═〘 Thanks To 〙 ═
╠➥ deniambrose
╠➥ ZhaVanity
╠➥ Dan kawan yang lain :)
║
╠═〘 DONASI 〙 ═
╠➥ Indosat:  0857-4785-2482
╠➥ Dana:  0857-4785-2482
║
║>Link Group? https://chat.whatsapp.com/DzRKpHZgXsK1416iXMGubM
║
╠═〘 DABOT 〙 ═
`.trim(), m)
}
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

