
let open = document.querySelector('.fa-solid');
let flotante = document.querySelector('.nav_phone');
let close = document.querySelector('.closep');
let closep = document.querySelector('body')

let color = document.querySelector('.tl')
 

open.addEventListener('click',(e)=>{
    flotante.classList.toggle('active');
  
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

$(document).ready(function () {
    function reorient(e) {
      var portrait = (window.orientation % 180 == 0);
      $("body > div").css("-webkit-transform", !portrait ? "rotate(-90deg)" : "");
    }
    window.onorientationchange = reorient;
    window.setTimeout(reorient, 0);
  });