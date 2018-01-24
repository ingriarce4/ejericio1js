/*1.-¿quienes pueden pasar a ver una película o no puede pasar a verla 
si es mayor de edad.
2.-acompañado por un adulto 
*/
const filmAdultos = 'Novia suicida'
const edadfilm = 18

let nombre1 = 'Susana'
let edad = 12
 
let nombre2 = 'César'
let edad2 = 18

 function verFilm (nombre, age, aAdulto=false){
 if (age>= edadfilm){
   alert (`${nombre} puede pasar a ver la película ${filmAdultos}`)
} else if (aAdulto){
 alert (`${nombre} puede pasar a ver la película ${filmAdultos}, aunque su edad 
 	es ${age} se encuentra acompañado por un adulto`)
} else {
	alert (`${nombre} no puede pasar a ver la película ${filmAdultos}
		tiene ${age} años y necesita tener ${edadfilm}`)
  }

}
verFilm(nombre1, edad, true)
verFilm(nombre2, edad2)

/*desafio usando =>
*/



