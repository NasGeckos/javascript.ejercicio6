// Fechas
const fecha = new Date()
console.log(fecha)

const fecha2 = new Date(1989, 6, 19, 1, 23, 52, 192 )
console.log(fecha2)

console.log(fecha2.getTime() > fecha.getTime())

console.log(fecha2.getDate())

console.log(fecha2.getMonth() +1)

console.log(fecha2.getFullYear())
