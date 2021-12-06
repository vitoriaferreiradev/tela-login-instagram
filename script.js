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





