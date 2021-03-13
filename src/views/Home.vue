<template>
    <div class="home-wrapper">
        <div
            class="test"
            style="width: 40px;height: 40px; background: yellow;">
        </div>
        <!-- <img v-lazy="require('../assets/img/sidebar-user-normal.png')" class="psd" > -->
        <!-- 不行 -->
        <!-- <img :data-src="require('../assets/img/sidebar-user-normal.png')" class="psd" :src="require('@/assets/img/user-avatar.png')"> -->
        <div
            class="outer"
            
            v-lazy-container="{ selector: 'img', error: require('@/assets/img/user-avatar.png'), loading: require('@/assets/img/user-avatar.png')}">
            <!-- <img
                :data-src="require(item)"
            > -->
            <img
                v-for="item in list"
                :key="item"
                :data-src="item"
            >
            <img
                :data-src="require('@/assets/img/sidebar-user-normal.png')"
            >
            <img
                :data-src="require('@/assets/img/sidebar-user-normal.png')"
            >
            <img
                :data-src="require('@/assets/img/sidebar-user-normal.png')"
            >
            <img
                :data-src="require('@/assets/img/sidebar-user-normal.png')"
            >
        </div>
        <el-button
            style="height: 34px;line-height: 34px;padding: 0 12px"
            @click="post">测试</el-button>
        <my-button>测试</my-button>
    </div>
</template>

<script>
// @ is an alias to /src
import { sendMail } from '@/common/api';
import $ from 'jquery';
export default {
    name: 'Home',
    components: {},
    data () {
        return {
            list: [
                require('@/assets/img/test.jpg'),
                require('@/assets/img/sidebar-user-normal.png'), require('@/assets/img/sidebar-user-active.png'),
                require('@/assets/img/sidebar-record-normal.png'), require('@/assets/img/sidebar-record-active.png')
            ],
            aInfoList: [
                { key: '姓      名', value: 'fff' },
                { key: '性      别', value: '' },
                { key: '民      族', value: '' },
                { key: '出      生', value: '' },
                { key: '住      址', value: '' },
                { key: '身份证号', value: '' },
                { key: '签发机关', value: '' },
                { key: '有效期限', value: '' }
            ]
        };
    },
    mounted () {
    // this.$nextTick(() => {
    //     window.addEventListener('message', function (e) {
    //         console.log(e.source);
    //         if (e.source !== window.parent) return;
    //         window.parent.postMessage('yellow', '*');
    //     }, false);
    // });
    },
    methods: {
        post () {
            $('.test').animate({ height: '70px' });
            sendMail(this.aInfoList).then((res) => {
                console.log(res);
            });
            console.log(window.parent, 'parren');
        }
    }
};
</script>
<style scoped lang="scss">
.outer {
width: 100px; height:100px ; overflow: auto;
img {
    width: 100%;
}
}
</style>
