/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge = 18;

if (votingAge > 18) {
    console.log(true);
}


//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let variable1 = 1;
let variable2 = 2;

if (variable2 === 2) {
    variable1 = 11;
}



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
const string = '1999';
const number = parseInt(string);


//Task d: Write a function to multiply a*b 

const multiplier = (a, b) => a * b;



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

const getDogYears = age => age * 7;




/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
const dogFeeder = (age, weight) => {
    if (age >= 1 && weight <= 5) {
        return weight * .05;        
    } else if (age >= 1 && weight <= 10) {
        return weight * .04;
    } else if (age >= 1 && weight <= 15) {
         return weight * .03;
    } else if (age >= 1 && weight > 15) {
        return weight * .02;
    } else if (age >= .08 * 7) {
        return weight * .04;
    } else if (age >= .08 * 4) {
        return weight * .05;
    } else if (age >= .08 * 2) {
        return weight * .10;
    } else {
        return 'Dog is less than 2 months old';
    }
}



/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 
const rps = string => {
    string = string.toLowerCase();
    const ranNum = Math.floor(Math.random() * 3);
    let computerChoice;
    if (ranNum === 0) {
        computerChoice = 'rock';
    } else if (ranNum === 1) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }

    if (string === computerChoice) {
        return 'Tie Game!';
    } else if (string === 'rock') {
        if (computerChoice === 'paper') {
            return 'Paper beats rock! You lose!';
        } else {
            return 'Rock beats scissors! You win!';
        }
    } else if (string === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Scissors beat paper! You lose!';
        } else {
            return 'Paper beats rock! You win!';
        }
    } else if (string === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Rock beats scissors! You lose!';
        } else {
            return 'Scissors beat paper! You win!';
        }
    } else {
        return 'Please enter either "rock", "paper", or "scissors" only!';
    }
}
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
const kmToMiles = km => km * 0.621371;


//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
const feetToCm = feet => feet * 30.48;



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  const annoyingSong = num => {
      let i = num;
    while (i > 0) {
    if (num === 1) {
      console.log('1 bottle of soda on the wall, 1 bottle of soda, take one down, pass it around, no more bottles of soda on the wall.');
  } else {
      console.log(num + ' bottles of soda on the wall, ' + num + ' bottles of soda, take one down, pass it around, ' + (num - 1) + ' bottles of soda on the wall.');
  }
  i--;
  num--;
}
  }


/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  const grade = score => {
      if (score <= 100 && score>= 90) {
          return 'A';
      } else if (score < 90 && score >= 80) {
          return 'B';
      } else if (score < 80 && score >= 70) {
          return 'C';
      } else if (score < 70 && score >= 60) {
          return 'D';
      } else {
          return 'F';
      }
  }
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method
const vowelCounter = string => {
    string = string.toLowerCase()
    let count = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u' || string[i] === 'y') {
        count++;
      }
    }
    return count;
  }


/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object

const rps2 = () => {
    let guess = prompt('Please enter "rock", "paper", or "scissors".');
    guess = guess.toLowerCase();
    const ranNum = Math.floor(Math.random() * 3);
    let computerChoice;
    
    if (ranNum === 0) {
        computerChoice = 'rock';
    } else if (ranNum === 1) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }

    if (guess === computerChoice) {
        return 'Tie Game!';
    } else if (guess === 'rock') {
        if (computerChoice === 'paper') {
            return 'Paper beats rock! You lose!';
        } else {
            return 'Rock beats scissors! You win!';
        }
    } else if (guess === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Scissors beat paper! You lose!';
        } else {
            return 'Paper beats rock! You win!';
        }
    } else if (guess === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Rock beats scissors! You lose!';
        } else {
            return 'Scissors beat paper! You win!';
        }
    } else {
        return 'Please enter either "rock", "paper", or "scissors" only.';
    }
}