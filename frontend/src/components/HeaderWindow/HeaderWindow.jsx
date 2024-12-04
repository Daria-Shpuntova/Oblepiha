import React from 'react';
import Menu from "../Menu/Menu";
import './HeaderWindow.css'

const HeaderWindow = ({ title, showMenu }) => {
    return (
        <section className='headerWindow'>
            {showMenu ? <Menu /> : (
                <header><a className='SvgStrelka' href='/'> <svg width="175" height="74" viewBox="0 0 175 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.46447 40.5355C-0.488155 38.5829 -0.488155 35.4171 1.46447 33.4645L33.2843 1.64466C35.2369 -0.307961 38.4027 -0.307961 40.3553 1.64466C42.308 3.59728 42.308 6.76311 40.3553 8.71573L12.0711 37L40.3553 65.2843C42.308 67.2369 42.308 70.4027 40.3553 72.3553C38.4027 74.308 35.2369 74.308 33.2843 72.3553L1.46447 40.5355ZM175 42H5V32H175V42Z"
                        fill="#D4891B"/>
                </svg></a></header>

            )}
            <div className='headerFirstImg imgOfHeader'>
                <img src='../../2162.png' alt='fon1'/>
            </div>
            <div className='divH1'>
                <h1>{title}</h1>
                <div>{title}</div>
            </div>
            <div className='headerImg imgOfHeader'>
                <img className='headerImg1' src='../../241.png' alt='fon2'/>
                <img className='headerImg2' src='../../2161.png' alt='fon2'/>
            </div>
            <div className='h1text'>
                Чай из ягод облепихи — вкусный и полезный напиток. Он отлично утоляет жажду, согревает,
                наполняет витаминами, поднимает настроение.
            </div>

        </section>

    );
};

export default HeaderWindow;