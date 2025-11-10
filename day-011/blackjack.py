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

# we need to make it so that bust happens if the player goes above 21.
# this should be told to them and make it so the game ends and the dealer is 
# declared the winner 

def playersTurn():
    card = random.choice(cards)
    card = aces(card)
    playersHand.append(card)
    card = random.choice(cards)
    card = aces(card) 
    playersHand.append(card)
    while True:
        card = random
        total = sum(playersHand)
        hit = input(f"Welcome to Blackjack. your current hand is {playersHand}. do you want to 'hit' or 'stay'\n")
        if hit == 'stay':
            print(f"you ended with {total}. it is now the computer's turn.\n")
            return total 
        else:
            card = random.choice(cards)
            card = aces(card) 
            playersHand.append(card)
            
        
def dealersTurn():  
    compCard = random.choice(cards)
    compCard = CompAces(compCard)
    computersHand.append(compCard)
    compCard = random.choice(cards)
    compCard = CompAces(compCard) 
    computersHand.append(compCard)

    while True: 
        compTotal = sum(computersHand)
        if compTotal <= 16:
            compCard = random.choice(cards)
            print(f"The dealer got a {compCard}.\n")
            computersHand.append(compCard)
        else: 
            print(f"The computer ended with a total of {compTotal}\n")
            return compTotal

total = playersTurn()
compTotal = dealersTurn()
if total > compTotal <= 21:
    winner = "You"
elif total < compTotal <= 21:
    winner = "dealer"
elif total > 21:
    winner = "dealer"
else:
    winner = "you"

print(f"the winner is {winner}")


        




