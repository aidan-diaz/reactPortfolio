const LinkIcon = (props) => {
    console.log(props.icon.className)
    return (
        <li className={props.icon.className}></li>
    )
}

export { LinkIcon }