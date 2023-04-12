# def binary_search(arr, target):
#     left = 0
#     right = len(arr) - 1

#     while left <= right:
#         middle = (left + right) // 2

#         if arr[middle] == target:
#             return middle
#         elif arr[middle] > target:
#             right = middle - 1
#         else:
#             left = middle + 1
#     return -1

# arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
# print('Your search value is =',binary_search(arr, 12))

# def factorial(n):
#     result = 1
#     if n < 0:
#         print('Error')
#     elif n == 0:
#         print(1)
#     else:
#         for i in range(1, n+1):
#             result *= i
#         return result

# print(factorial(10))

def factorial(n):
    print(n)
    result = 0
    if n == 0:
        print(1)
    elif n < 0:
        print('Error')
    else:
        result = n * factorial(n-1)
        return result

print(factorial(10))