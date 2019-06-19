import React from 'react';

import UrvanLogo from '../../helpers/icons/UrvanLogo';
import Van from '../../helpers/icons/Van';

import style from './style';

const Component = (props) => {
    return(
        <div {...style}>
            <UrvanLogo />
            <div>
                <a href="https://www.w3schools.com">Rutas</a>
                <a href="https://www.w3schools.com">Experiencia</a>
                <a href="https://www.w3schools.com">Empresas</a>
                <a href="https://www.w3schools.com">Sugiere</a>
                <a href="https://www.w3schools.com">Blog</a>
                <button>
                   <Van />
                   Tu van con nosotros
                </button>
            </div>
        </div>
    )
}

export default Component