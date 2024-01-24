module.exports = {
    name: 'clear',
    usage: '> >clear {x}',
    description: 'Limpa um número x entre 1 e 100 de mensagens no canal em que o comando for executado.',
    execute(message, args) {
        var quantidade = parseInt(args[0]) + 1;
                
                    if (isNaN(quantidade)) {
                        return message.reply('Por favor, digite um número válido de mensagens.');
                    } else if (quantidade < 1 || quantidade > 101) {
                        return message.reply('O valor deve ser entre **1** e **100**');
                    }
                
                    message.channel.bulkDelete(quantidade, true)
                        .then(() => {
                            if ((quantidade - 1) > 1) {
                                message.channel.send(`**${quantidade} mensagens foram apagadas!**`);
                            } else {
                                message.channel.send('**1 mensagem foi apagada!**');
                            }
                        })
                        .catch((erro) => {
                            console.error(erro);
                            message.reply(`Ocorreu um erro ao limpar as mensagens: ${erro}`);
                        });
    }
}