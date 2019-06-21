import { css } from 'glamor';

const style = css({
    ' h2': {
        fontSize: '2.5em',
        fontWeight: 300,
        lineHeight: 1.23,
        paddingBottom: '20px',
        paddingRight: '0px'
    },
    ' h3': {
        color: '#a7a7a7',
        fontSize: '1.563em',
        fontWeight: 300,
        textAlign: 'right'
    },
    ' > p': {
        fontSize: '1.375em',
        fontWeight: 300,
        lineHeight: 1.21,
        textAlign: 'right',
        color: '#252c41',
        padding: '10px 4px',
        borderBottom: '1px solid',
    },
    ' li': {
        paddingBottom: '25px'
    },
    '@media screen and (max-width: 600px)': {
        ' h2': {
            fontSize: '1.313em',
        },
        ' h3': {
            fontSize: '1.250em',
            padding: '0px 35px'
        },
        ' > p': {
            fontSize: '0.938em'
        }
    },
});

export default style;