from art import logo 
def add(n1, n2):
    return n1 + n2

def subtract(n1, n2):
    return n1 - n2 

def divide(n1, n2):
    return n1 / n2 

def multiply(n1, n2):
    return n1 * n2 

arithOpp = {
    '+': add,
    '-': subtract,
    '/': divide,
    '*': multiply 
}

print(logo)
while True:
    num1 = float(input("Enter the first number you want to calculate:\n"))
    
    while True:
        opp = input("Enter the Operator you wish to use (+, -, /, *):\n")
        num2 = float(input("Enter the second number you wish to calculate:\n"))
        num1 = arithOpp[opp](num1, num2)
        print(f"Result: {num1}")
        
        choice = input("'yes' to continue, 'no' to restart, 'quit' to exit:\n")
        if choice == 'no':
            break
        elif choice == 'quit':
            exit()