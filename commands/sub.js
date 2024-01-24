module.exports = {
    name: 'sub',
    usage: '> >sub {n1} {n2}',
    description: 'Subtrai dois números.',
    execute(message, args) {
        var num1 = parseFloat(args[0]);
        var num2 = parseFloat(args[1]);
        if (!isNaN(num1) && !isNaN(num2)) {
            message.reply(`A diferença entre **${num1}** e **${num2}** é igual a **${(num1 - num2).toFixed(2)}**`);
        } else {
            message.reply('Você precisa inserir **dois números!**');
        };
    },
};
