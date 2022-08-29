function pow(a,b) {
    let result = a;

    for(let i = 1; i < b; i++){
        result *= a;
    }

    return result; 
}

let a = prompt("a?", '');
let b = prompt("b?", '');

alert( pow(a, b) );
