# getting variables 
print("Welcome to the tip calculator!")
TotalBill = float(input("What was the total bill?\n$"))
Tip = float(input("How much tip would you like to give? 10, 12, or 15?\n"))
people = int(input("How many people will be splitting the bill?\n"))

# calculations 
TipPerPerson = (TotalBill * (Tip / 100) ) / people 
AmountPer = (TotalBill / people) + TipPerPerson 

# printing the output 
print(f"Each person should pay: ${AmountPer: .2f}")