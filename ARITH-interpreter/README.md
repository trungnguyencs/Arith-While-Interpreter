# Programming Assignment 1 - The ARITH language:

In Haskell (or the language of your choice), write an interpreter for the ARITH language (slides on the ARITH language are available on the course webpage -> resources -> slides ).  Your program should consist of:

A data structure for the abstract syntax tree (AST) of ARITH
An interpreter for this AST.  The interpreter should be in the form of a function called "eval" which takes in an AST and returns the result.
Test cases which show that your AST and interpreter work.  These test cases should show good code coverage (i.e. test all cases)
Finally, add a feature to your language.  This addition will involve modifying the AST and interpreter to support this new feature.
The ARITH slides should provide you a good starting point for bullet points 1 and 2.  Good test cases should make you (and me, the grader) feel confident that your program works.  Good luck!  

## New feature added: modulo operator


## Running the file

$javac Arith.java
$java Arith

## Test cases

expr = (5+3) * 2 == 16
expr = ((3+5) * (2+8)) % (2*5) == 0

## Authors
Trung Nguyen (tnguy404) and Geetanjali Rakshit () worked together for 2 hours