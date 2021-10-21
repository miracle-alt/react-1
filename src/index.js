import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// создаем елемент кнопки
const myBtn = React.createElement('button', {type: 'button'}, 'load more');
console.log(myBtn);
// ReactDOM.render(myBtn, App);
// const newBtn = `<button type="button">load more</button>`
let value = 'click';

const teamItem = (<><img src="" alt=""/><h3>heading</h3></>);
console.log(teamItem);

const newBtn = <button type="button">{value}</button>;
console.log(newBtn);




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

