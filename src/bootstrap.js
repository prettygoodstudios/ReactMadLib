import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home';
import './style/main.scss';
function main() {
  ReactDOM.render(
    <Home />
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
