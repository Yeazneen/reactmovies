import ReactDOM from 'react-dom';
import {StrictMode} from 'react'
import App from './App.js';
import './style.css'


const root = document.getElementById('root');

ReactDOM.render(
    <StrictMode>
        <App/>
    </StrictMode>,
    root
)
