import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
/* import { Container, Jumbotron, Button } from 'reactstrap'; */
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderManager from "../src/layout/Main/components/Header/HeaderManager.component"

/* const element=
<>
  <div className='d-flex  justify-content-center'>
    <h1 className='display-4'>Welcome to javad shoping </h1>
  </div>
  
</> */

ReactDOM.render(
  <>
    <HeaderManager/>
  </>
  ,
  document.getElementById('root')
);

reportWebVitals();
