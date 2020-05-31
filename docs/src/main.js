const toggleClass = (element, name) => {
    if (element.classList.contains(name)) {
        element.classList.remove(name)
    } else {
        element.classList.add(name)
    }
}


const toggleMenu = () => {
    const mobile_header = document.querySelector('#mobile-header')
    const mobile_menu = document.querySelector('#mobile-menu')

    toggleClass(mobile_menu, 'fa-rotate-90')
    toggleClass(mobile_header, 'hidden')

    for (i=0; i<mobile_header.children.length; ++i) {
        toggleClass(mobile_header.children[i], 'hidden')
    }
}


window.addEventListener('load', () => {
    const mobile_menu = document.querySelector('#mobile-menu')

    mobile_menu.addEventListener('click', toggleMenu)
})

document.fonts.ready.then(() => {
    const spinner = document.querySelector('#spinner')
    const body = document.querySelector('body')

    toggleClass(spinner, 'fade-out')
    toggleClass(body, 'no-scroll')
})
