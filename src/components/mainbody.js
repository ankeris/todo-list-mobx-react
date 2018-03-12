import React from 'react';
// components
import Notesbody from './Notes.js';
import Header from './header.js';

class MainBody extends React.Component {
    render() {
    // const {BirdStore} = this.props;
        return (
            <React.Fragment>
                <Header/>
                <Notesbody/>
            </React.Fragment>
        );
    }
}

export default MainBody;