<template>
    <div class="rr-web-test">
        <input v-model="test" style="background:yellow">
        <button @click="save">点击提交{{events.length}}</button>
        <br>
        <button @click="stop">停止录制</button>
        <button @click="show" style="position: absolute; top: 100px">演示</button>
        <div id="replaycontent" style="width: 400px;height: 400px">

        </div>
    </div>
</template>
<script>
import { record } from 'rrweb';
import 'rrweb-player/dist/style.css';
import RrwebPlayer from 'rrweb-player';
export default {
    data () {
        return {
            events: [[]],
            test: '',
            target: null
        };
    },
    mounted () {
        this.init();
    },
    methods: {
        init () {
            const _this = this;
            this.target = record({
                emit (event, isCheckout) {
                    if (isCheckout) {
                        _this.events.push([]);
                    }
                    const lastEvents = _this.events[_this.events.length - 1];
                    lastEvents.push(event);
                },
                checkoutEveryNms: 10 * 1000 // 每10秒钟重新制作快照
            });
        },
        stop () {
            this.target();
        },
        show () {
            const jsonStr = window.localStorage.getItem('name1');
            const events = JSON.parse(jsonStr).events;
            // eslint-disable-next-line no-new
            new RrwebPlayer({
                target: document.getElementById('replaycontent'),
                data: { events }
            });
        },
        save () {
            // this.$message.error('报错');
            const len = this.events.length;
            const events = this.events[len - 2].concat(this.events[len - 1]);
            console.log(events, 'event');
            const body = JSON.stringify({ events: events });
            window.localStorage.setItem('name1', body);
        }
    }
};
</script>
<style scoped lang='scss'>

</style>
