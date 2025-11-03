import random 
stages = [r'''
  +---+
  |   |
  O   |
 /|\  |
 / \  |
      |
=========
''', r'''
  +---+
  |   |
  O   |
 /|\  |
 /    |
      |
=========
''', r'''
  +---+
  |   |
  O   |
 /|\  |
      |
      |
=========
''', r'''
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========''', r'''
  +---+
  |   |
  O   |
  |   |
      |
      |
=========
''', r'''
  +---+
  |   |
  O   |
      |
      |
      |
=========
''', r'''
  +---+
  |   |
      |
      |
      |
      |
=========
''']

from hangman_words import word_list
chosen_word = random.choice(word_list) 
word_length = len(chosen_word)

guesses = []
display = []
lives = 6 
for i in range(word_length):
    display += "_"

print ( ''' 
 _                                             
| |                                            
| |__   __ _ _ __   __ _ _ __ ___   __ _ _ __  
| '_ \ / _` | '_ \ / _` | '_ ` _ \ / _` | '_ \ 
| | | | (_| | | | | (_| | | | | | | (_| | | | |
|_| |_|\__,_|_| |_|\__, |_| |_| |_|\__,_|_| |_|
                    __/ |                      
                   |___/    '''
)
while  "_" in display:
    guess = input("Guess a letter:\n").lower()
    if guess in guesses:
         print("you've already guessed that")
         continue
    guesses.append(guess)

    for x in range(word_length):
        if chosen_word[x] == guess:
            display[x] = guess 

    if guess not in chosen_word:
            lives -= 1 
            print(f"Sorry, but {guess} is not in the word.")

    print(f"{' '.join(display)}")
    print(stages[lives])
    if lives == 0:
        print("gameover")
        print(f"the word was: {chosen_word}")
        print("sorry bruh try again")
        break 

    print(f"{' '.join(display)}")
    print(f"guesses you've made are: {guesses}")
    print(f"you have {lives} lives left")

if "_" not in display:
     print("You won bro!! way to go.")
     

