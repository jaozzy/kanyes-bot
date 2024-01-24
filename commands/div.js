module.exports = {
    name: 'div',
    usage: '> >div {n1} {n1}',
    description: 'Divide dois números.',
    execute(message, args) {
        var num1 = parseFloat(args[0]);
        var num2 = parseFloat(args[1]);
        if (!isNaN(num1) && !isNaN(num2)) {
            message.reply(`O resultado da divisão de **${num1}** por **${num2}** é igual a **${(num1 / num2).toFixed(2)}**`);
        } else {
            message.reply('Você precisa inserir **dois números!**');
        };
    },
};
