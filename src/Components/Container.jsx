import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

import style from './style';

 const Container = (props) => {
    return(
        <div {...style}>
            <Header /> 
            <Body /> 
            <Footer />
        </div>
    )
}

export default Container;