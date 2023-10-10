# Notes

Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4.
## Legend
- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Plans

## Pomodoro 1:
- ✅ DONE Plan pomodoro 1 
- ✅ DONE Initial project refactor
- ✅ DONE add project description
- ✅ DONE add examples and create user Stories

## Pomodoro 2:
- ✅ DONE Plan pomodoro 2
User Story 1: array with digits -> return number < 10
As a user, I want to pass in array with 4 digits, so that I can see resultant decimal number

- ✅ DONE UAT1.1: When I pass [0, 0, 0, 1], Then it should return 1
- ✅ DONE UAT1.2: When I pass [0, 0, 1, 0], Then it should return 2
- ✅ DONE UAT1.3: When I pass [0, 0, 1, 1], Then it should return 3
- ⚠ TODO UAT1.4: When I pass [0, 1, 0, 0], Then it should return 4
- ⚠ TODO UAT1.5: When I pass [0, 1, 0, 1], Then it should return 5
- ⚠ TODO UAT1.6: When I pass [0, 1, 1, 0], Then it should return 6
- ⚠ TODO UAT1.7: When I pass [0, 1, 1, 1], Then it should return 7
- ⚠ TODO UAT1.8: When I pass [1, 0, 0, 0], Then it should return 8
- ⚠ TODO UAT1.9: When I pass [1, 0, 0, 1], Then it should return 9