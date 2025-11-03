alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
from art import logo 
print(logo)
should_continue = True

while should_continue:
    start = input("Would you like to use the Caesar Cypher? type 'yes' or 'no':").lower() 
    match start:
        case "yes":
            print(logo)
            direction = input("Type 'encode' to encrypt, type 'decode' to decrypt:\n").lower()
            while direction not in ['encode', 'decode']:
                direction = input("Invalid input. Type 'encode' to encrypt, type 'decode' to decrypt:\n").lower()
            
            text = input("Type your message:\n").lower()
            shift = int(input("Type the shift number:\n"))
    
            def caesar(original_text, shift_amount, direction):  
                    encrypted_message = ""
                    if direction == "decode":
                        shift_amount *= -1

                    for i in original_text:
                        if i not in alphabet: 
                            encrypted_message += i 
                        else: 
                            new_position = (alphabet.index(i) + shift_amount) % 26
                            encrypted_message += alphabet[new_position] 

                    print(f"Here is the {direction}d message: {encrypted_message}")

            caesar(text, shift, direction) 

        case "no":
            print("buhbye") 
            should_continue = False



    
    