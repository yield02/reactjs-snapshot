import { createContext, useState } from "react";
import axios from "axios";
import { apiKey } from "../api/config";

export const PhotoContext = createContext();



function PhotoContextProvider({children}) {
    const [images, setImages] = useState([]); 
    const [isLoading, setIsLoading] = useState(true); 

    const runSearch = query => {
        setIsLoading(true);
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
        .then(response => {
            setImages(response.data.photos.photo);
            setIsLoading(false);
        })
        .catch(error => console.log("Search ERROR",error));
    }
    return (
    <PhotoContext.Provider value={{images, isLoading, runSearch}}>
        {children}
    </PhotoContext.Provider>
    );
}


export default PhotoContextProvider;