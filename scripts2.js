var suits = ["c", "s", "h", "d"];
var deck = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var deckStorage = [];
var playerHand = [];
var dealerHand = [];
var randomNumberDeckOutput;
var playerValue = 0;
var dealerValue = 0;

function randomNumberDeck(){
	randomNumberDeckOutput = Math.floor(Math.random()* deckStorage.length);
	// console.log(randomNumberDeckOutput);
	return randomNumberDeckOutput;
};

function generateDeck(){
	for (var i = 0; i < suits.length; i++) {
		for (var x = 0; x < deck.length; x++) {
			var card = deck[x] + suits[i] ;
			deckStorage.push(card);
			// console.log(deckStorage);
		};	
		// console.log(deckStorage);

	};
	// var card = deck[randomNumberDeckOutput] + suits[randomNumberSuitsOutput];
	// deckStorage.push(card)
}

function drawPlayerCards(){
	generateDeck();
	// console.log(deckStorage);
	for (var i = 0; i < 2; i++) {
		randomNumberDeck();
		playerHand.push(deckStorage[randomNumberDeckOutput]);
		// console.log(deckStorage[randomNumberDeckOutput]);
		deckStorage.splice(randomNumberDeckOutput, 1);
		// console.log(deckStorage[randomNumberDeckOutput])
		console.log(playerHand);
	};
	console.log(deckStorage);
}

function drawDealerCards(){
	// console.log();
	for (var i = 0; i < 2; i++) {
		randomNumberDeck();
		dealerHand.push(deckStorage[randomNumberDeckOutput]);
		deckStorage.splice(randomNumberDeckOutput, 1);
		console.log(dealerHand);
	};
}

$( "#start" ).click(function() {
	drawPlayerCards();
	drawDealerCards();
});
