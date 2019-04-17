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
function Mul(e1, e2){
    this.e1 = e1;
    this.e2 = e2;
    this.eval = function(s){
        return this.e1.eval(s) * this.e2.eval(s);
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

Int.prototype = new Aexp();
Sum.prototype = new Aexp();
Mul.prototype = new Aexp();
Minus.prototype = new Aexp();

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
function Assign(varName, e){
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
        s2 = While(b,c).eval(s1);
		return s2;
	}
	else
		return s;
	}
}

Skip.prototype = new Comm();
Seq.prototype = new Comm();
Assign.prototype = new Comm();
If.prototype = new Comm();
While.prototype = new Comm();
And.prototype = new Comm();
Or.prototype = new Comm();

var s = {};
testcase1 = new Mul(new Sum(new Int(5), new Int(3)), new Int(2));
console.log(testcase1.eval(s) == 17);
testcase2 = new Or(new Smaller(new Bool(7), new Bool(5)), new Bool(true));
console.log(testcase2.eval(s));

c1 = new Var('x');
c2 = new Int(5);
c3 = new Assign('x',new Int(5));
// ifC1 = new If(new Greater(c1, 4), new Assign(new Var('y'), 5));
console.log(c1.eval(s));
console.log(c2.eval(s));
console.log(c3.eval(s));
// console.log(ifC1.eval(s))

// c1 = Assign('i',IntExp(0))
// c2 = Assign('x', IntExp(0))
// ifC1_d1 = Assign('x', MinExp(DivExp(MulExp(SumExp(VarExp('x'), VarExp('i')), IntExp(4)), IntExp(2)), IntExp(-2)))
// ifC1_d2 = Assign('x', DivExp(MulExp(SumExp(VarExp('x'), VarExp('i')), IntExp(4)), IntExp(2)))
// ifC1 = If(Equal(ModExp(VarExp('i'), IntExp(2)), IntExp(0)), ifC1_d1, ifC1_d2)
// ifC2_d1 = Assign('y', IntExp(3))
// ifC2_d2 = Skip()
// ifC2 = If(Great(IntExp(3), IntExp(1)), ifC2_d1, ifC2_d2)
// whileC = Next(Next(ifC1, Assign('i', SumExp(VarExp('i'), IntExp(1)))), ifC2)
// c3 = While(Less(VarExp('i'), IntExp(5)), whileC)
// testCase1 = Next(Next(Next(c1, Skip()),c2), c3)
// s = dict()
// c3 = While(Less(VarExp('i'), IntExp(5)), whileC)
// tc0 =  Next(Next(Next(c1, Skip()),c2), c3)
// print tc0.eval(s)
// print type(tc0).__name__!="Next"
// print type('Skip')