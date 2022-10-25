

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
                // Add 'active' class if observation target is inside viewport
          entry.target.style.animation = '2s fade-in'
          console.log('è visibile')
        } else {
            // Remove 'active' class otherwise
            entry.target.classList.remove('active');
        }
    })
})

// Declares what to observe, and observes its properties.
const boxElList = document.querySelectorAll('.blocco-info');
boxElList.forEach((el) => {
    io.observe(el);
})
}


function observerDivisore(){
    
    const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > 0) {
                // Add 'active' class if observation target is inside viewport
          entry.target.style.animation = '1s ease 0.4s 1 normal both running fade-divisore'
          
          console.log('è visibile')
        } else {
            // Remove 'active' class otherwise
            entry.target.classList.remove('active');
        }
    })
})

// Declares what to observe, and observes its properties.
const boxElList = document.querySelectorAll('.divisore');
boxElList.forEach((el) => {
    io.observe(el);
})
}



document.addEventListener('DOMContentLoaded',observerBloccoInfo)
document.addEventListener('DOMContentLoaded',observerDivisore)
