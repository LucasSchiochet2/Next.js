import Titulo from "../../componets/Titulo";

export default function tela(){
    return (
        <div>
            <Titulo
                principal = "Pagina de Cadastro"
                secundario = "Incluir, alterar e excluir cadastro"
                pequeno
                />
            <Titulo
                principal = "Lucas"
                secundario = "Ama a sua namorada"
                />
        </div>
    )
}