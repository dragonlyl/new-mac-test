<template>
    <div class="home-wrapper">
        <div
            class="test"
            style="width: 40px;height: 40px; background: yellow;">
        </div>
        <div class="test" :class="{active: test === 1}" @click="change(1)"></div>
        <div class="test" :class="{active: test === 2}" @click="change(2)"></div>
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
        <el-button
            style="height: 34px;line-height: 34px;padding: 0 12px"
            @click="tet">tet</el-button>
            
        <my-button @click="buttonClick" :data='aTest' :disable=true>测试</my-button>
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
            test: 1,
            list: [
                require('@/assets/img/test.jpg'),
                require('@/assets/img/sidebar-user-normal.png'), require('@/assets/img/sidebar-user-active.png'),
                require('@/assets/img/sidebar-record-normal.png'), require('@/assets/img/sidebar-record-active.png')
            ],
            aTest: [
                { name: 'tt' },
                { name: 'jack', childrens: [{ name: 'aa' }] },
                { name: 'lucy', childrens: [{ name: 'bb', childrens: [{ name: 'cc' }] }] }
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
        change (v) {
            this.test = v;
        },
        buttonClick () {
            console.log(111);
        },
        tet () {
            return new Promise((resolve, reject) => {
                reject(new Error('error'));
            });
        },
        post () {
            $('.test').animate({ height: '70px' });
            sendMail(this.aInfoList).then((res) => {
                console.log(res, '回调内容');
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
.test {
    width: 100px;
    height: 100px;
    background-color: yellow;
    vertical-align: middle;
    display: inline-block;
    &.active {
        border: 10px solid blue;
        background-color: red;

    }

}
</style>
