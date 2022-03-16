import './Toggle.css';
import React from 'react';
import sun from '../../images/sun.png';
import moon from '../../images/moon.png';
import { useContext } from 'react';
import { ThemeContext } from '../Context';


const Toggle = () => {

const theme = useContext(ThemeContext);

function handleClick() {
    theme.dispatch({ type: 'TOGGLE' })
}

    return (
        <div className='toggle'>
            <img src={sun} alt="Sun" className='toggle__icon' />
            <img src={moon} alt="Moonn" className='toggle__icon' />
            <div className='toggle__button' 
            onClick={handleClick}
            style={{
                left: theme.state.darkMode ? 0 : 25
            }}></div>
        </div>
    );
}

export default Toggle;
