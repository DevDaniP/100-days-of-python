# making a guessing game. 
import random 

def theGame(lives, number):
     while lives > 0 :
        print(f"You have {lives} attempts remaining to guess the number.")
        guess = int(input("Make a guess: "))
        try:
            guess = int(input("Make a guess: "))
        except ValueError:
            print("You did not input a number between 1-100. try again")
            continue
        
        if guess > number:
            print("Too high")
            lives -= 1
        elif guess < number:
             print("Too Low")
             lives -= 1
        elif guess == number:
             print("Good job. you guessed right.")
             again = input("Would you like to play again? type 'yes' or 'no")
             if again == 'yes':
                  play()
             elif again == 'no':
                  break 
        

def play():
    recieveInput = True 
    while recieveInput: 
            lives = 0 
            number = random.randint(1, 100)
            print("Welcome to the Number Guessing Game!\n I'm thinking of a number between 1 and 100.")
            difficulty = input(f"choose a difficulty. Type 'easy' or 'hard':\n")
            if difficulty == 'easy':
                lives = 10
                theGame(lives, number)
                recieveInput = False 
            elif difficulty == 'hard':
                lives = 5
                theGame(lives, number)
                recieveInput = False 


play() 


