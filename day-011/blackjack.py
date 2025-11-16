"""
Our Blackjack Game House Rules
The deck is unlimited in size.
There are no jokers.
The Jack/Queen/King all count as 10.
The Ace can count as 11 or 1.
Use the following list as the deck of cards:
cards = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]

The cards in the list have equal probability of being drawn.
Cards are not removed from the deck as they are drawn.
The computer is the dealer.
"""
import random 
cards = ['ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]
playersHand = [] 
computersHand = [] 

# if the player hits 21 then its dealers turn dont ask to hit again
# do i allow splits
# betting and money bags 

# it needs to be an 11 until that causes you to bust and then revert to a 1 
def aces(card):
    if card == 'ace':
        ace = input(f"You got an ace. would you like it to be a '1' or an '11'?")
        if ace == '1':
            return 1 
        elif ace == '11':
            return 11 
        else:
            print("invalid input")
            return 11 
    return card 

def CompAces(compCard, compTotal):
    if compCard == 'ace':
        if compTotal + 11 <= 21:
            return 11
        else:
            return 1 
    return compCard 

def dealCards():
    for _ in range(2):
        card = random.choice(cards)
        card = aces(card)
        playersHand.append(card)
    
    for _ in range(2):
        compCard = random.choice(cards)
        compTotal = sum(computersHand)
        compCard = CompAces(compCard, compTotal)
        computersHand.append(compCard)
    
    print(f"\nDealer shows: {computersHand[0]} and [hidden card]\n")

def playersTurn():
  
    while True:
        card = random
        total = sum(playersHand)
        
        if total > 21:
            print(f"you busted with a {total} dealer wins! ")
            return total 
        
        hit = input(f"Welcome to Blackjack. your current hand is {playersHand}. do you want to 'hit' or 'stay'\n")
        if hit == 'stay':
            print(f"you ended with {total}. it is now the computer's turn.\n")
            return total 
        else:
            card = random.choice(cards)
            card = aces(card) 
            playersHand.append(card)
        
def dealersTurn():  
    print(f"Dealer reveals their hand: {computersHand}")

    while True: 
        compTotal = sum(computersHand)
        if compTotal <= 16:
            compCard = random.choice(cards)
            compCard = CompAces(compCard, compTotal)
            print(f"The dealer got a {compCard}.\n")
            computersHand.append(compCard)
        else: 
            print(f"The computer ended with a total of {compTotal}\n")
            return compTotal

dealCards() 
total = playersTurn()

if total <= 21:
    compTotal = dealersTurn()

    if compTotal > 21:
        winner = "You"
    elif total > compTotal:
        winner = "you"
    elif total < compTotal:
        winner = "Dealer"
    else:
        winner = "Tie"
else:
    winner = "Dealer"

print(f"the winner is {winner}")


        




