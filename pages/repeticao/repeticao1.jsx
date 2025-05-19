export default function rep(){
    const listaAprovados = [
        'lucas',
        'ana',
        'tulio',
        'yuri'
    ]
    function rederizarLista(){
        return listaAprovados.map((nome,i) => <li key = {i}>{nome}</li>)
    }

    return (
        <ul>
            {rederizarLista()}
        </ul>
    )
}

function rederizarLista(){
        const itens = []
        for(let i = 0;i<listaAprovados.length;i++){
            itens.push(<li key={i}>{listaAprovados[i]}</li>)
        }
        return itens
    }