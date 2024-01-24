module.exports = {
    name: 'smt',
    usage: '> >smt @{usuario}',
    description: 'Manda "smt" no pv do usuário mencionado.',
    execute(message, args) {

        if (args.lenght > 0) {
            var user = message.mentions.users.first();
    
                        if (user) {
                            user.send('smt')
                                .then(() => {
                                    message.react('☠️');
                                })
                                .catch((error) => {
                                    console.error(`Erro ao enviar mensagem privada: ${error}`);
                                    message.reply('Não foi possível enviar a mensagem privada.');
                                });
                        } else {
                            message.reply('Você precisa mencionar um usuário para enviar a mensagem.');
                        }
        }

    }
}