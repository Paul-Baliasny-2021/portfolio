import './ProjectList.css';
import Project from '../Project/Project';
import { projects } from '../../data';

function ProjectList() {
    return (
        <div className='list'>
            <div className='list__text'>
                <h2 className='list__title'>Create & inspire. Let's do it together</h2>
                <p className='list__description'>My portfolio that your work has been waiting for.</p>
                <p className='list__description'>Hours of work, tons of newly aquired techniques & a whole lot more awaits
                    inside.</p>
            </div>
            <div className='list__grid'>
                {projects.map(data => (
                    <Project key={data.id} img={data.image} link={data.link} />
                 ) )}
                
            </div>
        </div>
    )
};

export default ProjectList;