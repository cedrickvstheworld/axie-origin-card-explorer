import React from 'react';
import ReactDOM from 'react-dom';
import 'animate.css';
import './static/css/main.css';
import './static/css/footer.css';
import './static/css/side-pane.css';
import './static/css/view-pane.css';
import './static/css/info-viewer.css';
import './static/css/materialize-css-grid.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
