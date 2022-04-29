// is this spaghetti code?? thats my first to do when i get back to this.
function checksDifficulty(choiceDifficulty) {
	choiceDifficulty = choiceDifficulty.toLowerCase()
	if (choiceDifficulty != "easy") {
		if (choiceDifficulty != "medium") {
			if (choiceDifficulty != "hard") {
				return "... ya done typed nonsense"
			}
		}
	}
	if (
		choiceDifficulty === "easy" ||
		choiceDifficulty === "medium" ||
		choiceDifficulty === "hard"
	) {
		return "You chose " + choiceDifficulty + ", good job you!"
	}
}

const assignsRandomWordBank = choiceDifficulty => {
	let random3LetterWords = ["boy", "soy", "hen", "doe", "pop", "tie"]
	let random5LetterWords = [
		"daisy",
		"loath",
		"ardor",
		"vigor",
		"gnarl",
		"lance",
	]
	let random7LetterWords = [
		"silence",
		"invader",
		"latency",
		"parched",
		"plaudits",
	]
	let emptyWordBank = []

	choiceDifficulty = choiceDifficulty.toLowerCase()
	switch (choiceDifficulty) {
		case "easy":
			return random3LetterWords
			break
		case "medium":
			return random5LetterWords
			break
		case "hard":
			return random7LetterWords
			break
		default:
			return emptyWordBank
			break
	}
}

//to check random number, remove //'s
//to change random word, pick any number lower than theindexof that word bank/ use the output from the above line
//to check random word, remove // from LAST
const generatesRandomWord = assignedWordBank => {
	const randomNumber = Math.floor(Math.random() * assignedWordBank.length)
	//console.log(randomNumber);//USE ONCE TO ENTER THAT VALUE THERE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  <<<<<<<<<<<<<<<<<
	let numberInput = 1 //HERE  HERE  HERE  HERE  HERE  HERE  HERE  HERE  HERE  HERE  HERE  HERE
	const assignedRandomWord = assignedWordBank[numberInput]
	return assignedRandomWord
}

const decidesMaxGuessLength = choiceDifficulty => {
	choiceDifficulty = choiceDifficulty.toLowerCase()
	switch (choiceDifficulty) {
		case "easy":
			return 3
			break
		case "medium":
			return 5
			break
		case "hard":
			return 7
			break
		default:
			return "... ya done typed nonsense"
			break
	}
}

const separatesRandomWordIntoElements = (randomWord, maxGuessLength) => {
	let translatedRandomWord = []
	for (let i = 0; i < maxGuessLength; i++) {
		let characterInput = randomWord.charAt(i)
		translatedRandomWord.push(characterInput)
	}
	return translatedRandomWord
}

const translatesRandomWordToNumbers = translatedWordPhase1 => {
	return translatedWordPhase1
}

/* const addsToTheEndCutsOffTheTop = (assignedWordBank,maxGuessLength) => {
       let endCount=assignedWordBank.length;
       let i = 0;
       while (i<endCount) {
         let word=assignedWordBank[i];
         word=word.toUpperCase();
         assignedWordBank.push(word);
         i++; }
         assignedWordBank.splice(0,endCount);
     
     return assignedWordBank;
     }*/ //this function is no longer useful, but it can be used later on to help w the numbers and modifying

function checksPlayed(haveTheyPlayed) {
	haveTheyPlayed = haveTheyPlayed.toLowerCase()
	if (haveTheyPlayed != "no") {
		if (haveTheyPlayed != "yes") {
			return "... ya done typed nonsense"
		}
	}
	if (haveTheyPlayed === "no") {
		return (
			"You said " +
			haveTheyPlayed +
			"... *insert a simple, easy2understand yet informative, short but funny explanation of rules*"
		)
	} else {
		return (
			"You said " + haveTheyPlayed + ". Onward... experienced WORDLE-r. . ."
		)
	}
}

/*const lowercasesGuessBank (guessBank,maxGuessLength) {
       let lowerGuessBank=[];
       for (let i=0;i<guessBank.length;i++) {
         let guessBankPicker=guessBank[i];
         if (guessBankPicker.length<=maxGuessLength) {
          guessBankPicker=guessBankPicker.toLowerCase();
          lowerGuessBank.push(guessBankPicker);
         }
         else if (guessBankPicker.length>maxGuessLength) {
           lowerGuessBank.push('why');
         }
         return lowerGuessBank;
    } 
  } */

