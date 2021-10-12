export default function drag(Vue){
    Vue.directive('drag', {
        inserted: function (el,target) {
            let moveDom;
            let clientX;
            let clientY;
            let changeX;
            let changeY;
            el.addEventListener('mousedown', (e) => {
                clientX = e.clientX
                clientY = e.clientY
                const rect = e.target.getBoundingClientRect()
                moveDom = e.target
                moveDom.style.position = 'absolute'
                moveDom.style.top = rect.top + 'px'
                moveDom.style.left = rect.left + 'px'
                let bold = createMoveBold()
                document.body.appendChild(bold)
                bold.addEventListener('mousemove', (e) => {
                    changeX = clientX - e.clientX
                    changeY = clientY - e.clientY
                    moveDom.style.top = rect.top - changeY + 'px'
                    moveDom.style.left = rect.left - changeX + 'px'
                })
                bold.addEventListener('mouseup', (e) => {
                    document.body.removeChild(bold)
                    if(typeof target.value === 'function'){
                        target.value(e)
                    }else{
                        throw new Error(`${'function'||target.value.name} is not defind`)
                    }

                })
            })
        }
    })
}
function createMoveBold() {
    let bold = document.createElement('div')
    bold.style.width = '100vw'
    bold.style.height = '100vh'
    bold.style.position = 'absolute'
    bold.style.top = 0
    bold.style.left = 0
    return bold
}