import { useParams } from "react-router-dom";
import Image from "./Image";
import { PhotoContext } from "../context/PhotoContext";
import { useContext, useEffect } from "react";

function Item({searchTerm}) {
    
    const Context = useContext(PhotoContext);
    let params = useParams();
    
    if(!params.data) {
        params.data = 'mountain'
    }

    useEffect(()=>{
        Context.runSearch(params.data);
    }, [params.data])
    

    return (
        <div className="photo-container container text-center">
        {(Context.images.length > 0) && !Context.isLoading &&
        <>
            <h2 className="item-heading m-5">{params.data} pictures</h2>
            <div className="row">
                {Context.images.map((data, index) => <div key={index} className="col-lg-3 col-md-4 col-12 text-center mt-3"><Image data={data}></Image></div>)}            
            </div>
        </>}
        {
            Context.isLoading && 
            <div className="loadingio-spinner-spinner-xbv973ynled">
                <div className="ldio-eeutm5aw6n8">
                    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                </div>
            </div> 
        }
        {
            Context.images.length <= 0 && !Context.isLoading && <h2 className="item-heading m-5">{params.data} pictures not found</h2>
        }
        </div>
        
    )
    
}

export default Item;