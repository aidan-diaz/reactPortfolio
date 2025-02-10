const LinkIcon = (props) => {
    console.log(props.icon.className)
    const classes = `headerIcon ${props.icon.className}`
    return (
        <a href={props.icon.link} target='_blank' ><li className={classes}></li></a>
    )
}

export { LinkIcon }