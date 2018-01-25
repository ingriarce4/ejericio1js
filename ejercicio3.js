/*nuevo abecedario
1.- Si la palabras termina con "ar" se le quitan estas dos letras
2.- Si la palabra inicia con z, se le añade una "pe" al final
3.- Si la palabra traducida tiene 10 o más letras se le dabe partir en dos y unir 
con u guion de enmedio.
4.- Si la palabra original es un palíndromo, ninguna regla anterior cuenta.
se devuelve la misma palabra, pero intercambio letras mayúsculas y minúsculas.
*/

function abecedarioNuevo (str){
	let palabra = str
	if (str.toLowerCase().endsWith('ar')){
      palabra= str.slice(0,-2)
	}
    if (str.toLowerCase().startsWith('z')){
 	palabra += 'pe'
    }
    const length = palabra.length
    if (length >=10) {
    const unoMitad = palabra.slice(0, Math.round(length)/2)
    const secondMitad = palabra.slice(Math.round(length/2))
    palabra = `${unoMitad}-${secondMitad}`
    }
    if str == 
    str.reverse(). 
    }

    return palabra
}
console.log(abecedarioNuevo('programar'))
console.log(abecedarioNuevo('zapato'))
console.log(abecedarioNuevo('abecedario'))

