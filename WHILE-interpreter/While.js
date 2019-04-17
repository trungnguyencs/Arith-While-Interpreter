// Thanh Trung Nguyen (tnguy404) - Geetanjali Rakshit (grakshit)
// HW1 language: Java, HW2 language: Javascript
//
// Programming Assignment 2 - The WHILE language:
// In Haskell (or the language of your choice), write an interpreter for the WHILE language 
// (slides on the WHILE language are available on the course webpage -> resources -> slides ).  
// Your program should consist of:
// - A data structure for the abstract syntax tree (AST) of WHILE. You can decide on an appropriate representation (e.g. strings) for variables.
// - An interpreter for this AST. You should choose a suitable representation for stores. 
//   Your interpreter should include functions to evaluate arithmetic expressions, boolean expressions, and commands.
// - Test cases which show that your AST and interpreter work.  These test cases should show good code coverage (i.e. test all cases)
// - Finally, add a feature to your language.  This addition will involve modifying the AST and interpreter to support this new feature.
// Good test cases should make you (and me, the grader) feel confident that your program works.  Good luck!  
// Note: Extra credit for HW 2 if you have used 2 or more languages among homework 1 and 2.  
// Please, note in your README what language you used for each homework.

// ----------------------------
// Arithmetic
// ----------------------------
function Aexp(){
    this.eval = function(s){
    }
}
function Int(n){
    this.n = n;
    this.eval = function(s){
        return this.n;
    }
}
function Var(v){
    this.v = v;
    this.eval = function(s){
        return s[this.v];
    }
}
function Sum(e1, e2){
    this.e1 = e1;
    this.e2 = e2;
    this.eval = function(s){
        return this.e1.eval(s) + this.e2.eval(s);
    }
}
function Minus(e1, e2){
    this.e1 = e1;
    this.e2 = e2;
    this.eval = function(s){
        return this.e1.eval(s) - this.e2.eval(s);
    }
}
function Mul(e1, e2){
    this.e1 = e1;
    this.e2 = e2;
    this.eval = function(s){
        return this.e1.eval(s) * this.e2.eval(s);
    }
}
function Div(e1, e2){
    this.e1 = e1;
    this.e2 = e2;
    this.eval = function(s){
        return this.e1.eval(s) / this.e2.eval(s);
    }
}
function Mod(e1, e2){
    this.e1 = e1;
    this.e2 = e2;
    this.eval = function(s){
        return this.e1.eval(s) % this.e2.eval(s);
    }
}
Int.prototype = new Aexp();
Sum.prototype = new Aexp();
Minus.prototype = new Aexp();
Mul.prototype = new Aexp();
Div.prototype = new Aexp();
Mod.prototype = new Aexp();

// ----------------------------
// Boolean
// ----------------------------
function Bexp() {
    this.eval = function(s){
    }
}
function Bool(b) {
    this.b = b;
    this.eval = function(s){
        return this.b;
    }
}
function Not(b) {
    this.b = b;
    this.eval = function(s){
        return ! this.b.eval(s);
    }
}
function Equal(b1, b2){
    this.b1 = b1;
    this.b2 = b2;
    this.eval = function(s){
        return this.b1.eval(s) == this.b2.eval(s);
    }
}
function Smaller(b1, b2){
    this.b1 = b1;
    this.b2 = b2;
    this.eval = function(s){
        return this.b1.eval(s) < this.b2.eval(s);
    }
}
function Greater(b1, b2){
    this.b1 = b1;
    this.b2 = b2;
    this.eval = function(s){
        return this.b1.eval(s) > this.b2.eval(s);
    }
}
function SmallerEq(b1, b2){
    this.b1 = b1;
    this.b2 = b2;
    this.eval = function(s){
        return this.b1.eval(s) <= this.b2.eval(s);
    }
}
function GreaterEq(b1, b2){
    this.b1 = b1;
    this.b2 = b2;
    this.eval = function(s){
        return this.b1.eval(s) >= this.b2.eval(s);
    }
}
function And(b1, b2) {
    this.b1 = b1;
    this.b2 = b2;
    this.eval = function(s){
        return this.b1.eval(s) && this.b2.eval(s);
    }
}
function Or(b1, b2) {
    this.b1 = b1;
    this.b2 = b2;
    this.eval = function(s){
        return this.b1.eval(s) || this.b2.eval(s);
    }
}
Bool.prototype = new Bexp();
Not.prototype = new Bexp();
Equal.prototype = new Bexp();
Smaller.prototype = new Bexp();
Greater.prototype = new Bexp();
SmallerEq.prototype = new Bexp();
GreaterEq.prototype = new Bexp();
And.prototype = new Bexp();
Or.prototype = new Bexp();

