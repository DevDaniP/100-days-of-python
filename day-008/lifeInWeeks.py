def life_in_weeks():
    life = 90 
    yourage = int(input("what is your age?\n"))
    weeksLeft = (life - yourage) * 52  
    print(f"You have {weeksLeft} weeks left.")

life_in_weeks() 