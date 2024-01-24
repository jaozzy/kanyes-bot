module.exports = {
    name: 'sorteio',
    usage: '> >sorteio {opção1} {opção2} {...}',
    description: 'Sorteia uma opção dentre N opções.',
    execute(message, args) {
        if (args.length < 2) {
            message.reply('Digite pelo menos 2 opções para sortear.');
        } else {
            var optionsText = args.slice(1);

            var option = optionsText[Math.floor(Math.random(optionsText.length))];

            message.reply(`Opção escolhida: ${option}.`)
        }
    }
}