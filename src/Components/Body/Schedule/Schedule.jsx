//import React from 'react';

//import style from './style';

// const Schedule = (props) => {
//     return(
//         <div>
//             <h1>Horarios</h1>
//             <p>{props.schedule}</p>
//         </div>
//     );
// }

import React from 'react';

//import style from './style';

const Schedule = (props) => {
    return (
        <div>
            <h1>Horarios</h1>
            <p>{props.schedule.am[0].departure_time}</p>
        </div>
    );
}

export default Schedule;
