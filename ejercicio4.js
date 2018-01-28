/*cuanto corre promedio una persona en un semana.*/

const nombre= 'susana'
const dias = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sabado', 'domingo']

function correr(){
	const min = 5
	const max = 10
    return Math.floor (Math.random() * (max - min)) + min
}
let kilometros= 0

    for (let i =0; i <dias.length; i++){
    const kms=correr()
    totalcorrer= kilometros * kms
    console.log(`El dia ${i} es el ${dias[i]}`)
}
