
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


onst NAMES = [
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
const createPhoto = () => {
  const randomNameIndex = _.random(0, NAMES.length - 1);

  function id () {
    Math.floor (math.random () * 25) + 1;
  }
  function likes () {
    Math.floor (math.random () * 200) + 15;
  }

return {
id : '',
avatar : '',
message : '',
name: NAMES[randomNameIndex] + ' '
};
};


console.log(
  createPhoto()
);
