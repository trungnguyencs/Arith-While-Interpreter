# Arith-While-Interpreter
An implementation of interpreters for 1) arithmetic expressions and 2) expression in the WHILE language

## 1. Arithmetic expressions
For the input AST of an arithmetic expression, implement an interpreter in the form of a function called "eval" which takes in the AST and returns the evaluated result for that expression

### Running the file

`$javac Arith.java` <br />
`$java Arith`

### Test cases

expr = (5+3) * 2 == 16 <br />
expr = ((3+5) * (2+8)) % (2*5) == 0

# 2. The WHILE language
For the input AST of an expression in the WHILE language, implement an interpreter in the form of a function called "eval" which takes in the AST and returns the evaluated result for that expression

### Running the file
`$node While.js`

### Test cases
Test case Or: '(5 < 6) OR !(5 < 6)' evaluates to: true

Test case And: '(((6-1) >= 6) AND (5 <= (5*2))) AND False' evaluates to: false

Test case Assign: 'x = 5;' evaluates to: { x: 5 }

Test case Seq: '(x = 5; y = 10); z = 15;' evaluates to: { x: 5, y: 10, z: 15 }

Test case Skip: '(x = 5; skip();); y = 10;' evaluates to: { x: 5, y: 10 }

Test case If1: 'true ? z = 15 : y = 10;' evaluates to: { z: 15 }

Test case If2: '(x > 6) ? z = 15 : x = 100;' evaluates to: { x: 100 }

Test case While1: 'i = 0; while(i < 5){i = i+1;}' evaluates to: { i: 5 }

Test case While2: 'i = 0; j = 0; while(i < 10){i%3 == 0) ? j = j+1 : skip(); i = i+1;}' evaluates to: { i: 10, j: 4 }
