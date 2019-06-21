import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Map from './Map/Map';
import Schedule from './Schedule';

import VanColors from '../../helpers/icons/VanColors';
import styles from './styles';

const getRandomColour = () => {
    return `rgb(${ Math.floor((Math.random() * 255) + 1) }, ${ Math.floor((Math.random() * 255) + 1) }, ${ Math.floor((Math.random() * 255) + 1) })`
}

const Body = (props) => {
    const [route, setRoute] = useState(false);
    const setOpen = () => { setRoute(!route) };
    
    const [data, setData] = useState({ results: [] });
    const [schedule, setSchedule] = useState({ schedule: {} });
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        const result = await axios(
            'https://gist.githubusercontent.com/SilviaGuerra/d25c29a98ce3788296dbe405b617597e/raw/be7fe08e1339a5eba7dc8022a72792c14204dac0/gistfile1.txt'
        );
        setData(result.data.body);
    }, []);

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
                        <div className="route_stations" onClick={setOpen}>
                            <ul>
                                <VanColors color={getRandomColour()} />
                                {data.results.map(item => (
                                    <li onClick={() => setSchedule(item.routes[0].schedule)}>
                                        <p>{item.routes[0].origin}</p>
                                        <p>{item.routes[0].destination}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {(() => {
                        if (schedule.am && route) {
                            return (
                                <div className="container_routes-schedule">
                                    <Schedule schedule={schedule} />
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

// import React, {useState, useEffect} from 'react';
// import axios from 'axios';
// import Map from './Map/Map';
// import Schedule from './Schedule';

// import VanColors from '../../helpers/icons/VanColors';
// import styles from './styles';

// const getRandomColour = () => {
//     return `rgb(${ Math.floor((Math.random() * 255) + 1) }, ${ Math.floor((Math.random() * 255) + 1) }, ${ Math.floor((Math.random() * 255) + 1) })`
// }

// const Body = (props) => {
//     const [route, setRoute] = useState(false);
//     const setSchedule = () => { setRoute(!route); };

//     const [data, setData] = useState({ results: [] });
//     useEffect(async () => {
//         const result = await axios(
//             //'https://gist.githubusercontent.com/SilviaGuerra/2db25ffda360ed056b6dd0bd6eeb5bf3/raw/255cdc01f221f0497ba2474df0c67ec6c9b5af75/test.json',
//             'https://gist.githubusercontent.com/SilviaGuerra/d25c29a98ce3788296dbe405b617597e/raw/be7fe08e1339a5eba7dc8022a72792c14204dac0/gistfile1.txt'
//         );
//         setData(result.data.body);
//     }, []);

//     return (
//         <section {...styles}>
//             <section className="container_title">
//                 <h1>Rutas en la CDMX</h1>
//                 <p>
//                     Checa cual es la que más te conviene para llegar a Santa Fe. Contamos con muchos
//                     horarios para llevarte a tiempo.
//                 </p>
//             </section>
//             <section className="container_routes">
//                 <div>
//                     <div className="container_routes-route">
//                         <h2>Rutas</h2>
//                         <div onClick={setSchedule}>
//                             <div className="route_stations">
//                                 <ul>
//                                     {data.results.map(item => (
//                                         <li>
//                                             <p>{item.routes[0].origin}</p>
//                                             <VanColors color={getRandomColour()} />
//                                             <p>{item.routes[0].destination}</p>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                     {(() => {
//                         if(route) {
//                             return (
//                                 <div className="container_routes-schedule">
//                                     <Schedule schedule="9 am"/>
//                                 </div>
//                             )
//                         }
//                     })()}
//                 </div>
//                 <div className="container_map">
//                     <Map />
//                 </div>
//             </section>
//         </section>
//     )

// }

// export default Body;
