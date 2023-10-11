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
- ✅ DONE UAT1.4: When I pass [0, 1, 0, 0], Then it should return 4
- ✅ DONE UAT1.5: When I pass [0, 1, 0, 1], Then it should return 5
- ✅ DONE UAT1.6: When I pass [0, 1, 1, 0], Then it should return 6
- ✅ DONE UAT1.7: When I pass [0, 1, 1, 1], Then it should return 7

## Pomodoro 3:
- ✅ DONE UAT1.8: When I pass [1, 0, 0, 0], Then it should return 8
- ✅ DONE UAT1.9: When I pass [1, 0, 0, 1], Then it should return 9

User Story 2: array with digits -> return number > 10 and number < 16 
As a user, I want to pass in array with 4 digits, so that I can see resultant decimal number
- ✅ DONE UAT2.1: When I pass [1, 0, 1, 0], Then it should return 10
- ✅ DONE UAT2.2: When I pass [1, 0, 1, 1], Then it should return 11
- ✅ DONE UAT2.3: When I pass [1, 1, 0, 0], Then it should return 12
- ✅ DONE UAT2.4: When I pass [1, 1, 0, 1], Then it should return 13
- ✅ DONE UAT2.5: When I pass [1, 1, 1, 0], Then it should return 14
- ✅ DONE UAT2.6: When I pass [1, 1, 1, 1], Then it should return 15

## Pomodoro 4:
- ✅ DONE plan pomodoro 4
- ✅ DONE create user story 3

User Story 3: array with digits -> return number > 15
As a user, I want to pass in array with more than 4 digits, so that I can see resultant decimal number

- ✅ DONE UAT3.1: When I pass [1, 0, 0, 0, 1], Then it should return 17
- ⚠ TODO UAT3.2: When I pass [1, 0, 0, 0, 0, 0], Then it should return 32
- ⚠ TODO UAT3.3: When I pass [1, 0, 0, 0, 0, 0, 1], Then it should return 65
- ⚠ TODO UAT3.4: When I pass [1, 0, 0, 0, 0, 0, 0, 0], Then it should return 128