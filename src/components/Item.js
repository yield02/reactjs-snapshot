
function Item({searchTerm}) {
    return (
        <div className="row w-100">
            <div className="col-3 text-center">{searchTerm}</div>
            <div className="col-3 text-center">{searchTerm}</div>
            <div className="col-3 text-center">{searchTerm}</div>
            <div className="col-3 text-center">{searchTerm}</div>
        </div>
    )
    
}

export default Item;