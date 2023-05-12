
import React, { useContext, useEffect, useState } from "react";

const API_URL = `http://127.0.0.1:8000/api/movie/`;
const AppContext = React.createContext();

const AppProvider = ({children}) =>{
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [isError, setIsError] = useState({show:"false", msg:""});

    const getMovies = async(url) =>{
        try{
            const res =  await fetch(url);
            const data = await res.json();
            console.log(data);
            if (data.results){
                setIsLoading(false);
                setMovie(data.results);
            }else{
                setIsError({
                    show:true,
                    msg:data.error,

                });

            }
        }catch(error){
            console.log(error);
        }

    }

    useEffect(()=>{
        getMovies(API_URL);
    },[])
    return <AppContext.Provider value={{isLoading, movie, isError}}>
        {children}
    </AppContext.Provider>

}; 

const useGlobalContext = () =>{
    return useContext(AppContext);
}
export  {AppContext, AppProvider, useGlobalContext};