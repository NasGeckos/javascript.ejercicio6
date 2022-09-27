// Conjuntos

const nombres_familia = [
    {padre: "Gustavo"},
    {madre: "Raquel"},
    {hermano1: "Jose"},
    {hermano2: "Nelson"},
    {hermano3: "Macrina"},
    {hermano4: "Cadenet"},
]

const nuevo_set = new Set (nombres_familia)
nuevo_set.add({hermano2: "Nelson"})

console.log(nuevo_set)

nuevo_set.add({hermano5: "JavaScript <3"})

console.log(nuevo_set)
