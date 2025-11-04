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
cards = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]
playersHand = {}
computersHand = {}

card = random.cards 
playerCard = input(f"welcome to Blackjack. here is your card {card}")
playing = input("type your choice. 'hit' for another card or 'stay' to have your total calulated")
computerCard = card 

match playing:
    case 'hit':
        while playing == 'hit':
            print(f"here is your card {card}")
            playersHand[playerCard] = card  
            playerCard += i 
            cards - i 
    case 'stay': 
        for i in playersHand:
            total = i + i 
        print(f"your total is {total}")


"""
lets think about this step by step 
1. we have a list of cards, and 2 arrays for our hands 
2. 

"""