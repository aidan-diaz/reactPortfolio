import '../App.jsx'

const Project = (props) => {
    console.log(props)
    return (
        <div>
        Project {props.portfolioPiece.name}
        </div>
    )
}

export { Project }