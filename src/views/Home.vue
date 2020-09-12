<template>
    <div class="home">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        <rate :score="1.5" :disabled="true"/>
        <h3>只读，显示数字：</h3>
        <rate :score="3.6" :disabled="true" showText/>
        <h3>只读，显示数字：</h3>
        <rate :score="4" :disabled="true" showText/>
        <h3>鼠标点击评分,显示数字：</h3>
        <rate :score.sync="curScore" :size="12" showText/>
        <button @click="changeRate">change rate</button>
        <input type="text" :value="value1" @input="value1 = $event.target.value">
        <input type="text" v-model="value1">
        <vModel v-model="value"></vModel>{{value}}
    </div>
</template>

<script>
// @ is an alias to /src
import Rate from '@/components/rate'
import HelloWorld from '@/components/HelloWorld.vue'
import vModel from '@/components/vModel.vue'

export default {
    name: 'Home',
    components: {
        HelloWorld, Rate, vModel
    },
    data () {
        return {
            curScore: 1,
            value1: 2,
            value: 2
        }
    },
    methods: {
        changeRate () {
            this.curScore += 1
        },
        test (val) {
            this.curScore = Number(val.target.value)
        }
    }
}
</script>
