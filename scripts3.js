
var playerHand = [];
var dealerHand = [];
var randomNumberDeckOutput;
var playerValue = 0; 
var dealerValue = 0;
var playerPurse = 1000;
var playerBet = 0;



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

function printCards(){
	// $('#dealercard1').html(dealerHand[0].name + dealerHand[0].suit);
	// $('#dealercard2').html(dealerHand[1].name + dealerHand[1].suit);
	$('#playercard1').html(playerHand[0].name + playerHand[0].suit);
		$('#playercard2').html(playerHand[1].name + playerHand[1].suit);
		console.log(playerHand.length);
		if (playerHand.length === 3) {
			$('#playercard3').html(playerHand[2].name + playerHand[2].suit);
		}	
		else if (playerHand.length === 4){
			$('#playercard4').html(playerHand[3].name + playerHand[3].suit);
		}
		else if(playerHand.length === 5){
			$('#playercard5').html(playerHand[4].name + playerHand[4].suit);
		}

	$('#dealercard1').html(dealerHand[0].name + dealerHand[0].suit);
		console.log(playerHand.length);
		if (dealerHand.length === 3) {
			$('#dealercard3').html(dealerHand[2].name + dealerHand[2].suit);
		}	
		else if (dealerHand.length === 4){
			$('#dealercard4').html(dealerHand[3].name + dealerHand[3].suit);
		}
		else if(dealerHand.length === 5){
			$('#dealercard5').html(dealerHand[4].name + dealerHand[4].suit);
		}
}





$( "#start" ).click(function() {
	drawPlayerCards();
	drawDealerCards();
	printCards();
	showButtons();
	betPrompt();
	insurance();
});


//======================= //ACE TOKENS
//		GAME LOGIC
//=======================
function findValues(){
	playerValue = 0;
	dealerValue = 0;
	for (var i = 0; i < playerHand.length; i++) {
		playerValue  = parseInt(playerHand[i].value) + playerValue;
	};
	for(var i = 0; i < dealerHand.length; i++) {
		dealerValue = parseInt(dealerHand[i].value) + dealerValue;
	}
	console.log(playerValue);
	console.log(dealerValue);
}


function showButtons(){
	findValues();
	if(playerValue < 21 && dealerValue < 21){
		$('#hit').show('slow');
		$('#stand').show('slow');
		$('#start').hide('slow');
		$('#reset').hide('slow');


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
	findValues();
	printCards();
	aceCheck();
	bustCheck();
	// console.log(playerValue);
})

$('#stand').click(function(){
	dealerTurn();
})
 

function dealerTurn(){
	if(dealerValue < 17){
		$('#dealercard2').html(dealerHand[1].name + dealerHand[1].suit);
		randomNumberDeck();
		dealerHand.push(myDeck[randomNumberDeckOutput]);
		myDeck.splice(randomNumberDeckOutput, 1);
		printCards();
		findValues();
		checkForWin();
			console.log(playerValue);

	}
	else{
		$('#dealercard2').html(dealerHand[1].name + dealerHand[1].suit);
		aceCheck();
		findValues();
		checkForWin();
			console.log(playerValue);

	}
}

function betPrompt(){
	var betQuestion = prompt("How much would you like to bet?");
	$("#bet").html(betQuestion)
	playerPurse = playerPurse - parseInt(betQuestion)
	$("#wallet").html(playerPurse)
	playerBet = parseInt(betQuestion)
}


function aceCheck(){
	console.log(playerHand[1].name)
	for (var i = 0; i < playerHand.length; i++) {
		if(playerHand[i].name === "A" && playerValue > 21){
			playerHand[i].value = 1;
			findValues();
		}
	}
	for (var i = 0; i < dealerHand.length; i++) {
		if(dealerHand[i].name === "A" && dealerValue > 21){
			dealerHand[i].value = 1;
			findValues();
		}
	}
}

function insurance(){
	if(dealerHand[0].name === "A"){
		var insuranceQuestion = prompt("Would you like to take insurance");
		if (insuranceQuestion === "Yes" && dealerHand[1].value === 10) {
			alert("Player Wins");
		}
		else{
			dealerTurn();
		}
	}
}

// function splitCards(){
// 	var splitQuestion = prompt("Would you like to split?")
// 	if(playerHand[0].name === playerHand[1].name){
// 		splitQuestion 
// 		if(splitQuestion === "yes" || "Yes"){

// 		}
// }


function checkForWin(){
	if(playerValue > 21){
		aceCheck();
		$('#dealercard2').html(dealerHand[1].name + dealerHand[1].suit);
		alert("Bust");
		$('#reset').show('slow');
		$('#hit').hide('slow');
		$('#stand').hide('slow');
	}
	else if(dealerValue < 17){
		dealerTurn();
	}
	else if(playerValue > dealerValue && dealerValue < 22){
		aceCheck();
		$('#gamestatus').html("Player Wins");
		$('#reset').show('slow');
		$('#hit').hide('slow');
		$('#stand').hide('slow');
		playerPurse = (playerBet * 2) + playerPurse
		$("#wallet").html(playerPurse)
	}
	else if(playerValue < dealerValue && dealerValue < 22){
		aceCheck();
		$('#gamestatus').html("House Wins");
		$('#reset').show('slow');
		$('#hit').hide('slow');
		$('#stand').hide('slow');
		$("#wallet").html(playerPurse)
	}
	else if (playerValue === 21 && dealerValue != 21){
		$('#gamestatus').html("Player Wins");
		$('#reset').show('slow');
		$('#hit').hide('slow');
		$('#stand').hide('slow');
		playerPurse = (playerBet * 2) + playerPurse
		$("#wallet").html(playerPurse)
	}
	else if( dealerValue ===21 && playerValue != 21){
		$('#gamestatus').html("House Wins");
		$('#reset').show('slow');
		$('#hit').hide('slow');
		$('#stand').hide('slow');
	}
	else if (playerValue === dealerValue && dealerValue >= 17){
		$('#gamestatus').html("Push");
		$('#reset').show('slow');
		$('#hit').hide('slow');
		$('#stand').hide('slow');
		playerPurse = (playerBet) + playerPurse
		$("#wallet").html(playerPurse)
	}
	else if (dealerValue > 21){
		$('#gamestatus').html("Player Wins");
		$('#reset').show('slow');
		$('#hit').hide('slow');
		$('#stand').hide('slow');
		playerPurse = (playerBet * 2) + playerPurse
		$("#wallet").html(playerPurse)
	}

}

function bustCheck(){
	if(playerValue > 21){
		alert("Bust");
		$('#reset').show('slow');
	}
}


$('#reset').click(function(){
	resetGame();
});


function resetGame(){
	playerHand.length = 0;
	dealerHand.length = 0;
	myDeck = new deck();
	$(".Player").html("");
	$(".dealer").html("");
	$('#gamestatus').html("");
	betPrompt();
	drawPlayerCards();
	drawDealerCards();
	printCards();
	showButtons();
}





