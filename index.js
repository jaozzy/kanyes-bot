const { Client, ActivityType } = require('discord.js');
const fs = require('fs');

const client = new Client({
    intents: 47003,
});

const prefix = '>'

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

let aniversarios;
const aniversariosFilePath = './commands/aniversarios.json';

client.commands = new Map();

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

console.clear()

client
    .on('ready', () => {
        aniversarios = carregarAniversarios();

        console.clear()
        console.log('\n-------\nBot ON!\n-------\n');

        client.user.setActivity({
            type: ActivityType.Custom,
            name: 'customstatus',
            state: 'I Made That Bitch Famous'
        })

        verificarAniversarios();

    })

    .on('disconnect', () => {
        client.user.setActivity('invisible')
    })

    .on('messageCreate', async (message) => {
        if (message.author.bot) return;

        if (message.content.startsWith(prefix)) {
            const args = message.content.slice(prefix.length).trim().split(/ +/);
            const commandName = args.shift().toLowerCase();
    
            const command = client.commands.get(commandName);
    
            if (!command) {
                return message.reply(`Comando "${commandName}" não encontrado! Digite **>help** para ver a lista de comandos.`);
            };
    
            try {
                command.execute(message, args);
            } catch (error) {
                console.error(error);
                message.reply('Ocorreu um erro ao executar o comando.');
            }
        }

        // Chamar o matheus de gay
        else if (!(message.author.bot) && message.content.toLowerCase().includes('matheus')) {
            message.react('🏳️‍🌈');
        }

        else if (!(message.author.bot) && message.mentions.has(client.user)) {
            message.reply('eae mano! se precisar, digite **>help** pra ver meus comandos!');
        }

    })

    .login('MTE5ODgyMTI5Nzc1MzQzNjI0MA.Gw4FIB.OB2JpnBQqCdfwY5sgxcpWsW3Yq30Fykf9df24o');

async function verificarAniversarios() {
    const hoje = new Date();
    const hojeFormatado = hoje.toLocaleDateString('pt-BR');

    for (const [userID, aniversario] of Object.entries(aniversarios)) {
        const [dia, mes, ano] = aniversario.split('/').map(Number);
        const aniversarioData = new Date(ano, mes - 1, dia);

        if (aniversarioData.getMonth() === hoje.getMonth() && aniversarioData.getDate() === hoje.getDate()) {
            const usuario = client.users.cache.get(userID);
            if (usuario) {
                const idade = hoje.getFullYear() - aniversarioData.getFullYear();
                usuario.send(`Parabéns, ${usuario.username}! 🎉 Hoje é o seu aniversário e você completa ${idade} anos!`);
            }
        }
    }
}

function carregarAniversarios() {
    try {
        const data = fs.readFileSync(aniversariosFilePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error(`Erro ao carregar aniversários: ${error}`);
        return {};
    }
}
