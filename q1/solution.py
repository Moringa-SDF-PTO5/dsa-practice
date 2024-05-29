# solution for challenge
def solution(S):
    # store character and its index
    char_store = {}

    # loop through each string
    for i, string in enumerate(S):
        # loop through each character in the string
        for j, char in enumerate(string):
            # create association between character and position
            assoc = (char, j)

            if assoc in char_store:
                # if association exists then we have found a match
                return [char_store[assoc], i, j]
            else:
                # store association
                char_store[assoc] = i

    return []

print(solution(["abc", "bca", "dbe"]))
print(solution(["zzzz", "ferz", "zdsr", "fgtd"]))
print(solution(["gr", "sd", "rg"]))
print(solution(["bdafg", "ceagi"]))
print(solution(["abc", "bca", "dbefasdasda", "xabt", "zcb", "dbi"]))