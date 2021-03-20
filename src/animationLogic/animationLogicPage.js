import style from '../components/Pagination.module.css'
let startPosition
const pagePoint = {
    onePage: 0,
    twoPage: 768,
    threePage: 1536,
}
const startPage = (e) => {
    const touch = e.changedTouches[0]
    startPosition = touch.pageY
    const el = e.target
    el.addEventListener('touchmove', movePage, {passive: false})
}
const movePage = (e) => {
    e.preventDefault()
    const touch = e.changedTouches[0]
    const positionNow = touch.pageY
    let id = e.target.id
    if (+id === 1 && (startPosition - positionNow) > 100) {
        animate(pagePoint.onePage, true)
        removeClassActive('roundOne')
        addClassActive('roundTwo')
    } else if (+id === 2) {
        if ((startPosition - positionNow) > 100) {
            animate(pagePoint.twoPage, true)
            removeClassActive('roundTwo')
            addClassActive('roundThree')
        } else if ((positionNow - startPosition) > 100) {
            animate(pagePoint.twoPage, false)
            removeClassActive('roundTwo')
            addClassActive('roundOne')
        }
    } else if (id === '' && (positionNow - startPosition) > 100) {
            animate(pagePoint.threePage, false)
            removeClassActive('roundThree')
            addClassActive('roundTwo')
    }
}
const animate = (start, up) => {
    let i = 0
    if(up) {
        movePageUp(start, i)
    } else {
        movePageDown(start, i)
    }
}
const movePageDown = (start, i) => {
    const animationPage = () => {
        i = i + 16
        window.scrollTo(0, start - i)
        if (i < 768) {
            requestAnimationFrame(animationPage)
        }
    }
    animationPage()
}
export const movePageUp = (start, i) => {
    const animationPage = () => {
        i = i + 16
        window.scrollTo(0, start + i)
        if (i < 768) {
            requestAnimationFrame(animationPage)
        }
    }
    animationPage()
}

export const addClassActive = (id) => {
        const round = document.getElementById(id)
        round.classList.add(`${style.active}`)
}
export const removeClassActive = (id) => {
    const round = document.getElementById(id)
    round.classList.remove(`${style.active}`)
}


export default startPage