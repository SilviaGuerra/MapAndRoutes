import React, { Component } from 'react';

import Support from '../../helpers/icons/Support';
//import Mail from '../../helpers/icons/Mail';
import style from './style';
import Mail from '../../helpers/icons/Mail';

class Footer extends Component {
    render() {
        return(
            <footer {...style}>
                <div className="footer_support">
                    <Support />
                    <div className="footer_support_service">
                        <h2>Customer Service:</h2>
                        <p>Horario de atencion de 6AM a 10 PM</p>
                    </div>
                    <div className="footer_support_mail">
                        <Mail />
                        <span>hola@urvan.com</span>
                    </div>
                </div>
                <div className="footer_privacity">
                    <a href="https://www.urbvan.com/aviso-privacidad" target="_blank">Politicas de privacidad</a>
                    <a href="https://www.urbvan.com/terminos-condiciones" target="_blank">Términos y condiciones</a>
                    <span>Urbvan ® 2018 es una marca registrada.</span>
                </div>
            </footer>
        )
    }
}

export default Footer;