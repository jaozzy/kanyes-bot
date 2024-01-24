const { EmbedBuilder } = require('discord.js');
const fs = require('fs');

module.exports = {
    name: 'help',
    usage: '> >help',
    description: 'Exibe esta mensagem de ajuda.',
    execute(message) {
        const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

        const helpEmbed = new EmbedBuilder()
            .setColor('#0099ff')
            .setTitle('Comandos do Bot')
            .setDescription('**Aqui estão os meus comandos disponíveis:**');

        for (const file of commandFiles) {
            const command = require(`./${file}`);
            if (command.usage && command.description) {
                helpEmbed.addFields({ name: command.usage, value: command.description });
            }
        }

        message.reply({ embeds: [helpEmbed] });
    }
};
