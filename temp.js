alert('There are 5 cups, there is a gold coin hidden beneath one of the cup.');
var options = prompt('Where is the cup? a,b,c,d,e?');

switch (options){
  case 'a':
  var number = 1;
  break;
  case 'b':
  var number = 2;
  break;
  case 'c':
  var number = 3;
  break;
  case 'd':
  var number = 4;
  break;
  case 'e'
  var number = 5;
  break;
  default:
  document.write('Out of the guess.');
  break;
}

function randomizer(num){
  return Math.floor(Math.random() * num) + 1;
}

var guess = randomizer(number);

for(i = 0; i < 3; i++){
  if( number === guess ){
    document.write('You guessed the number correctly.');
  }else{
    document.write('try again');
  }
}
