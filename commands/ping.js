module.exports = {
    name: 'ping',
    usage: '> >ping',
    description: 'Verifica a latência do bot.',
    execute(message) {
        message.reply(`Latência do bot: **${Date.now() - message.createdTimestamp}ms**`);
    },
};
