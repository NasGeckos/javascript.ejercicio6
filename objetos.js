// Objetos

const datos_personales = {
    nombre: "Nelson",
    apellido: "Sanchez",
    edad: 33,
    altura: 1.60,
    eresDesarrollador: true
}

const prop = "edad"
console.log(datos_personales[prop])

const lista_datos_personales = [
    { nombre: "Nelson", apellido: "Sanchez", edad: 33, altura: 1.60, eresDesarrollador: true },
    { nombre: "Micaela", apellido: "Bustos Arca", edad: 34, altura: 1.650, eresDesarrollador: false },
    { nombre: "Raul", apellido: "Pancho", edad: 31, altura: 1.90, eresDesarrollador: false }
]


lista_datos_personales.sort((a, b) => b.edad - a.edad) // ordenar de menor a mayor
console.log(lista_datos_personales)
