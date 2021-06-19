import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
/* import { Container, Jumbotron, Button } from 'reactstrap'; */
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoute from "../src/route/App.route"

/* const element=
<>
  <div className='d-flex  justify-content-center'>
    <h1 className='display-4'>Welcome to javad shoping </h1>
  </div>
  
</> */

ReactDOM.render(
  <>
    <AppRoute/>
  </>
  ,
  document.getElementById('root')
);

reportWebVitals();
