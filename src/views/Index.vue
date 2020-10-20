<template>
    <a-layout class="index-container">
        <app-header></app-header>
        <app-content></app-content>
        <app-footer></app-footer>
    </a-layout>
</template>
<script>
import AppHeader from './layout/Header';
import AppContent from './layout/Content';
import AppFooter from './layout/Footer';
export default {
    data () {
        return {};
    },
    components: {
        AppHeader,
        AppContent,
        AppFooter
    }
};
</script>
<style scoped lang="scss">
.index-container{
    display: flex;
    flex-direction: column;
    // min-height: 100vh;
    height: 100%;
    min-height: 789px;
    font-size: 0;
    .content-wrapper{
        display: flex;
    }
}
</style>
