const cadastro = document.querySelector('.cadastro')
const loginBtn = document.querySelector('.login-btn')
const login = document.querySelector('.login')
const cadastroBtn = document.querySelector('.cadastro-btn')

loginBtn.onclick = () => {
    login.style.display = 'block'
    cadastro.style.display = 'none'
}

cadastroBtn.onclick = () => {
    cadastro.style.display = 'block'
    login.style.display = 'none'
}


const slides = document.querySelectorAll('.slides__photo')
let currentPosition = 0

setInterval(function(changePhoto) {
    currentPosition += 1
    if (currentPosition >= slides.length) 
    {
        currentPosition = 0
    } 
    removeActive()
    slides[currentPosition].classList.add('active')
    
}, 4000)

function removeActive(){
    slides.forEach(photo => {
        photo.classList.remove('active')
    })
}





