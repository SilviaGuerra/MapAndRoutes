import { css } from 'glamor';

const style = css({
    height: '259px',
    ' > div:nth-child(1)': {
        height: '65%',
        background: '#303850'
    },
    ' > div:nth-child(2)': {
        height: '35%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#252c41',
        fontSize: '1.250em',
        fontWeight: 300,
        lineHeight: 1.2
    },
    ' a': {
        textDecoration: 'none',
        color: '#fff',
        padding: '0px 20px'
    },
    ' span': {
        color: '#a7a7a7',
    }
});

export default style;