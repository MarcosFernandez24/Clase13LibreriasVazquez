let montoDisp = 0
let juegosCont = document.createElement("div")
let cont = document.querySelector("h2")
const saludosHTML = document.querySelector("h2").textContent =``
const formulario = document.querySelector("form")
const escribirNombre = document.querySelector("#Nombre")
let graciasPorComprar = document.createElement("h4")
const comprarJuego = document.querySelector("#NombreJuego")
let comprando = document.createElement("h3")
let montoHTML = document.createElement("h3")

montoHTML = `<h3>Tu monto actual: ${montoDisp}</h3>`



class Juegos
{
     constructor  (nombreJuego, precioJuego)
      {
           this.nombreJuego = nombreJuego
           this.precioJuego = precioJuego
     }
    }


const juegoN1 = new Juegos("Cyberpunk 2077", 24.99)
const juegoN2 = new Juegos("Assasins Creed Valhalla", 29.99)
const juegoN3 = new Juegos("God Of War 4", 9.99)
const juegoN4 = new Juegos("Bloodborne", 9.99)
const juegoN5 = new Juegos("Metro Exodus", 14.99)    

const juegoN6 = new Juegos("Dead By Daylight", 29.99)
const juegoN7 = new Juegos("Left 4 Dead 2", 4.99)
const juegoN8 = new Juegos("Resident Evil 4", 9.99)
const juegoN9 = new Juegos("Amnesia The Dark Descent", 7.99)
const juegoN10 = new Juegos("The Witcher 3 Wild Hunt", 59.99)

const juegosOption= [juegoN1, juegoN2, juegoN3, juegoN4, juegoN5, juegoN6, juegoN7, juegoN8, juegoN9, juegoN10]





formulario.addEventListener("submit", usuarioHTML)


const carritoPusheo = []

const juegosCLG = []






function carritoVacio(){

    Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: 'El carrito se encuentra vacio',
        showConfirmButton: false,
        
      })

graciasPorComprar.innerHTML = "<h3>El carrito esta vacio</h3>"
document.body.appendChild(graciasPorComprar)



}


