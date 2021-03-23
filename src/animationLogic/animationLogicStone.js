let startPosition
let positionNow
let point1998
let point2016
let startSlide = 1
export const enterStone = (e, yearsSlideConteiner, lineWhite) => {
    startPosition = e.changedTouches[0].clientX
    const el = e.target;
    const slideConteiner = yearsSlideConteiner.current
    positionNow = el.offsetLeft
    el.addEventListener('touchmove',(e) => moveStone(e, slideConteiner, lineWhite)) 
}
const moveStone = (e, slideConteiner, lineWhite) => {
    const touch = e.changedTouches[0]
    const el = e.target;
    const left = el.offsetLeft
    const parentWidth = el.offsetParent.offsetParent.clientWidth
    point1998 = parentWidth/100 * 25
    point2016 = parentWidth/100 * 75
    if (left >= 0 && left <= parentWidth) {
        el.style.left = `${+positionNow + (touch.pageX - startPosition)}px`
        lineWhiteWidth(el.style.left, lineWhite.current)
        if(left >= point1998 && startSlide === 1 ){
            animate(true, 0, slideConteiner)
            startSlide = 2
        } else if (left >= point2016 && startSlide === 2) {
            animate(true, 1024, slideConteiner)
            startSlide = 3
        } else if (left <= point2016 && startSlide === 3) {
            animate(false, 2040, slideConteiner)
            startSlide = 2
        } else if (left <= point1998 && startSlide === 2) {
            animate(false, 1024, slideConteiner)
            startSlide = 1
        }
    }
}
export const leaveStone = (e, lineWhite) => {
    const el = e.target
    const parentWidth = el.offsetParent.offsetParent.clientWidth
    const left = el.offsetLeft
    const lineWhiteEl = lineWhite.current
    if (left <= 0 || left <= point1998 ) {
        el.style.left = `${0}px`
        lineWhiteWidth(el.style.left, lineWhiteEl)
    } else if (left > point1998 && left < point2016 ) {
        el.style.left = `${parentWidth/100 * 50}px`
        lineWhiteWidth(el.style.left, lineWhiteEl)
    } else if (left >= point2016) {
        el.style.left = `${parentWidth}px`
        lineWhiteWidth(el.style.left, lineWhiteEl)
    }
    el.removeEventListener('mousemove', moveStone)
}
const animate = (next, start, el) => {
    let i = 0
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
    if (next) {
        nextSlide(start, i, el)
    } else {
        prevSlide(start, i, el)
    }
}

const lineWhiteWidth = (number, el) => {
    el.style.width = number
}