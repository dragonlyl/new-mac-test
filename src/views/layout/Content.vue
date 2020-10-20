<template>
    <a-layout-content class="content-container">
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </a-layout-content>
</template>

<script>
export default {
    name: 'AppContent',
    data () {
        return {};
    }
};
</script>

<style scoped lang="scss">
  .content-container {
      margin-top: 42px;
    // -webkit-box-flex: 1;
    // -moz-box-flex: 1;
    // flex: 1;
    // -webkit-flex: 1;
    // overflow: auto;
    // min-width: 1080px;
  }
</style>
