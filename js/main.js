const createPhoto;


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function maxLine(checkedString, maxLength) {
    if (checkedString <= maxLength) {
        return true;
    } else {
        return false;
    }
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

const description = ['милота зашкаливает'];
const comments = ['Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.']

function randomNameIndex(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random(NAMES) * (max - min + 1)) + min;
}

function id() {
    return Math.floor(math.random() * 25) + 1;
}

function likes() {
    return Math.floor(math.random() * 200) + 15;
}
const createPhoto[
    id: '',
    avatar: '',
    message: '',
    name: NAMES[randomNameIndex] + ' ',
    likes: ''
];
};


console.log(
    createPhoto
);
