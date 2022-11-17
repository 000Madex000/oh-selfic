
let open = document.querySelector('.fa-solid');
let flotante = document.querySelector('.nav_phone');
let close = document.querySelector('.closep');
let closep = document.querySelector('body')
let closeX = document.querySelector('.closep_x')

let color = document.querySelector('.tl')


// open.addEventListener('click',(e)=>{
//     flotante.classList.toggle('active');

// })
open.addEventListener('click', () => {
    flotante.style.transform = 'translate(0rem)'
})
closeX.addEventListener('click', () => {
    flotante.style.transform = 'translate(-30rem)'
})

/// formulario
let formulario = document.querySelector('.formulario')
let push = document.querySelector('.reserve')
let closeIcon = document.querySelector('.icon_close')
let closeDesckop = document.querySelector('.reserve-click')

push.addEventListener('click', () => {
    formulario.style.transform = 'scale(1)'
})
closeDesckop.addEventListener('click', () => {
    formulario.style.transform = 'scale(1)'
})
closeIcon.addEventListener('click', () => {
    formulario.style.transform = 'scale(0)'
})

// carrusel

// let imagenes = ['/imgFondo/fondo_inicio1.png','/imgFondo/fondo_inicio2.png','/imgFondo/fondo_inicio3.png','/imgFondo/fondo_inicio4.png' ]
// let cont = 0;

// function carrusel(contenedor) {
//     contenedor.addEventListener('click', e => {
//         let atras = document.querySelector('.fa-angle-left');
//         let adelante = document.querySelector('.next');
//         let img = document.querySelector('.img_fondo-inicio');
//         let tgt = e.target;

//         if (tgt == atras) {
//             if (cont > 0) {
//                 img.src = imagenes[cont - 1];
//                 cont--;
//             } else {
//                 img.src = imagenes[imagenes.length - 1];
//                 cont = imagenes.length - 1;
//             }

//         } else if(tgt == adelante) {
//             if (cont < imagenes.length-1) {
//                 img.src = imagenes[cont + 1];
//                 cont++;
//             } else {
//                 img.src = imagenes[0];
//                 cont =0;
//             }

//         }
        
//     })
// }
// document.addEventListener('DOMContentLoaded',()=>{
//     let contenedor = document.querySelector('.header');
//     carrusel(contenedor);
// })

