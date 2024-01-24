module.exports = {
    name: 'aniversario',
    usage: '> >aniversario {data}',
    description: 'Registra o seu aniversário. Insira no formato dd/mm/aaaa.',
    aniversariosFilePath: './aniversarios.json',
    execute(message, args) {
        
        const fs = require('fs');
        
        const aniversariosFilePath = this.aniversariosFilePath;

        function carregarAniversarios() {
            try {
                const data = fs.readFileSync(aniversariosFilePath, 'utf-8');
                return JSON.parse(data);
            } catch (error) {
                console.error(`Erro ao carregar aniversários: ${error}`);
                return {};
            }
        }
        

        let aniversarios = carregarAniversarios();

        function salvarAniversarios() {
            try {
                const data = JSON.stringify(aniversarios, null, 2);
                fs.writeFileSync(aniversariosFilePath, data, 'utf-8');
            } catch (error) {
                console.error(`Erro ao salvar aniversários: ${error}`);
            }
        }
        

        if (args.length < 1) {
            message.reply('Você precisa digitar a sua data de aniversário.');
        } else {
            var aniversario = args[0];
            aniversarios[message.author.id] = aniversario;
            salvarAniversarios();
            message.reply(`Seu aniversário foi registrado como ${aniversario}. 🎉`);
        }
    }
}