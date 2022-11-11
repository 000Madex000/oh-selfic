
let open = document.querySelector('.fa-solid');
let flotante = document.querySelector('.nav_phone');
let close = document.querySelector('.closep');
let closep = document.querySelector('body')
let closeX = document.querySelector('.closep_x')

let color = document.querySelector('.tl')
 

// open.addEventListener('click',(e)=>{
//     flotante.classList.toggle('active');
  
// })
 open.addEventListener('click',()=>{
    flotante.style.transform='translate(0rem)'
 })
 closeX.addEventListener('click',()=>{
    flotante.style.transform='translate(-30rem)'
 })

/// formulario
let formulario = document.querySelector('.formulario')
let push = document.querySelector('.reserve')
let closeIcon=document.querySelector('.icon_close')
let closeDesckop=document.querySelector('.reserve-click')

push.addEventListener('click',()=>{
    formulario.style.transform='scale(1)'
})
closeDesckop.addEventListener('click',()=>{
    formulario.style.transform='scale(1)'
})
closeIcon.addEventListener('click',()=>{
    formulario.style.transform='scale(0)'
})

