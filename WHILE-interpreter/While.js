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
function Var(x){
    this.x = x;
    this.eval = function(s){
        return s[this.x];
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
function Equals(b1, b2){
    this.b1 = b1;
    this.b2 = b2;
    this.eval = function(s){
        return this.b1.eval(s) == this.b2.eval(s);
    }
}
function LessThan(b1, b2){
    this.b1 = b1;
    this.b2 = b2;
    this.eval = function(s){
        return this.b1.eval(s) < this.b2.eval(s);
    }
}
function GreaterThan(b1, b2){
    this.b1 = b1;
    this.b2 = b2;
    this.eval = function(s){
        return this.b1.eval(s) > this.b2.eval(s);
    }
}
function LessOrEq(b1, b2){
    this.b1 = b1;
    this.b2 = b2;
    this.eval = function(s){
        return this.b1.eval(s) <= this.b2.eval(s);
    }
}
function GreaterOrEq(b1, b2){
    this.b1 = b1;
    this.b2 = b2;
    this.eval = function(s){
        return this.b1.eval(s) >= this.b2.eval(s);
    }
}
function Not(b) {
    this.b = b;
    this.eval = function(s){
        return ! this.b.eval(s);
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
Equals.prototype = new Bexp();
LessThan.prototype = new Bexp();
GreaterThan.prototype = new Bexp();
LessOrEq.prototype = new Bexp();
GreaterOrEq.prototype = new Bexp();
Not.prototype = new Bexp();
And.prototype = new Bexp();
Or.prototype = new Bexp();

// ----------------------------
// Command
// ----------------------------
function Command(){
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
function Assign(x, val){
	this.x = x;
	this.val = val;
	this.eval = function(s){
		s[this.x] = this.val.eval(s);
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
Skip.prototype = new Command();
Seq.prototype = new Command();
Assign.prototype = new Command();
If.prototype = new Command();
While.prototype = new Command();

// ----------------------------
// Test cases
// ----------------------------
var_x = new Var('x');
assign_x = new Assign('x', new Int(5));
assign_y = new Assign('y', new Int(10));
assign_z = new Assign('z', new Int(15));
assign_x1 = new Assign('x', new Int(100));

// Test case for Or():
tcOr = new Or(new LessThan(new Int(5), new Int(6)), new Not(new LessThan(new Int(5), new Int(6))));
// Test case for And():
tcAnd = new And(new And(new GreaterOrEq(new Minus(new Int(6), new Int(1)), new Int(6)), new LessOrEq(new Int(5), new Mul(new Int(5), new Int(2)))), new Bool(false));
// Test case for Assign():
tcAsgn = assign_x;
// Test case for Seq():
tcSeq = new Seq(new Seq(assign_x, assign_y), assign_z);
// Test case for Skip():
tcSkip = new Seq(new Seq(assign_x, new Skip()), assign_y);
// Test case 1 for If():
tcIf1 = new If(new Bool(true), assign_z, assign_y);
// Test case 2 for If():
If2 = new If(new GreaterThan(var_x, new Int(6)), assign_z, assign_x1);
tcIf2 = new Seq(assign_x, If2);
// Test case 1 for While():
While1_cond = new LessThan(new Var('i'), new Int(5)); 
While1_exe = new Assign('i', new Sum(new Var('i'), new Int(1)));
While1 = new While(While1_cond, While1_exe);
tcWhile1 = new Seq(new Assign('i', new Int(0)), While1);
// Test case 2 for While():
While2_cond = new LessThan(new Var('i'), new Int(10)); 
If_cond = new Equals(new Mod(new Var('i'), new Int(3)), new Int(0));
If_exe = new Assign('j', new Sum(new Var('j'), new Int(1)));
While2_exe1 = new If(If_cond, If_exe, new Skip());
While2_exe2 = new Assign('i', new Sum(new Var('i'), new Int(1)));
While2_exe = new Seq(While2_exe1, While2_exe2);
While2 = new While(While2_cond, While2_exe);
tcWhile2 = new Seq(new Seq(new Assign('i', new Int(0)), new Assign('j', new Int(0))), While2);

stmtOr = "(5 < 6) OR !(5 < 6)";
stmtAnd = "(((6-1) >= 6) AND (5 <= (5*2))) AND False";
stmtAsgn = "x = 5;";
stmtSeq = "(x = 5; y = 10); z = 15;";
stmtSkip = "(x = 5; skip();); y = 10;";
stmtIf1 = "true ? z = 15 : y = 10;";
stmtIf2 = "(x > 6) ? z = 15 : x = 100;";
stmtWhile1 = "i = 0; while(i < 5){i=i+1;}";
stmtWhile2 = "i = 0; j = 0; while(i < 10){i%3 == 0) ? j=j+1 : skip(); i=i+1;}";

console.log('----------------------------------------------------------------------------');
var s = {}; console.log("Test case Or: '" + stmtOr + "' evaluates to: ", tcOr.eval(s));
var s = {}; console.log("Test case And: '" + stmtAnd + "' evaluates to: ", tcAnd.eval(s));
var s = {}; console.log("Test case Assign: '" + stmtAsgn + "' evaluates to: ", tcAsgn.eval(s));
var s = {}; console.log("Test case Seq: '" + stmtSeq + "' evaluates to: ", tcSeq.eval(s));
var s = {}; console.log("Test case Skip: '" + stmtSkip + "' evaluates to: ", tcSkip.eval(s));
var s = {}; console.log("Test case If1: '" + stmtIf1 + "' evaluates to: ", tcIf1.eval(s));
var s = {}; console.log("Test case If2: '" + stmtIf2 + "' evaluates to: ", tcIf2.eval(s));
var s = {}; console.log("Test case While1: '" + stmtWhile1 + "' evaluates to: ", tcWhile1.eval(s));
var s = {}; console.log("Test case While2: '" + stmtWhile2 + "' evaluates to: ", tcWhile2.eval(s));
console.log('----------------------------------------------------------------------------');