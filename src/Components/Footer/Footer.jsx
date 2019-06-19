import React, { Component } from 'react';

import style from './style';

class Footer extends Component {
    render() {
        return(
            <footer {...style}>
                <div></div>
                <div>
                    <a href="https://www.urbvan.com/aviso-privacidad" target="_blank">Politicas de privacidad</a>
                    <a href="https://www.urbvan.com/terminos-condiciones" target="_blank">Términos y condiciones</a>
                    <span>Urbvan ® 2018 es una marca registrada.</span>
                </div>
            </footer>
        )
    }
}

export default Footer;