import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
//import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import home from './screens/pages';
import NotFound from './screens/dashboard/NotFound/NotFound'
import blogs from './screens/blogs';
import './index.css';
import './App.css';
import './vendor/select2/select2.min.css';
import './vendor/css-hamburgers/hamburgers.min.css';
import './vendor/animate/animate.css';
import './fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import './css/style.scss';


ReactDOM.render(

    <Router history={browserHistory}>
        <Route path="/" component={home} />
        <Route path="/blogs" component={blogs} />
        <Route path="*" component={NotFound} />
    </Router>,
    document.getElementById('root')
);