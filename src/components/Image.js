import './Image.css'

function Image({data}) {
    let url = `https://farm66.staticflickr.com/${data.server}/${data.id}_${data.secret}_m.jpg`;
    return (
    <div className='overflow-hidden'>
        <img className='image' src={url}/>
    </div>
    )
}

export default Image;