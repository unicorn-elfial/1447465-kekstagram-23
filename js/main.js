
function getRandomIntInclusive (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function maxline (checkedString, maxLength) {
checkedString <= maxLength;
return true;
checkedString > maxLength;
return false;
}


const NAMES = [
  'Ира',
  'Вася',
  'Карина',
  'Петя',
  'Соня',
  'Дима',
];
let url = 'photos/{{i}}.jpg';

 const description = ['милота зашкаливает'];
const comments = ['Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.']
function randomNameIndex (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random(NAMES) * (max - min + 1)) + min; 
}

  function id () {
    Math.floor (math.random () * 25) + 1;
    return id;
  }
  function likes () {
    Math.floor (math.random () * 200) + 15;
    return likes;
  }

return {
id : '',
avatar : '',
message : '',
name: NAMES[randomNameIndex] + ' ',
likes: ''
};
};


console.log(
  createPhoto()
);
