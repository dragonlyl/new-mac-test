<template>
    <div class="login-container">
        <a-form :form="oLoginForm" :label-col="{ span: 5 }" class="login-form" :wrapper-col="{ span: 12 }" @submit="handleSubmit">
            <img src="@/assets/img/login-logo.png" class="img">
            <h2 class="title">欢迎登录系统</h2>
            <a-input placeholder="请输入账号" size="large" v-decorator="[
          'username',
          { rules: [{ required: true, message: 'Please select your gender!' }] },
        ]" v-model="oLoginForm.username"/>
            <a-input placeholder="请输入密码" size="large" v-model="oLoginForm.password"/>
            <a-button type="primary" size="large" html-type="submit" class="login-btn">登录</a-button>
        </a-form>
    </div>
</template>

<script>

export default {
    data () {
        return {
            oLoginForm: {
                username: '',
                password: ''
            },
            oForm: this.$form.createForm(this, { name: 'coordinated' })
        };
    },
    mounted () {
    },
    methods: {
        handleSubmit (e) {
            e.preventDefault();
            this.oForm.validateFields((err, values) => {
                if (!err) {
                    console.log('Received values of form: ', values);
                }
                this.$router.push('/home');
            });
        }
    }
};
</script>

<style scoped lang="scss">
    .login-container {
        height: 100%;
        width: 100%;
        background: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        .login-form {
            width: 300px;
            text-align: center;
            .img {
                width: 80px;
                height: 80px;
            }
            .title {
                font-size: 24px;
                color: #373E54;
                margin: 24px auto;
                letter-spacing: 0;
            }
            .ant-input {
                background-color: #F4F7FA;
                &+.ant-input {
                    margin-top: 14px;
                }
            }
            .login-btn {
                width: 100%;
                margin-top: 30px;
            }
        }

    }
</style>
