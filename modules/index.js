import myButton from './Button/button.vue';
import mySelector from './Selector/index.vue';
const MyPlugin = {};
const aCompList = [
    myButton,
    mySelector
];
MyPlugin.install = function (Vue, options) {
    console.log(options);
    if (options.components) {
        const components = options.components;
        components.forEach(com => {
            aCompList.forEach(inner => {
                if (inner.name === com) {
                    Vue.component(inner.name, inner);
                }
            });
        });
    } else {
        aCompList.forEach(inner => {
            Vue.component(inner.name, inner);
        });
    }
};
// 或者第二种写法
// import 各种 组件,实现自己的install方法
// export {
//     button // export 出去
// }
// 然后在main文件里面 引入 {xx, ss} from 'modules'
// Vue.use(xx); Vue.use(ss)
export default MyPlugin;
