module.exports = {
    name: 'pv',
    usage: '> >pv @{usuario} {mensagem}',
    description: 'Manda uma mensagem no pv do usuário mencionado.',
    execute(message, args) {
        var user = message.mentions.users.first();

                    if (args.length > 0) {

                        message.delete();

                        var pvMessage = args.slice(1).join(' ');

                        user.send(pvMessage);
                    }
    }
}