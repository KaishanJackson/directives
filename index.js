import drag from './drag'
import touch from './touch'
import draging from './draging'
let install = function (Vue) {
    drag(Vue)
    touch(Vue)
    draging(Vue)
}




export default { install }