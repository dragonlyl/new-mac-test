<template>
    <button
        class="my-button"
        @click="handleButton"
        :class="{
            disable:bDisable
        }"
    >
        <div v-for="i in data" :key="i.name">

            <my-button v-if="i.childrens" :data='i.childrens'>
                {{i.name}}
            </my-button>
        </div>
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: 'MyButton',
    data () {
        return {};
    },
    props: {
        disable: {
            default: false,
            type: Boolean
        },
        data: {
            default: () => [],
            type: Array
        }
    },
    computed: {
        bDisable () {
            return this.disable;
        }
    },
    // mounted () {
    // },
    methods: {
        handleButton () {
            console.log('button click');
            this.$emit('click');
        }
    }
};
</script>
<style scoped lang='scss'>

</style>
