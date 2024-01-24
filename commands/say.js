module.exports = {
    name: 'say',
    usage: '> >say {mensagem}',
    description: 'Manda uma mensagem.',
    execute(message, args) {
        if (args.length > 0) {
            var sayMessage = args.join(' ');
    
            message.channel.send(sayMessage);
            message.delete();
        } else {
            message.reply('Você precisa digitar uma mensagem!');
        }
    }
}