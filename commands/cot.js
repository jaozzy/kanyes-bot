module.exports = {
    name: 'cot',
    usage: '> >cot {moeda1} {moeda2}',
    description: 'Exibe a cotação atual de uma moeda em relação a outra a partir de seu código comercial. Se o código da segunda moeda não for inserido, será o real.',
    execute(message, args) {

        const axios = require('axios');
        const https = require('https');

        async function obterCotacao(moeda = args[0], moeda2 = args[1]) {
            try {
                if (!moeda) {
                    return message.reply('Por favor, forneça uma moeda.');
                }
    
                const agent = new https.Agent({  
                    rejectUnauthorized: false
                });
    
                let url, cotacao;
    
                if (!moeda2 || moeda2 === '') {
                    url = `https://economia.awesomeapi.com.br/last/${moeda.toUpperCase()}-BRL/`;
                    cotacao = (await axios.get(url, { httpsAgent: agent })).data[`${moeda.toUpperCase()}BRL`]["bid"];
                } else {
                    url = `https://economia.awesomeapi.com.br/last/${moeda.toUpperCase()}-${moeda2.toUpperCase()}/`;
                    cotacao = (await axios.get(url, { httpsAgent: agent })).data[`${moeda.toUpperCase()}${moeda2.toUpperCase()}`]["bid"];
                }
    
                if (cotacao) {
                    const moedaBase = moeda.toUpperCase();
                    const moedaCotada = moeda2 ? moeda2.toUpperCase() : 'BRL';
                    
                    const cotacaoFormatada = new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: moedaCotada,
                    }).format(parseFloat(cotacao));
    
                    return message.reply(`A cotação de 1 ${moedaBase} para ${moedaCotada} é ${cotacaoFormatada}.`);
                } else {
                    return message.reply(`Moeda não encontrada.`);
                }
            } catch (error) {
                return message.reply(`Ocorreu um erro ao obter a cotação. Erro: **${error}**.`);
            }
        }
    
        obterCotacao();
    }
}