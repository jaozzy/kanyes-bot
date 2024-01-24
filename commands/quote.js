module.exports = {
    name: 'quote',
    usage: '> >quote',
    description: 'Envia uma frase aleatória do Kanye West',
    execute(message) {
        fetch("https://api.kanye.rest/")
        .then(data => data.json())
        .then(quote => {
            message.reply(`**Frase do Kanye West:**\n"${quote.quote}"`);
        })
    }
}