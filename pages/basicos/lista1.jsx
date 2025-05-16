
function gerarLista(){
    const lista = []
    for(let i = 0 ;i<10;i++){
        lista.push(<span>{i},</span>) 
    }
    return lista
}
export default function jsx4(){
    return(
        <div>
           {gerarLista()}
        </div>
    )
}