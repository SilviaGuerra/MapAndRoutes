import React from 'react';

import style from './style';

const Schedule = (props) => {
    return (
        <div {...style}>
            <h2>Horarios</h2>
            <div>
                <h3>AM</h3>
                <ul>
                    <li>
                        <p>Llegar a las {props.schedule.am[0].departure_time}</p>
                    </li>
                </ul>
            </div>
            <div>
                <h3>PM</h3>
                <ul>
                    <li>
                        <p>{props.schedule.am[0].departure_time}</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Schedule;
