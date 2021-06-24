import {
    checkStringLength,
    getRandomPositiveInteger
}
from './utils';

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
