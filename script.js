function add(x,y) {
    return x + y;
}

function sub(x,y) {
    return x - y;
}

function mult(x,y) {
    return x * y;
}

function divy(x,y) {
    return x / y;
}

function operate(a,b,oper) {
    let result = 0;
    if (oper == "+") {
        result = add(a,b);
    }
    else if (oper == "-") {
        result = sub(a,b);
    }
    else if (oper == "*") {
        result = mult(a,b);
    }
    else if (oper = "/") {
        result = divy(a,b);
    }
}