function menuDeJuegos(){

  
    let $botonjuegos = document.createElement("button")
    let menuJuegos = document.createElement("select")
    let $terminarCompra = document.createElement("button")
    let agregarMonto = document.createElement("button")

    
    
document.body.appendChild(agregarMonto)
document.body.appendChild($botonjuegos)
document.body.appendChild(menuJuegos)
document.body.appendChild($terminarCompra)

$terminarCompra.innerHTML= `terminar compra`
$botonjuegos.innerHTML = `aceptar`
menuJuegos.id = "MenuJuegos"
$botonjuegos.id = "BotonJuegos"
$terminarCompra.id = "BotonTerminarCompra"
agregarMonto.id = "agregarMontoTarjeta"
agregarMonto.innerHTML = `Agregar monto a la tarjeta`

menuJuegos.innerHTML = `<option>${juegoN1?.nombreJuego}</option>
<option>${juegoN2?.nombreJuego}</option>
<option>${juegoN3?.nombreJuego}</option>
<option>${juegoN4?.nombreJuego}</option>
<option>${juegoN5?.nombreJuego}</option>
<option>${juegoN6?.nombreJuego}</option>
<option>${juegoN7?.nombreJuego}</option>
<option>${juegoN8?.nombreJuego}</option>
<option>${juegoN9?.nombreJuego}</option>
<option>${juegoN10?.nombreJuego}</option>`



//Desestructurizacion
const juego1Des = {nombreJuego, precioJuego} = juegoN1
const juego2Des = {nombreJuego, precioJuego} = juegoN2
const juego3Des = {nombreJuego, precioJuego} = juegoN3
const juego4Des = {nombreJuego, precioJuego} = juegoN4
const juego5Des = {nombreJuego, precioJuego} = juegoN5
const juego6Des = {nombreJuego, precioJuego} = juegoN6
const juego7Des = {nombreJuego, precioJuego} = juegoN7
const juego8Des = {nombreJuego, precioJuego} = juegoN8
const juego9Des = {nombreJuego, precioJuego} = juegoN9
const juego10Des = {nombreJuego, precioJuego} = juegoN10

agregarMonto.addEventListener("click", function(){


    montoDisp = montoDisp + 50
   Swal.fire({
  
  icon: 'success',
  title: 'Se sumaron 50$ USD a tu monto actual',
  text: `Monto actual: ${montoDisp}$ USD`,
  timer: 3000,
  position: 'bottom-end',
  timerProgressBar: true,
  toast: true
   })
   
})

    
  
   

$botonjuegos.addEventListener("click", function(){
    
carritoPusheo.push(menuJuegos.value)
switch (menuJuegos.value) {
    case "Cyberpunk 2077":
        montoDisp = montoDisp - juego1Des.precioJuego
        Swal.fire({
            title: 'Cyberpunk 2077',
            text: 'En carrito',
            imageUrl: 'https://as01.epimg.net/meristation/imagenes/2022/08/20/noticias/1660984847_818491_1660985224_noticia_normal.jpg',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
        break;
        case "Assasins Creed Valhalla":
            montoDisp = montoDisp - juego2Des.precioJuego
            Swal.fire({
                title: 'Assasins Creed Valhalla',
                text: 'En carrito',
                imageUrl: 'https://culturageek.com.ar/wp-content/uploads/2020/11/Culturageek.com_.ar-Assassins-Creed-Valhalla-1.jpeg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
            break
        case "God Of War 4":
            montoDisp = montoDisp - juego3Des.precioJuego
            Swal.fire({
                title: 'God Of War 4',
                text: 'En carrito',
                imageUrl: 'https://culturageek.com.ar/wp-content/uploads/2018/04/Culturageek.com_.ar-Review-God-of-War-1.jpg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
            break
        case "Bloodborne":
            montoDisp = montoDisp - juego4Des.precioJuego
            Swal.fire({
                title: 'Bloodborne',
                text: 'En carrito',
                imageUrl: 'https://www.gamespot.com/a/uploads/scale_medium/1197/11970954/2682350-image%20%281%29.jpeg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
            break
        case "Metro Exodus":
            montoDisp = montoDisp - juego5Des.precioJuego
            Swal.fire({
                title: 'Metro Exodus',
                text: 'En carrito',
                imageUrl: 'https://image.api.playstation.com/vulcan/img/rnd/202010/2814/jhNIE3yH1SNEe9CmxTVHAdme.png',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
            break
        case "Dead By Daylight":
            montoDisp = montoDisp - juego6Des.precioJuego
            Swal.fire({
                title: 'Dead By Daylight',
                text: 'En carrito',
                imageUrl: 'https://cdn1.epicgames.com/offer/611482b8586142cda48a0786eb8a127c/EGS_DeadbyDaylight_BehaviourInteractive_S1_2560x1440-a32581cf9948a9a2e24b2ff15c1577c7',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
            break
        case "Left 4 Dead 2":
            montoDisp = montoDisp - juego7Des.precioJuego
            Swal.fire({
                title: 'Left 4 Dead 2',
                text: 'En carrito',
                imageUrl: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/07/22/16585065104722.jpg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
            break
        case "Resident Evil 4":
            montoDisp = montoDisp - juego8Des.precioJuego
            Swal.fire({
                title: 'Resident Evil 4',
                text: 'En carrito',
                imageUrl: 'https://www.residentevil.com/showcase/assets/images/thumb-re4-re.jpg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
            break
        case "Amnesia The Dark Descent":
            montoDisp = montoDisp - juego9Des.precioJuego
            Swal.fire({
                title: 'Amnesia The Dark Descent',
                text: 'En carrito',
                imageUrl: 'https://cdn1.epicgames.com/917551a8060244469eb4e6ab8a99cf24/offer/EGS_AmnesiaTheDarkDescent_FrictionalGames_S2-860x1148-473ca730cc2baaaeb9595f11bfc09fda.jpg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
            break
        case "The Witcher 3 Wild Hunt":
            montoDisp = montoDisp - juego10Des.precioJuego
            Swal.fire({
                title: 'The Witcher 3 Wild Hunt',
                text: 'En carrito',
                imageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg?t=1659619680',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
            break
    default:
        break;   

        
} comprarJueguitos()
})



    function regaloD(){
        const regalo = 20
 montoDisp = montoDisp + regalo
 
 Swal.fire({
  
    icon: 'info',
    title: 'Se sumaron 20$ USD a tu monto actual de regalo por mantener el monto actual del monedero por debajo de 100$ USD',
    text: `Monto actual: ${montoDisp}$ USD`,
    timer: 5000,
    position: 'bottom-end',
    timerProgressBar: true,
    toast: true
     })
    }

  
    

$terminarCompra.addEventListener("click", function(){


    

//Utilizacion de operador ternario :
    montoDisp>0? compraValida() : compraInvalida()


    

    //Utilizacion de operador OR ||
    carritoPusheo.length >= 1 || carritoVacio()

})




function compraValida(){
(async() => {
  await  Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Tu compra se realizo con exito',
        showConfirmButton: true,
        timer: 3000,
        timerProgressBar: true,
      })

    console.log(carritoPusheo)
localStorage.setItem("juegos", carritoPusheo)
const seleccionCarrito = localStorage.getItem("juegos")


juegosCLG.push(...seleccionCarrito)

console.log(`juegos en el Local Storage: ${juegosCLG}`)

// Utilizacion de operador AND &&
montoDisp <= 100 &&  regaloD()
    
    graciasPorComprar.innerHTML= `<h2>Gracias por elegirnos ${escribirNombre.value} :)
    tu compra: ${seleccionCarrito}</h2>`
    document.body.appendChild(graciasPorComprar)
    console.log(`${carritoPusheo} ${montoDisp}`)
})()
}

function compraInvalida(){

    let sinPlata = document.createElement("div")
    sinPlata.innerHTML = "<h3>No dispones del monto suficiente para efectuar esta compra</h3>"
    document.body.appendChild(sinPlata)

    Swal.fire({
        icon: 'error',
        title: ':/',
        text: 'Parece que la compra supera tu monto actual',
        
      })

}












}


function usuarioHTML2(){
    cont.innerHTML=`<h2>Bienvenido ${escribirNombre.value}</h2>`
    document.body.appendChild(cont)
    menuDeJuegos()
    
        juegosCont.innerHTML= `<h2>Selecciona el juego que desea</h2>
    <p>juego 1: ${juegosOption[0].nombreJuego} precio: ${juegosOption[0].precioJuego} USD$</p>
    juego 2: ${juegosOption[1].nombreJuego} precio: ${juegosOption[1].precioJuego} USD$</p>
    juego 3: ${juegosOption[2].nombreJuego} precio: ${juegosOption[2].precioJuego} USD$</p>
    juego 4: ${juegosOption[3].nombreJuego} precio: ${juegosOption[3].precioJuego} USD$</p>
    juego 5: ${juegosOption[4].nombreJuego} precio: ${juegosOption[4].precioJuego} USD$</p>
    juego 6: ${juegosOption[5].nombreJuego} precio: ${juegosOption[5].precioJuego} USD$</p>
    juego 7: ${juegosOption[6].nombreJuego} precio: ${juegosOption[6].precioJuego} USD$</p>
    juego 8: ${juegosOption[7].nombreJuego} precio: ${juegosOption[7].precioJuego} USD$</p>
    juego 9: ${juegosOption[8].nombreJuego} precio: ${juegosOption[8].precioJuego} USD$</p>
    juego 10: ${juegosOption[9].nombreJuego} precio: ${juegosOption[9].precioJuego} USD$</p>
    
    `
    document.body.appendChild(juegosCont)
    }
    


    
   

function usuarioHTML(usser){


(async() =>{
usser.preventDefault()

const inputEmpty = " "

const inputValue = inputEmpty  

const {value : inputValorTarjeta} = await Swal.fire({
  title: `Bienvenido ${escribirNombre.value}, por favor ingresa una tarjeta de 8 digitos`,
  input: 'text',
  inputLabel: 'Numero de tarjeta:',
  inputValue: inputValue,
  showCancelButton: true,
  allowOutsideClick: false,
  allowEscapeKey: false,
  allowEnterKey: false,
  stopKeydownPropagation: true,
  inputValidator: (value) => {
    if (value < 9999999 || value > 99999999) {
      return 'Por favor ingresa una tarjeta de 8 digitos'

    }
      
  }

  

})
if(inputValorTarjeta){
    Swal.fire({
        icon: 'success',
        title: 'Muy bien!',
        text: `Tu tarjeta fue ingresada con exito, 
        monto actual: ${montoDisp}$ USD`,
        toast: true,
        position: 'bottom-end',
        timer: 3000,
        timerProgressBar: true,

        
      })
      usuarioHTML2()


}



})()


}
function comprarJueguitos(){

 
    comprando.innerHTML = `<h3>en carrito: ${carritoPusheo.length}</h3>`
    document.body.appendChild(comprando)

}