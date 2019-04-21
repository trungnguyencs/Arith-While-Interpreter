# Programming Assignment 4 - The WHILE language:

Implemetation of a small step interpreter for the WHILE language (only statements are small step, for AExp and BExp it does not print out the state).  For a small step interpreter it takes a single step, prints out the remaining program and the state, and then takes another step until the remaining program is just a skip.

For example, given a program "x := 3; if(x<5) x = x+1 else x = x-1" and an empty state the program prints:

<x := 3; if(x<5) x = x+1 else x = x-1, {} >   ->

<skip; if(x<5) x = x+1 else x = x-1, {x: 3} >   ->

<if(x<5) x = x+1 else x = x-1, {x: 3} >   ->

< x = x+1 , {x: 3} >    ->

< skip , {x: 4} >

As you can see at each step one statement has been executed and the resulting program and state are printed.

## Running the file

$python3 small_step_While.py

## Test cases

Test case Or: '(5 < 6) OR !(5 < 6)' evaluates to:  true

Test case And: '(((6-1) >= 6) AND (5 <= (5*2))) AND False' evaluates to:  false

Test case Assign: 'x = 5;' evaluates to:  { x: 5 } 

Test case Seq: '(x = 5; y = 10); z = 15;' evaluates to:  { x: 5, y: 10, z: 15 } 

Test case Skip: '(x = 5; skip();); y = 10;' evaluates to:  { x: 5, y: 10 }

Test case If1: 'true ? z = 15 : y = 10;' evaluates to:  { z: 15 }

Test case If2: '(x > 6) ? z = 15 : x = 100;' evaluates to:  { x: 100 }

Test case While1: 'i = 0; while(i < 5){i = i+1;}' evaluates to:  { i: 5 }

Test case While2: 'i = 0; j = 0; while(i < 10){i\%3 == 0) ? j = j+1 : skip(); i = i+1;}' evaluates to:  { i: 10, j: 4 }

## Languages

We used Java to implement HW1's interpreter, Javascript for HW2's, and Python3 for HW3's

## Authors
Trung Nguyen (tnguy404) and Geetanjali Rakshit (grakshit) worked together for ? hours
