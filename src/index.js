import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Create from './Create';
import Details from './Details';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

ReactDOM.render((
<Router>
    <Switch>
        <Route path = "/create" component = {Create}/>
        <Route path = "/details/:id" component = {Details}/>
        <Route path = "/" component = {App}/>
    </Switch>
</Router>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
