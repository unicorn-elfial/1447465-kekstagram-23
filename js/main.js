function createPhoto () {
      return coments;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function maxLine(checkedString, maxLength) {
      return checkedString <= maxLength;
}
const description = ['милота зашкаливает'];
const message = ['Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.']

function randomNameIndex(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random(NAMES) * (max - min + 1)) + min;
}

const NAMES = [
    'Ира',
    'Вася',
    'Карина',
    'Петя',
    'Соня',
    'Дима',
];
const url = 'photos/{{i}}.jpg';

function id() {
    return Math.floor(math.random() * 25) + 1;
}

function likes() {
    return Math.floor(math.random() * 200) + 15;
}
const coments = [
    id: '',
    avatar: '',
    message: '',
    name: NAMES[randomNameIndex] + ' ',
    likes: ''
];



console.log(
    createPhoto
);
