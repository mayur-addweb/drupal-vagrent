import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
//import login from './screens/login/App';
import home from './screens/pages';
import NotFound from './screens/dashboard/NotFound/NotFound'
import './index.css';
import './App.css';
import './vendor/select2/select2.min.css';
import './vendor/css-hamburgers/hamburgers.min.css';
import './vendor/animate/animate.css';
import './fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import './vendor/bootstrap/css/bootstrap.min.css';
import './css/style.scss';


ReactDOM.render(

    <Router history={browserHistory}>
        <Route path="/" component={home} />
        <Route path="*" component={NotFound} />
    </Router>,
    document.getElementById('root')
);