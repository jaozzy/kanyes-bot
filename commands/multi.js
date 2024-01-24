module.exports = {
    name: 'multi',
    usage: '> >multi {n1} {n2}',
    description: 'Multiplica dois números.',
    execute(message, args) {
        var num1 = parseFloat(args[0]);
        var num2 = parseFloat(args[1]);
        if (!isNaN(num1) && !isNaN(num2)) {
            message.reply(`O produto de **${num1}** por **${num2}** é igual a **${(num1 * num2).toFixed(2)}**`);
        } else {
            message.reply('Você precisa inserir **dois números!**');
        };
    },
};
