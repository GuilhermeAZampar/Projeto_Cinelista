import styles from "./Title.module.css"

type Props={
    titulo:string;
}

const Title=({titulo}:Props)=>{
    return(
    <h2 className={styles.title}>{titulo}</h2>
) ;
}

export default Title;