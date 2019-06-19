import React from 'react';

import UrvanLogo from '../../helpers/icons/UrvanLogo';
import Van from '../../helpers/icons/Van';

import style from './style';

const Component = (props) => {
    return(
        <div {...style}>
            <UrvanLogo />
            <div>
                <a href="https://www.urbvan.com/rutas/" target="_blank">Rutas</a>
                <a href="https://www.urbvan.com/experiencias/" target="_blank">Experiencia</a>
                <a href="https://www.urbvan.com/empresas/" target="_blank">Empresas</a>
                <a href="https://www.urbvan.com/sugiere/" target="_blank">Sugiere</a>
                <a href="https://blog.urbvan.com/" target="_blank">Blog</a>
                <button>
                    <Van />
                    Tu van con nosotros
                </button>
            </div>
        </div>
    )
}

export default Component