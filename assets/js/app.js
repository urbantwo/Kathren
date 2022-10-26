

function allarga(){
    let elem = document.getElementById('nav')
    let top = elem.getBoundingClientRect().top;
    if(top == 0 || window.scrollY > 100){
        elem.classList.add('full-width-nav')

    }else {
        elem.classList.remove('full-width-nav')
    }
}


document.addEventListener('scroll',allarga)



function observerBloccoInfo(){
    
    const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > 0) {
          entry.target.style.animation = '2s fade-in'
        } 
    })
})
const boxElList = document.querySelectorAll('.blocco-info');
boxElList.forEach((el) => {
    io.observe(el);
})
}


function observerDivisore(){
    
    const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > 0) {
          entry.target.style.animation = '1s ease 0.4s 1 normal both running fade-divisore'
          
        } 
    })
})

const boxElList = document.querySelectorAll('.divisore');
boxElList.forEach((el) => {
    io.observe(el);
})
}

function observerLedImg(){
    
    const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > 0) {
          entry.target.style.animation = '3s ease 0s 1 normal both running scale-img'
          
        } 
    })
})

const boxElList = document.getElementById('img-led');

    io.observe(boxElList);

}



document.addEventListener('DOMContentLoaded',observerBloccoInfo)
document.addEventListener('DOMContentLoaded',observerDivisore)
document.addEventListener('DOMContentLoaded',observerLedImg)
