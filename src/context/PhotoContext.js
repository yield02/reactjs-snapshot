import { createContext, useState } from "react";
import axios from "axios";
import { apiKey } from "../api/config";

export const PhotoContext = createContext();



function PhotoContextProvider({children}) {
    const [images, setImages] = useState([]); 

    const runSearch = query => {
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
        .then(response => {
            setImages(response.data.photos.photo);
        })
        .catch(error => console.log("Search ERROR",error));
    }
    return (
    <PhotoContext.Provider value={{images, runSearch}}>
        {children}
    </PhotoContext.Provider>
    );
}


export default PhotoContextProvider;