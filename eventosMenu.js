const btn = document.getElementById('btn')
const menu = document.getElementById('menu')

btn.addEventListener('click',function(){
  if(menu.classList.contains('show')){
    menu.classList.remove('show')
    btn.setAttribute('class','fa-solid fa-xmark')
  }else{
    menu.classList.add('show')
    btn.setAttribute('class','fa-solid fa-bars')
  }
})

