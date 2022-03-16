import './Project.css';


function Project(props) {
    return (
        <div className='project'>
            <div className='project__browser'>
                <div className='project__circle'></div>
                <div className='project__circle'></div>
                <div className='project__circle'></div>
            </div>
            <a href={props.link} target='_blank' rel="noreferrer noopener" className='project__image-container'>
                <img src={props.img} alt='Project capture' className='project__image' />
            </a>
        </div>
    )
};

export default Project;
