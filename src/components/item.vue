<template>
    <div class="item" :ref="item.name">
        <el-form ref="item-ref" :model="item" :rules="rules">
            <el-form-item prop="val" label="数量">
                <el-input v-model="item.val"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    name: 'item',
    components: {},
    props: {
        item: {
            type: Object,
            default: () => ({})
        }
    },
    data () {
        const numberRule = (rule, value, callback) => {
            const { field } = rule;
            if (field === 'val') {
                if (!Number.isInteger(Number(value))) {
                    callback(new Error('不是数字'));
                }
                // true 直接返回
                callback();
            }
        };
        return {
            rules: {
                val: [{ require: true, message: '不能为空' },
                    { validator: numberRule, trigger: 'blur' }]
            }
        };
    },
    computed: {},
    watch: {},
    created () {},
    mounted () {},
    methods: {
        clearV () {
            this.$refs['item-ref'].resetValidates();
        },
        upload () {
            return new Promise((resolve, reject) => {
                this.$refs['item-ref'].validate((valid) => {
                    if (valid) {
                        resolve('success');
                    } else {
                        this.$refs['item-ref'].focusFirstField();
                        reject(new Error('按照提示框修改内容'));
                        return false;
                    }
                });
            });
        }
    }
};
</script>

<style lang='scss' scoped>

</style>
