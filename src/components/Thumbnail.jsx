const Thumbnail = (props) => {
    return (
        <img className='projectThumbnail' src={props.image.imgSrc} alt={props.image.altText} />
    )
}

export { Thumbnail }