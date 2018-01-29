/*-Pelea entre Goku y Súperman cada uno de ellos empieza con 100 puntos de vida
-Cada golpe entre 5 y 12 puntos
-El que sea mayor va a ganar en esa ronda, y nuevamente se pasa 
a la siguiente ronda.
*/
 let vidaGoku = 100
 let vidasSuperman = 100

 const minPoder= 5
 const maxPoder= 12

 const ambosconVida = () => vidaGoku > 0 && vidasSuperman > 0 
 const calcularGolper = () => Math.round( Math.random() * (minPoder - maxPoder) + minPoder)
 
 let round  = 1

 while (ambosVivos()) {
 console.log (`Round {$round}`)
 const golpeGoku = calculaGolpe()
 const golpeSuperman = calculaGolpe()
 if (golpeGoku > golpeSuperman){
//ataca Goku
 console.log(`Goku ataca a Superman con un golpe {$golpeGoku}`)
 vidaSuperman -= golpeGoku
 console.log ()
 }else{
//ataca superman
 console.log (`Superman ataca a Gokú con un súper {$golpeSuperman}`)
  vidaGoku -= golpeSuperman

 } 
}
 