import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from './store/store'

const store = configureStore();
window.store = store;

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Its working.!</h1>, root);
});
