const slider = document.querySelector('.people')
const person = document.querySelectorAll('.person')
let isDown = false
let startX
let scrollLeft

person.forEach(e => {
    e.addEventListener('mousedown',()=>{
        e.classList.add('active')
    })
    e.addEventListener('mouseleave',()=>{
        e.classList.remove('active')
    })
    e.addEventListener('mouseup',()=>{
        e.classList.remove('active')
    })
})

slider.addEventListener('mousedown',(e)=>{
    isDown = true
    startX = e.pageX - slider.offsetLeft
    scrollLeft = slider.scrollLeft
})

slider.addEventListener('mouseleave',()=>{
    isDown = false
})

slider.addEventListener('mouseup',()=>{
    isDown = false
})

slider.addEventListener('mousemove',(e)=>{
    // if (!isDown) return
    if (isDown) {
        e.preventDefault()
        const x = e.pageX - slider.offsetLeft
        const walk = (x - startX) * 2.5
        slider.scrollLeft = scrollLeft - walk
    }
})