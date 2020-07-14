import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Auth0Provider} from "@auth0/auth0-react";
import {HashRouter} from "react-router-dom";
//import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Auth0Provider
        domain="how-do.us.auth0.com"
        clientId="ETRgoSz4hKzY7VgRK9P9JX0e2gEyvsqf"
        redirectUri={window.location.origin}
    >
        <HashRouter>
            <App/>
        </HashRouter>
    </Auth0Provider>,
    document.getElementById("root")
);

//serviceWorker.unregister();
