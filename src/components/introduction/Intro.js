import './Intro.css';
import myPhoto from '../../images/Me4.png';
import support from '../../images/supportUkr.png'
// import { useContext } from 'react';
// import { ThemeContext } from '../Context';

function Intro() {

    // const theme = useContext(ThemeContext);
    
    return (
        <div className="intro">
            <div className="intro__left">
                <div className='intro__left-wrapper'>
                    <h2 className='intro__hello'>Hello, my name is</h2>
                    <h2 className='intro__name'>Paul Baliasny, MA, MBA</h2>
                    <div className='intro__title'>
                        <div className='intro__title-wrapper'>
                            <h3 className='intro__title-text'>Full</h3>
                            <h3 className='intro__title-text'>Stack</h3>
                            <h3 className='intro__title-text'>Web</h3>
                            <h3 className='intro__title-text'>Developer</h3>
                        </div>
                    </div>
                    <p className='intro__description'>
                    I am excited to share my story of how after several months of hard working, intensive learning and never-ending motivation I can call myself a web developer.
                    </p>

                </div>
            </div>
            <div className="intro__right">
                <div className='intro__back'></div>
                <a href='https://www.wfp.org/support-us/stories/ukraine-appeal?utm_source=google&utm_medium=cpc&utm_campaign=16400205540&utm_content=132260248005&gclid=Cj0KCQiAybaRBhDtARIsAIEG3km3z9HTlyjA3dybU0KAw2B0GT6aULktyJrIeG57tILGC8-SwlFTXKcaAoGsEALw_wcB&gclsrc=aw.ds' target='_blank' rel="noreferrer noopener"><img src={support} alt='Support Ukraine' className='intro__support' /></a>
                <img src={myPhoto} alt='Author face' className='intro__photo' />
            </div>
        </div>
    )
}

export default Intro