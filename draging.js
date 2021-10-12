export default function draging(Vue) {
    Vue.directive('draging', {
        bind(el) {
            el.drag = true
        },
        inserted(el) {
            pcUse(el)
        }
    })
}

function pcUse(el) {
    let bold = createElement()
    let clientX
    let clientY
    let changeDom
    let moveDom
    el.addEventListener('mousedown', () => {
        moveDom = el
        document.body.appendChild(bold)
        bold.addEventListener('mousemove', (e) => {
            clientX = e.clientX
            clientY = e.clientY
            bold.style.display = 'none'
            changeDom = document.elementFromPoint(clientX, clientY)
            if (changeDom.drag === true) {
                let changeParent = changeDom.parentNode
                let moveParent = moveDom.parentNode
                changeParent.insertBefore(moveDom, changeDom)
                moveParent.insertBefore(changeDom, moveDom)
            }
            bold.style.display = 'block'
        })
        bold.addEventListener('mouseup', () => {
            if ([...document.body.childNodes].indexOf(bold) > -1) {
                document.body.removeChild(bold)
            }

        })
    })
}

function createElement() {
    let element = document.createElement('div')
    element.style.width = '100vw'
    element.style.height = '100vh'
    element.style.position = 'absolute'
    element.style.top = '0'
    element.style.left = '0'
    return element
}