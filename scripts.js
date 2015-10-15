var suits = ["c", "s", "h", "d"];
var deck = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var randomNumberDeckOutput;
var randomNumberSuitsOutput;
var tempStorage = [];
var deckStorage = [];
var dealerHand = [];
var playerHand = [];
var playerBankRoll = 1000;
// console.log(randomNumberDeck);
// console.log(randomNumberSuits);


function randomNumberDeck(){
	randomNumberDeckOutput = Math.floor(Math.random()* 13);
	// console.log(randomNumberDeckOutput);
	return randomNumberDeckOutput;
};

function randomNumberSuits(){
	randomNumberSuitsOutput = Math.floor(Math.random()*4);
	// console.log(randomNumberSuitsOutput);
	return randomNumberSuitsOutput;
};


//creates one card from the two arrays above. 
function dealCard(){
	randomNumberSuits();
	randomNumberDeck();
	// console.log(randomNumberSuitsOutput);
	// console.log(randomNumberDeckOutput);
	var card = deck[randomNumberDeckOutput] + suits[randomNumberSuitsOutput];
	tempStorage.push(card);
	// console.log(card);
	// console.log(tempStorage[0]);
	// console.log(tempStorage);
	// $.each(deckStorage,function(i,value){
		// console.log(i)
// console.log(deckStorage);
// console.log(tempStorage);
};


//This should create the first 2 cards and check the total deck to ensure that there are not duplicates
function dealerCheck(){
	dealCard();
	// console.log(tempStorage[0]);
	// console.log(deckStorage.length);
	if(deckStorage.length >= 1){
		$.each(deckStorage,function(i)
		// for (var i = 0; i < deckStorage.length; i++) 
		{
			// console.log(i);
			// console.log(deckStorage);
			if(tempStorage[0] != deckStorage[i]){
				deckStorage.push(tempStorage[0]);
				console.log(deckStorage);
				console.log(tempStorage[0]);
				// console.log(tempStorage[0]);
				dealerHand.push(tempStorage[0]);
				// console.log(tempStorage[0]);
				console.log(i);
				console.log(deckStorage.length);
				if(i === deckStorage.length){
				tempStorage.pop();
				}
				console.log(tempStorage[0]);
			}else if(tempStorage[0] === deckStorage[i]){
				tempStorage.pop();
				// console.log(tempStorage);
			}
	// for (var i = 0; i < deckStorage.length; i++) 
		})
	}		
	//This should create the first card so the deck array is usable
	else if(deckStorage.length < 1){
		deckStorage.push(tempStorage[0]);
		// console.log(tempStorage[0]);
		tempStorage.pop();
		// console.log(tempStorage[0]);
		// console.log(deckStorage);
	}
	// console.log(deckStorage);
	// console.log(tempStorage);
};

//Checks the player's cards, not important at the moment
function playerCheck(){
	dealCard();
	// for (var i = 0; i < deckStorage.length; i++)
	$.each(deckStorage,function(i) {
		// console.log(i)
		if(tempStorage[0] != deckStorage[i]){
			deckStorage.push(tempStorage[0]);
			console.log(tempStorage[0]);
			playerHand.push(tempStorage[0]);
			console.log(tempStorage[0]);
			tempStorage.pop();

		}else if(tempStorage[0] === deckStorage[i]){
			tempStorage.pop();
		}
	});	
}
// console.log(playerHand);
// console.log(dealerHand);

// dealCard();


function assignValue(){

}


//Start the two functions
$( "#start" ).click(function() {
	dealerCheck();
	// playerCheck();
	// playerCheck();
	// console.log(dealerHand);
	// console.log(playerHand);
	// console.log(deckStorage);
});


// =========================
// LOGIC SECTION
// =========================


// function calculateValues(){
// 	if(
// }


