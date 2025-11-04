def add(n1, n2):
    return n1 + n2

def subtract(n1,n2):
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
start = True 
while start == True:

    num1 = float(input("please give the first number you'd like to calculate:\n"))
    opp = input("please type an operator. either a '+', '-', '/', '*'\n")
    num2 = float(input("please give the second number you'd like to calculate:\n"))

    answer = arithOpp[opp](num1,num2)
    print(f"{num1} {opp}{num2} = {answer}")

    reuse = input("Do you want to use the previous result for further calculation? type 'yes' or 'no'")
    if reuse == 'yes':
        num1 = answer 
"""
Program asks the user to type the first number.
Program asks the user to type a mathematical operator (a choice of "+", "-", "*" or "/")
Program asks the user to type the second number.
Program works out the result based on the chosen mathematical operator.
Program asks if the user wants to continue working with the previous result.
If yes, program loops to use the previous result as the first number and then repeats the calculation process.
If no, program asks the user for the fist number again and wipes all memory of previous calculations.
Add the logo from art.py
"""




