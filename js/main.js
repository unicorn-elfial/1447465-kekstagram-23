import {
    checkStringLength   
}
from './utils/check-string-length.js';

import {
    getRandomPositiveInteger 
}
from './utils/get-random-positive-integer.js';
   
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
