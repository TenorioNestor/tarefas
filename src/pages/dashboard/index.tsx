import Head from "next/head"
import styles from './styles.module.css'


export default function Dashboard(){
    return(
        <div className={styles.cantainer}>
            <Head>
                <title>Meu painel de tarefas</title>
            </Head>

            <h1>Pagina Painel</h1>
        </div>
    )
}