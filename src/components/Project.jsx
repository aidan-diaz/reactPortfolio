import '../App.jsx'
import { Thumbnail } from '../components/Thumbnail.jsx'

const Project = (props) => {
    console.log(props)
    return (
        <div className='projectContainer'>
            <h2>Project {props.projectInfo.name}</h2>
            <Thumbnail image={props.projectInfo.imgSrc} link={props.projectInfo.link} />
        </div>
    )
}

export { Project }