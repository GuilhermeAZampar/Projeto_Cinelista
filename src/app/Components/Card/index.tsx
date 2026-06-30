import { Filme } from "@/src/types/types";
import styles from "./Card.module.css"
import Link from "next/link";

type Props={
    filme:Filme;
}

const Card = ({filme}:Props)=>{
    const {id,title,poster_path,overview,vote_average}=filme;
    const resume=overview?.length>=256?`${overview?.substring(0,253)}...`:overview
    return(
        <div key={id} className={styles.card}>
            <Link href={`/filmes/${id}`}>
            <img className={styles.card__poster} src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={`Poster do filme ${filme.title}`} width="300" height="300"/>
            <div className={styles.card__info}>
                <h3 className={styles.card__title}>{title}</h3>
                <p className={styles.card__description}>{resume}</p>
                <p className={styles.card__description}>Nota: {vote_average}</p>
            </div>
            </Link>
        </div>
    )

}

export default Card;