function saySomeShit() {
	document.write("some shit");
}

function difficultyChanger() {}

function tileModifier() {
	// (B1) FORM DATA OBJECT
	var data = new FormData();

	// (B2) APPEND FIELDS
	data.append("guess", document.getElementById("guess").value);

	// (B3) WHATEVER YOU WANT TO DO NEXT
	document.write(
		"how do i display the guess on this page, and then on the index page?",
	);
	//for (let [k, v] of data.entries()) {
	//console.log(k, v);
	//	}
	//return false;
}
//first first first is to setup the hyerlinks, so that the difficulltyChanger can be made
//then i need to figure out how to display the guesses, so that i have a way to test the 1difficultyChanger
//tileMod can do without a randomWordSelector(later after the game itself work, ill just use pie cream and sweltry for the default words until later) which picks from a word bank based on the difficulty and day of the year.
//displayTileBoard needs a guessCounter
//displayTileBoard makes a change to a tile 1 2 3 4 5 6 or 7 and only changes that tile if its corresponding counter comes through the door
//tileMod has to take in the entry, and then assign values to each letter cross checks them and feeds
//now that we have structure, starting from the end function displayTileBoard, we need it to display bassed on difficulty and guess numbers , these r ghosts walking through the door changing thee temperature and energy of the board, sounds pretentious or stupid idc its just notes, maybe a timer??nah..but sounds maybe, that get moreintense as it goes
function displayTileBoard() {
	return data.entries("guess");
}
