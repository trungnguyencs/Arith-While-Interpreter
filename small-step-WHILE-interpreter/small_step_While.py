# For this homework assignment you will need to write a small step interpreter for the WHILE language 
# (Note: only statements need to be small step you can do AAexp and BAexp without printing out the state).  
# Previously, your interpreter was given a program and a state and returned a final state (it did all the steps at once).  
# For a small step interpreter you should take a single step, print out the remaining program and the state, 
# and then take another step until your remaining program is just a skip.

# For example, given a program "x := 3; if(x<5) x = x+1 else x = x-1" and an empty state your program should print:
# <x := 3; if(x<5) x = x+1 else x = x-1, {} >   ->
# <skip; if(x<5) x = x+1 else x = x-1, {x: 3} >   ->
# <if(x<5) x = x+1 else x = x-1, {x: 3} >   ->
# < x = x+1 , {x: 3} >    ->
# < skip , {x: 4} >
# As you can see at each step one statement has been executed and the resulting program and state are printed.

# NOTE: Extra credit for HW 4 if you have used 3 or more languages among homework 1,2, and 4.  Please note in your README what languages you have used between the 3 HWs

 # ----------------------------
 # Arithmetic
 # ----------------------------
class Aexp(object):
    def __init__(self):
        self.e = None
    def eval(self,s):
        pass 

class Int(Aexp):
    def __init__(self, n):
        self.e = n
    def eval(self,s):
        return self.e

class Var(Aexp):
    def __init__(self, n):
        self.str = n
    def eval(self,s):
        return s[self.str]

class Sum(Aexp):
    def __init__(self, e1, e2):
        self.e1 = e1
        self.e2 = e2
    def eval(self,s):
        return self.e1.eval() + self.e2.eval()

class Minus(Aexp):
    def __init__(self, e1, e2):
        self.e1 = e1
        self.e2 = e2
    def eval(self,s):
        return self.e1.eval() - self.e2.eval()

class Mul(Aexp):
    def __init__(self, e1, e2):
        self.e1 = e1
        self.e2 = e2
    def eval(self,s):
        return self.e1.eval() * self.e2.eval()

class Div(Aexp):
    def __init__(self, e1, e2):
        self.e1 = e1
        self.e2 = e2
    def eval(self,s):
        return self.e1.eval() / self.e2.eval()

class Mul(Aexp):
    def __init__(self, e1, e2):
        self.e1 = e1
        self.e2 = e2
    def eval(self,s):
        return self.e1.eval() % self.e2.eval()

 # ----------------------------
 # Boolean
 # ----------------------------

class Bexp(object):
    def __init__(self):
        self.b = None
    def eval(self,s):
        pass 

class Greater(Bexp):
    def __init__(self, e1, e2):
        self.e1 = e1
        self.e2 = e2
    def eval(self,s):
        return self.e1.eval(s) > self.e2.eval(s)

class GreaterOrEq(Bexp):
    def __init__(self, e1, e2):
        self.e1 = e1
        self.e2 = e2
    def eval(self,s):
        return self.e1.eval(s) >= self.e2.eval(s)

class Equals(Bexp):
    def __init__(self, e1, e2):
        self.e1 = e1
        self.e2 = e2
    def eval(self,s):
        return self.e1.eval(s) == self.e2.eval(s)

class LessOrEq(Bexp):
    def __init__(self, e1, e2):
        self.e1 = e1
        self.e2 = e2
    def eval(self,s):
        return self.e1.eval(s) <= self.e2.eval(s)

class LessThan(Bexp):
    def __init__(self, e1, e2):
        self.e1 = e1
        self.e2 = e2
    def eval(self,s):
        return self.e1.eval(s) < self.e2.eval(s)

# ----------------------------
# Command
# ----------------------------
class Command(object):
    def eval(self,s):
        pass 

class Skip(Command):
    def __init__(self):
        self.e = None
    def eval(self,s):
        return s

class Assign(Command):
    def __init__(self, Str, e):
        self.e = e
        self.Str = Str

    def eval(self, s):
        s[self.Str] = self.e.eval(s)
        return s

class Seq(Command):
    def __init__(self,c1,c2):
        self.c1 = c1
        self.c2 = c2
    def eval(self,s):
        s1 = self.c1.eval(s)
        s2 = self.c1.eval(s1)
        return s2

class If(Command):
    def __init__(self,b,c1,c2):
        self.b = b
        self.c1 = c1
        self.c2 = c2
    def eval(self,s):
        if b.eval(s):
            return c1.eval(s) 
        else:
            return c2.eval(s) 

class While(Command):
    def __init__(self,b,c):
        self.b = b
        self.c = c
    def eval(self,s):
        if b.eval(s):
            s1=c.eval(s)
            s2 = While(b,c).eval(s1)
            return s2
        else: 
            return s            

# test cases

c1 = Assign('i',Int(0))
c2 = Assign('x', Int(0))
ifC1_d1 = Assign('x', Minus(Div(Mul(Sum(Var('x'), Var('i')), Int(4)), Int(2)), Int(-2)))
ifC1_d2 = Assign('x', Div(Mul(Sum(Var('x'), Var('i')), Int(4)), Int(2)))
ifC1 = If(Equals(Mul(Var('i'), Int(2)), Int(0)), ifC1_d1, ifC1_d2)
ifC2_d1 = Assign('y', Int(3))
ifC2_d2 = Skip()
ifC2 = If(Greater(Int(3), Int(1)), ifC2_d1, ifC2_d2)
whileC = Seq(Seq(ifC1, Assign('i', Sum(Var('i'), Int(1)))), ifC2)
c3 = While(LessThan(Var('i'), Int(5)), whileC)
testCase1 = Seq(Seq(Seq(c1, Skip()),c2), c3)
s = dict()
c3 = While(LessThan(Var('i'), Int(5)), whileC)
tc0 =  Seq(Seq(Seq(c1, Skip()),c2), c3)
print(tc0.eval(s))
print(type(tc0).__name__!="Seq")
print(type('Skip'))