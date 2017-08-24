

console.log('quiz 1')

function begin() {
	console.log("begin");
}

begin();

function echo(string){
  return string;
}

console.log(echo('hello'));

function math(x,y,z){
  return (x+y) * z;
}

console.log(math(5,5,7));

function toString(array){
  let newString = ''
  for (var i = 0; i < array.length; i++) {
    newString += array[i] + " ";
  }
  return newString;
}

console.log(toString(['now','is','the','time']));


function callme(callback){
  console.log('in first function');
  callback();
}

function callback(string){
    console.log('in second function')
    console.log(string);
}

callme(callback);

function callme2(callback, string){
  console.log('in first function')
  callback(string);
}

callme2(callback, 'hello');

function reverse(str){

  let newString = ''
  for (var i = str.length-1; i >= 0; i--) {
    newString += str.charAt(i);
  }
  return newString;
}

console.log(reverse('the iron yard'))

function sleep() {
  console.log('before sleep loop')
  setTimeout(function() {
    console.log('after sleep loop')
  }, 1000);
}

sleep();
