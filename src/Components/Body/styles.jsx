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
        lineHeight: 1.22,
        paddingBottom: '30px',
        paddingLeft: '0px'
    },
    ' > p': {
        fontSize: '1.375em',
        fontWeight: 300,
        lineHeight: 1.21,
        textAlign: 'center'
    },
    ' .container': {
        '&_title': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '80px',
            paddingLeft: '0px'
        },        
        '&_routes': {
            width: '100%',
            height: '100%',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '60px',
            marginLeft: '0px',
            ' > div:nth-child(1)': {
                height: '903px',
                display: 'flex',
            },
            '&-route': {
                width: '240px',
                height: '300px',
                cursor: 'pointer',
                padding: '53px 0px 7px 30px',
                position: 'absolute',
                top: '400px',
                left: '73px',
                zIndex: 300,
                boxShadow: '0 7px 15px 0 rgba(0, 0, 0, 0.16)',
                borderRadius: '40px 0px 0px 40px',
                ' > h2': {
                    fontSize: '2.5em',
                    fontWeight: 300,
                    lineHeight: 1.23,
                    paddingBottom: '45px',
                    paddingRight: '0px'
                },
            },
            '&-schedule': {
                display: 'flex',
                width: '210px',
                height: '300px',
                background: '#f8f8f8',
                padding: '53px 0px 7px 53px',
                position: 'absolute',
                top: '400px',
                left: '315px',
                zIndex: 300,
                boxShadow: '7px 3px 7px 0 rgba(0, 0, 0, 0.16)',
                borderRadius: '0px 40px 40px 0px',
            }
        },
        '&_map': {
            borderSizing: 'border-box',
            width: '500px', 
            height: '1063px',
            ' > div > div': {
                width: '60% !important',
                height: '80% !important'
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
                    paddingBottom: '50px',
                    paddingLeft: '0px'
                }
            }
        }
    },
    '@media screen and (max-width: 600px)': {
        ' > h1': {
            fontSize: '2.188em',
            textAlign: 'left'
        },
        ' .container': {
            '&_title': {
                padding: '60px 55px 0px',
            },
            '&_routes': {
                '&-route': {
                    width: '160px',
                    top: '40px',
                    padding: '53px 0px 7px 7px',
                    ' h2': {
                        fontSize: '1.313em',
                    },
                    '&_stations': {
                        ' > ul': {
                            ' > li > p': {
                                fontSize: '15px'
                            }
                        }
                    }
                },
                '&-schedule': {
                    width: '120px',
                    top: '40px',
                    left: '225px'
                }
            },
            '&_map': {
                position: 'absolute',
                top: '400px',
                left: '70px',
                height: '900px' 
            }
        }
    },
});

export default styles;