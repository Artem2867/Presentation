let startPosition
let positionNow
let startSlide = 1
const animate = (next, start) => {
    const el = document.getElementById('years_slide_conteiner')
    let i = 0
    if (next) {
        nextSlide(start, i, el)
    } else {
        prevSlide(start, i, el)
    }
}
const nextSlide = (start, i, el) => {
    const animationSlide = () => {
            i = i - 16
            el.style.transform = `translateX(${-start + i}px)`;
            if (i > -1024) {
                requestAnimationFrame(animationSlide)
            }
    }
    animationSlide()
}
const prevSlide = (start, i, el) => {
    const animationSlide = () => {
        i = i + 16
        el.style.transform = `translateX(${-start + i}px)`;
        if (i < 1024) {
            requestAnimationFrame(animationSlide)
        }
    }
    animationSlide()
}
const lineWhiteWidth = (number) => {
    const lineWhite = document.getElementById('line_white')
    lineWhite.style.width = number
}
export const enterStone = (e) => {
    const touch = e.changedTouches[0]
    const el = e.target;
    startPosition = touch.clientX
    positionNow = el.offsetLeft
    el.addEventListener('touchmove',moveStone) 
}
const moveStone = (e) => {
    const touch = e.changedTouches[0]
    const el = e.target;
    const left = el.offsetLeft
    const parentWidth = el.offsetParent.offsetParent.clientWidth
    const point1998 = parentWidth/100 * 25
    const point2016 = parentWidth/100 * 75
    if (left >= 0 && left <= parentWidth) {
        el.style.left = `${+positionNow + (touch.pageX - startPosition)}px`
        lineWhiteWidth(el.style.left)
        if(left >= point1998 && startSlide === 1 ){
            animate(true, 0)
            startSlide = 2
        } else if (left >= point2016 && startSlide === 2) {
            animate(true, 1024)
            startSlide = 3
        } else if (left <= point2016 && startSlide === 3) {
            animate(false, 2040)
            startSlide = 2
        } else if (left <= point1998 && startSlide === 2) {
            animate(false, 1024)
            startSlide = 1
        }
    }
}
export const leaveStone = (e) => {
    const el = e.target
    const parentWidth = el.offsetParent.offsetParent.clientWidth
    const left = el.offsetLeft
    const point1988 = parentWidth/100 * 25
    const point2006 = parentWidth/100 * 75
    if (left <= 0 || left <= point1988 ) {
        el.style.left = `${0}px`
        lineWhiteWidth(el.style.left)
    } else if (left > point1988 && left < point2006 ) {
        el.style.left = `${parentWidth/100 * 50}px`
        lineWhiteWidth(el.style.left)
    } else if (left >= point2006) {
        el.style.left = `${parentWidth}px`
        lineWhiteWidth(el.style.left)
    }
    el.removeEventListener('mousemove', moveStone)
}