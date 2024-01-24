module.exports = {
    name: 'wiki',
    usage: '> >wiki {assunto}',
    description: 'Envia um resumo de um assunto na Wikipedia.',
    execute(message, args) {

        const axios = require('axios');

        if (args.length > 0) {
            async function obterResumo() {
                try {
                    const assunto = args.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
                    const resposta = await axios.get(`https://pt.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(assunto)}`);
                    const resumo = resposta.data.extract;
    
                    if (resumo) {
                        return message.reply(`**${assunto}**: ${resumo}`);
                    } else {
                        return message.reply(`Não foi possível encontrar informações sobre ${assunto} na Wikipedia.`);
                    }
                } catch (error) {
                    return message.reply(`Ocorreu um erro ao buscar informações na Wikipedia. Erro: **${error}**.`);
                }
            }
    
            obterResumo();
        } else {
            message.reply('Você precisa digitar um assunto para buscar na Wikipedia.');
        }
    }
}