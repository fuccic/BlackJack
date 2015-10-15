var suits = ["c", "s", "h", "d"];
var deck = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var randomNumberDeckOutput;
var randomNumberSuitsOutput;
var tempStorage = [];
var deckStorage = [""];
var dealerHand = [];
var playerHand = [];
// console.log(randomNumberDeck);
// console.log(randomNumberSuits);


function randomNumberDeck(){
	randomNumberDeckOutput = Math.floor(Math.random()* 13);
	return randomNumberDeckOutput;
};

function randomNumberSuits(){
	randomNumberSuitsOutput = Math.floor(Math.random()*4);
	return randomNumberSuitsOutput;
};



function dealerCard(){
	randomNumberSuits();
	randomNumberDeck();
	// console.log(randomNumberSuitsOutput);
	// console.log(randomNumberDeckOutput);
	var card = deck[randomNumberDeckOutput] + suits[randomNumberSuitsOutput];
	tempStorage.push(card);
	// console.log(tempStorage);
	// $.each(deckStorage,function(i,value){
	for (var i = 0; i < deckStorage.length; i++) {
		// console.log(i)
		if(tempStorage[0] != deckStorage[i]){
			deckStorage.push(tempStorage[0]);
			console.log(tempStorage[0]);
			dealerHand.push(tempStorage[0]);
			console.log(tempStorage[0]);
			tempStorage.pop();
			break
		}else if(tempStorage[0] === deckStorage[i]){
			tempStorage.pop();
			break
		}
	};
// console.log(deckStorage);
// console.log(tempStorage);
};

function playerCard(){
	randomNumberSuits();
	randomNumberDeck();
	var card = deck[randomNumberDeckOutput] + suits[randomNumberSuitsOutput];
	tempStorage.push(card);
	// console.log(tempStorage);
	// $.each(deckStorage,function(i,value){
		console.log(deckStorage.length);
		for (var i = 0; i < deckStorage.length; i++) {
		// console.log(i)
		console.log(deckStorage.length);
		if(tempStorage[0] != deckStorage[i]){
			// console.log(i);
			deckStorage.push(tempStorage[0]);
			playerHand.push(tempStorage[0]);
			tempStorage.pop();
			console.log(deckStorage.length);
		}else if(tempStorage[0] === deckStorage[i]){
			tempStorage.pop();
			console.log(deckStorage.length);
		}
	};
}



// dealCard();

$( "#start" ).click(function() {
	dealerCard();
	playerCard();
	// console.log(dealerHand);
	// console.log(playerHand);
	// console.log(deckStorage);
});




