
var playerHand = [];
var dealerHand = [];
var randomNumberDeckOutput;
var playerValue = 0;
var dealerValue = 0;


function card(value, name, suit){
	this.value = value;
	this.name = name;
	this.suit = suit;
}

function deck(){
	this.values = ['11', '2', '3', '4', '5', '6', '7', '8', '9', '10', '10', '10', '10']
	this.names = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
	this.suits = ['Hearts','Diamonds','Spades','Clubs'];
	var cards = [];
    
    for( var s = 0; s < this.suits.length; s++ ) {
        for( var n = 0; n < this.names.length; n++ ) {
            cards.push( new card( this.values[n], this.names[n], this.suits[s]) );
        }
    }

    return cards;
}

var myDeck = new deck();

//======================
//		 GAMEPLAY
//======================

function randomNumberDeck(){
	randomNumberDeckOutput = Math.floor(Math.random()* myDeck.length);
	// console.log(randomNumberDeckOutput);
	return randomNumberDeckOutput;
}


function drawPlayerCards(){
	// console.log(deckStorage);
	for (var i = 0; i < 2; i++) {
		randomNumberDeck();
		playerHand.push(myDeck[randomNumberDeckOutput]);
		// console.log(deckStorage[randomNumberDeckOutput]);
		myDeck.splice(randomNumberDeckOutput, 1);
		// console.log(deckStorage[randomNumberDeckOutput])
		// console.log(playerHand[i].value);
		console.log(playerHand);
	};
	// console.log(myDeck);
}

function drawDealerCards(){
	// console.log();
	for (var i = 0; i < 2; i++) {
		randomNumberDeck();
		dealerHand.push(myDeck[randomNumberDeckOutput]);
		myDeck.splice(randomNumberDeckOutput, 1);
		// console.log(myDeck);
		console.log(dealerHand);
	};
}


$( "#start" ).click(function() {
	drawPlayerCards();
	drawDealerCards();
	showButtons();
});


//======================= //ACE TOKENS
//		GAME LOGIC
//=======================
function showButtons(){
	if(parseInt(playerHand[0].value) + parseInt(playerHand[1].value) < 21 && parseInt(dealerHand[0].value) + parseInt(dealerHand[1].value) <21){
		$('#hit').show('slow');
		$('#stand').show('slow');
	}
	else if(parseInt(playerHand[0].value) + parseInt(playerHand[1].value) === 21 && parseInt(dealerHand[0].value) + parseInt(dealerHand[1].value) < 21){
		alert("BLACKJACK");
	}
	else if(parseInt(playerHand[0].value) + parseInt(playerHand[1].value) === 21 && parseInt(dealerHand[0].value) + parseInt(dealerHand[1].value) === 21){
	alert("PUSH");
	//reset
	//start
	}
}

$('#hit').click(function(){
	randomNumberDeck();
	playerHand.push(myDeck[randomNumberDeckOutput]);
	myDeck.splice(randomNumberDeckOutput, 1);
})

$('#stand').click(function(){

})














