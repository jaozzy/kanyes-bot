const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'bicho',
    usage: '> >bicho {aposta} bicho}',
    description: 'Digite ">bicho" para ver a lista de bichos e ">bicho {aposta} {id bicho} para apostar."',
    execute(message, args) {

        const bichos = [
            'Avestruz',
            'Águia',
            'Burro',
            'Borboleta',
            'Cachorro',
            'Cabra',
            'Carneiro',
            'Camelo',
            'Cobra',
            'Coelho',
            'Cavalo',
            'Elefante',
            'Galo',
            'Gato',
            'Jacaré',
            'Leão',
            'Macaco',
            'Porco',
            'Pavão',
            'Peru',
            'Touro',
            'Tigre',
            'Urso',
            'Veado',
            'Vaca'
        ]

        if (args.length[2]) {
            let aposta = parseFloat(args[0]);
            let bicho = bichos[parseInt(args[1])];

            bichoSorteado = bichos[Math.floor(Math.random() * 25)];

            if (bicho === bichoSorteado) {
                let ganho = (aposta * (Math.floor(Math.random() * 10)));

                message.reply(`Correto! Ganho total: R$${(ganho - aposta).toFixed(2)}`)

            } else {
                message.reply('Errado!');
            }

        } else {
            const bichosEmbed = new EmbedBuilder()
            .setColor('#0099ff')
            .setTitle('Jogo do Bicho - Lista de Bichos')
            .setDescription('Escolha um bicho e digite ">bicho {aposta} {id do bicho}" para apostar.')
    
            for (let i = 0; i < bichos.length; i++) {
                bichosEmbed.addFields({ name: `${i + 1}`, value: `${bichos[i]}` })
            }

            message.reply({ embeds: [bichosEmbed] })

        }



    }
}