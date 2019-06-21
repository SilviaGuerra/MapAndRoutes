import { css } from 'glamor';

const style = css({
    boxSizing: 'border-box',
    height: '102px',
    minHeight: '100px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    ' svg': {
        padding: '0px 5%',
    },
    ' nav': {
        width: '70%',
        height: '100%',
        background: '#f1404b',
        borderRadius: '0px 0px 0px 100px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        color: '#fff',
        padding: '0px 60px'
    },
    ' ul': {
        display: 'flex',
        alignItems: 'center'
    },
    ' li': {
        padding: '0px 20px'
    },
    ' a': {
        textDecoration: 'none',
        color: '#fff',
        fontSize: '1.375em',
        lineHeight: 1.23,
        fontWeight: 300,
        position: 'relative',
        '&::before': {
            content: ' ',
            position: 'absolute',
            bottom: '100%,',
            top: '100%',
            left: '25%',
            width: '0%',
            height: '1px',
            borderBottom: '1px solid #fff',
            transition: '0.4s',
        },
        '&::after': {
            content: ' ',
            position: 'absolute',
            bottom: '100%,',
            top: '100%',            
            left: '25%',
            width: '0%',
            height: '1px',
            borderBottom: '1px solid #fff',
            transition: '0.4s',
        },
        '&:hover::after': {
            width: '100%',
            left: 0,
        }
    },
    ' button': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'transparent',
        borderRadius: '50px',
        border: '2px solid #fff',
        color: 'white',
        width: '250px',
        padding: '10px 0px',
        fontSize: '1em',
        fontWeight: 500,
        '&:hover': {
            background: '#d43741',
            border: 'none',
            transition: '0.4s'
        }
    },

    '@media screen and (max-width: 1200px)': {
        ' a': {
            fontSize: '1.063em',
        }
    },
});

export default style;