const Thumbnail = (props) => {
    return (
        <a href={props.link} target='_blank'>
            <div className='projectThumbnailContainer'>
                <img className='projectThumbnail' src={props.image} alt={props.image.altText} />
            </div>
        </a>
    )
}

export { Thumbnail }