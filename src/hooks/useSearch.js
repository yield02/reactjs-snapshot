import { useEffect, useState } from "react";


function useSearch(value, delay) {

    const [searchValue, setSearchValue] = useState(value);

    useEffect(()=> {
        const timeOut = setTimeout(function() {
            setSearchValue(value);
        }, delay);
        return clearTimeout(timeOut);
    }, [searchValue])
    
    return searchValue;
}

export default useSearch;