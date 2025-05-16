import styles from "./integracao1.module.css"
export default function integracao(){
    return(
        <div>
            <div className={styles.vermelha}>Texto #01</div>
            <div className="azul">Texto #02</div>
            <div className="verde">Texto #03</div>
        </div>
    )
}