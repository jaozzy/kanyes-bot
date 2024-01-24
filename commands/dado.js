module.exports = {
    name: 'dado',
    usage: '> >dado XdY',
    description: 'Rola um dado.',
    execute(message, args) {
        if (args.length === 1 && args[0].includes('d')) {
            var [dX, dY] = args[0].split('d');
            if (!isNaN(dX) && !isNaN(dY)) {
                let [x, y] = [parseInt(dX), parseInt(dY)];
                let msg = '';
                let total = 0;
                for (let i = 0; i < x; i++) {
                    let randNum = Math.floor((Math.random() * y) + 1);
                    total += randNum;
                    msg += `${randNum} `;
                }
                message.reply(`Rolou: ${msg}\nTotal: ${total}`);
            } else {
                message.reply('Formato inválido. Use algo como **"!dado 3d6".**');
            }
        } else {
            message.reply('Comando inválido. Use algo como **"!dado 3d6"**.');
        }
    }
}