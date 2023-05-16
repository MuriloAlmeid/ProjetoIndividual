const axios = require('axios');

async function fazerRequisicao() {
    try {
        const resposta = await axios.get('RGAPI-dad55e1b-a55e-4487-bd79-a39dfa2616a9');
        console.log(resposta.data);
    } catch (erro) {
        console.error(erro);
    }
}

fazerRequisicao();