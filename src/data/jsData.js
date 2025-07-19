export const jsCheatsheetData = [
  // --- Fundamentos Básicos ---
  {
    id: "js-variables-tipos",
    colClasses: "col-md-6",
    headerIcon: "💡",
    headerTitle: "Variables y Tipos de Datos",
    codeLanguage: "javascript",
    codeSnippet: `// Declaración de variables
let nombre = "Juan"; // Variable mutable, ámbito de bloque
const edad = 30;     // Constante, ámbito de bloque (no puede ser reasignada)
var ciudad = "Tucumán"; // Variable mutable, ámbito de función (evitar usar)

// Tipos de datos primitivos
let str = "Hola"; // String
let num = 123;    // Number (enteros y flotantes)
let bool = true;  // Boolean (true/false)
let undef = undefined; // Undefined (valor por defecto)
let nulo = null;  // Null (ausencia intencional de valor)
let sym = Symbol('id'); // Symbol (valor único)
let bigInt = 123n; // BigInt (números enteros muy grandes)

// Tipo de dato complejo
let obj = { clave: "valor" }; // Object
let arr = [1, 2, 3];        // Array (es un tipo de Object)`,
    bodyContent: null,
    bodyText:
      "JavaScript tiene tipos de datos primitivos y un tipo de dato complejo (Object).<br>💡 Tip: Usa <code>const</code> por defecto, <code>let</code> si sabes que la variable cambiará y evita <code>var</code> por su ámbito menos predecible. Entender los tipos es crucial para evitar errores de coerción.",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Grammar_and_types",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Fundamentos Básicos",
    order: 1,
  },
  {
    id: "js-operadores",
    colClasses: "col-md-6",
    headerIcon: "➕➖",
    headerTitle: "Operadores Comunes",
    codeLanguage: "javascript",
    codeSnippet: `// Aritméticos
let sum = 5 + 3;   // 8
let diff = 10 - 2; // 8
let prod = 4 * 5;  // 20
let div = 10 / 2;  // 5
let mod = 10 % 3;  // 1 (resto)
let exp = 2 ** 3;  // 8 (exponenciación ES6)

// Asignación
let x = 10;
x += 5; // x = x + 5; // 15

// Comparación (devuelven boolean)
console.log(5 == '5');  // true (igualdad débil, ¡evitar!)
console.log(5 === '5'); // false (igualdad estricta, ¡siempre usar!)
console.log(10 > 5);    // true
console.log(5 <= 5);    // true

// Lógicos
let a = true, b = false;
console.log(a && b); // false (AND lógico)
console.log(a || b); // true (OR lógico)
console.log(!a);     // false (NOT lógico)`,
    bodyContent: null,
    bodyText:
      "Los operadores te permiten realizar diversas operaciones con valores.<br> Prioriza siempre el operador de igualdad estricta (<code>===</code>) sobre el de igualdad débil (<code>==</code>) para evitar comportamientos inesperados debido a la coerción de tipos.",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_operators",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Fundamentos Básicos",
    order: 2,
  },

  // --- Estructuras de Control ---
  {
    id: "js-condicionales",
    colClasses: "col-md-6",
    headerIcon: "🚦",
    headerTitle: "Condicionales (if/else, switch)",
    codeLanguage: "javascript",
    codeSnippet: `// if / else if / else
let temperatura = 25;
if (temperatura > 30) {
  console.log("Hace mucho calor!");
} else if (temperatura > 20) {
  console.log("Temperatura agradable.");
} else {
  console.log("Hace frío.");
}

// Operador Ternario (shorthand para if/else simple)
let edad = 18;
let mensaje = (edad >= 18) ? "Adulto" : "Menor";
console.log(mensaje); // Salida: Adulto

// switch
let dia = "Lunes";
switch (dia) {
  case "Lunes":
    console.log("Inicio de semana.");
    break;
  case "Viernes":
    console.log("¡Casi fin de semana!");
    break;
  default:
    console.log("Día normal.");
}`,
    bodyContent: null,
    bodyText:
      "Las estructuras condicionales permiten que tu código tome decisiones. <code>if/else</code> es para condiciones complejas, mientras que <code>switch</code> es ideal para múltiples casos discretos. El operador ternario es útil para asignaciones condicionales concisas.",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Control_flow_and_error_handling",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Estructuras de Control",
    order: 3,
  },
  {
    id: "js-bucles",
    colClasses: "col-md-6",
    headerIcon: "🔁",
    headerTitle: "Bucles (Loops)",
    codeLanguage: "javascript",
    codeSnippet: `// for loop
for (let i = 0; i < 3; i++) {
  console.log("Iteración for: " + i); // 0, 1, 2
}

// while loop
let count = 0;
while (count < 3) {
  console.log("Iteración while: " + count); // 0, 1, 2
  count++;
}

// for...of (para iterar sobre arrays, strings, etc.)
const nombres = ['Ana', 'Luis', 'Pedro'];
for (const nombre of nombres) {
  console.log(nombre); // Ana, Luis, Pedro
}

// for...in (para iterar sobre propiedades de objetos) - ¡usar con cautela!
const persona = { nombre: 'Marta', edad: 25 };
for (const key in persona) {
  console.log(\`\${key}: \${persona[key]}\`);
}
// Salida: nombre: Marta, edad: 25`,
    bodyContent: null,
    bodyText:
      "Los bucles permiten ejecutar un bloque de código repetidamente. <code>for</code> es común para un número conocido de iteraciones. <code>for...of</code> es ideal para arrays. <code>for...in</code> es para objetos, pero se prefiere <code>Object.keys()</code> o <code>Object.entries()</code> por seguridad.",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Estructuras de Control",
    order: 4,
  },

  // --- Funciones ---
  {
    id: "js-funciones-declaracion",
    colClasses: "col-md-6",
    headerIcon: "🚀",
    headerTitle: "Funciones (Declaración y Expresión)",
    codeLanguage: "javascript",
    codeSnippet: `// Declaración de función (hoisting)
function saludar(nombre) {
  return "Hola, " + nombre + "!";
}
console.log(saludar("María")); // Salida: Hola, María!

// Expresión de función (no hay hoisting)
const sumar = function(a, b) {
  return a + b;
};
console.log(sumar(5, 3)); // Salida: 8

// Arrow Function (ES6)
const multiplicar = (a, b) => a * b;
console.log(multiplicar(4, 2)); // Salida: 8

const decirHola = () => console.log("Hola a todos!");
decirHola();

const getUsuario = (id) => ({ id: id, nombre: 'Usuario ' + id });
console.log(getUsuario(1)); // Salida: { id: 1, nombre: 'Usuario 1' }`,
    bodyContent: null,
    bodyText:
      "Las funciones son bloques de código reutilizables. Las <b>declaraciones</b> son *hoisted*. Las <b>expresiones</b> y <b>Arrow Functions</b> (ES6) son más modernas, ideales para funciones cortas y con un <code>this</code> contextual diferente.",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Funciones",
    order: 5,
  },
  {
    id: "js-funciones-parametros",
    colClasses: "col-md-6",
    headerIcon: "⚙️",
    headerTitle: "Parámetros de Funciones",
    codeLanguage: "javascript",
    codeSnippet: `// Parámetros por defecto (ES6)
function saludoConDefault(nombre = "Invitado") {
  console.log("Hola, " + nombre + "!");
}
saludoConDefault();     // Salida: Hola, Invitado!
saludoConDefault("Ana"); // Salida: Hola, Ana!

// Parámetros Rest (ES6)
function sumarTodo(...numeros) { // Recoge args en un array
  return numeros.reduce((acc, num) => acc + num, 0);
}
console.log(sumarTodo(1, 2, 3, 4)); // Salida: 10

// Desestructuración de parámetros (ES6)
function mostrarInfo({ nombre, edad }) {
  console.log(\`Nombre: \${nombre}, Edad: \${edad}\`);
}
const user = { nombre: "Pedro", edad: 28 };
mostrarInfo(user); // Salida: Nombre: Pedro, Edad: 28`,
    bodyContent: null,
    bodyText:
      "JavaScript moderno ofrece flexibilidad con los parámetros de las funciones. Los parámetros por defecto facilitan la gestión de argumentos opcionales. Los parámetros <b>Rest</b> agrupan argumentos en un array, y la <b>desestructuración</b> permite extraer propiedades de objetos pasados como argumentos.",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/rest_parameters",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Funciones",
    order: 6,
  },

  // --- Objetos ---
  {
    id: "js-objetos-basico",
    colClasses: "col-md-6",
    headerIcon: "🧱",
    headerTitle: "Objetos (Creación y Acceso)",
    codeLanguage: "javascript",
    codeSnippet: `// Creación de objeto literal
const coche = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2020,
  encender: function() {
    console.log("El coche se encendió.");
  },
  'color-exterior': 'Rojo' // Propiedad con guión
};

// Acceso a propiedades
console.log(coche.marca); // Salida: Toyota (notación de punto)
console.log(coche['modelo']); // Salida: Corolla (notación de corchetes)
console.log(coche['color-exterior']); // Necesario para propiedades con caracteres especiales

// Añadir/Modificar propiedades
coche.puertas = 4;
coche.año = 2021;
console.log(coche); // { marca: "Toyota", modelo: "Corolla", año: 2021, puertas: 4, ... }

// Eliminar propiedad
delete coche.puertas;`,
    bodyContent: null,
    bodyText:
      "Los objetos son colecciones de propiedades, que consisten en un nombre (clave) y un valor. Son fundamentales para modelar datos. Puedes acceder a sus propiedades con notación de punto o corchetes, y son mutables.",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_Objects",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Objetos",
    order: 7,
  },
  {
    id: "js-objetos-this",
    colClasses: "col-md-6",
    headerIcon: "🕵️",
    headerTitle: "El contexto 'this'",
    codeLanguage: "javascript",
    codeSnippet: `const user = {
  name: "Alice",
  greet: function() {
    console.log("Hola, soy " + this.name); // 'this' se refiere a 'user'
  },
  farewell: () => {
    // En arrow functions, 'this' se refiere al contexto léxico (fuera del objeto)
    console.log("Adiós desde " + this.name); // 'this' aquí sería 'window' o 'undefined' en strict mode
  }
};

user.greet();    // Salida: Hola, soy Alice
user.farewell(); // Salida: Adiós desde undefined (o el nombre de la ventana en un navegador)`,
    bodyContent: null,
    bodyText:
      "El valor de <code>this</code> depende de cómo se llama una función. En métodos de objetos normales, <code>this</code> se refiere al objeto. En *arrow functions*, <code>this</code> mantiene el contexto léxico (donde fue definido), lo que puede ser una diferencia clave.",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/this",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Objetos",
    order: 8,
  },
  // --- Métodos de Array  ---
  // --- Fundamentos de Arrays ---
  {
    id: "js-array-creacion",
    colClasses: "col-md-6 col-lg-4",
    headerIcon: "🆕",
    headerTitle: "Creación de Arrays",
    codeLanguage: "javascript",
    codeSnippet: `// 1. Usando corchetes (literal de array - la forma más común)
const numeros = [1, 2, 3, 4, 5];
console.log(numeros); // Salida: [1, 2, 3, 4, 5]

const cadenas = ["Hola", "Mundo", "!"];
console.log(cadenas); // Salida: ["Hola", "Mundo", "!"]

const mixto = [1, "dos", true, null, { clave: "valor" }];
console.log(mixto); // Salida: [1, "dos", true, null, { clave: "valor" }]

// 2. Usando el constructor Array (menos común, puede ser confuso con un solo número)
const arrVacio = new Array();
console.log(arrVacio); // Salida: []

const arrDeTamano = new Array(5); // Crea un array con 5 "slots" vacíos
console.log(arrDeTamano); // Salida: [empty × 5]

const arrConElementos = new Array(10, 20, 30);
console.log(arrConElementos); // Salida: [10, 20, 30]

// Acceder a elementos por índice (los arrays son base cero)
console.log(numeros[0]); // Salida: 1
console.log(cadenas[2]); // Salida: !`,
    bodyContent: null,
    bodyText:
      "Los arrays son listas ordenadas de valores. La forma más común y recomendada de crearlos es usando corchetes <code>[]</code>. Los elementos se acceden mediante su índice, que siempre empieza en <code>0</code>.",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Fundamentos de Arrays",
    order: 9, // Lo puse en 0 para que sea el primero de la sección. Ajusta si es necesario.
  },
  {
    id: "js-array-agregar-elementos",
    colClasses: "col-md-6 col-lg-4",
    headerIcon: "➕",
    headerTitle: "Agregar Elementos a un Array",
    codeLanguage: "javascript",
    codeSnippet: `const frutas = ["Manzana", "Banana"];
// 1. push(): Añadir al final (mutación)
frutas.push("Naranja");
console.log(frutas); // Salida: ["Manzana", "Banana", "Naranja"]

// 2. unshift(): Añadir al principio (mutación)
frutas.unshift("Uva");
console.log(frutas); // Salida: ["Uva", "Manzana", "Banana", "Naranja"]

// 3. Usando el índice (puede crear "holes")
frutas[4] = "Pera"; // Agrega en el índice 4, creando un "empty item" en el 3
console.log(frutas); // Salida: ["Uva", "Manzana", "Banana", "Naranja", "Pera"]

// 4. Spread operator (...) y concat() - Para crear un NUEVO array (sin mutación)
const masFrutas = ["Kiwi", "Mango"];
const todasLasFrutas = [...frutas, ...masFrutas, "Melón"];
console.log(todasLasFrutas); // Salida: ["Uva", "Manzana", "Banana", "Naranja", "Pera", "Kiwi", "Mango", "Melón"]

const combinedWithConcat = frutas.concat(masFrutas, ["Fresa"]);
console.log(combinedWithConcat);`,
    bodyContent: null,
    bodyText:
      "Puedes añadir elementos al principio o al final de un array existente con <code>push()</code> y <code>unshift()</code> (estos modifican el array original). Para añadir sin modificar el original, usa el <code>spread operator (...)</code> o <code>concat()</code> que devuelven un nuevo array.",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/push",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Fundamentos de Arrays",
    order: 10,
  },
  {
    id: "js-array-quitar-elementos",
    colClasses: "col-md-6 col-lg-4",
    headerIcon: "🗑️",
    headerTitle: "Quitar Elementos de un Array",
    codeLanguage: "javascript",
    codeSnippet: `const colores = ["Rojo", "Verde", "Azul", "Amarillo"];
// 1. pop(): Quitar el último elemento (mutación)
const ultimoColor = colores.pop();
console.log(ultimoColor); // Salida: Amarillo
console.log(colores);    // Salida: ["Rojo", "Verde", "Azul"]

// 2. shift(): Quitar el primer elemento (mutación)
const primerColor = colores.shift();
console.log(primerColor); // Salida: Rojo
console.log(colores);     // Salida: ["Verde", "Azul"]

// 3. splice(): Quitar elementos en cualquier posición (mutación)
// array.splice(indiceInicio, cantidadAQuitar)
colores.splice(1, 1); // Quita 1 elemento desde el índice 1 ("Azul")
console.log(colores); // Salida: ["Verde"]

// 4. filter(): Quitar elementos creando un NUEVO array (sin mutación)
const numeros = [10, 20, 30, 40, 50];
const sinVeinte = numeros.filter(num => num !== 20);
console.log(sinVeinte); // Salida: [10, 30, 40, 50]
console.log(numeros);   // Salida: [10, 20, 30, 40, 50] (original sin cambios)`,
    bodyContent: null,
    bodyText:
      "Los métodos <code>pop()</code> y <code>shift()</code> eliminan elementos de los extremos. <code>splice()</code> es potente para eliminar en cualquier posición, pero modifican el array original. Para un enfoque inmutable, <code>filter()</code> crea un nuevo array sin los elementos deseados.",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/pop",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Fundamentos de Arrays",
    order: 11,
  },
  {
    id: "js-array-modificar-elementos",
    colClasses: "col-md-6",
    headerIcon: "✏️",
    headerTitle: "Modificar Elementos de un Array",
    codeLanguage: "javascript",
    codeSnippet: `const puntos = [10, 25, 30, 45];

// 1. Acceso por índice (mutación)
puntos[1] = 20; // Modifica el elemento en el índice 1
console.log(puntos); // Salida: [10, 20, 30, 45]

// 2. Usando map() para crear un NUEVO array modificado (sin mutación)
const precios = [100, 150, 200];
const preciosConIVA = precios.map(precio => precio * 1.21); // Aplica 21% IVA
console.log(preciosConIVA); // Salida: [121, 181.5, 242]
console.log(precios);       // Salida: [100, 150, 200] (original sin cambios)

// 3. splice() para reemplazar elementos (mutación)
// array.splice(indiceInicio, cantidadAQuitar, elemento1, elemento2, ...)
const listaTareas = ["Comprar", "Estudiar", "Cocinar"];
listaTareas.splice(0, 1, "Pasear Perro"); // Quita 1 en índice 0, añade "Pasear Perro"
console.log(listaTareas); // Salida: ["Pasear Perro", "Estudiar", "Cocinar"]`,
    bodyContent: null,
    bodyText:
      "La modificación más directa es asignando un nuevo valor a un índice específico. Para transformaciones más complejas o cuando necesitas un nuevo array sin mutar el original, <code>map()</code> es la herramienta ideal. <code>splice()</code> también puede reemplazar elementos.",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype/map",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Fundamentos de Arrays",
    order: 11,
  },
  // --- Métodos de Iteración (Recorrer Arrays) ---
  {
    id: "array-iteracion-forEach",
    colClasses: "col-md-6 col-lg-4",
    headerIcon: "🔄",
    headerTitle: "forEach()",
    codeLanguage: "javascript",
    codeSnippet: `const numbers = [1, 2, 3];

numbers.forEach((number, index) => {
  console.log(\`Elemento: \${number}, Índice: \${index}\`);
});
// Salida:
// Elemento: 1, Índice: 0
// Elemento: 2, Índice: 1
// Elemento: 3, Índice: 2`,
    bodyContent: null,
    bodyText:
      "Ejecuta una función callback una vez por cada elemento en el array. Es útil para realizar una acción con cada elemento sin crear un nuevo array. No devuelve ningún valor (undefined).",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Métodos de Array: Iteración",
    order: 12,
  },
  {
    id: "array-iteracion-map",
    colClasses: "col-md-6 col-lg-4",
    headerIcon: "✨",
    headerTitle: "map()",
    codeLanguage: "javascript",
    codeSnippet: `const numbers = [1, 2, 3];
const doubled = numbers.map(number => number * 2);

console.log(doubled); // Salida: [2, 4, 6]`,
    bodyContent: null,
    bodyText:
      "Crea un <b>nuevo array</b> con los resultados de la llamada a la función callback aplicada a cada uno de sus elementos. Es ideal para transformar un array.",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Métodos de Array: Iteración",
    order: 13,
  },
  {
    id: "array-iteracion-filter",
    colClasses: "col-md-6 col-lg-4",
    headerIcon: "🔍",
    headerTitle: "filter()",
    codeLanguage: "javascript",
    codeSnippet: `const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(number => number % 2 === 0);

console.log(evens); // Salida: [2, 4]`,
    bodyContent: null,
    bodyText:
      "Crea un <b>nuevo array</b> con todos los elementos que pasen la prueba implementada por la función callback. Excelente para seleccionar un subconjunto de elementos.",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Métodos de Array: Iteración",
    order: 14,
  },
  {
    id: "array-iteracion-reduce",
    colClasses: "col-md-6 col-lg-4",
    headerIcon: "📉",
    headerTitle: "reduce()",
    codeLanguage: "javascript",
    codeSnippet: `const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); // 0 es el valor inicial del acumulador

console.log(sum); // Salida: 10`,
    bodyContent: null,
    bodyText:
      "Ejecuta una función 'reductora' sobre cada elemento de un array, devolviendo un <b>único valor</b> resultante. Útil para sumar elementos, aplanar arrays, etc.",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Métodos de Array: Iteración",
    order: 15,
  },
  {
    id: "array-iteracion-some-every",
    colClasses: "col-md-6 col-lg-4",
    headerIcon: "❓",
    headerTitle: "some() y every()",
    codeLanguage: "javascript",
    codeSnippet: `const numbers = [1, 2, 3, 4, 5];

const hasEven = numbers.some(number => number % 2 === 0);
console.log(hasEven); // Salida: true (al menos uno es par)

const allEven = numbers.every(number => number % 2 === 0);
console.log(allEven); // Salida: false (no todos son pares)`,
    bodyContent: null,
    bodyText:
      "<b>some()</b>: Comprueba si al menos un elemento en el array pasa la prueba de la función callback. Devuelve `true` o `false`.<br><b>every()</b>: Comprueba si todos los elementos en el array pasan la prueba. Devuelve `true` o `false`.",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/some",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Métodos de Array: Iteración",
    order: 16,
  },
  {
    id: "array-iteracion-find-findIndex",
    colClasses: "col-md-6 col-lg-4",
    headerIcon: "📍",
    headerTitle: "find() y findIndex()",
    codeLanguage: "javascript",
    codeSnippet: `const users = [{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}];

const bob = users.find(user => user.name === 'Bob');
console.log(bob); // Salida: {id: 2, name: 'Bob'}

const bobIndex = users.findIndex(user => user.name === 'Bob');
console.log(bobIndex); // Salida: 1`,
    bodyContent: null,
    bodyText:
      "<b>find()</b>: Devuelve el <b>primer elemento</b> del array que satisface la función de prueba proporcionada. Si no encuentra ninguno, devuelve `undefined`.<br><b>findIndex()</b>: Devuelve el <b>índice</b> del primer elemento que satisface la función de prueba. Si no encuentra ninguno, devuelve `-1`.",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Métodos de Array: Iteración",
    order: 17,
  },

  // --- Métodos de Mutación (Modifican el Array Original) ---
  {
    id: "array-mutacion-push-pop",
    colClasses: "col-md-6 col-lg-4",
    headerIcon: "➡️",
    headerTitle: "push() y pop()",
    codeLanguage: "javascript",
    codeSnippet: `const fruits = ['apple', 'banana'];

fruits.push('orange');
console.log(fruits); // Salida: ['apple', 'banana', 'orange']

const lastFruit = fruits.pop();
console.log(lastFruit); // Salida: 'orange'
console.log(fruits);    // Salida: ['apple', 'banana']`,
    bodyContent: null,
    bodyText:
      "<b>push()</b>: Añade uno o más elementos al <b>final</b> de un array y devuelve la nueva longitud del array. <br><b>pop()</b>: Elimina el <b>último elemento</b> de un array y lo devuelve. Modifican el array original.",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/push",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Métodos de Array: Mutación",
    order: 18,
  },
  {
    id: "array-mutacion-shift-unshift",
    colClasses: "col-md-6 col-lg-4",
    headerIcon: "⬅️",
    headerTitle: "shift() y unshift()",
    codeLanguage: "javascript",
    codeSnippet: `const fruits = ['apple', 'banana'];

fruits.unshift('grape');
console.log(fruits); // Salida: ['grape', 'apple', 'banana']

const firstFruit = fruits.shift();
console.log(firstFruit); // Salida: 'grape'
console.log(fruits);     // Salida: ['apple', 'banana']`,
    bodyContent: null,
    bodyText:
      "<b>unshift()</b>: Añade uno o más elementos al <b>inicio</b> de un array y devuelve la nueva longitud. <br><b>shift()</b>: Elimina el <b>primer elemento</b> de un array y lo devuelve. Ambos modifican el array original.",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/shift",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Métodos de Array: Mutación",
    order: 19,
  },
  {
    id: "array-mutacion-splice",
    colClasses: "col-md-6 col-lg-4",
    headerIcon: "✂️",
    headerTitle: "splice()",
    codeLanguage: "javascript",
    codeSnippet: `const months = ['Jan', 'March', 'April', 'June'];

months.splice(1, 0, 'Feb'); // (índice, # elementos a eliminar, elementos a añadir)
console.log(months); // Salida: ['Jan', 'Feb', 'March', 'April', 'June']

months.splice(4, 1, 'May'); // Elimina 'June' y añade 'May'
console.log(months); // Salida: ['Jan', 'Feb', 'March', 'April', 'May']`,
    bodyContent: null,
    bodyText:
      "Cambia el contenido de un array <b>eliminando</b> elementos existentes y/o <b>añadiendo</b> nuevos elementos. Es un método muy versátil para modificar arrays en su lugar.",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/splice",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Métodos de Array: Mutación",
    order: 20,
  },
  {
    id: "array-mutacion-sort-reverse",
    colClasses: "col-md-6",
    headerIcon: "↔️",
    headerTitle: "sort() y reverse()",
    codeLanguage: "javascript",
    codeSnippet: `const fruits = ['banana', 'apple', 'orange'];
fruits.sort();
console.log(fruits); // Salida: ['apple', 'banana', 'orange']

const numbers = [3, 1, 10, 2];
numbers.sort((a, b) => a - b); // Ordenar numéricamente ascendente
console.log(numbers); // Salida: [1, 2, 3, 10]

fruits.reverse();
console.log(fruits); // Salida: ['orange', 'banana', 'apple'] (después del sort anterior)`,
    bodyContent: null,
    bodyText:
      "<b>sort()</b>: Ordena los elementos de un array *in place* (modificando el original) y devuelve el array ordenado. Por defecto, ordena como cadenas de texto.<br><b>reverse()</b>: Invierte el orden de los elementos de un array *in place*. Ambos modifican el array original.",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Métodos de Array: Mutación",
    order: 21,
  },

  // --- Métodos de Acceso/Combinación (No Mutan el Array Original) ---
  {
    id: "array-acceso-concat",
    colClasses: "col-md-6 col-lg-4",
    headerIcon: "➕",
    headerTitle: "concat()",
    codeLanguage: "javascript",
    codeSnippet: `const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = arr1.concat(arr2, [5, 6]);

console.log(arr3); // Salida: [1, 2, 3, 4, 5, 6]
console.log(arr1); // Salida: [1, 2] (arr1 no se modificó)`,
    bodyContent: null,
    bodyText:
      "Se usa para fusionar dos o más arrays. Este método <b>no cambia los arrays existentes</b>, sino que devuelve un <b>nuevo array</b>.",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/concat",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Métodos de Array: Acceso/Combinación",
    order: 22,
  },
  {
    id: "array-acceso-slice",
    colClasses: "col-md-6 col-lg-4",
    headerIcon: "🔪",
    headerTitle: "slice()",
    codeLanguage: "javascript",
    codeSnippet: `const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));      // Salida: ['camel', 'duck', 'elephant']
console.log(animals.slice(2, 4));   // Salida: ['camel', 'duck']
console.log(animals.slice(1, 5));   // Salida: ['bison', 'camel', 'duck', 'elephant']
console.log(animals);               // Salida: ['ant', 'bison', 'camel', 'duck', 'elephant'] (original no mutado)`,
    bodyContent: null,
    bodyText:
      "Devuelve una copia superficial de una porción de un array en un <b>nuevo array</b> seleccionado desde `inicio` hasta `fin` (fin no incluido). El array original no se modifica.",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/slice",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Métodos de Array: Acceso/Combinación",
    order: 23,
  },
  {
    id: "array-acceso-join-split",
    colClasses: "col-md-6 col-lg-4",
    headerIcon: "↔️",
    headerTitle: "join() y String.split()",
    codeLanguage: "javascript",
    codeSnippet: `const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join());     // Salida: "Fire,Air,Water"
console.log(elements.join(''));   // Salida: "FireAirWater"
console.log(elements.join('-'));  // Salida: "Fire-Air-Water"

const sentence = "Hello world from JavaScript";
const words = sentence.split(' ');
console.log(words); // Salida: ["Hello", "world", "from", "JavaScript"]`,
    bodyContent: null,
    bodyText:
      "<b>join()</b>: Une todos los elementos de un array en una cadena de texto y la devuelve. Puedes especificar un separador.<br><b>String.split()</b>: (Es un método de String, pero muy útil para arrays) Divide una cadena de texto en un array de subcadenas, usando un separador.",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/join",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Métodos de Array: Acceso/Combinación",
    order: 24,
  },
  {
    id: "array-acceso-indexOf-includes",
    colClasses: "col-md-6",
    headerIcon: "🕵️‍♀️",
    headerTitle: "indexOf() y includes()",
    codeLanguage: "javascript",
    codeSnippet: `const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));    // Salida: 1
console.log(beasts.indexOf('giraffe'));  // Salida: -1 (no encontrado)

console.log(beasts.includes('camel'));   // Salida: true
console.log(beasts.includes('giraffe')); // Salida: false`,
    bodyContent: null,
    bodyText:
      "<b>indexOf()</b>: Devuelve el <b>primer índice</b> en el que se puede encontrar un elemento dado en el array, o `-1` si no está presente.<br><b>includes()</b>: Determina si un array incluye un determinado elemento, devolviendo `true` o `false` según corresponda.",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Métodos de Array: Acceso/Combinación",
    order: 25,
  },
  // --- ES6+ (Características Modernas) ---
  {
    id: "js-es6-desestructuracion",
    colClasses: "col-md-6",
    headerIcon: "📦",
    headerTitle: "Desestructuración (Destructuring)",
    codeLanguage: "javascript",
    codeSnippet: `// Desestructuración de arrays
const colores = ['rojo', 'verde', 'azul'];
const [c1, c2] = colores;
console.log(c1, c2); // Salida: rojo verde

// Desestructuración de objetos
const usuario = {
  nombre: 'Carlos',
  edad: 35,
  ciudad: 'Madrid'
};
const { nombre, edad } = usuario;
console.log(nombre, edad); // Salida: Carlos 35

// Con alias y valor por defecto
const { ciudad: ciudadResidencia = 'Desconocida', email = 'N/A' } = usuario;
console.log(ciudadResidencia, email); // Salida: Madrid N/A`,
    bodyContent: null,
    bodyText:
      "La desestructuración es una forma conveniente de extraer valores de arrays u objetos en variables separadas. Hace el código más legible y conciso, especialmente al trabajar con propiedades de objetos o elementos de array.",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "ES6+ (Características Modernas)",
    order: 26, // Ajusta este orden según cuántos métodos de array agregues
  },
  {
    id: "js-es6-spread-rest",
    colClasses: "col-md-6",
    headerIcon: "…",
    headerTitle: "Operadores Spread (...) y Rest (...)",
    codeLanguage: "javascript",
    codeSnippet: `// Operador Spread (...) - Expande un iterable
const arr1 = [1, 2];
const arr2 = [3, 4];
const combinedArr = [...arr1, ...arr2, 5];
console.log(combinedArr); // Salida: [1, 2, 3, 4, 5]

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObj = { ...obj1, ...obj2, e: 5 };
console.log(combinedObj); // Salida: { a: 1, b: 2, c: 3, d: 4, e: 5 }

// Operador Rest (...) - Recoge elementos restantes en un array
function sum(first, ...restOfNumbers) {
  return first + restOfNumbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Salida: 10 (1 + (2+3+4))`,
    bodyContent: null,
    bodyText:
      "El operador <strong>Spread</strong> `...` se usa para expandir elementos de iterables (arrays, objetos, strings) en lugares donde se esperan múltiples elementos. El operador <strong>Rest</strong> `...` se usa en parámetros de función o desestructuración para recoger el resto de elementos en un array.",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "ES6+ (Características Modernas)",
    order: 27,
  },
  {
    id: "js-es6-clases",
    colClasses: "col-md-6",
    headerIcon: "🏛️",
    headerTitle: "Clases (ES6)",
    codeLanguage: "javascript",
    codeSnippet: `class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(\`Hola, mi nombre es \${this.nombre} y tengo \${this.edad} años.\`);
  }

  static infoGeneral() {
    console.log("Esto es una clase para crear objetos Persona.");
  }
}

const persona1 = new Persona("Laura", 22);
persona1.saludar(); // Salida: Hola, mi nombre es Laura y tengo 22 años.
Persona.infoGeneral(); // Salida: Esto es una clase para crear objetos Persona.

class Estudiante extends Persona {
  constructor(nombre, edad, carrera) {
    super(nombre, edad); // Llama al constructor de la clase padre
    this.carrera = carrera;
  }

  presentarse() {
    console.log(\`Soy \${this.nombre}, estudio \${this.carrera}.\`);
  }
}

const estudiante1 = new Estudiante("Diego", 20, "Ingeniería");
estudiante1.saludar();     // Heredado de Persona
estudiante1.presentarse(); // Método propio`,
    bodyContent: null,
    bodyText:
      "Las clases en ES6 proporcionan una sintaxis más clara y familiar para crear objetos y manejar la herencia. Incluyen constructores, métodos de instancia y métodos estáticos.",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "ES6+ (Características Modernas)",
    order: 28,
  },
  {
    id: "js-es6-modulos",
    colClasses: "col-md-6",
    headerIcon: "📦",
    headerTitle: "Módulos (import/export)",
    codeLanguage: "javascript",
    codeSnippet: `// archivo: utilidades.js
export const PI = 3.14159;

export function sumar(a, b) {
  return a + b;
}

export default class Calculadora {
  restar(a, b) {
    return a - b;
  }
}

// archivo: app.js
import { PI, sumar } from './utilidades.js';
import Calculadora from './utilidades.js'; // Importación por defecto

console.log(PI); // Salida: 3.14159
console.log(sumar(10, 5)); // Salida: 15

const calc = new Calculadora();
console.log(calc.restar(10, 5)); // Salida: 5`,
    bodyContent: null,
    bodyText:
      "Los <strong>módulos ES6</strong> (`import`/`export`) permiten organizar el código en archivos separados, mejorando la modularidad y la reutilización. Puedes tener exportaciones nombradas (para múltiples elementos) y una exportación por defecto por archivo.",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Modules",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "ES6+ (Características Modernas)",
    order: 29,
  },
  // --- Programación Asíncrona ---
  {
    id: "js-async-callbacks",
    colClasses: "col-md-6 col-lg-4",
    headerIcon: "⏳",
    headerTitle: "Callbacks (Programación Asíncrona)",
    codeLanguage: "javascript",
    codeSnippet: `function fetchData(callback) {
  setTimeout(() => {
    const data = "Datos obtenidos";
    callback(data); // Llama al callback una vez que los datos están listos
  }, 2000); // Simula una operación que tarda 2 segundos
}

console.log("Iniciando solicitud de datos...");
fetchData((result) => {
  console.log("Resultado del callback: " + result);
});
console.log("Solicitud enviada (código no bloqueado).");
// Salida:
// Iniciando solicitud de datos...
// Solicitud enviada (código no bloqueado).
// (después de 2 segundos)
// Resultado del callback: Datos obtenidos`,
    bodyContent: null,
    bodyText:
      "Los callbacks son funciones que se pasan como argumentos a otras funciones y se ejecutan después de que una operación asíncrona ha terminado. Son la base de la asincronía en JS, pero pueden llevar al 'callback hell' con muchas operaciones anidadas.",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Glossary/Callback_function",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Programación Asíncrona",
    order: 30,
  },
  {
    id: "js-async-promises",
    colClasses: "col-md-6 col-lg-4",
    headerIcon: "🤞",
    headerTitle: "Promises",
    codeLanguage: "javascript",
    codeSnippet: `const fetchDataPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // Simula éxito o fracaso
      if (success) {
        resolve("Datos obtenidos con éxito!");
      } else {
        reject("Error al obtener datos.");
      }
    }, 2000);
  });
};

fetchDataPromise()
  .then((data) => {
    console.log("Promesa resuelta:", data);
  })
  .catch((error) => {
    console.error("Promesa rechazada:", error);
  })
  .finally(() => {
    console.log("Promesa finalizada.");
  });
// Salida (si success es true):
// Promesa resuelta: Datos obtenidos con éxito!
// Promesa finalizada.`,
    bodyContent: null,
    bodyText:
      "Las Promises (promesas) son objetos que representan la eventual finalización o falla de una operación asíncrona y su valor resultante. Mejoran la legibilidad frente a los callbacks anidados, con métodos <code>.then()</code> para el éxito, <code>.catch()</code> para errores y <code>.finally()</code> para limpieza.",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Programación Asíncrona",
    order: 31,
  },
  {
    id: "js-async-async-await",
    colClasses: "col-md-6 col-lg-4",
    headerIcon: "⏱️",
    headerTitle: "Async/Await (ES2017)",
    codeLanguage: "javascript",
    codeSnippet: `const fetchDataAsync = async () => {
  return new Promise(resolve => setTimeout(() => resolve("Datos Async/Await"), 1500));
};

async function processData() {
  try {
    console.log("Iniciando proceso Async/Await...");
    const data = await fetchDataAsync(); // 'await' pausa la ejecución hasta que la promesa se resuelve
    console.log("Datos obtenidos:", data);
    console.log("Proceso Async/Await completado.");
  } catch (error) {
    console.error("Error en proceso Async/Await:", error);
  }
}

processData();
// Salida:
// Iniciando proceso Async/Await...
// (después de 1.5 segundos)
// Datos obtenidos: Datos Async/Await
// Proceso Async/Await completado.`,
    bodyContent: null,
    bodyText:
      "<code>async/await</code> hace que el código asíncrono parezca síncrono y sea más fácil de leer y escribir. Las funciones <code>async</code> siempre devuelven una Promesa, y <code>await</code> solo puede usarse dentro de una función <code>async</code>.",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Programación Asíncrona",
    order: 32,
  },
  // --- DOM (Document Object Model) ---
  {
    id: "js-dom-seleccion",
    colClasses: "col-md-6",
    headerIcon: "🔍",
    headerTitle: "Selección de Elementos del DOM",
    codeLanguage: "javascript",
    codeSnippet: `// Por ID (el más eficiente si el ID es único)
const miDiv = document.getElementById('miId');

// Por Clase
const elementosClase = document.getElementsByClassName('miClase'); // HTMLCollection (similar a array)

// Por Nombre de Etiqueta
const parrafos = document.getElementsByTagName('p'); // HTMLCollection

// Por Selector CSS (Moderno y flexible)
const primerElemento = document.querySelector('#miId .claseHijo'); // Primer elemento que coincide
const todosLosElementos = document.querySelectorAll('div.item'); // NodeList de todos los que coinciden

// Acceso a elementos del NodeList (funciona como array)
if (todosLosElementos.length > 0) {
  console.log(todosLosElementos[0]);
  todosLosElementos.forEach(el => console.log(el.textContent));
}`,
    bodyContent: null,
    bodyText:
      "Seleccionar elementos HTML es el primer paso para interactuar con el DOM. <code>querySelector</code> y <code>querySelectorAll</code> son los métodos más versátiles, ya que utilizan selectores CSS. `HTMLCollection` y `NodeList` no son arrays reales, pero se pueden iterar.",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/API/Document/querySelector",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "DOM y BOM",
    order: 33,
  },
  {
    id: "js-dom-modificacion",
    colClasses: "col-md-6",
    headerIcon: "📝",
    headerTitle: "Modificación de Elementos del DOM",
    codeLanguage: "javascript",
    codeSnippet: `const titulo = document.getElementById('titulo');
const lista = document.getElementById('lista');

// Modificar contenido de texto
titulo.textContent = 'Nuevo Título'; // Solo texto
titulo.innerHTML = '<em>Título</em> modificado'; // Permite HTML

// Modificar atributos
const imagen = document.getElementById('imagen');
imagen.src = 'nueva-imagen.jpg';
imagen.alt = 'Descripción de la nueva imagen';
imagen.setAttribute('data-id', '123'); // Para atributos personalizados

// Modificar estilos
titulo.style.color = 'blue';
titulo.style.fontSize = '24px'; // CamelCase para propiedades CSS

// Añadir/Remover clases
titulo.classList.add('clase-activa');
titulo.classList.remove('clase-inactiva');
titulo.classList.toggle('resaltado'); // Añade si no existe, remueve si existe

// Crear y añadir elementos
const nuevoElemento = document.createElement('li');
nuevoElemento.textContent = 'Nuevo Ítem';
lista.appendChild(nuevoElemento); // Añadir al final

// Eliminar elemento
// lista.removeChild(nuevoElemento);`,
    bodyContent: null,
    bodyText:
      "Una vez seleccionado un elemento, puedes manipular su contenido (texto o HTML), atributos, estilos y clases. También puedes crear nuevos elementos y añadirlos o eliminarlos del DOM.",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/API/Element",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "DOM y BOM",
    order: 34,
  },
  {
    id: "js-dom-eventos",
    colClasses: "col-md-6",
    headerIcon: "👂",
    headerTitle: "Eventos del DOM",
    codeLanguage: "javascript",
    codeSnippet: `const boton = document.getElementById('miBoton');
const inputTexto = document.getElementById('miInput');

// Evento de click
boton.addEventListener('click', () => {
  alert('¡Botón clicado!');
});

// Evento de entrada (cuando el valor del input cambia)
inputTexto.addEventListener('input', (event) => {
  console.log('Texto actual:', event.target.value);
});

// Evento al cargar el contenido del DOM (antes que imágenes, etc.)
document.addEventListener('DOMContentLoaded', () => {
  console.log('El DOM está listo!');
  // Aquí es seguro interactuar con elementos del DOM
});

// Remover un listener (si la función no es anónima)
function handleClick() {
  console.log('Clic manejado.');
}
boton.addEventListener('click', handleClick);
// boton.removeEventListener('click', handleClick);`,
    bodyContent: null,
    bodyText:
      "Los eventos permiten que tu JavaScript reaccione a las interacciones del usuario (clicks, teclado, etc.) y a cambios en el navegador. <code>addEventListener</code> es la forma recomendada para adjuntar manejadores de eventos.",
    footerLinkInformation: "https://developer.mozilla.org/es/docs/Web/Events",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "DOM y BOM",
    order: 35,
  },
  // --- BOM (Browser Object Model) ---
  {
    id: "js-bom-window",
    colClasses: "col-md-6",
    headerIcon: "🌐",
    headerTitle: "Objeto Window (BOM)",
    codeLanguage: "javascript",
    codeSnippet: `// El objeto global del lado del cliente
console.log(window); // Representa la ventana del navegador

// Propiedades comunes
console.log(window.innerHeight); // Altura del viewport
console.log(window.innerWidth);  // Ancho del viewport
console.log(window.location.href); // URL actual

// Métodos comunes
window.alert("¡Hola desde el navegador!"); // Muestra un cuadro de alerta
window.confirm("¿Estás seguro?"); // Muestra un cuadro de confirmación
window.prompt("Ingresa tu nombre:"); // Muestra un cuadro de entrada de texto

// Redireccionar
window.location.href = "https://www.google.com";
window.location.assign("https://www.google.com"); // Carga nueva URL
window.location.replace("https://www.google.com"); // Reemplaza la URL actual (no se puede volver con el botón de atrás)

// Abrir una nueva ventana/tab
const nuevaVentana = window.open("https://www.example.com", "_blank", "width=500,height=400");
if (nuevaVentana) {
  nuevaVentana.focus();
}

// Scroll programático
window.scrollTo(0, 500); // Scroll a 500px hacia abajo
window.scrollBy(0, 100); // Scroll 100px desde la posición actual`,
    bodyContent: null,
    bodyText:
      "El objeto <strong>Window</strong> es el objeto global que representa la ventana del navegador que contiene el documento. Es la raíz de todo el BOM y permite interactuar con la ventana, el documento y la pantalla. Sus propiedades y métodos permiten controlar la ventana del navegador.",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/API/Window",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "DOM y BOM",
    order: 36,
  },
//   {
//     id: "js-bom-navigator-screen",
//     colClasses: "col-md-6",
//     headerIcon: "🖥️",
//     headerTitle: "Objetos Navigator y Screen (BOM)",
//     codeLanguage: "javascript",
//     codeSnippet: `// Objeto Navigator: información del navegador
// console.log(navigator.userAgent);     // Cadena User-Agent del navegador
// console.log(navigator.platform);      // Plataforma del navegador (e.g., "Win32", "MacIntel")
// console.log(navigator.cookieEnabled); // true si las cookies están habilitadas
// console.log(navigator.onLine);        // true si el navegador está online

// // Objeto Screen: información de la pantalla del usuario
// console.log(screen.width);         // Ancho total de la pantalla en píxeles
// console.log(screen.height);        // Altura total de la pantalla en píxeles
// console.log(screen.availWidth);    // Ancho disponible para la ventana (excluyendo barras de tareas)
// console.log(screen.availHeight);   // Altura disponible para la ventana`,
//     bodyContent: null,
//     bodyText:
//       "El objeto <strong>Navigator</strong> proporciona información sobre el navegador del usuario (nombre, versión, plataforma, etc.). El objeto <strong>Screen</strong> contiene información sobre la pantalla del usuario, como sus dimensiones y profundidad de color. Son útiles para la detección de características o análisis.",
//     footerLinkInformation:
//       "https://developer.mozilla.org/es/docs/Web/API/Navigator",
//     footerLinkDemo: null,
//     footerPreview: null,
//     footerVideo: null,
//     section: "DOM y BOM",
//     order: 37,
//   },
//   {
//     id: "js-bom-history-location",
//     colClasses: "col-md-6",
//     headerIcon: "📍",
//     headerTitle: "Objetos History y Location (BOM)",
//     codeLanguage: "javascript",
//     codeSnippet: `// Objeto Location: información y control de la URL actual
// console.log(location.href);     // URL completa
// console.log(location.protocol); // Protocolo (ej: "http:", "https:")
// console.log(location.host);     // Nombre del host y puerto
// console.log(location.pathname); // Ruta del archivo
// console.log(location.search);   // Cadena de consulta (query string)
// console.log(location.hash);     // Fragmento (hash)

// // Modificar URL (provoca navegación)
// location.href = "nueva_pagina.html"; // Redireccionar
// location.reload(); // Recargar la página actual

// // Objeto History: historial de navegación de la sesión
// history.back();    // Navegar a la página anterior en el historial
// history.forward(); // Navegar a la página siguiente
// history.go(-2);    // Ir dos páginas atrás
// console.log(history.length); // Número de entradas en el historial

// // history.pushState() y history.replaceState() para manipular el historial
// // Útil en SPAs (Single Page Applications) para cambiar la URL sin recargar
// history.pushState({ page: 1 }, "Título página 1", "/pagina1");
// console.log(location.pathname); // Salida: /pagina1
// history.replaceState({ page: 2 }, "Título página 2", "/pagina2");
// console.log(location.pathname); // Salida: /pagina2`,
//     bodyContent: null,
//     bodyText:
//       "El objeto <strong>Location</strong> permite acceder a la URL actual del documento y navegar a otras URLs. El objeto <strong>History</strong> permite acceder al historial de navegación de la ventana. Ambos son fundamentales para la navegación y la manipulación de la URL en aplicaciones web.",
//     footerLinkInformation:
//       "https://developer.mozilla.org/es/docs/Web/API/Location",
//     footerLinkDemo: null,
//     footerPreview: null,
//     footerVideo: null,
//     section: "DOM y BOM",
//     order: 38,
//   },
// --- Asincronismo Básico (Timers) ---
  {
    id: "js-async-settimeout",
    colClasses: "col-md-6 col-lg-4",
    headerIcon: "⏳",
    headerTitle: "setTimeout()",
    codeLanguage: "javascript",
    codeSnippet: `// Ejecuta una función una vez, después de un retardo
console.log("Inicio de setTimeout");

const timeoutId = setTimeout(() => {
  console.log("¡Han pasado 2 segundos!");
}, 2000); // 2000 milisegundos = 2 segundos

console.log("setTimeout programado.");

// Para cancelar el timeout antes de que se ejecute
// clearTimeout(timeoutId);
// console.log("Timeout cancelado (si se llamó antes de 2s).");

// setTimeout con argumentos para la función callback
setTimeout((name, age) => {
  console.log(\`Hola, soy \${name} y tengo \${age} años.\`);
}, 1000, "Ana", 30); // Argumentos pasados después del delay`,
    bodyContent: null,
    bodyText:
      "La función `setTimeout()` ejecuta un bloque de código o una función **una única vez** después de un retardo especificado en milisegundos. Devuelve un `ID` numérico que puedes usar con `clearTimeout()` para cancelar la ejecución pendiente.",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Asincronismo Básico",
    order: 37,
  },
  {
    id: "js-async-setinterval",
    colClasses: "col-md-6 col-lg-4",
    headerIcon: "⏰",
    headerTitle: "setInterval()",
    codeLanguage: "javascript",
    codeSnippet: `// Ejecuta una función repetidamente, con un retardo fijo entre llamadas
let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log(\`Intervalo ejecutado: \${count} veces\`);

  if (count >= 3) {
    clearInterval(intervalId); // Detener el intervalo después de 3 ejecuciones
    console.log("Intervalo detenido.");
  }
}, 1000); // Se ejecuta cada 1000 milisegundos (1 segundo)

console.log("setInterval programado.");`,
    bodyContent: null,
    bodyText:
      "La función `setInterval()` ejecuta un bloque de código o una función **repetidamente** cada cierto intervalo de tiempo en milisegundos. Devuelve un `ID` numérico que debes usar con `clearInterval()` para detener la ejecución repetida y evitar fugas de memoria.",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/API/WindowOrWorkerGlobalScope/setInterval",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Asincronismo Básico",
    order: 38,
  },
  // --- Objeto Date ---
  {
    id: "js-date-creacion",
    colClasses: "col-md-6 col-lg-4",
    headerIcon: "📅",
    headerTitle: "Creación de Fechas (Date)",
    codeLanguage: "javascript",
    codeSnippet: `// 1. Fecha actual (sin argumentos)
const now = new Date();
console.log(now); // Salida: La fecha y hora actual (ej: Thu Jul 18 2025 11:11:38 GMT-0300 (Argentina Standard Time))

// 2. Con una cadena de fecha (formato ISO 8601 o fecha legible)
const specificDate = new Date("2024-03-15T10:30:00Z"); // UTC
console.log(specificDate); // Salida: Fri Mar 15 2024 07:30:00 GMT-0300 (Argentina Standard Time) (ajustado a la zona horaria local)

const anotherDate = new Date("March 15, 2024 10:30:00"); // Zona horaria local por defecto
console.log(anotherDate); // Salida: Fri Mar 15 2024 10:30:00 GMT-0300 (Argentina Standard Time)

// 3. Con argumentos numéricos (Año, Mes, Día, Hora, Minuto, Segundo, Milisegundo)
// Meses son 0-indexados (0 = Enero, 11 = Diciembre)
const y2k = new Date(2000, 0, 1, 0, 0, 0, 0); // Enero 1, 2000, 00:00:00
console.log(y2k); // Salida: Sat Jan 01 2000 00:00:00 GMT-0300 (Argentina Standard Time)

const christmas = new Date(2025, 11, 25); // Diciembre 25, 2025
console.log(christmas); // Salida: Thu Dec 25 2025 00:00:00 GMT-0300 (Argentina Standard Time)

// 4. Con un timestamp (milisegundos desde la 'Época Unix' - 1 de enero de 1970, UTC)
const epochTime = new Date(0);
console.log(epochTime); // Salida: Wed Dec 31 1969 21:00:00 GMT-0300 (Argentina Standard Time) (ajustado a la zona horaria local)

const tenSecondsLater = new Date(10 * 1000); // 10 segundos después del 1 de enero de 1970 UTC
console.log(tenSecondsLater); // Salida: Wed Dec 31 1969 21:00:10 GMT-0300 (Argentina Standard Time)`,
    bodyContent: null,
    bodyText:
      "El objeto `Date` permite trabajar con fechas y horas. Se puede crear una fecha actual, a partir de una cadena de texto, especificando componentes numéricos (recordando que los meses son base 0) o a partir de un timestamp.",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Objeto Date",
    order: 39,
  },
  {
    id: "js-date-obtener-componentes",
    colClasses: "col-md-6 col-lg-4",
    headerIcon: "🗓️",
    headerTitle: "Obtener Componentes de Fecha",
    codeLanguage: "javascript",
    codeSnippet: `const d = new Date(); // Fecha y hora actual

// Componentes locales
console.log(d.getFullYear()); // Año (ej: 2025)
console.log(d.getMonth());    // Mes (0-11, 0=Enero)
console.log(d.getDate());     // Día del mes (1-31)
console.log(d.getDay());      // Día de la semana (0-6, 0=Domingo)
console.log(d.getHours());    // Hora (0-23)
console.log(d.getMinutes());  // Minutos (0-59)
console.log(d.getSeconds());  // Segundos (0-59)
console.log(d.getMilliseconds()); // Milisegundos (0-999)
console.log(d.getTime());     // Milisegundos desde la época Unix

// Componentes UTC (Universal Coordinated Time)
console.log(d.getUTCFullYear());
console.log(d.getUTCMonth());
console.log(d.getUTCDate());
console.log(d.getUTCDay());
console.log(d.getUTCHours());
console.log(d.getUTCMinutes());
console.log(d.getUTCSeconds());
console.log(d.getUTCMilliseconds());`,
    bodyContent: null,
    bodyText:
      "Los métodos `get*()` permiten extraer los componentes individuales de una fecha, tanto en la zona horaria local del usuario como en UTC. Recuerda que `getMonth()` devuelve un valor de 0 a 11 y `getDay()` de 0 a 6 (Domingo a Sábado).",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Objeto Date",
    order: 40,
  },
  {
    id: "js-date-establecer-componentes",
    colClasses: "col-md-6 col-lg-4",
    headerIcon: "✏️",
    headerTitle: "Establecer Componentes de Fecha",
    codeLanguage: "javascript",
    codeSnippet: `const d = new Date(); // Fecha y hora actual

d.setFullYear(2026);
d.setMonth(5);     // Junio (0-indexado)
d.setDate(10);     // Día 10
d.setHours(14);    // 14:00 (2 PM)
d.setMinutes(30);
d.setSeconds(45);
d.setMilliseconds(123);

console.log(d); // Salida: La fecha y hora modificada

// Puedes establecer varios componentes a la vez con setFullYear, setMonth, setDate
const anotherDate = new Date();
anotherDate.setFullYear(2027, 8, 20); // Septiembre 20, 2027
console.log(anotherDate);

// Establecer timestamp
const resetDate = new Date();
resetDate.setTime(0); // Volver al Epoch Unix
console.log(resetDate); // Salida: Wed Dec 31 1969 21:00:00 GMT-0300 (ajustado a zona horaria local)`,
    bodyContent: null,
    bodyText:
      "Los métodos `set*()` permiten modificar los componentes de una fecha existente. Estos métodos mutan el objeto `Date` original. Al igual que los `get*()`, existen sus equivalentes `setUTC*()` para modificar en UTC.",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Objeto Date",
    order: 41,
  },
  {
    id: "js-date-formateo",
    colClasses: "col-md-6",
    headerIcon: "✍️",
    headerTitle: "Formateo de Fechas",
    codeLanguage: "javascript",
    codeSnippet: `const d = new Date();

// Formato de cadena estándar (depende del navegador)
console.log(d.toString());     // "Thu Jul 18 2025 11:11:38 GMT-0300 (Argentina Standard Time)"
console.log(d.toDateString()); // "Thu Jul 18 2025"
console.log(d.toTimeString()); // "11:11:38 GMT-0300 (Argentina Standard Time)"

// Formato ISO
console.log(d.toISOString());  // "2025-07-18T14:11:38.XXXZ" (UTC)

// Formato local (depende del idioma del navegador/sistema)
console.log(d.toLocaleString()); // "18/7/2025, 11:11:38"
console.log(d.toLocaleDateString()); // "18/7/2025"
console.log(d.toLocaleTimeString()); // "11:11:38"

// Opciones de formato con toLocaleString (más control)
const optionsDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
console.log(d.toLocaleDateString('es-AR', optionsDate)); // "jueves, 18 de julio de 2025"

const optionsTime = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
console.log(d.toLocaleTimeString('es-AR', optionsTime)); // "11:11:38"

const optionsDateTime = { year: 'numeric', month: 'numeric', day: 'numeric',
                          hour: '2-digit', minute: '2-digit', second: '2-digit',
                          timeZoneName: 'short' };
console.log(d.toLocaleString('es-AR', optionsDateTime)); // "18/7/2025, 11:11:38 GMT-3"`,
    bodyContent: null,
    bodyText:
      "JavaScript ofrece varios métodos para formatear objetos `Date` en cadenas de texto. Los métodos `to*String()` proporcionan formatos predeterminados. Para un control más preciso sobre el idioma, el estilo y la zona horaria, se recomienda `toLocaleString()`, `toLocaleDateString()` y `toLocaleTimeString()`.",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Objeto Date",
    order: 42,
  },
  {
    id: "js-date-operaciones-calculos",
    colClasses: "col-md-6",
    headerIcon: "➕➖",
    headerTitle: "Operaciones y Cálculos con Fechas",
    codeLanguage: "javascript",
    codeSnippet: `const date1 = new Date("2025-01-01T10:00:00Z"); // UTC
const date2 = new Date("2025-01-05T12:00:00Z"); // UTC

// Diferencia entre fechas (en milisegundos)
const diffMs = date2.getTime() - date1.getTime();
console.log(\`Diferencia en milisegundos: \${diffMs}\`); // Salida: 352800000

const diffSeconds = diffMs / 1000;
const diffMinutes = diffSeconds / 60;
const diffHours = diffMinutes / 60;
const diffDays = diffHours / 24;

console.log(\`Diferencia en días: \${diffDays}\`); // Salida: 4.083... (4 días y 2 horas)

// Sumar/restar tiempo
const futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 7); // Sumar 7 días
console.log("Fecha dentro de 7 días:", futureDate);

const pastDate = new Date();
pastDate.setHours(pastDate.getHours() - 3); // Restar 3 horas
console.log("Fecha hace 3 horas:", pastDate);

// Comparar fechas
const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);

console.log("¿Es hoy menor que mañana?", today < tomorrow); // Salida: true
console.log("¿Son hoy y mañana la misma fecha?", today.getTime() === tomorrow.getTime()); // Salida: false

// Métodos estáticos de Date
console.log(Date.now()); // Milisegundos actuales desde el Epoch Unix
console.log(Date.parse("2025-07-18")); // Parsea una cadena y devuelve milisegundos`,
    bodyContent: null,
    bodyText:
      "Las fechas se pueden comparar y manipular. La resta de dos objetos `Date` devuelve la diferencia en milisegundos, permitiendo calcular diferencias en otras unidades. Los métodos `set*()` también son útiles para sumar o restar tiempo, y `Date.now()` es práctico para obtener el timestamp actual.",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Objeto Date",
    order: 43,
  },


  // --- JSON ---
  {
    id: "js-json",
    colClasses: "col-md-6",
    headerIcon: "📊",
    headerTitle: "JSON (JavaScript Object Notation)",
    codeLanguage: "javascript",
    codeSnippet: `const jsonString = '{"nombre": "Alice", "edad": 30, "esEstudiante": false, "hobbies": ["leer", "codificar"]}';

// JSON.parse(): Convierte una cadena JSON a un objeto JavaScript
const objetoJS = JSON.parse(jsonString);
console.log(objetoJS.nombre);       // Salida: Alice
console.log(objetoJS.hobbies[1]);   // Salida: codificar

// JSON.stringify(): Convierte un objeto JavaScript a una cadena JSON
const nuevoObjeto = {
  producto: "Laptop",
  precio: 1200,
  disponible: true
};
const nuevoJsonString = JSON.stringify(nuevoObjeto, null, 2); // el 2 para indentación
console.log(nuevoJsonString);
/* Salida:
{
  "producto": "Laptop",
  "precio": 1200,
  "disponible": true
}
*/`,
    bodyContent: null,
    bodyText:
      "JSON es un formato ligero de intercambio de datos, fácil de leer y escribir. <code>JSON.parse()</code> se usa para convertir texto JSON en un objeto JavaScript. <code>JSON.stringify()</code> convierte un objeto JavaScript en una cadena JSON, útil para enviar datos al servidor.",
    footerLinkInformation:
      "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/JSON",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "JSON",
    order: 44,
  },
];
