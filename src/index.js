import _ from 'lodash';
import './style.css';
import { capitalize, capitalizeFirstWord } from './components/helper.js';

function component() {
    const element = document.createElement('div');
    const string = document.createElement('p');
    const another = document.createElement('p');
  
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    string.textContent = capitalize("this is a test string");
    another.textContent = capitalizeFirstWord('this is another test');

    element.appendChild(string);
    element.appendChild(another);
  
    return element;
  }
  
  document.body.appendChild(component());