<template>
    <div class="test-wrapper" style="height: 400px">
        <div class="test" v-demo:[arg1].test='message'></div>
        <!-- <div style="border: 1px solid red" v-throttle='click' :data-value='test'>点击</div> -->
        <div style="border: 1px solid red" v-throttle='() => click(test)'>点击</div>
    </div>
</template>

<script>
/* eslint-disable no-tabs */
import throttle from './directive/throttle.js';
export default {
    name: 'Directive1',
    components: { },
    data () {
        return {
            message: 'messageValue',
            arg1: '动态改变',
            test: true,
            list: [
                'jack',
                'ma'
            ]
        };
    },
    methods: {
        test1 (e) {
            console.log('test');
            if (this.test) this.test = false;
            // this.$emit('on-clickoutside');
            // console.log(e, 'eee');
        },
        click (val) {
            console.log(val, 2222);
        }
    },
    directives: {
        demo: {
            bind (el, bind, vnode) {
                var s = JSON.stringify;

                el.innerHTML = '指令名:' + s(bind.name) + '<br>'
                 + '表达式的值:' + s(bind.value) + '<br>'
                 + '表达式:' + s(bind.expression) + '<br>'
                 + '传个指令的参数arg: ' + s(bind.arg) + '<br>'
                 + '修饰符对象参数:' + s(bind.modifiers) + '<br>'
                  + '';
            }
        },
        throttle: throttle
    }

};
</script>

<style>

</style>
