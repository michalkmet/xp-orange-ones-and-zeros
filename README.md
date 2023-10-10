# Awesome repo

Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 0, 1, 1] ==> 3
Testing: [0, 1, 0, 0] ==> 4
Testing: [0, 1, 0, 1] ==> 5
Testing: [0, 1, 1, 0] ==> 6
Testing: [0, 1, 1, 1] ==> 7
Testing: [1, 0, 0, 0] ==> 8
Testing: [1, 0, 0, 1] ==> 9
Testing: [1, 0, 1, 0] ==> 10
Testing: [1, 0, 1, 1] ==> 11
Testing: [1, 1, 0, 0] ==> 12
Testing: [1, 1, 0, 1] ==> 13
Testing: [1, 1, 1, 0] ==> 14
Testing: [1, 1, 1, 1] ==> 15
However, the arrays can have varying lengths, not just limited to 4.

## Legend
- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Backlog

User Story 1: array with digits -> return number < 10
As a user, I want to pass in array with 4 digits, so that I can see resultant decimal number

- ✅ DONE UAT1.1: When I pass [0, 0, 0, 1], Then it should return 1
- ✅ DONE UAT1.2: When I pass [0, 0, 1, 0], Then it should return 2
- ✅ DONE UAT1.3: When I pass [0, 0, 1, 1], Then it should return 3
- ✅ DONE UAT1.4: When I pass [0, 1, 0, 0], Then it should return 4
- ✅ DONE UAT1.5: When I pass [0, 1, 0, 1], Then it should return 5
- ✅ DONE UAT1.6: When I pass [0, 1, 1, 0], Then it should return 6
- ✅ DONE UAT1.7: When I pass [0, 1, 1, 1], Then it should return 7
- ✅ DONE UAT1.8: When I pass [1, 0, 0, 0], Then it should return 8
- ✅ DONE UAT1.9: When I pass [1, 0, 0, 1], Then it should return 9

User Story 2: array with digits -> return number > 10 and number < 16 
As a user, I want to pass in array with 4 digits, so that I can see resultant decimal number
- ⚠ TODO UAT2.1: When I pass [1, 0, 1, 0], Then it should return 10
- ⚠ TODO UAT2.2: When I pass [1, 0, 1, 1], Then it should return 11
- ⚠ TODO UAT2.3: When I pass [1, 1, 0, 0], Then it should return 12
- ⚠ TODO UAT2.4: When I pass [1, 1, 0, 1], Then it should return 13
- ⚠ TODO UAT2.5: When I pass [1, 1, 1, 0], Then it should return 14
- ⚠ TODO UAT2.6: When I pass [1, 1, 1, 1], Then it should return 15