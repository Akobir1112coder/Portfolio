const btn=document.querySelector(`.bars`)
const ul=document.querySelector(`.ul1`)
const yooq=document.querySelector(`.yooq`)
const barss=document.querySelector(`.barss`)
function remove(){
    ul.classList.remove(`ket`,`bor`)
}

btn.addEventListener(`click`,function(){
    if(ul.classList.contains(`bor`)){
    ul.addEventListener(`animationend`,remove)
        ul.classList.add(`ket`)
        barss.className=`fa-solid fa-bars-staggered`
    }
    else{
        ul.classList.add(`bor`)  
        ul.removeEventListener(`animationend`,remove)
        barss.className=`fa-solid fa-xmark`
    }
})

