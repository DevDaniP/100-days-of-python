// Game variables
const cards = ['ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
let playerHand = [];
let dealerHand = [];
let gameOver = false;
let aceResolve = null;

// Get a random card from the deck
function getRandomCard() {
    return cards[Math.floor(Math.random() * cards.length)];
}

// Show the ace choice popup
function showAceChoice() {
    return new Promise((resolve) => {
        document.getElementById('overlay').classList.add('active');
        document.getElementById('aceChoice').classList.add('active');
        aceResolve = resolve;
    });
}

// Handle ace choice from user
function chooseAce(value) {
    document.getElementById('overlay').classList.remove('active');
    document.getElementById('aceChoice').classList.remove('active');
    if (aceResolve) {
        aceResolve(value);
        aceResolve = null;
    }
}

// Handle ace logic (player chooses, dealer uses strategy)
async function handleAce(card, isDealer = false, currentTotal = 0) {
    if (card === 'ace') {
        if (isDealer) {
            // Dealer strategy: use 11 if it won't bust, otherwise use 1
            return (currentTotal + 11 <= 21) ? 11 : 1;
        } else {
            // Player gets to choose
            return await showAceChoice();
        }
    }
    return card;
}

// Create and display a card element
function displayCard(card, isHidden = false) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card' + (isHidden ? ' hidden' : '');
    
    if (isHidden) {
        cardDiv.innerHTML = '<span style="font-size: 1.2em;">🂠</span>';
    } else {
        let displayValue = '';
        let suit = ['♠', '♥', '♦', '♣'][Math.floor(Math.random() * 4)];
        let color = (suit === '♥' || suit === '♦') ? '#c41e3a' : '#000';
        
        if (card === 'ace' || card === 11) {
            displayValue = 'A';
        } else if (card === 10) {
            let faceCards = ['J', 'Q', 'K', '10'];
            displayValue = faceCards[Math.floor(Math.random() * 4)];
        } else {
            displayValue = card;
        }
        
        cardDiv.innerHTML = `
            <div style="position: absolute; top: 10px; left: 12px; font-size: 0.5em; line-height: 1; color: ${color};">
                ${displayValue}<br>${suit}
            </div>
            <div style="color: ${color}; font-size: 1.1em;">
                ${displayValue}
            </div>
            <div style="position: absolute; bottom: 10px; right: 12px; font-size: 0.5em; line-height: 1; transform: rotate(180deg); color: ${color};">
                ${displayValue}<br>${suit}
            </div>
        `;
    }
    
    return cardDiv;
}

// Update the display with current hands
function updateDisplay() {
    const playerCardsDiv = document.getElementById('playerCards');
    const dealerCardsDiv = document.getElementById('dealerCards');
    
    playerCardsDiv.innerHTML = '';
    dealerCardsDiv.innerHTML = '';

    // Display player cards
    playerHand.forEach(card => {
        playerCardsDiv.appendChild(displayCard(card));
    });

    // Display dealer cards (hide second card until game over)
    dealerHand.forEach((card, index) => {
        if (gameOver || index === 0) {
            dealerCardsDiv.appendChild(displayCard(card));
        } else {
            dealerCardsDiv.appendChild(displayCard(card, true));
        }
    });

    // Display totals
    const playerTotal = playerHand.reduce((sum, card) => sum + (typeof card === 'number' ? card : 0), 0);
    document.getElementById('playerTotal').textContent = `Total: ${playerTotal}`;

    if (gameOver) {
        const dealerTotal = dealerHand.reduce((sum, card) => sum + (typeof card === 'number' ? card : 0), 0);
        document.getElementById('dealerTotal').textContent = `Total: ${dealerTotal}`;
    } else {
        document.getElementById('dealerTotal').textContent = `Showing: ${dealerHand[0]}`;
    }
}

// Deal initial 2 cards to both player and dealer
async function dealInitialCards() {
    // Deal player's 2 cards
    for (let i = 0; i < 2; i++) {
        let card = getRandomCard();
        card = await handleAce(card, false);
        playerHand.push(card);
    }

    // Deal dealer's 2 cards
    for (let i = 0; i < 2; i++) {
        let card = getRandomCard();
        const currentTotal = dealerHand.reduce((sum, c) => sum + c, 0);
        card = await handleAce(card, true, currentTotal);
        dealerHand.push(card);
    }

    updateDisplay();
}

// Player hits (draws another card)
async function hit() {
    if (gameOver) return;

    let card = getRandomCard();
    card = await handleAce(card, false);
    playerHand.push(card);
    updateDisplay();

    const total = playerHand.reduce((sum, card) => sum + card, 0);
    if (total > 21) {
        endGame('You busted! Dealer wins! 😔');
    }
}

// Player stays (ends turn)
async function stay() {
    if (gameOver) return;

    document.getElementById('hitBtn').disabled = true;
    document.getElementById('stayBtn').disabled = true;
    gameOver = true;
    updateDisplay();

    document.getElementById('message').textContent = 'Dealer is playing...';
    await new Promise(resolve => setTimeout(resolve, 1000));

    await dealerPlay();
}

// Dealer plays automatically
async function dealerPlay() {
    while (true) {
        const dealerTotal = dealerHand.reduce((sum, card) => sum + card, 0);
        
        // Dealer hits on 16 or below
        if (dealerTotal <= 16) {
            await new Promise(resolve => setTimeout(resolve, 1000));
            let card = getRandomCard();
            card = await handleAce(card, true, dealerTotal);
            dealerHand.push(card);
            updateDisplay();
        } else {
            break;
        }
    }

    determineWinner();
}

// Determine the winner
function determineWinner() {
    const playerTotal = playerHand.reduce((sum, card) => sum + card, 0);
    const dealerTotal = dealerHand.reduce((sum, card) => sum + card, 0);

    let message;
    if (dealerTotal > 21) {
        message = '🎉 Dealer busted! You win!';
    } else if (playerTotal > dealerTotal) {
        message = '🎉 You win!';
    } else if (playerTotal < dealerTotal) {
        message = '😔 Dealer wins!';
    } else {
        message = '🤝 It\'s a tie!';
    }

    endGame(message);
}

// End the game
function endGame(message) {
    gameOver = true;
    document.getElementById('message').textContent = message;
    document.getElementById('hitBtn').style.display = 'none';
    document.getElementById('stayBtn').style.display = 'none';
    document.getElementById('newGameBtn').style.display = 'inline-block';
    updateDisplay();
}

// Start a new game
function newGame() {
    playerHand = [];
    dealerHand = [];
    gameOver = false;
    
    document.getElementById('message').textContent = '';
    document.getElementById('hitBtn').style.display = 'inline-block';
    document.getElementById('stayBtn').style.display = 'inline-block';
    document.getElementById('newGameBtn').style.display = 'none';
    document.getElementById('hitBtn').disabled = false;
    document.getElementById('stayBtn').disabled = false;

    dealInitialCards();
}

// Start the game when page loads
dealInitialCards();