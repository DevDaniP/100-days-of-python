print("""
                     __        __   /\/
                    /==\      /  \_/\/   
                  /======\    \/\__ \__
                /==/\  /\==\    /\_|__ \
             /==/    ||    \=\ / / / /_/
           /=/    /\ || /\   \=\/ /     
        /===/   /   \||/   \   \===\
      /===/   /_________________ \===\
   /====/   / |                /  \====\
 /====/   /   |  _________    /  \   \===\    THE LEGEND OF 
 /==/   /     | /   /  \ / / /  __________\_____      ______       ___
|===| /       |/   /____/ / /   \   _____ |\   /      \   _ \      \  \
 \==\             /\   / / /     | |  /= \| | |        | | \ \     / _ \
 \===\__    \    /  \ / / /   /  | | /===/  | |        | |  \ \   / / \ \
   \==\ \    \\ /____/   /_\ //  | |_____/| | |        | |   | | / /___\ \
   \===\ \   \\\\\\\/   /////// /|  _____ | | |        | |   | | |  ___  |
     \==\/     \\\\/ / //////   \| |/==/ \| | |        | |   | | | /   \ |
     \==\     _ \\/ / /////    _ | |==/     | |        | |  / /  | |   | |
       \==\  / \ / / ///      /|\| |_____/| | |_____/| | |_/ /   | |   | |
       \==\ /   / / /________/ |/_________|/_________|/_____/   /___\ /___\
         \==\  /               | /==/
         \=\  /________________|/=/    OCARINA OF TIME
           \==\     _____     /==/ 
          / \===\   \   /   /===/
         / / /\===\  \_/  /===/
        / / /   \====\ /====/
       / / /      \===|===/
       |/_/         \===/
                      =""")

def start():
    print("Welcome to the Legend of Zelda\n Your mission is to save Zelda who just fell down a well.")
    choice = input('your choices are to "jump" down the well, "go" cook an apple, or "look" for a safe way to get down?\n')
    match choice:
        case "jump":
            jump()
        case "go":
            go()
        case "look":
            look()
        case _:
            print("Invalid choice! Please try again.\n")
            start()

def jump():
    print("You've decided to jump down the well you fall past a bunch of red molten rock. You fall for what seems like too long. and eventually you hit the ground with a splat. 2 and a half of your hearts blib out leaving you with only a half a heart\n")
    choice = input('what do you do? move "forward" because Zelda needs you or "stop" and look for food\n')
    match choice:
        case "forward":
            print("You move forward with half a heart and run into a hobgoblin who stabs you in the last heart.")
            gameover() 
        case "stop":
            print("You choose to stop and look for food. but find that you dont have any. Just as a hobgoblin approaches you and stabs you in the last heart.")
            gameover() 
        case _:
            print("Invalid choice! Please try again.\n")
            jump()
    
def go():
    print("You decide to go to the campfire near by and cook an apple. You stow it away in your pack for later. ")
    choice = input ('again you are faced with the choice to "jump" down the well,or "look" for a safe way to get down?\n')
    match choice:
        case "jump":
            jump()
        case "look":
            look()
        case _:
            print("Invalid choice! Please try again.\n")
            go()

def look():
    print("you look for a safe way to get down. and see that Zelda is flying up magically. She embraces you with a hug. And all is well. YOU WIN ")

def gameover(): 
    print("You have lost the game. oh yes and this game too")
    choice = input('do you want to play again? "yes" or "no"?\n')
    match choice: 
        case "yes":
            start()
        case "no":
            print("buhbye")
        case _:
            print("Invalid choice! Please try again.\n")
            gameover() 

start()