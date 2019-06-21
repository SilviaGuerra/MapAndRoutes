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
            ' > svg': {
                margin: '30px 0px 0px 0px'
            },
            '&_service': {
                padding: '0px 170px 10px 25px',
                ' > p': {
                    fontSize: 'calc(100% + 0.438em)',
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
        fontSize: 'calc(100% + 0.969em)',
        fontWeight: 900,
        lineHeight: 1.24,
        padding: '5px 0px'
    },
    ' a': {
        textDecoration: 'none',
        color: '#fff',
        padding: '0px 20px'
    },

    '@media screen and (max-width: 960px)': {
        ' .footer_support': {
            ' > svg:nth-child(1)': {
                display: 'none'
            }
        },
        ' .footer': {
            '&_support': {
                '&_service': {
                    padding: '0px 170px 10px 25px',
                },
            }
        }
    },

    '@media screen and (max-width: 750px)': {
        ' h2': {
            fontSize: '1.125em',
        },
        ' .footer': {
            '&_support': {
                '&_service': {
                    padding: '0px 145px 10px 25px',
                },
                '&_mail': {
                    padding: '15px 0px',
                    ' > svg': {
                        height: '15px',
                    },
                    ' > span': {
                        fontSize: '0.875em',
                        padding: '6px'
                    }
                }
            },
            '&_privacity': {
                fontSize: '0.968em',
            }
        }
    },

    '@media screen and (max-width: 650px)': {
        ' h2': {
            fontSize: '1.125em',
        },
        ' .footer': {
            '&_support': {
                '&_service': {
                    padding: '0px 20px 10px 25px',
                    ' > p': {
                        fontSize: '0.813em',
                        fontWeight: 300,
                        lineHeight: 1.21,
                        padding: '5px 0px'
                    }
                },
                '&_mail': {
                    padding: '30px 0px',
                    // ' > svg': {
                    //     height: '15px',
                    //     margin: '30px 0px -4px 0px'
                    // },
                    ' > span': {
                        fontSize: '0.813em',
                    }
                }
            },
            // '&_privacity': {
            //     fontSize: '0.968em',
            // }
        }
    }
});

export default style;