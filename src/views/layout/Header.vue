<template>
    <a-layout-header class="header-wrapper">
        <a-row>
            <a-col :span="6" class="logo-block">
                <img src="@/assets/img/logo.png" class="logo">
                <img src="@/assets/img/logo-name.png" class="logo-name">
            </a-col>
            <template v-if="$route.path != '/login'">
                <a-col :span="12" class="sidebar">
                    <a-menu
                        mode="horizontal"
                        :default-selected-keys="[this.$route.path]"
                        :style="{ lineHeight: '40px' }"
                        theme="dark"
                        @click="changeMenu"
                    >
                        <a-menu-item key="/home">
                            <img src="@/assets/img/sidebar-user-normal.png" class="sidebar-icon normal">
                            <img src="@/assets/img/sidebar-user-active.png" class="sidebar-icon active">
                            <span class="key">识别</span>
                        </a-menu-item>
                        <a-menu-item key="/record">
                            <img src="@/assets/img/sidebar-record-normal.png" class="sidebar-icon normal">
                            <img src="@/assets/img/sidebar-record-active.png" class="sidebar-icon active">
                            <span class="key">记录</span>
                        </a-menu-item>
                        <a-menu-item key="3">
                            <img src="@/assets/img/sidebar-setting-normal.png" class="sidebar-icon normal">
                            <img src="@/assets/img/sidebar-setting-active.png" class="sidebar-icon active">
                            <span class="key">设置</span>
                        </a-menu-item>
                    </a-menu>
                </a-col>
                <a-col :span="6" class="user-block">
                    <a-popover v-model="visible" trigger="click">
                        <div class="opt-list" slot="content">
                            <img src="@/assets/img/logout.png">
                            <span class="txt">退出登录</span>
                        </div>
                        <img src="@/assets/img/user-avatar.png" class="avatar">
                        <span class="user-name">Admin</span>
                    </a-popover>
                </a-col>
            </template>
        </a-row>
    </a-layout-header>
</template>

<script>
export default {
    name: 'AppHeader',
    props: {
        routeName: {
            type: String
        },
        config: {
            type: Object
        }
    },
    watch: {},
    data () {
        return {
            showUserForm: false,
            userForm: {},
            input: '******',
            visible: false

        };
    },
    mounted () {
        console.log(this.$route.path);
    },
    methods: {
        changeMenu (e) {
            const { key } = e;
            if (this.$route.path !== key) {
                this.$router.push(key);
            }
        }
    }
};
</script>

<style scoped lang="scss">
.header-wrapper {
    height: 42px;
    // line-height: 50px;
    font-size: 0;
    line-height: 42px;
    // box-shadow: rgba(39, 54, 65, 0.1) 0 2px 2px;
    background: #FFFFFF;
    border-bottom: 1px solid #D9DDE7;
    width: 100%;
    position: fixed;
    z-index: 10;
    padding: 0 14px;
    .logo-block {
        .logo {
            width: 22px;
            height: 24px;
        }
        .logo-name {
            width: 60px;
            height: 14px;
            margin-left: 6px;
        }
    }
    .ant-menu-item {
        .key {
            vertical-align: middle;
            margin-left: 6px;
            font-size: 14px;
            color: #33363A;
        }
        .sidebar-icon {
            width: 16px;
            height: 16px;
            vertical-align: middle;
            &.normal {
                display: none;
            }
            &.active {
                display: inline-block;
            }
        }

    }
    .ant-menu {
        height: 40px;
        line-height: 40px;
        background-color: #fff;
        .ant-menu-item {
            &.ant-menu-item-selected {
                .key {
                    vertical-align: middle;
                    color: #fff;
                }
                .sidebar-icon {
                    &.active {
                        display: none;
                    }
                    &.normal {
                        display: inline-block;
                    }

                }
            }
        }
    }
    .user-block {
        cursor: pointer;
        text-align: right;

        .avatar {
            width: 22px;
            height: 22px;
            vertical-align: middle;
        }
        .user-name {
            font-size: 14px;
            color: #33363A;
            letter-spacing: 0;
            margin-left: 6px;
            vertical-align: middle;
        }
    }
    // .name {
    // }
}
.ant-popover-inner-content {
    padding: 0;
    .opt-list {
        cursor: pointer;
        &:hover {
            opacity: 0.6;
            // background-color: #D9DDE7;
        }
        img {
            width: 18px;
            height: 18px;
        }
        .txt {
            font-size: 14px;
            color: #35363B;
            margin-left: 14px;
        }
    }
}
</style>
