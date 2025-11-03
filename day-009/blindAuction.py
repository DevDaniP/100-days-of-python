
should_continue = True
while should_continue:
    start = input("Would you like to use the blind Auction? type 'yes' or 'no':").lower() 
    match start:
        case "yes":
            num_people = int(input("How many people need to bid?\n"))
            auctioners = {} 
            for i in range(num_people):
                name = input("What is your name:\n")
                bid = float(input("How much is your bid for?\n")) 
                print("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n")
                auctioners[name] = bid  

            highest_bidder = max(auctioners, key=auctioners.get)
            print(f"The winner is {highest_bidder} with a bid of ${auctioners[highest_bidder]}")

        case "no":
            print("buhbye")
            should_continue = False