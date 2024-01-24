module.exports = {
    name: 'ram',
    usage: '> >ram',
    description: 'Exibe a quantidade de RAM usada pelo bot na host.',
    execute(message) {

        const { EmbedBuilder } = require('discord.js');
        const os = require('os');

        const ramEmbed = new EmbedBuilder()
                    .setColor('#0099ff')
                    .setTitle('Uso de RAM')
                    .addFields(
                        { name: 'RAM usada:', value: `${(((os.totalmem() - os.freemem())) / 1024 / 1024).toFixed(2)} MB`}
                    );

                    message.channel.send({ embeds: [ramEmbed] });
    }
}