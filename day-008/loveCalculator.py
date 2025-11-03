def calculate_love_score():
    lover1 = input("Enter the name of the first lover:\n").upper()
    lover2 = input("Enter the name of the second lover:\n").upper()
    score1 = 0 
    score2 = 0

    lovers = lover1 + lover2
    for i in lovers:
        for x in "TRUE":
            if i == x:
                score1 += 1 

    for j in lovers:
        for d in "LOVE":
            if j == d:
                score2 += 1 

    print (f"Love Score = {score1}{score2}")

calculate_love_score() 