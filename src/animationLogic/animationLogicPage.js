import style from '../components/Pagination.module.css'
let startPosition  
let requestUpId
let requestDownId 
const pagePoint = {
    onePage: 0,
    twoPage: 768,
    threePage: 1536,
}
const startPage = (e, refSlide, {roundOne, roundTwo, roundThree}) => {
    cancelAnimationFrame(requestUpId)
    cancelAnimationFrame(requestDownId)
    startPosition = e.changedTouches[0].pageY
    const el = refSlide.current
    el.addEventListener('touchmove', (e) => movePage(e, el, roundOne.current, roundTwo.current, roundThree.current), {passive: false})
}
const movePage = (e, el, roundOne, roundTwo, roundThree) => {
    if(e.cancelable) {
        e.preventDefault()
    }
    const positionNow = e.changedTouches[0].pageY
    const id = el.id 
    if((startPosition - positionNow) > 100) {
        if (id === '1') {
            animate(pagePoint.twoPage, true)
            toogleClassActive(roundTwo, roundOne)
        } else if (id === '2') {
            animate(pagePoint.threePage, true)
            toogleClassActive(roundThree, roundTwo)
        }
    } else if ((positionNow - startPosition) > 100) {
        if (id === '2') {
            animate(pagePoint.onePage, false)
            toogleClassActive(roundOne, roundTwo)
        } else if (id === '3') {
            animate(pagePoint.twoPage, false)
            toogleClassActive(roundTwo, roundThree)
        }
    }
}
const animate = (end, up) => {
    const start = window.scrollY
    const movePageUp = (end, start) => {
        const draw = () => {
            start = start - 24
            window.scrollTo(0, start)
        }
        requestDownId = requestAnimationFrame( function movePageDown () {
            draw()
            if (start > end) {
                requestAnimationFrame(movePageDown)
            }
        })
    }
    const movePageDown = (end, start) => {
        const draw = () => {
            start = start + 24
            window.scrollTo(0, start)
        }
        requestUpId = requestAnimationFrame( function movePageDown () {
            draw()
            if (start < end) {
                requestAnimationFrame(movePageDown)
            }
        })
    }
    if(up) {
        movePageDown(end, start)
    } else {
        movePageUp(end, start)
    }
}
export const nextPage = (end, elAddClass, elRemoveClass) => {
    animate(end, true)
    toogleClassActive(elAddClass.current, elRemoveClass.current)
}
const toogleClassActive = (elAddClass, elRemoveClass) => {
    elAddClass.classList.add(`${style.active}`)
    elRemoveClass.classList.remove(`${style.active}`)
}

export default startPage