function* numberGenrator(){
    yield 1
    yield 2
    yield 3

}

let gen =  numberGenrator()
let gen2 =  numberGenrator()

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen2.next().value);
console.log(gen2.next().value);
