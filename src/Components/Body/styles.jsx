import { css } from 'glamor';

const styles = css({
    height: '1504px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
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
        paddingBottom: '45px',
        paddingRight: '0px'
    },
    ' .container': {
        '&_title': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '80px 0px'
        },        
        '&_routes': {
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            ' > div:nth-child(1)': {
                height: '903px',
                display: 'flex',
                boxShadow: '0 7px 15px 0 rgba(0, 0, 0, 0.16)',
                borderRadius: '40px'
            },
            '&-route': {
                width: '426px',
                cursor: 'pointer',
                padding: '53px 0px 7px 63px',
            },
            '&-schedule': {
                display: 'flex',
                width: '296px',
                background: '#f8f8f8'
            }
        },
        '&_map': {
            borderSizing: 'border-box',
            width: '500px', 
            height: '1063px',
            ' > div > div': {
                width: '40% !important',
                height: '90% !important'
            }
        }
    },
    ' .route': {
        '&_stations': {
            ' > ul': {
                display: 'flex',
                padding: '0px 10px',
                ' > svg': {
                    paddingTop: '0px',
                    paddingRight: '20px' 
                },
                ' > li > p': {
                    paddingBottom: '30px',
                    paddingLeft: '0px'
                }
            }
        }
    }
});

export default styles;