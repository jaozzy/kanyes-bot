module.exports = {
    name: 'pi',
    usage: '> >pi {x}',
    description: 'Exibe uma quantidade x de casas decimais de PI.',
    execute(message, args) {
        var casas = parseInt(args[0]);
                    if (!isNaN(casas) && casas > 0 && casas < 49) {
                        var pi = Math.PI.toFixed(casas);
                        message.reply(pi);
                    } else {
                        message.reply('Digite um número inteiro entre 1 e 48.')
                    }
    }
}