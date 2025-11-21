// EJERCICIO 1: Duplicar Números (map)
let puntos = [10, 20, 30, 40];
let puntosDoble = puntos.map(p => p * 2);

console.log("Original:", puntos);
console.log("Doble:", puntosDoble);

// ------------------------------------------------------

// EJERCICIO 2: Lista de Nombres (map con objetos)
let usuarios1 = [
  { id: 1, nombre: "Ana" },
  { id: 2, nombre: "Luis" },
  { id: 3, nombre: "Carlos" }
];

let nombres = usuarios1.map(u => u.nombre);
console.log("Nombres:", nombres);

// ------------------------------------------------------

// EJERCICIO 3: Notas aprobadas (filter)
let notas = [8, 5, 10, 3, 7];
let aprobadas = notas.filter(nota => nota >= 6);

console.log("Notas aprobadas:", aprobadas);

// ------------------------------------------------------

// EJERCICIO 4: Productos en Stock (filter con objetos)
let productos = [
  { nombre: "Camisa", stock: 10 },
  { nombre: "Zapatos", stock: 0 },
  { nombre: "Pantalón", stock: 5 }
];

let enStock = productos.filter(p => p.stock > 0);
console.log("Productos en stock:", enStock);

// ------------------------------------------------------

// EJERCICIO 5: Suma Total de Ventas (reduce)
let ventas = [150, 300, 100, 50];

let totalVentas = ventas.reduce((total, venta) => total + venta, 0);
console.log("Total ventas:", totalVentas);

// ------------------------------------------------------

// EJERCICIO 6: Aplanar un Arreglo (reduce + concat)
let grupos = [["Ana", "Luis"], ["Maria", "Juan"], ["Pedro"]];

let listaPlana = grupos.reduce((acum, grupo) => acumulado = acum.concat(grupo), []);
console.log("Lista plana:", listaPlana);

// ------------------------------------------------------

// EJERCICIO 7: Crear copia (slice)
let original = ["A", "B", "C"];
let clon = original.slice();

clon.push("D");

console.log("Original:", original);
console.log("Clon:", clon);

// ------------------------------------------------------

// EJERCICIO 8: Obtener Podio (slice)
let competidores = ["Oro", "Plata", "Bronce", "Mención 1", "Mención 2"];
let podio = competidores.slice(0, 3);

console.log("Podio:", podio);

// ------------------------------------------------------

// EJERCICIO 9: Unir Equipos (concat)
let equipoDev = ["Ana", "Juan"];
let equipoQA = ["Carlos", "Maria"];

let equipoCompleto = equipoDev.concat(equipoQA);
console.log("Equipo completo:", equipoCompleto);

// ------------------------------------------------------

// EJERCICIO 10: Añadir al carrito (concat inmutable)
let carrito = ["Manzana"];
let nuevoCarrito = carrito.concat("Pera");

console.log("Carrito original:", carrito);
console.log("Nuevo carrito:", nuevoCarrito);

// ------------------------------------------------------

// EJERCICIO 11: Verificar permiso (includes)
let roles = ["USER", "EDITOR"];

console.log("¿Es ADMIN?", roles.includes("ADMIN"));
console.log("¿Es EDITOR?", roles.includes("EDITOR"));

// ------------------------------------------------------

// EJERCICIO 12: Encontrar Usuario (find)
let usuarios2 = [
  { id: 101, nombre: "Ana" },
  { id: 102, nombre: "Luis" },
  { id: 103, nombre: "Carlos" }
];

let usuarioLuis = usuarios2.find(u => u.id === 102);
console.log("Usuario encontrado:", usuarioLuis);

// ------------------------------------------------------

// EJERCICIO 13: Ordenar sin mutar
let invitados = ["Zapata", "Alvarez", "Gomez", "Bernal"];
let invitadosOrdenados = [...invitados].sort();

console.log("Original:", invitados);
console.log("Ordenados:", invitadosOrdenados);

// ------------------------------------------------------

// EJERCICIO 14: Invertir sin mutar
let receta = ["Paso 1", "Paso 2", "Paso 3"];
let recetaInversa = [...receta].reverse();

console.log("Receta original:", receta);
console.log("Receta invertida:", recetaInversa);

// ------------------------------------------------------

// EJERCICIO 15: Eliminar sin mutar
let fila = ["Ana", "Luis", "Carlos", "Maria"];
let nuevaFila = fila.filter(persona => persona !== "Luis");

console.log("Fila original:", fila);
console.log("Sin Luis:", nuevaFila);

// ------------------------------------------------------

// EJERCICIO 16: Insertar sin mutar (slice + spread)
let fila2 = ["Ana", "Luis", "Carlos", "Maria"];

let nuevaFilaConJorge = [
  ...fila2.slice(0, 1),
  "Jorge",
  ...fila2.slice(1)
];

console.log("Fila original:", fila2);
console.log("Fila con Jorge:", nuevaFilaConJorge);

// ------------------------------------------------------

// EJERCICIO 17: Reemplazar sin mutar (map)
let tablero = ["X", "O", "X"];

let nuevoTablero = tablero.map((valor, index) =>
  index === 1 ? "X" : valor
);

console.log("Tablero original:", tablero);
console.log("Nuevo tablero:", nuevoTablero);

// ------------------------------------------------------

// EJERCICIO 18: Combo filter + map
let productos2 = [
  { nombre: "Papas", precio: 2 },
  { nombre: "Carne", precio: 15 },
  { nombre: "Leche", precio: 3 }
];

let productosCaros = productos2
  .filter(p => p.precio > 4)
  .map(p => p.nombre);

console.log("Productos caros:", productosCaros);

// ------------------------------------------------------

// EJERCICIO 19: Añadir al inicio
let feed = ["Noticia 1", "Noticia 2", "Noticia 3"];

let nuevoFeed = ["Noticia Urgente", ...feed];

console.log("Feed original:", feed);
console.log("Nuevo feed:", nuevoFeed);

// ------------------------------------------------------

// EJERCICIO 20: Desafío de Puntuación
let puntuaciones = [50, 85, -10, 100, 0, 30];

// 1. Filtrar valores válidos
let validas = puntuaciones.filter(p => p >= 0);

// 2. Sumar 10 a cada una
let bonificadas = validas.map(p => p + 10);

// 3. Calcular total
let totalPuntos = bonificadas.reduce((total, p) => total + p, 0);

console.log("Validas:", validas);
console.log("Bonificadas:", bonificadas);
console.log("Total puntos:", totalPuntos);

