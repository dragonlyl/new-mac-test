<template>
    <div class="home-wrapper">
        <el-button style="height: 34px;line-height: 34px;padding: 0 12px" @click="post">测试</el-button>
    </div>
</template>

<script>
// @ is an alias to /src
import { sendMail } from '@/common/api';
export default {
    name: 'Home',
    components: {
    },
    data () {
        return {

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
            sendMail(this.aInfoList).then(res => {
                console.log(res);
            });
            console.log(window.parent, 'parren');
        }
    }
};
</script>
<style scoped lang="scss">

</style>
