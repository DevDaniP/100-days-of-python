import random 
# print welcome and inputs 
print ("Welcome to the PyPassword Generator")
numLetters = int (input("How many letters would you like in your password?\n"))
numSymbols = int (input("How many symbols would you like? p to 10\n"))
numNumbers = int (input("How many numbers would you like?\n"))

# create the lists 
Letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
Symbols = ['!','@','#','$','%','^','&','&','*',]
Numbers = ['1','2','3','4','5','6','7','8','9']

# need an array to save the output into 
# print array as the output 
password = []
for i in range(numLetters):
    password.append(random.choice(Letters))
for i in range(numSymbols):
    password.append(random.choice(Symbols))
for i in range(numNumbers):
    password.append(random.choice(Numbers))

random.shuffle(password)
print(''.join(password))

