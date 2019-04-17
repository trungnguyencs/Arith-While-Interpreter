# Programming Assignment 2 - The WHILE language:

For the input AST of an arithmetic expression, implement an interpreter in the form of a function called "eval" which takes in the AST  and returns the evaluated result for that expression

## New feature: 

We have added the following operators in addition to the required ones:
- Div
- Mod
- GreaterEq
- SmallerEq

## Running the file

$node While.js

## Test cases

Test case Assign: 'x = 5;' evaluates to:  { x: 5 } 

Test case Seq: '(x = 5; y = 10); z = 15;' evaluates to:  { x: 5, y: 10, z: 15 } 

Test case Skip: '(x = 5; skip();); y = 10;' evaluates to:  { x: 5, y: 10 }

Test case If1: 'true ? z = 15 : y = 10;' evaluates to:  { z: 15 }

Test case If2: '(x > 6) ? z = 15 : x = 100;' evaluates to:  { x: 100 }

Test case While1: 'i = 0; while(i < 5){i++;}' evaluates to:  { i: 5 }

Test case While2: 'i = 0; j = 0; while(i < 10){i\%3 == 0) ? j++ : skip(); i++;}' evaluates to:  { i: 10, j: 4 }

## Languages

We used Java to implement HW1's interpreter and Javascript for HW2's

## Authors
Trung Nguyen (tnguy404) and Geetanjali Rakshit (grakshit) worked together for 7 hours
