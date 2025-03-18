export const ADICIONAR_FRASE = "ADICIONAR_FRASE"

const reducer = (estado, acao) => {
    switch (acao.tipo) {
        case ADICIONAR_FRASE:
            if (acao.frase.length < 20) {
                alert('Ops... não são permitidas frases com menos de 20 caracteres!')
                return estado
            }

            if (estado.includes(acao.frase)) {
                alert('Não são permitidas frases duplicadas')
                return estado
            }
            return [...estado, acao.frase];

        default:
            return estado
    }
}

export default reducer