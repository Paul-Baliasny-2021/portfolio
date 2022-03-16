import './About.css';
import photo from '../../images/man at work.jpg';
import cert from '../../images/certificate.jpeg';

function About({onIconClick}) {
    return (
        <div className='about'>
            <div className='about__left'>
                <div className='about__card back'></div>
                <div className='about__card'>
                    <img className='about__image' src={photo} alt='Man at work' />
                </div>
            </div>
            <div className='about__right'>
                <h1 className="about__title">About me</h1>
                <q className="about__sub">
                I am neither especially clever nor especially gifted. I am only very, very curious.
                </q>
                <p className="about__sub-author">
                ― Albert Einstein
                </p>
                <p className="about-description">
                I graduated from a web development Bootcamp Practicum100 by Yandex – a profound, immersive, and outcome-oriented school – focusing to develop job-ready skills as efficiently as possible, finding it an extremely worthwhile investment for making my mid-career transition. 
                </p>
                <div className='about__certificate'>
                    <img src={cert} alt='Certificate' className='about__cert-img' onClick={onIconClick}/>
                    <div className='about__cert-text' >
                        <h4 className='about__cert-title'>Web Development Graduation Certificate</h4>
                        <p className='about__cert-description'>Being among the first 25 people out of 100 who crossed the finish line is surprisingly encouraging.</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;