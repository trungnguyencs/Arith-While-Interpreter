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
    def print_s(self):
        pass   

class Int(Aexp):
    def __init__(self, n):
        self.e = n
    def eval(self,s):
        return self.e
    def print_s(self):
        return str(self.n) + ' '

class Var(Aexp):
    def __init__(self, v):
        self.str = v
    def eval(self,s):
        return s[self.str]
    def print_s(self):
        return self.v + ' '

class Sum(Aexp):
    def __init__(self, e1, e2):
        self.e1 = e1
        self.e2 = e2
    def eval(self,s):
        return self.e1.eval(s) + self.e2.eval(s)
    def print_s(self):
        return self.e1.print_s() + '+ ' + self.e2.print_s()      

class Minus(Aexp):
    def __init__(self, e1, e2):
        self.e1 = e1
        self.e2 = e2
    def eval(self,s):
        return self.e1.eval(s) - self.e2.eval(s)
    def print_s(self):
        return self.e1.print_s() + '- ' + self.e2.print_s()  

class Mul(Aexp):
    def __init__(self, e1, e2):
        self.e1 = e1
        self.e2 = e2
    def eval(self,s):
        return self.e1.eval(s) * self.e2.eval(s)
    def print_s(self):
        return self.e1.print_s() + '* ' + self.e2.print_s()  

class Div(Aexp):
    def __init__(self, e1, e2):
        self.e1 = e1
        self.e2 = e2
    def eval(self,s):
        return self.e1.eval(s) / self.e2.eval(s)
    def print_s(self):
        return self.e1.print_s() + '/ ' + self.e2.print_s()  

class Mod(Aexp):
    def __init__(self, e1, e2):
        self.e1 = e1
        self.e2 = e2
    def eval(self,s):
        return self.e1.eval(s) % self.e2.eval(s)
    def print_s(self):
        return self.e1.print_s() + '% ' + self.e2.print_s() 

 # ----------------------------
 # Boolean
 # ----------------------------

class Bexp(object):
    def __init__(self):
        self.b = None
    def eval(self,s):
        pass 
    def print_s(self):
        pass     

class Bool(object):
    def __init__(self, b):
        self.b = b
    def eval(self,s):
        return self.b
    def print_s(self):
        return str(self.b) + ' '

class Equals(Bexp):
    def __init__(self, e1, e2):
        self.e1 = e1
        self.e2 = e2
    def eval(self,s):
        return self.e1.eval(s) == self.e2.eval(s)
    def print_s(self):
        return self.e1.print_s() + '== ' + self.e2.print_s() 

class GreaterThan(Bexp):
    def __init__(self, e1, e2):
        self.e1 = e1
        self.e2 = e2
    def eval(self,s):
        return self.e1.eval(s) > self.e2.eval(s)
    def print_s(self):
        return self.e1.print_s() + '> ' + self.e2.print_s() 

class LessThan(Bexp):
    def __init__(self, e1, e2):
        self.e1 = e1
        self.e2 = e2
    def eval(self,s):
        return self.e1.eval(s) < self.e2.eval(s)
    def print_s(self):
        return self.e1.print_s() + '< ' + self.e2.print_s() 

class GreaterOrEq(Bexp):
    def __init__(self, e1, e2):
        self.e1 = e1
        self.e2 = e2
    def eval(self,s):
        return self.e1.eval(s) >= self.e2.eval(s)
    def print_s(self):
        return self.e1.print_s() + '>= ' + self.e2.print_s() 

class LessOrEq(Bexp):
    def __init__(self, e1, e2):
        self.e1 = e1
        self.e2 = e2
    def eval(self,s):
        return self.e1.eval(s) <= self.e2.eval(s)
    def print_s(self):
        return self.e1.print_s() + '<= ' + self.e2.print_s() 

class Not(Bexp):
    def __init__(self, e):
        self.e = e
    def eval(self,s):
        return not self.e.eval(s)
    def print_s(self):
        return '!' + self.e.print_s()

class And(Bexp):
    def __init__(self, e1, e2):
        self.e1 = e1
        self.e2 = e2
    def eval(self,s):
        return self.e1.eval(s) and self.e2.eval(s)
    def print_s(self):
        return self.e1.print_s() + '&& ' + self.e2.print_s() 

class Or(Bexp):
    def __init__(self, e1, e2):
        self.e1 = e1
        self.e2 = e2
    def eval(self,s):
        return self.e1.eval(s) or self.e2.eval(s)
    def print_s(self):
        return self.e1.print_s() + '|| ' + self.e2.print_s() 

# ----------------------------
# Command
# ----------------------------

class Command(object):
    def eval(self,s):
        pass 
    def print_s(self):
        pass 

class Skip(Command):
    def __init__(self):
        self.e = None
    def eval(self,s):
        return s
    def print_s(self):
        return 'Skip; ' 

class Assign(Command):
    def __init__(self, Str, e):
        self.e = e
        self.Str = Str
    def eval(self, s):
        s[self.Str] = self.e.eval(s)
        return s
    def print_s(self):
        return self.Str + ' :=' + self.e.print_s() + '; '

