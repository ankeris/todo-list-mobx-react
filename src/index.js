// libraries
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';
import registerServiceWorker from './registerServiceWorker';

// components
import MainBody from './components/mainbody';
//stores
import Notes from './stores/NotesStore';
// css
import './Sass/App.scss';

const App = (
    <Provider Notes={Notes}>
        <MainBody/>
    </Provider>
)

ReactDOM.render(App, document.getElementById('application'));
registerServiceWorker();
