import { css } from 'glamor';

const style = css({
    height: '259px',
    ' .footer': {
        '&_support': {
            height: '65%',
            background: '#303850',
            color: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            ' svg': {
                margin: '30px 0px 0px 0px'
            },
            '&_service': {
                padding: '0px 300px 10px 25px',
                ' > p': {
                    fontSize: '1.750em',
                    fontWeight: 300,
                    lineHeight: 1.21,
                    padding: '5px 0px'
                }
            },
            '&_mail': {
                alignSelf: 'flex-start',
                padding: '5px 0px',
                ' > svg': {
                    margin: '30px 0px -4px 0px'
                },
                ' > span': {
                    padding: '0px 10px'
                }
            }
        },
        '&_privacity': {
            height: '35%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#252c41',
            fontSize: '1.250em',
            fontWeight: 300,
            lineHeight: 1.2,
            ' > span': {
                color: '#a7a7a7',
            }
        }
    },
    ' h2': {
        fontSize: '3.625em',
        fontWeight: 900,
        lineHeight: 1.24,
        padding: '5px 0px'
    },
    ' a': {
        textDecoration: 'none',
        color: '#fff',
        padding: '0px 20px'
    },
});

export default style;