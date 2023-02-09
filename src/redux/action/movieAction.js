import { ADD_MOVIE, DELETE_MOVIE } from "../actionTypes/movieTypes"


export const Add_Movie=()=>{
    return {type:ADD_MOVIE}
}
export const Delete_Movie=(id)=>{
    return {type:DELETE_MOVIE,payload:id}
}