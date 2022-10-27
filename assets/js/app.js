

function allarga() {
    let elem = document.getElementById('nav')
    let top = elem.getBoundingClientRect().top;
    if (top == 0 || window.scrollY > 100) {
        elem.classList.add('full-width-nav')

    } else {
        elem.classList.remove('full-width-nav')
    }
}


document.addEventListener('scroll', allarga)



function observerBloccoInfo() {

    const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > 0) {
                entry.target.style.animation = '1.8s fade-in 0.2s 1 normal both running '
            }
        })
    })
    const boxElList = document.querySelectorAll('.fade-in');
    boxElList.forEach((el) => {
        io.observe(el);
    })
}


function observerDivisore() {

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

function observerLedImg() {

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



document.addEventListener('DOMContentLoaded', observerBloccoInfo)
document.addEventListener('DOMContentLoaded', observerDivisore)
document.addEventListener('DOMContentLoaded', observerLedImg)


let valoriLumen = [

    {
        //LED
        450: { watt: 5, costo: '2,20€' },
        800: { watt: 10, costo: '4,40€' },
        1100: { watt: 13, costo: '5,70€' },
        1600: { watt: 15, costo: '6,60€' },
    },

    {
        //Alogena
        450: { watt: 10, costo: '4,40€' },
        800: { watt: 13, costo: '5,70€' },
        1100: { watt: 20, costo: '8,80€' },
        1600: { watt: 26, costo: '11,40€' },
    },

    {
        //Incandescente
        450: { watt: 40, costo: '17,60€' },
        800: { watt: 60, costo: '26,40€' },
        1100: { watt: 75, costo: '33,00€' },
        1600: { watt: 100, costo: '44,00€' },
    }
]


function checkboxListListener() {

    let listaInput = document.querySelectorAll('input[name="intensita"]')
    let listaWatt = document.querySelectorAll('.watt')
    let listaImporto = document.querySelectorAll('.importo')



    listaInput.forEach(el => {
        el.addEventListener('change', async () => {
            for (let i = 0; i < listaWatt.length; i++) {

                let tempWatt = listaWatt[i]
                let tempImporto = listaImporto[i]

                if (el.checked) {

                    let lum = valoriLumen[i][el.value]
                    let tempRisultati = document.querySelectorAll('.result-elem')
                    tempRisultati.forEach(x=>{x.style.opacity = 0})


                    await setTimeout(()=>{
                        tempWatt.innerHTML = lum.watt + " watt"
                        tempImporto.innerHTML = lum.costo
                        tempRisultati.forEach(x=>{x.style.opacity = 1})

                    },800)

                }
            }
        })
    })

}

document.addEventListener('DOMContentLoaded', checkboxListListener)


//TORNA SU

function tornaSu(){
    let pulsante = document.getElementById('torna-su')
    let scroll = window.innerHeight * 1.2

    if(window.scrollY > 500){
        pulsante.classList.add('torna-su-visibile')
    }else if (window.scrollY < 500){
        pulsante.classList.remove('torna-su-visibile')

    }
}

document.addEventListener('scroll',tornaSu)
document.addEventListener('DOMContentLoaded',tornaSu)