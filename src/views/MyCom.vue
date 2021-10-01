<template>
    <div class="my-com">
        <my-selector
            placeholder= 'test'
            :data= 'aList'
            v-model= 'value'
        ></my-selector>
    </div>
</template>
<script>
export default {
    name: 'MyCom',
    data () {
        return {
            aList: ['aa', 'bb', 'cc'],
            value: ''
        };
    },
    // mounted () {},
    methods: {
    }
};
</script>
<style scoped lang='scss'>
</style>
