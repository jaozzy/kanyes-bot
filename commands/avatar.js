module.exports = {
    name: 'avatar',
    usage: '> >avatar @usuario',
    description: 'Exibe o avatar do usuário mencionado.',
    execute(message) {
        const userToShowAvatar = message.mentions.users.first() || message.author;
        message.channel.send(`Avatar de **${userToShowAvatar.username}:** ${userToShowAvatar.displayAvatarURL({ dynamic: true })}`);
    }
}