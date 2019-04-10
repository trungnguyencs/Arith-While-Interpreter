function Aexp() {
    this.eval = function() {
    }
}

function Int(n) {
    this.n = n;
    this.eval = function() {
        return this.n;
    }
}

function Mul(e1, e2) {
    this.e1 = e1;
    this.e2 = e2;
    this.eval = function() {
        return this.e1.eval() * this.e2.eval();
    }
}

function Sum(e1, e2) {
    this.e1 = e1;
    this.e2 = e2;
    this.eval = function() {
        return this.e1.eval() + this.e2.eval();
    }
}

function Minus(e1, e2) {
    this.e1 = e1;
    this.e2 = e2;
    this.eval = function() {
        return this.e1.eval() - this.e2.eval();
    }
}

Int.prototype = new Aexp();
Sum.prototype = new Aexp();
Mul.prototype = new Aexp();
Minus.prototype = new Aexp();

testcase1 = new Mul(new Sum(new Int(5), new Int(3)), new Int(2));
console.log(testcase1.eval() == 17)

// Boolean

function Bexp() {
    this.eval = function() {
    }
}

function Bool(b) {
    this.b = b;
    this.eval = function() {
        return this.b;
    }
}

function Not(b) {
    this.b = b;
    this.eval = function() {
        return ! this.b.eval();
    }
}

function Equal(b1, b2) {
    this.b1 = b1;
    this.b2 = b2;
    this.eval = function() {
        return this.b1.eval() == this.b2.eval();
    }
}

function Smaller(b1, b2) {
    this.b1 = b1;
    this.b2 = b2;
    this.eval = function() {
        return this.b1.eval() < this.b2.eval();
    }
}

function Greater(b1, b2) {
    this.b1 = b1;
    this.b2 = b2;
    this.eval = function() {
        return this.b1.eval() > this.b2.eval();
    }
}

function And(b1, b2) {
    this.b1 = b1;
    this.b2 = b2;
    this.eval = function() {
        return this.b1.eval() && this.b2.eval();
    }
}

function Or(b1, b2) {
    this.b1 = b1;
    this.b2 = b2;
    this.eval = function() {
        return this.b1.eval() || this.b2.eval();
    }
}

Bool.prototype = new Bexp();
Not.prototype = new Bexp();
Equal.prototype = new Bexp();
Smaller.prototype = new Bexp();
Greater.prototype = new Bexp();
And.prototype = new Bexp();
Or.prototype = new Bexp();

testcase1 = new Or(new Smaller(new Bool(7), new Bool(5)), new Bool(true));
console.log(testcase1.eval())

// Command