// ----------------------------
// Command
// ----------------------------
function Comm(){
    this.eval = function(s){
    }
}
function Skip(){
    this.eval = function(s){
        return s;
    }
}
function Seq(c1, c2){
	this.c1 = c1;
	this.c2 = c2;
	this.eval = function(s){
            s1 = this.c1.eval(s);
            s2 = this.c2.eval(s1);
			return s2;
	}
}
function Asgn(varName, e){
	this.varName = varName;
	this.e = e;
	this.eval = function(s){
		s[this.varName] = this.e.eval(s);
		return s;
	}
}
function If(b, c1, c2){
	this.b = b;
	this.c1 = c1;
	this.c2 = c2;
	this.eval = function(s){
	if(this.b.eval(s))
		return c1.eval(s);
	else
		return c2.eval(s);
	}
}
function While(b, c){
	this.b = b;
	this.c = c;
	this.eval = function(s){
	if(this.b.eval(s)){
        s1 = c.eval(s);
        s2 = new While(b,c).eval(s1);
		return s2;
	}
	else
		return s;
	}
}
Skip.prototype = new Comm();
Seq.prototype = new Comm();
Asgn.prototype = new Comm();
If.prototype = new Comm();
While.prototype = new Comm();

// ----------------------------
// Test cases
// ----------------------------
var_x = new Var('x');
asgn_x = new Asgn('x', new Int(5));
asgn_y = new Asgn('y', new Int(10));
asgn_z = new Asgn('z', new Int(15));

// Test case for Assign():
tcAsgn = asgn_x;
// Test case for Seq():
tcSeq = new Seq(new Seq(asgn_x, asgn_y), asgn_z);
// Test case for Skip():
tcSkip = new Seq(new Seq(asgn_x, new Skip()), asgn_y);
// Test case 1 for If():
tcIf1 = new If(new Bool(true), asgn_z, asgn_y);
// Test case 2 for If():
asgn_x1 = new Asgn('x', new Int(100));
tcIf2 = new If(new Greater(asgn_x, new Int(6)), asgn_z, asgn_x1);
// Test case 1 for While():
While1_cond = new Smaller(new Var('i'), new Int(5)); 
While1_exe = new Asgn('i', new Sum(new Var('i'), new Int(1)));
While1 = new While(While1_cond, While1_exe);
tcWhile1 = new Seq(new Asgn('i', new Int(0)), While1);
// Test case 2 for While():
While2_cond = new Smaller(new Var('i'), new Int(10)); 
If_cond = new Equal(new Mod(new Var('i'), new Int(3)), new Int(0));
If_exe = new Asgn('j', new Sum(new Var('j'), new Int(1)));
While2_exe1 = new If(If_cond, If_exe, new Skip());
While2_exe2 = new Asgn('i', new Sum(new Var('i'), new Int(1)));
While2_exe = new Seq(While2_exe1, While2_exe2);
While2 = new While(While2_cond, While2_exe);
tcWhile2 = new Seq(new Seq(new Asgn('i', new Int(0)), new Asgn('j', new Int(0))), While2);

stmtAsgn = "x = 5;";
stmtSeq = "(x = 5; y = 10); z = 15;";
stmtSkip = "(x = 5; skip();); y = 10;";
stmtIf1 = "true ? z = 15 : y = 10;";
stmtIf2 = "(x > 6) ? z = 15 : x = 100;";
stmtWhile1 = "i = 0; while(i < 5){i++;}";
stmtWhile2 = "i = 0; j = 0; while(i < 10){i%3 == 0) ? j++ : skip(); i++;}";

console.log('----------------------------------------------------------------------------');
var s = {}; console.log("Test case Assign: '" + stmtAsgn + "' evaluates to: ", tcAsgn.eval(s));
var s = {}; console.log("Test case Seq: '" + stmtSeq + "' evaluates to: ", tcSeq.eval(s));
var s = {}; console.log("Test case Skip: '" + stmtSkip + "' evaluates to: ", tcSkip.eval(s));
var s = {}; console.log("Test case If1: '" + stmtIf1 + "' evaluates to: ", tcIf1.eval(s));
var s = {}; console.log("Test case If2: '" + stmtIf2 + "' evaluates to: ", tcIf2.eval(s));
var s = {}; console.log("Test case While1: '" + stmtWhile1 + "' evaluates to: ", tcWhile1.eval(s));
var s = {}; console.log("Test case While2: '" + stmtWhile2 + "' evaluates to: ", tcWhile2.eval(s));
console.log('----------------------------------------------------------------------------');