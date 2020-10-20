<template>
    <div class="outer">
        <HelloWorld></HelloWorld>
    </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
export default {
    name: 'Upload',
    components: {
        HelloWorld
    },
    data () {
        return {
            curScore: 1,
            value1: 2,
            value: 2
        };
    },
    methods: {
        changeRate () {
            this.curScore += 1;
        },
        test (val) {
            this.curScore = Number(val.target.value);
        }
    }
};
</script>

<style>

</style>