//for (let i=0; i>4;i++) {
//return guessBank[i];
//return guessBank[i]=(guessBank[i]).toLowerCase();
//return guessBank.splice(1,0,guessBank[i]);
//}
//return guessBank;
//}

/*
  const checksGuess = (guessBank) => {
    const alphabetEnglish = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    // array for letters of the alphabet with length of 26
  
    //separates the spliced words into two arrays with a length of 5 each
    //start of a loop for this if block, if the index of the guessesBank equals true then it runs until the end of the guesses bank (5 letters) 
    //same loop^checks the first index of the guesses bank to see if its strictly true, if so, then this if block goes
    //assigns values to each letter slot in the guess and random word arrays based on the letter they contain
    //start of a loop that finds the difference between 1 index of the guess to all indexes of the random word(loops 5 times). for one guess; IF the difference is zero, then it adds (via push or shift) that letter to a new array for that guess w/ modifications to its string/another IF for if that difference between index is (=|1|)/ ELSE it adds that letter to the array with no modifications
    //things still relevant to figure out: will this f. put out one array, looking like [h (o) u [s] {e}]. yes...
    //another f.compilesGuesses(checksGuess(guessesBank)) will use the output of this function
    //f.compliesGuesses will take the array from checksGuess and add it to a new array (via shift) which holds all the guesses
    //END of this f, then -> another function which takes in the array from compiilesGuesses and checks how  many of its indexes return as true. ex : [[h (o) (u) s {e}], [{c} (o) (u) c h]], [], [], []] indicates that they guessed twice, and then gave up. this will return a =1 to the starting value of a variable of 0 and return that value
  
  } */

//const numberOfGuesses = (guessBank) => {

//}
//going to be called in f.translatesArray to help tell the user if they won-how much 'pts' they won

//function messageOut (compilesGuesses (checksGuess(guessBank)), numberOfGuesses(guessBank)) {
//gives a message with visual info on how you're doing
//tells user if you won, and how many points you won based on the numberOfGuesses
//tells user how many guesses you have left and points up till then
//tells the user if they lost
//}

function playButton() {
	console.log(
		"You're going to play a guessing game, do you want to play an easy, medium, or hard difficulty guessing game?",
	)
	console.log("")
	let choiceDifficulty = "easy" //DIFFICULTY HERE> > DIFFICULTY HERE> > DIFFICULTY HERE> > DIFFICULTY HERE> > DIFFICULTY HERE> > DIFFICULTY HERE> > DIFFICULY
	console.log(checksDifficulty(choiceDifficulty))
	//runs f.checksDifficulty,out: message
	let maxGuessLength = decidesMaxGuessLength(choiceDifficulty)
	let assignedWordBank = assignsRandomWordBank(choiceDifficulty)
	let randomWord = generatesRandomWord(assignedWordBank)
	let translatedWordPhase1 = separatesRandomWordIntoElements(
		randomWord,
		maxGuessLength,
	) //doesnt work
	console.log(translatedWordPhase1) //TEST

	let translatedWordPhase2 = translatesRandomWordToNumbers(translatedWordPhase1)
	console.log(translatedWordPhase2) //TEST
	console.log("")

	console.log("Have you played this game before?")
	console.log("")

	console.log(checksPlayed("NO"))
	//runs f.checksPlayed, out:message
	console.log("")

	//GUESSES HERE>>  GUESSES HERE>>  GUESSES HERE>> GUESSES HERE>> GUESSES HERE>>  GUESSES HERE>> GUESSES HERE>> GUESS
	let guessBank = ["yUH", "yuh", "CRUHHHH", "yuh", ""] //user guesses ^
	//checksGuess(guessBank);
	//compilesGuesses(checksGuess(guessBank);
	//numberOfGuesses(guessBank);
	//messsageOut(compilesGuesses (checksGuess(guessBank)), numberOfGuesses(guessBank));
} //f.playButton launches the game, with the user's choices being made here.
playButton()

//this is just to see what it could look like
console.log("")
console.log("")
console.log("[ H {O} {U} {S} {E} ]")
console.log("")
console.log("[ h {o} {u} {s} {e} ]")
console.log("")
console.log("[ h {o} {u} {s} {e} ]")
console.log("")
console.log("[ h {o} {u} {s} {e} ]")
console.log("")
console.log("[ {d} {o} {u} {s} {e} ]")