import React, {useState} from 'react';
import { slide as Menu } from 'react-burger-menu';

import UrvanLogo from '../../helpers/icons/UrvanLogo';
import Van from '../../helpers/icons/Van';

import style from './style';

const Component = () => {
    // const [hamburguerMenu, toggleHamburguer] = useState(false);
    // const setOpen = () => { toggleHamburguer(!hamburguerMenu) };
    // const classMenuState = setOpen ? 'open' : 'closed';

    // if (window.innerWidth <= 960) {
    //     return setOpen;
    // }

    // return ( 
    //     <Menu right className={classMenuState}>
    //         <a href="https://www.urbvan.com/rutas/" target="_blank" onClick={setOpen}>Rutas</a>
    //         <a href="https://www.urbvan.com/experiencias/" target="_blank">Experiencia</a>
    //         <a href="https://www.urbvan.com/empresas/" target="_blank">Empresas</a>
    //         <a href="https://www.urbvan.com/sugiere/" target="_blank">Sugiere</a>
    //         <a href="https://blog.urbvan.com/" target="_blank">Blog</a>
    //     </Menu>
    // );

    return(
        <div {...style}>
            <UrvanLogo />
            <nav>
                <ul>
                    <li>
                        <a href="https://www.urbvan.com/rutas/" target="_blank" rel="noopener noreferrer">Rutas</a>
                    </li>
                    <li>
                        <a href="https://www.urbvan.com/experiencias/" target="_blank" rel="noopener noreferrer">Experiencia</a>
                    </li>
                    <li>
                        <a href="https://www.urbvan.com/empresas/" target="_blank" rel="noopener noreferrer">Empresas</a>
                    </li>
                    <li>
                        <a href="https://www.urbvan.com/sugiere/" target="_blank" rel="noopener noreferrer">Sugiere</a>
                    </li>
                    <li>
                        <a href="https://blog.urbvan.com/" target="_blank" rel="noopener noreferrer">Blog</a>
                    </li>
                    <li>
                        <button>
                            <Van />
                            Tu van con nosotros
                </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Component