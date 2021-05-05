<template>
    <div class="tst" style="text-align:left"  v-click-outside='test'>
        <div
            class="tab"
            @click="change"
            style="height: 20px;width: 240px; background: yellow" >

        </div>
        <ul v-if="visible" style="display: inline-block">
            <li v-for="item in list" :key="item">
                {{item}}
            </li>
        </ul>
    </div>
</template>
<script>
import clickOutside from '@/views/click';
export default {
    data () {
        return {
            visible: false
        };
    },
    props: {
        list: {

        }
    },
    directives: {
        clickOutside: clickOutside
    },
    // mounted () {
    // },
    methods: {
        change () {
            this.visible = !this.visible;
        },
        test (e) {
            console.log(e);
            if (this.visible) this.visible = false;
        }
    }
};
</script>
<style scoped lang='scss'>

</style>
