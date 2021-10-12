export default function touch(Vue) {
    let touch = false
    let moveDom;
    Vue.directive('touch', {
        inserted: function (el, content) {
            el.addEventListener('touchstart', () => {
                touch = true
                moveDom = el
            })
            el.addEventListener('touchmove', (e) => {
                var _x=e.touches[0].clientX;
                var _y=e.touches[0].clientY;
                moveDom = document.elementFromPoint(_x,_y)
            })
            el.addEventListener('touchend', (e) => {
                if (typeof content.value === 'function' && touch && moveDom === el) {
                    content.value(e)
                    touch = false
                }
            })
        }
    })
}