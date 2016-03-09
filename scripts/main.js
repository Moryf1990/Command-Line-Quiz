var name = prompt('Enter your name');
var correctAnswers = 0;
var questions = 15;

document.write('Okay '+name+' here is Question 1: What does html stand for?:  HyperText Markup Language, High Track Making Language, High Tech Making Language');
var answer = prompt('Okay '+name+' here is Question 1: What does html stand for?:  HyperText Markup Language, High Track Making Language, High Tech Making Language');

if (answer.toLowerCase() === 'hypertext markup language') {
    console.log(correctAnswers = correctAnswers + 1);
    console.log('That is correct!');
    document.write('<div>That is correct!</div><br>');
} else {
    console.log('Sorry that is wrong. The correct answer is HyperText Markup Language.');
    document.write('<div>Sorry that is wrong. The correct answer is HyperText Markup Language.</div><br>');
}

document.write('Question 2: What does CSS stand for?: Cascading Style Sheet, Completely Slanted Sheet, Commonly Styled Sheet');
var answer = prompt('Question 2: What does CSS stand for?: Cascading Style Sheet, Completely Slanted Sheet, Commonly Styled Sheet');

if (answer.toLowerCase() === 'cascading style sheet') {
	console.log(correctAnswers = correctAnswers + 1);
	console.log('That is correct!');
    document.write('<div>That is correct!</div><br>');
} else {
	console.log('Sorry that is wrong. The correct answer is Cascading Style Sheet.');
    document.write('<div>Sorry that is wrong. The correct answer is Cascading Style Sheet.</div><br>');
}

document.write('Question 3: Which elements line up next to each other?: inline, block, none of the above');
var answer = prompt('Question 3: Which elements line up next to each other?: inline, block, none of the above');

if (answer.toLowerCase() === 'inline') {
	console.log(correctAnswers = correctAnswers + 1);
	console.log('That is correct!');
    document.write('<div>That is correct!</div><br>');
} else {
	console.log('Sorry that is wrong. The correct answer is inline.');
    document.write('<div>Sorry that is wrong. The correct answer is inline.</div><br>');
}

document.write('Question 4: Which one of these is an operator?: &&, ===, ||, all of the above');
var answer = prompt('Question 4: Which one of these is an operator?: &&, ===, ||, all of the above');

if (answer.toLowerCase() === 'all of the above') {
	console.log(correctAnswers = correctAnswers + 1);
	console.log('That is correct!');
    document.write('<div>That is correct!</div><br>');
} else {
	console.log('Sorry that is wrong. The correct answer is all of the above.');
    document.write('<div>Sorry that is wrong. The correct answer is all of the above.</div><br>');
}

document.write('Question 5: Where are if else statements used?: HTML, CSS, JavaScript');
var answer = prompt('Question 5: Where are if else statements used?: HTML, CSS, JavaScript');

if (answer.toLowerCase() === 'javascript') {
	console.log(correctAnswers = correctAnswers + 1);
	console.log('That is correct!');
    document.write('<div>That is correct!</div><br>');
} else {
	console.log('Sorry that is wrong. The correct answer is JavaScript.');
    document.write('<div>Sorry that is wrong. The correct answer is JavaScript.</div><br>');
}

document.write('Question 6: Where is the stylesheet linked in the HTML?: title, head, body');
var answer = prompt('Question 6: Where is the stylesheet linked in the HTML?: title, head, body');

if (answer.toLowerCase() === 'head') {
	console.log(correctAnswers = correctAnswers + 1);
	console.log('That is correct!');
    document.write('<div>That is correct!</div><br>');
} else {
	console.log('Sorry that is wrong. The correct answer is head.');
    document.write('<div>Sorry that is wrong. The correct answer is head.</div><br>');
}

document.write('Question 7: Where is the js file linked in the HTML?: title, head, body');
var answer = prompt('Question 7: Where is the js file linked in the HTML?: title, head, body');

if (answer.toLowerCase() === 'body') {
	console.log(correctAnswers = correctAnswers + 1);
	console.log('That is correct!');
    document.write('<div>That is correct!</div><br>');
} else {
	console.log('Sorry that is wrong. The correct answer is body.');
    document.write('<div>Sorry that is wrong. The correct answer is body.</div><br>');
}

document.write('Question 8: What does DOCTYPE mean: what type of HTML is used, what type of document is used, what a computer is');
var answer = prompt('Question 8: What does DOCTYPE mean: what type of HTML is used, what type of document is used, what a computer is');

if (answer.toLowerCase() === 'what type of html is used') {
	console.log(correctAnswers = correctAnswers + 1);
	console.log('That is correct!');
    document.write('<div>That is correct!</div><br>');
} else {
	console.log('Sorry that is wrong. The correct answer is what type of HTML is used.');
    document.write('<div>Sorry that is wrong. The correct answer is what type of HTML is used.</div><br>');
}

