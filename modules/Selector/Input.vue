<template>
    <div class="select-input">
        <input type="text" :placeholder="placeholder">
    </div>
</template>
<script>
export default {
    data () {
        return {};
    },
    props: {
        placeholder: {
            default: '',
            type: String
        },
        data: {
            default: () => [],
            type: Array
        },
        value: {
            default: '',
            type: String
        }
    }
    // mounted () {
    // },
    // methods: {
    // }
};
</script>
<style scoped lang='scss'>
.select-input {
    input {
        border:  1px solid #010101;
    }
}
</style>
