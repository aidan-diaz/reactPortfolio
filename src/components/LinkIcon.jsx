const LinkIcon = (props) => {
    console.log(props.icon.className)
    const classes = `headerIcon ${props.icon.className}`
    return (
        <li className={classes}></li>
    )
}

export { LinkIcon }