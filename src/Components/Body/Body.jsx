import React, {useState} from 'react';
import Map from './Map/Map';
import Schedule from './Schedule';

import VanColors from '../../helpers/icons/VanColors';
import styles from './styles';


const Body = (props) => {
    const [route, setRoute] = useState(false);
    const setSchedule = () => { setRoute(!route); };

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
                        <div onClick={setSchedule}>
                            <VanColors />
                            <div className="route_stations">
                                <p>Juanacatlan</p>
                                <p>Office depot sf</p>
                            </div>
                        </div>
                    </div>
                    {(() => {
                        if(route) {
                            return (
                                <div className="container_routes-schedule">
                                    <Schedule schedule="9 am"/>
                                </div>
                            )
                        }
                    })()}
                </div>
                <div className="container_map">
                    <Map />
                </div>
            </section>
        </section>
    )

}

export default Body;
