export default {
    bind (el, bind, vnode) {
        function documentHandler (e) {
            // el 包含其触发的元素 那当然不能触发啦
            if (el.contains(e.target)) {
                return false;
            }
            console.log('不满足');
            // 满足上面条件， 并且expression 的值不为空 触发（希望value是个函数）
            if (bind.expression) {
                // console.log(bind.value);
                // 调用自定义指令传来的函数，e是事件原对象 作为参数（为什么传e 因为有些情况需要把这个对象抛出方便用户的操作）
                bind.value(e);
            }
        }
        // 取消绑定时调用
        el.__vueClickOutside__ = documentHandler;
        document.addEventListener('click', documentHandler);
    },
    unbind (el, binding) {
        // 取消事件监听（el.__vueClickOutside 派上用场了吧）
        document.removeEventListener('click', el.__vueClickOutside__);
        // 既然都取消了 那么这个属性就没必要存在了
        delete el.__vueClickOutside__;
    }
    // 原文链接：https://blog.csdn.net/qq_40710228/article/details/104668577
};
