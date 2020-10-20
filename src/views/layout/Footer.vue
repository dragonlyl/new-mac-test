<template>
    <a-layout-footer class="footer-container">
        <p class="txt">Copyright © 2020  ZJDLR. All Rights Reserved. </p>
    </a-layout-footer>
</template>
<script>
export default {
    name: 'AppFooter',
    data () {
        return {

        };
    },
    mounted () {
    },
    methods: {
        handleOpen (key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose (key, keyPath) {
            console.log(key, keyPath);
        }
    }
};
</script>
<style scoped lang='scss'>
.footer-container {
    text-align: center;
    background: #FFFFFF;
    border-top: 1px solid #DEE4E7;
    padding: 0;
    .txt {
        font-size: 10px;
        color: #878B98;
        letter-spacing: 0;
        line-height: 18px;
        padding: 3px 0;
    }
}
</style>
