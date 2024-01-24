module.exports = {
    name: 'sabedoria',
    usage: '> >sabedoria {pergunta}',
    description: 'Responde uma pergunta com "sim", "não" ou "talvez".',
    execute(message) {
        var resps = ['sim', 'não', 'talvez'];

        var resp = resps[(Math.floor(Math.random() * resps.length))];

        message.reply(resp);
    }
}