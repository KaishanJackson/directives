export default function draging(Vue) {
    let moveDom
    let getDom
    let changeDom
    let nodeList
    Vue.directive('draging', {
        inserted(el) {
            nodeList = [...el.parentNode.childNodes]
            moveDom = el.cloneNode(true)
            console.log(moveDom)
            el.addEventListener('mousedown', () => {
                console.log(nodeList.indexOf(el))
                document.body.addEventListener('mousemove', (e) => {
                    var _x = e.clientX;
                    var _y = e.clientY;
                    if (nodeList.indexOf(changeDom) > -1) {
                        getDom = document.elementFromPoint(_x, _y)
                        changeDom = getDom.cloneNode(true)
                    }
                })
                document.body.addEventListener('mouseup',()=>{
                    document.body.removeEventListener('mousemove')
                    console.log(el == changeDom)
                })
            })

        }
    })
}

