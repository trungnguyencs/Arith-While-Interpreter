//  https://canvas.ucsc.edu/courses/22038/assignments/71276
//  https://classes.soe.ucsc.edu/cmps203/Spring19/02-arith-bigstep.pdf
//  Programming Assignment 1 - The ARITH language:

//  In Haskell (or the language of your choice), write an interpreter for the ARITH language 
//  (slides on the ARITH language are available on the course webpage -> resources -> slides).  
//  Your program should consist of:
//  - A data structure for the abstract syntax tree (AST) of ARITH
//  - An interpreter for this AST.  
//  The interpreter should be in the form of a function called "eval" which takes in an AST and returns the result.
//  - Test cases which show that your AST and interpreter work.  These test cases should show good code coverage (i.e. test all cases)
//  - Finally, add a feature to your language.  This addition will involve modifying the AST and interpreter to support this new feature.
//  The ARITH slides should provide you a good starting point for bullet points 1 and 2.  
//  Good test cases should make you (and me, the grader) feel confident that your program works. Good luck!  

abstract class Exp {
    abstract int eval();
} 

class IntExp extends Exp {
    int n;

    public IntExp(int n) {
        this.n = n;
    }

    @Override
    public int eval() {
        return this.n;
    }
}

class SumExp extends Exp {
    Exp e1;
    Exp e2;

    public SumExp(Exp e1, Exp e2) {
        this.e1 = e1;
        this.e2 = e2;
    }

    @Override
    public int eval() {
        return this.e1.eval() + this.e2.eval();
    }
}

class MulExp extends Exp {
    Exp e1;
    Exp e2;

    public MulExp(Exp e1, Exp e2) {
        this.e1 = e1;
        this.e2 = e2;
    }

    @Override
    public int eval() {
        return this.e1.eval() * this.e2.eval();
    }
}

class ModExp extends Exp {
    Exp e1;
    Exp e2;

    public ModExp(Exp e1, Exp e2) {
        this.e1 = e1;
        this.e2 = e2;
    }

    @Override
    public int eval() {
        return this.e1.eval() % this.e2.eval();
    }
}

class Arith {
    public static void main(String[] args) {
        //  expr = (5+3) * 2 == 16
        Exp testcase1 = new MulExp(new SumExp(new IntExp(5), new IntExp(3)), new IntExp(2));
        System.out.println(testcase1.eval() == 16);    

        //  expr = ((3+5) * (2+8)) % (2*5) == 0
        Exp testcase2 = new ModExp(new MulExp(new SumExp(new IntExp(3), new IntExp(5)), new SumExp(new IntExp(2), new IntExp(8))), new MulExp(new IntExp(2), new IntExp(5)));
        System.out.println(testcase2.eval() == 0);
    }
}