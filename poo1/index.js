/* CREANDO LA CLASE
 */class Persona {
    constructor (nombre, edad) {
        this.nombre = nombre
        this._edad = edad
    }
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this._edad} años`)
    }
    get edad() {
        return this._edad
    }
    set edad(nuevaEdad) {
        if (nuevaEdad > 0) {
            this._edad = nuevaEdad
        }
    }
}
/* CREANDO LA INSTANCIA DE LA CLASE
 */const persona1 = new Persona('Fabricio', 23)
const persona2 = new Persona('Marisol', 22)
/* ACCEDIENDO Y UTILIZANDO SET Y GET
 */console.log(persona1.edad)
persona1.edad = 18
console.log(persona1.edad)
persona1.edad = -4
console.log(persona1.edad);
/* EJECUTANDO EL METODO DE LA CLASE
 */persona1.saludar()
persona2.saludar()

/* CREANDO UNA CLASE HEREDADA */
class Empleado extends Persona {
    constructor(nombre, edad, cargo) {
        super(nombre,edad)
        this.cargo = cargo
    }
    presentarse() {
        console.log(`Hola, soy ${this.nombre}, tengo ${this.edad} años y soy ${this.cargo}.`);
    }
}
/* LLAMANDO A LA CLASE HEREDADA CON LOS ATRIBUTOS DE LA CLASE PERSONA
 */const Empleado1 = new Empleado("Fabricio", 22, "Desarrolador Frontend")
Empleado1.saludar()
Empleado1.presentarse()

/* DEFINICION DE LA SUPERCLASE ANIMAL
 */class Animal {
    constructor(nombre) {
        this.nombre = nombre
    }
    hacerSonido() {
        return "Haciendo sonidos genéricos"
    }
}
/* Definición de la subclase Perro que extiende Animal
 */class Perro extends Animal {
    constructor(nombre,raza) {
        super(nombre)
        this.raza = raza
    }
    hacerSonido() {
        return "Guau Guau"
    }
    moverCola() {
        return "Moviendo la cola felizmente"
    }
}
/* Creación de una instancia de la subclase Perro*/
const miPerro = new Perro("Odi", "Mestizo")

/* lamando a los métodos de la subclase y superclase */
console.log(miPerro.nombre);
console.log(miPerro.raza);
console.log(miPerro.hacerSonido());
console.log(miPerro.moverCola());


// Objeto Celular
const celular = {
    marca: "Samsung",
    modelo: "Galaxy S21",
    color: "Negro",
    almacenamiento: "128GB",
    sistemaOperativo: "Android",
    camaraMP: 64,
    encendido: false,
    // Método para sacar fotos
    sacarFoto: function() {
    if (!this.encendido) {
    console.log("El celular está apagado. Por favor, enciéndelo para sacar fotos.");
    } else {
    console.log(`Foto tomada con la cámara de ${this.camaraMP} MP en el ${this.modelo}. ¡Sonríe! 📸`);
}
},
// Método para encender el celular
encender: function() {
this.encendido = true;
console.log("¡El celular está encendido!");
},
// Método para apagar el celular
apagar: function() {
this.encendido = false;
console.log("El celular se ha apagado.");
}
};
// Prueba del objeto Celular
console.log("Información del celular:");
console.log(`Marca: ${celular.marca}`);
console.log(`Modelo: ${celular.modelo}`);
console.log(`Color: ${celular.color}`);
console.log(`Almacenamiento: ${celular.almacenamiento}`);
console.log(`Sistema Operativo: ${celular.sistemaOperativo}`);
// Encendemos el celular
celular.encender();
// Sacamos una foto
celular.sacarFoto();
// Apagamos el celular
celular.apagar();


// Objeto Cuenta Bancaria
const cuentaBancaria = {
    titular: "Juan Pérez",
    saldo: 1000,
    // Método para depositar dinero en la cuenta
    depositar: function(monto) {
        if (monto <= 0) {
        console.log("El monto a depositar debe ser mayor que cero.");
        } else {
        this.saldo += monto;
        console.log(`Se ha depositado $${monto} en la cuenta. Saldo actual: $${this.saldo}`);
        }
    },
    // Método para retirar dinero de la cuenta
    retirar: function(monto) {
        if (monto <= 0) {
        console.log("El monto a retirar debe ser mayor que cero.");
        } else if (monto > this.saldo) {
        console.log("Saldo insuficiente. No es posible realizar el retiro.");
        } else {
        this.saldo -= monto;
        console.log(`Se ha retirado $${monto} de la cuenta. Saldo actual: $${this.saldo}`);
        }
    },
    // Método para consultar el saldo de la cuenta
    consultarSaldo: function() {
    console.log(`Saldo actual: $${this.saldo}`);
    }
};
// Prueba del objeto Cuenta Bancaria
console.log(`Titular de la cuenta: ${cuentaBancaria.titular}`);
cuentaBancaria.consultarSaldo(); // Saldo actual: $1000
cuentaBancaria.depositar(500); // Se ha depositado $500 en la cuenta. Saldo actual: $1500
cuentaBancaria.retirar(200); // Se ha retirado $200 de la cuenta. Saldo actual: $1300
cuentaBancaria.consultarSaldo(); // Saldo actual: $1300