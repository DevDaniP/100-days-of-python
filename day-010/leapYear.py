def is_leap_year():
    year = int(input("enter a year:\n"))
    if year % 400 == 0 or (year % 4 == 0 and year % 100 != 0):
        return True
    else:
        return False
result = is_leap_year()
print(result)

is_leap_year()
