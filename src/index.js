import _ from 'lodash';
import './style.css';
import Icon from './icon.svg';

function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  let myIcon = new Image();
  myIcon.src = Icon;
  myIcon.width = 100;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());