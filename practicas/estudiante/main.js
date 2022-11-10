/* Proyecto: Base de datos de alumnos

Descripción: Crearan un pequeño proyecto con html, css y js con el cual podrán gestionar a los alumnos de una clase, así como sus calificaciones y sacar datos importantes sobre su performance.

Requisitos:
1.- Crear un prototipo alumno, el cual debe incluir: 
Nombre
Apellidos
Edad
Materias inscritas
Calificaciones
(Este es el prototipo base, si quieren agregarle mas datos son libres de hacerlo tan completo como quieran)

2.- Una vez creado el prototipo desde su sitio, deberán dar de alta alumnos, por defecto lo único que deben pedir como requisito al inicio es nombre, apellidos, edad.
3.- Después deberas crear funciones y vistas que les ayuden a hacer lo siguiente:
Inscribir un alumno a una clase
Asignarle sus calificaciones
Crear grupos y asignarle alumnos (Usen estructuras de datos)

4.- Ya que tengan sus grupos con alumnos, deberán crear e implementar las siguientes funciones:
Buscar por nombre
Buscar por apellido
Obtener promedio de un alumno
Obtener promedio del grupo
Obtener lista de alumnos ordenados ascendente y descendente por calificación
Con los datos almacenados en el prototipo agregar otro ordenamiento o búsqueda bajo el parámetro que quieran (Este es el punto extra)

5.- Preferentemente todo guarden en LocalStorage para que puedan tener persistencía de datos (Opcional x2) */
class Alumno {
  constructor(name, last_name, enrolled_subjects, grades) {
    this.name = name;
    this.last_name = last_name;
    this.enrolled_subjects = enrolled_subjects;
    this.grades = grades;
  }
}
const student = new Alumno(
  'Paco',
  'Perez',
  ['Español,Matematicas,Historia'],
  9.7
);
console.log(student);

const formLogIn = document.querySelector('.form');

formLogIn.addEventListener('click', (e) => {
  e.preventDefault();
  const userInput = document.querySelector('#user');
  const passwordInput = document.querySelector('#password');
  if (userInput !== 'admin' && passwordInput !== 'admin123') {
    document.write('incorrect Paswword');
  } else {
    document.write('success');
  }
});