class Seq(Command):
    def __init__(self,c1,c2):
        self.c1 = c1
        self.c2 = c2
    def eval(self,s):
        s1 = self.c1.eval(s)
        s2 = self.c2.eval(s1)
        return s2
    def print_s(self):
        return self.c1.print_s() + self.c2.print_s()

class If(Command):
    def __init__(self,b,c1,c2):
        self.b = b
        self.c1 = c1
        self.c2 = c2
    def eval(self,s):
        if self.b.eval(s):
            return self.c1.eval(s) 
        else:
            return self.c2.eval(s) 
    def print_s(self):
        return 'if( ' + self.b.print_s() + '){ ' + self.c1.print_s()\
                + '} else{ ' + self.c2.print_s() + '} '

class While(Command):
    def __init__(self,b,c):
        self.b = b
        self.c = c
    def eval(self,s):
        if self.b.eval(s):
            s1= self.c.eval(s)
            s2 = While(self.b, self.c).eval(s1)
            return s2
        else: 
            return s  
    def print_s(self):
        return 'while( ' + self.b.print_s() + '){ ' + self.c.print_s() + '} '          

# ----------------------------
# Test cases
# ----------------------------
var_x = Var('x');
assign_x = Assign('x', Int(5));
assign_y = Assign('y', Int(10));
assign_z = Assign('z', Int(15));
assign_x1 = Assign('x', Int(100));

#Test case for Or():
tcOr = Or(LessThan(Int(5), Int(6)), Not(LessThan(Int(5), Int(6))));
# Test case for And():
tcAnd = And(And(GreaterOrEq(Minus(Int(6), Int(1)), Int(6)), LessOrEq(Int(5), Mul(Int(5), Int(2)))), Bool(False))
# Test case for Assign():
tcAsgn = assign_x
# Test case for Seq():
tcSeq = Seq(Seq(assign_x, assign_y), assign_z)
# Test case for Skip():
tcSkip = Seq(Seq(assign_x, Skip()), assign_y)
# Test case 1 for If():
tcIf1 = If(Bool(True), assign_z, assign_y)
# Test case 2 for If():
If2 = If(GreaterThan(var_x, Int(6)), assign_z, assign_x1)
tcIf2 = Seq(assign_x, If2)
# Test case 1 for While():
While1_cond = LessThan(Var('i'), Int(5)); 
While1_exe = Assign('i', Sum(Var('i'), Int(1)));
While1 = While(While1_cond, While1_exe);
tcWhile1 = Seq(Assign('i', Int(0)), While1);
# Test case 2 for While():
While2_cond = LessThan(Var('i'), Int(10)); 
If_cond = Equals(Mod(Var('i'), Int(3)), Int(0));
If_exe = Assign('j', Sum(Var('j'), Int(1)));
While2_exe1 = If(If_cond, If_exe, Skip());
While2_exe2 = Assign('i', Sum(Var('i'), Int(1)));
While2_exe = Seq(While2_exe1, While2_exe2);
While2 = While(While2_cond, While2_exe);
tcWhile2 = Seq(Seq(Assign('i', Int(0)), Assign('j', Int(0))), While2);

stmtOr = "(5 < 6) OR !(5 < 6)"
stmtAnd = "(((6-1) >= 6) AND (5 <= (5*2))) AND False"
stmtAsgn = "x = 5;"
stmtSeq = "(x = 5; y = 10); z = 15;"
stmtSkip = "(x = 5; skip();); y = 10;"
stmtIf1 = "true ? z = 15 : y = 10;"
stmtIf2 = "(x > 6) ? z = 15 : x = 100;"
stmtWhile1 = "i = 0; while(i < 5){i=i+1;}"
stmtWhile2 = "i = 0; j = 0; while(i < 10){i%3 == 0) ? j=j+1 : skip(); i=i+1;}"

print('----------------------------------------------------------------------------')
s = {}; print("Test case Or: '" + stmtOr + "' evaluates to: ", tcOr.eval(s))
s = {}; print("Test case And: '" + stmtAnd + "' evaluates to: ", tcAnd.eval(s))
s = {}; print("Test case Assign: '" + stmtAsgn + "' evaluates to: ", tcAsgn.eval(s))
s = {}; print("Test case Seq: '" + stmtSeq + "' evaluates to: ", tcSeq.eval(s))
s = {}; print("Test case Skip: '" + stmtSkip + "' evaluates to: ", tcSkip.eval(s))
s = {}; print("Test case If1: '" + stmtIf1 + "' evaluates to: ", tcIf1.eval(s))
s = {}; print("Test case If2: '" + stmtIf2 + "' evaluates to: ", tcIf2.eval(s))
s = {}; print("Test case While1: '" + stmtWhile1 + "' evaluates to: ", tcWhile1.eval(s))
s = {}; print("Test case While2: '" + stmtWhile2 + "' evaluates to: ", tcWhile2.eval(s))
print('----------------------------------------------------------------------------')