class Estudiante {
  constructor(nombre, edad, ...asignaturas){
      this.nombre = nombre;
      this.edad = edad;
      this.asignaturas = asignaturas;
  }
}

Estudiante.prototype.saludar = () => console.log(`Hola, me llamo ${nombre} y tengo ${edad} años.`);

Estudiante.prototype.listarAsignaturas = () => console.log(`Mis asignaturas son: ${asignaturas.join(', ')}`);

let estudiante1 = new Estudiante('Ana', 20, 'Matemáticas', 'Historia', 'Literatura');
  

const {nombre, edad, asignaturas} = estudiante1;
  

console.log(`Nombre: ${nombre}`);
console.log(`Edad: ${edad}`);
  

estudiante1.saludar();
estudiante1.listarAsignaturas(asignaturas);
  

function calcularPromedio() {
  let suma = 0;
  for (let i = 0; i < arguments.length; i++) {
      suma += arguments[i];
  }
  return suma / arguments.length;
}


let promedio = calcularPromedio(85, 90, 78, 92);
console.log(`El promedio es: ${promedio}`);