<template>
    <div class="rr-web-test">
        <!-- <img src="@/assets/img/logo.png"> -->
        <input type="text" v-model="test" class="rr-block" style="background:yellow">
        <button @click="save" style="cursor: pointer">点击提交</button>
        <br>
        <button @click="show" style="position: absolute; top: 100px; cursor: pointer">演示</button>
        <button @click="show1" style="position: absolute; top: 120px; cursor: pointer">演示2</button>
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
            events: [],
            test: '',
            target: null
        };
    },
    mounted () {
        this.init();
    },
    methods: {
        init () {
            console.log(record);
            const _this = this;
            this.target = record({
                emit (event) {
                    console.log(event, 'event');
                    _this.events.push(event);
                }
            });
            setTimeout(() => {
                _this.target();
            }, 1000 * 60);
        },
        show () {
            const jsonStr = window.localStorage.getItem('name2');
            const events = JSON.parse(jsonStr).events;
            console.log(events, document.getElementById('replaycontent'), 'evnt');
            // const replayer = new RrwebPlayer({
            // eslint-disable-next-line no-new
            new RrwebPlayer({
                target: document.getElementById('replaycontent'),
                data: { events }
            });
            // replayer.play();
        },
        show1 () {
            const jsonStr = window.localStorage.getItem('name');
            const events = JSON.parse(jsonStr).events;
            console.log(events, document.getElementById('replaycontent'), 'evnt');
            // const replayer = new RrwebPlayer({
            // eslint-disable-next-line no-new
            new RrwebPlayer({
                target: document.getElementById('replaycontent'),
                data: { events }
            });
        },
        save () {
            const body = JSON.stringify({ events: this.events });
            this.events = [];
            window.localStorage.setItem('name2', body);

            // fetch('http://localhost:8089/users/rrweb', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body
            // });
            // fetch('http://localhost:8089/users/getUser', {
            //     method: 'GET'
            // }).then(res => console.log(res));
        }
    }
};
</script>
<style scoped lang='scss'>

</style>
