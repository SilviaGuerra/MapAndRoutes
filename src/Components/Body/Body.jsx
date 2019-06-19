import React from 'react';
import Map from './Map/Map';

import VanColors from '../../helpers/icons/VanColors';
import styles from './styles';

const Body = () => {
    return (
        <section {...styles}>
            <section className="container_title">
                <h1>Rutas en la CDMX</h1>
                <p>
                    Checa cual es la que más te conviene para llegar a Santa Fe. Contamos con muchos
                    horarios para llevarte a tiempo.
                </p>
            </section>
            <section className="container_routes">
                <div>
                    <div className="container_routes-route">
                        <h2>Rutas</h2>
                        <div>
                            <VanColors />
                            <p>juanacatlan</p>
                            <p>Office depot sf</p>
                        </div>
                    </div>
                    <div className="container_routes-schedule">
                        <h2>Horarios</h2>
                    </div>
                </div>
                <div className="container_map">
                    <Map />
                </div>
            </section>
        </section>
    )

}

export default Body;
