# https://canvas.ucsc.edu/courses/22038/assignments/71276
# https://classes.soe.ucsc.edu/cmps203/Spring19/02-arith-bigstep.pdf
# Programming Assignment 1 - The ARITH language:

# In Haskell (or the language of your choice), write an interpreter for the ARITH language 
# (slides on the ARITH language are available on the course webpage -> resources -> slides).  
# Your program should consist of:
# - A data structure for the abstract syntax tree (AST) of ARITH
# - An interpreter for this AST.  
# The interpreter should be in the form of a function called "eval" which takes in an AST and returns the result.
# - Test cases which show that your AST and interpreter work.  These test cases should show good code coverage (i.e. test all cases)
# - Finally, add a feature to your language.  This addition will involve modifying the AST and interpreter to support this new feature.
# The ARITH slides should provide you a good starting point for bullet points 1 and 2.  
# Good test cases should make you (and me, the grader) feel confident that your program works. Good luck!  

class Exp(object):
    def __init__(self):
        pass

    def eval(self):
        pass

class IntExp(Exp):
    def __init__(self, n):
        self.e = n

    def eval(self):
        return self.e

class SumExp(Exp):
    def __init__(self, e1, e2):
        self.e1 = e1
        self.e2 = e2

    def eval(self):
        return self.e1.eval() + self.e2.eval()

class MulExp(Exp):
    def __init__(self, e1, e2):
        self.e1 = e1
        self.e2 = e2

    def eval(self):
        return self.e1.eval() * self.e2.eval()

class ModExp(Exp):
    def __init__(self, e1, e2):
        self.e1 = e1
        self.e2 = e2

    def eval(self):
        return self.e1.eval() % self.e2.eval()

testcase1 = MulExp(SumExp(IntExp(3), IntExp(5)), IntExp(2))
print(testcase1.eval() == 16)

