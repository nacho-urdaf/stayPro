const grande = document.querySelector('.grande')
const punto = document.querySelectorAll('.punto')

//cuando haga clik en el punto


punto.forEach( ( cadaPunto , i )=> {
    punto[i].addEventListener('click',()=>{
        
        let posicion = i
        let operacion = posicion * -50

        grande.style.transform = `tranlateX(${operacion}%)`

    })
})