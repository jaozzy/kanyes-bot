const { InteractionCollector } = require("discord.js");

module.exports = {
    name: 'userinfo',
    usage: '> >userinfo @{usuario}',
    description: 'Exibe informações sobre o usuário mencionado ou sobre você mesmo se nenhum usuário for mencionado.',
    async execute(message) {

        const { EmbedBuilder } = require('discord.js');

        const user = message.mentions.users.first() || message.author;
        const member = await message.guild.members.fetch(user.id);
        const icon = user.displayAvatarURL();
        const tag = user.tag;

        const infoEmbed = new EmbedBuilder()
        .setColor('#0099ff')
        .setAuthor({ name: tag, iconURL: icon })
        .setThumbnail(icon)
        .addFields({ name: 'Membro', value: `${user}`, inline: false })
        .addFields({ name: 'Cargos', value: `${user.roles.cache.map(c => c).join(' ')}`, inline: false })
        .addFields({ name: 'Entrou no Servidor', value: `<t${parseInt(member.joinedAt / 1000)}:R>`, inline: true })
        .addFields({ name: 'Entrou no Discord', value: `<t${parseInt(member.createdAt / 1000)}:R>`, inline: true })
        .setFooter({ text: `User ID ${user.id}`})
        .setTimeStamp()

        await message.reply({ embeds: [infoEmbed] });

    },
};
