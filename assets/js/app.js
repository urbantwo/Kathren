function allarga(){
    let elem = document.getElementById('nav')
    let top = elem.getBoundingClientRect().top;
    if(top == 0){
        elem.classList.add('full-width-nav')
    }else {
        elem.classList.remove('full-width-nav')
    }
}


document.addEventListener('scroll',allarga)