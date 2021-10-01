export default {
    // inserted：被绑定元素插入父节点时调用
    // 第一次绑定到元素的时候触发 (bind 在insert之前)
    // 此时bind父节点为null 且不在dom tree
    bind (el, bind, vnode) {
        console.log(el, 'el');
        console.log(bind, bind.arg, 'bind');
        const time = 2000;
        // const value = el.getAttribute('data-value');
        const cursor = el.style.cursor || 'auto';
        let to = null;
        el.addEventListener('click', () => {
            if (to) {
                clearTimeout(to);
            }
            if (!el.disabled) {
                el.disabled = true;
                el.style.cursor = 'not-allowed';
                // console.log(el.style.cursor, 'el.style.cursor');
                // bind.value(value);
                bind.value();
                to = setTimeout(() => {
                    el.disabled = false;
                    el.style.cursor = cursor;
                }, time);
            }
        });
    }
};
