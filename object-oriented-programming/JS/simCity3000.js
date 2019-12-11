// Set the module that It reload the last code that I wrote

function printing() {
    console.log();
}


function City(name, poputation, alcalde) {

    this.name = name;
    this.poputation = poputation;
    this.alcalde = alcalde;

}

let buenosAires = new City("Buenos Aires", 3000000, "Larreta");
let montevideo = new City("Montevideo", 2000000, "Juan Carlos");

console.log(buenosAires, montevideo);
