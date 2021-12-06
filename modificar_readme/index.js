const core = require('@actions/core');
const fs = require('fs');


fs.writeFile('/README.md', '<img src="https://drive.webforshops.com/warofres/logowarof.png">' + core.getInput('frase_positiva') + core.getInput('frase_negativa') + core.getInput('resultado_tests'), (err) => {
    if (err) throw err;
});

core.setOutput('texto', 'Meme añadido al readme');

process.exit(0);