import DragBox from './DragBox.vue'
import DragItem from './DragItem.vue'
import drag from './drag'
import touch from './touch'
import draging from './draging'
let install = function (Vue) {
    drag(Vue)
    touch(Vue)
    draging(Vue)
    Vue.component('DragBox',DragBox)
    Vue.component('DragItem',DragItem)
}




export default { install }