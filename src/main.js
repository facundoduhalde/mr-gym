 
 
 //ternario
 const [aux1, aux2] = [1, 2]
 const resTer = aux1 == 1 ? console.log("weqweww") : console.log("adios");



//spread
const arr = [1,2,3,4,5]
let arrAux = ["hola", ...arr]

console.log(arrAux);

/////////////////////////////////////////////////
const objAux = {el: "test", el2: "test2"}
const {el: variable} = objAux

console.log(variable);