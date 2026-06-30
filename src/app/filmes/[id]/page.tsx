import { filmes } from "@/src/lib/filmes";
import Link from "next/link";
import { notFound } from "next/navigation";
import  styles from "./Detalhe.module.css";
import { getMoviesDEtails } from "@/src/lib/api/tmdb";

type Props={
    params:Promise<{
        id:number
    }>
}


export const generateMetaData =async ({params}:Props)=>{
    const {id} = await params;
    const details= await getMoviesDEtails(id);
    if (!details){
        return notFound();
    }

    return{
        title:`${details.title}|Cineslista`,
        description:details.overview,
        openGraph:{
            title:`${details.title}|Cineslista`,
            description:details.overview,
            images:[`${process.env.NEXT_PUBLIC_TMDB_API_IMG_URL}${details.poster_path}`]

        }
    }

}

const Deatalhes=async({params}:Props)=>{
    const {id} = await params;
    const details= await getMoviesDEtails(id);
    if (!details){
        return notFound();
    }
    const {title,poster_path,overview}=details;
    return(
        <>
        <div className={styles.detalhes}>
          <div className={styles.detalhes__container}>
            <Link className={styles.detalhes__voltar} href="/">Voltar</Link>
            <section>
                <figure>
                    <img className={styles.detalhes__image} src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={`Cartaz do filme ${title}`}/>
                </figure>
                <article className={styles.detalhes__info}>
                    <h2>{title}</h2>
                    <p>{overview}</p>
                </article>
            </section>
          </div>
        </div>
        </>
    )
}

export default Deatalhes;