document.write('Question 9: Which of the following is not a data type?: boolean, letter, number, string');
var answer = prompt('Question 9: Which of the following is not a data type?: boolean, letter, number, string');

if (answer.toLowerCase() === 'letter') {
	console.log(correctAnswers = correctAnswers + 1);
	console.log('That is correct!');
    document.write('<div>That is correct!</div><br>');
} else {
	console.log('Sorry that is wrong. The correct answer is letter.');
    document.write('<div>Sorry that is wrong. The correct answer is letter.</div><br>');
}

document.write('Question 10: Can we use class selectors more than once?: Yes, No');
var answer = prompt('Question 10: Can we use class selectors more than once?: Yes, No');

if (answer.toLowerCase() === 'yes') {
	console.log(correctAnswers = correctAnswers + 1);
	console.log('That is correct!');
    document.write('<div>That is correct!</div><br>');
} else {
	console.log('Sorry that is wrong. The correct answer is Yes.');
    document.write('<div>Sorry that is wrong. The correct answer is Yes.</div><br>');
}

document.write('Question 11: Can we use ID selectors more than once?: Yes, No');
var answer = prompt('Question 10: Can we use class selectors more than once?: Yes, No');

if (answer.toLowerCase() === 'no') {
	console.log(correctAnswers = correctAnswers + 1);
	console.log('That is correct!');
    document.write('<div>That is correct!</div><br>');
} else {
	console.log('Sorry that is wrong. The correct answer is No.');
    document.write('<div>Sorry that is wrong. The correct answer is No.</div><br>');
}

document.write('Question 12: How many px equals 1em?: 12, 20, 16');
var answer = prompt('Question 12: How many px equals 1em?: 12, 20, 16');

if (answer.toLowerCase() === '16') {
	console.log(correctAnswers = correctAnswers + 1);
	console.log('That is correct!');
    document.write('<div>That is correct!</div><br>');
} else {
	console.log('Sorry that is wrong. The correct answer is 16.');
    document.write('<div>Sorry that is wrong. The correct answer is 16.</div><br>');
}

document.write('Question 13: What property is used to set the background of a page?: background-color, height, width');
var answer = prompt('Question 13: What property is used to set the background of a page?: background-color, height, width');

if (answer.toLowerCase() === 'background-color') {
	console.log(correctAnswers = correctAnswers + 1);
	console.log('That is correct!');
    document.write('<div>That is correct!</div><br>');
} else {
	console.log('Sorry that is wrong. The correct answer is background-color.');
    document.write('<div>Sorry that is wrong. The correct answer is background-color.</div><br>');
}

document.write('Question 14: Is the boolean value of 0 true or false?');
var answer = prompt('Question 14: Is the boolean value of 0 true or false?');

if (answer.toLowerCase() === 'false') {
	console.log(correctAnswers = correctAnswers + 1);
	console.log('That is correct!');
    document.write('<div>That is correct!</div><br>');
} else {
	console.log('Sorry that is wrong. The correct answer is false.');
    document.write('<div>Sorry that is wrong. The correct answer is false.</div><br>');
}

document.write('Question 15: What display property allows elements to sit next to each other and responds to height, width and margin?: Inline, Block, Inline-Block');
var answer = prompt('Question 15: What display property allows elements to sit next to each other and responds to height, width and margin?: Inline, Block, Inline-Block');

if (answer.toLowerCase() === 'inline-block') {
	console.log(correctAnswers = correctAnswers + 1);
	console.log('That is correct!');
    document.write('<div>That is correct!</div><br>');
} else {
	console.log('Sorry that is wrong. The correct answer is Inline-Block.');
    document.write('<div>Sorry that is wrong. The correct answer is Inline-Block.</div><br>');
}

var total = correctAnswers/questions;

if (total <= 5/15) {
	document.write('You got '+correctAnswers+' out of '+questions+'  for a total score of '+total.toFixed(4)*100+'%. Looks like you\'ve got some studying to do.');
	console.log('You got '+correctAnswers+' out of '+questions+'  for a total score of '+total.toFixed(4)*100+'%. Looks like you\'ve got some studying to do.');
} else if(total >= 11/15) {
	document.write('Good job '+name+' you got '+correctAnswers+' out of '+questions+' questions correct for a total score of '+total.toFixed(4)*100+'%.');
	console.log('Good job '+name+' you got '+correctAnswers+' out of '+questions+' questions correct for a total score of '+total.toFixed(4)*100+'%.');
}
  else if(total >= 6/15) {
	document.write('Looks like you got '+correctAnswers+' out of '+questions+' questions correct for a total score of '+total.toFixed(4)*100+'%. That\'s not too bad, but you can do better.');
	console.log('Looks like you got '+correctAnswers+' out of '+questions+' questions correct for a total score of '+total.toFixed(4)*100+'%. That\'s not too bad, but you can do better.');
} 
































