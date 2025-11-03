import random 
def start():
    print('Welcome to Boulder, Parchment, Shears.')

    #declaring variables 
    options = ["Boulder", "Parchment", "Shears"]
    while playerChoice not in options:
        print("Invalid choice! Try again.")
        playerChoice = input ('What do you choose? "Boulder", "Parchment", or "Shears"?')

    #computer needs to make a choice 
    computerChoice = random.choice(options) 

    Boulder = ("""
        _______
    ---'   ____)
        (_____)
        (_____)
        (____)
    ---.__(___)
    """)
    Parchment =("""
        _______
    ---'    ____)____
            ______)
            _______)
            _______)
    ---.__________)
    """)
    Shears = ("""
        _______
    ---'   ____)____
            ______)
        __________)
        (____)
    ---.__(___)
    """)


    # looping game option 
    def gameover():
        choice = input("Wanna pway again? Yes or No\n")
        match choice: 
            case "Yes" | "yes":
                start()
            case "No" | "no":
                print("buhbye")
            case _:
                print("Invalid choice! Please try again.\n")
                gameover() 

    match (playerChoice, computerChoice): 
    # cats games 
        case ("Boulder","Boulder"):
            print (f"you chose:\n{Boulder}\n the computer chose{Boulder}\n ")
            print("cats game.")
            gameover()
        case ("Parchment","Parchment"):
            print (f"you chose:\n{Parchment}\n the computer chose{Parchment}\n ")
            print("cats game.")
            gameover()
        case ("Shears","Shears"):
            print (f"you chose:\n{Shears}\n the computer chose{Shears}\n ")
            print("cats game.")
            gameover() 

    # player wins 
        case ("Parchment", "Boulder"):
            print (f"you chose:\n{Parchment}\n the computer chose{Boulder}\n ")
            print("You wrapped the boulder like a xmas present. You win!!")
            gameover() 
        case ("Boulder", "Shears"):
            print (f"you chose:\n{Boulder}\n the computer chose{Shears}\n ")
            print("You broke a pair of shears like it was nothin. You win!!")
            gameover() 

    # computer wins 
        case ("Boulder", "Parchment"):
            print (f"you chose:\n{Boulder}\n the computer chose{Parchment}\n ")
            print("bruh you got wrapped up and placed under the xmas tree. You lost")
            gameover() 
        case ("Shears", "Boulder"):
            print (f"you chose:\n{Shears}\n the computer chose{Boulder}\n ")
            print("you got smashed... like your mom last night. you lose")
            gameover()
        
start() 





