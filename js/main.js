import {
    checkStringLength   
}
from './utils/check-string-length.js';

import {
    getRandomPositiveInteger 
}
from './utils/get-random-positive-integer.js';
   
function createPhoto () {
      return coments;
}

const description = ['Моя новая фотография'];
const message = ['Всё отлично!']

function randomNameIndex(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random(NAMES) * (max - min + 1)) + min;
}

const names = [
    'Ира',
    'Вася',
    'Карина',
    'Петя',
    'Соня',
    'Дима',
];
const url = 'photos/{{i}}.jpg';

function getId() {
    return Math.floor(math.random() * 25) + 1;
}
function getNames() {
   Math.floor(Math.random() * names.length);
}
function getLikes() {
    return Math.floor(math.random() * 200) + 15;
}
function getAatar() {
    return Math.floor(math.random() * 6) + 1;
}

const coments = {
    id: '',
    avatar: '',
    message: '',
    name: NAMES[randomNameIndex] + ' ',
    likes: ''
};



console.log(
    createPhoto
);
