import { css } from 'glamor';

const styles = css({
    height: '500px',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: '85px 0px',
    color: '#252c41',
    ' h1': {
        fontSize: '3.188em',
        fontWeight: '900',
        lineHeight: 1.22
    },
    ' p': {
        fontSize: '1.375em',
        fontWeight: 300,
        lineHeight: 1.21,
        textAlign: 'center'
    },
    ' h2': {
        fontSize: '2.5em',
        fontWeight: 300,
        lineHeight: 1.23,
    },
    ' .container': {
        '&_title': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },        
        '&_routes': {
            width: '722px',
            display: 'flex',
            justifyContent: 'space-around',
            ' > div:nth-child(1)': {
                display: 'flex',
                boxShadow: '0 7px 15px 0 rgba(0, 0, 0, 0.16)',
                borderRadius: '40px'
            },
            '&-route': {
                 width: '426px',
            },
            '&-schedule': {
                width: '296px',
                display: 'flex',
                width: '41%',
                background: '#f8f8f8'
            }
        },
        '&_map': {
            borderSizing: 'border-box',
            width: '500px', 
            height: '400px',
            ' > div > div': {
                width: '35% !important',
                height: '50% !important'
            }
        }
    }
});

export default styles;