import React from "react"
export default function Titulo(props){

    if (props.pequeno){
        return(
            <>
            <p>{props.principal}</p>
            <p>{props.secundario}</p>
            </>
        )
    }
    return(
        <>
        <h1 className="vermelha">{props.principal}</h1>
        <h2>{props.secundario}</h2>
        </>
    )
}