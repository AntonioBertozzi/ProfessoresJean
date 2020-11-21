import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Professor from './components/Professor';
import NavMenu from './components/NavMenu';

ReactDOM.render(
  <NavMenu />, document.getElementById('header-nav'));

ReactDOM.render(
  <Professor />, document.getElementById('professor'));