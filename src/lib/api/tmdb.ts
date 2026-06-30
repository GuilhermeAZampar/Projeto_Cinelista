import { Filme } from "@/src/types/types"
import tmdbAPI from "./axios"


type Data={
    results:Filme[]
}


export const getMoviesTranding = async ()=>{
    const res = await tmdbAPI.get<Data>("/trending/movie/week?language=pt-BR");
    return res.data.results;
}

export const getMoviesDEtails = async (id:number): Promise<Filme|undefined>=>{
    const res = await tmdbAPI.get<Filme>(`/movie/${id}?language=pt-BR`);
    return res.data;
}

export const getNowPlaying = async () =>{
    const res = await tmdbAPI.get<Data>("movie/now_playing?language=pt-BR");
    return res.data.results;
}




export const getPopular = async () =>{
    const res = await tmdbAPI.get<Data>("movie/popular?language=pt-BR");
    return res.data.results;
}

export const getTop = async () =>{
    const res = await tmdbAPI.get<Data>("movie/top_rated?language=pt-BR");
    return res.data.results;
}