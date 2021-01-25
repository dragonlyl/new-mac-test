<template>
    <div class="form-outer">
        <div class="inner" ref="jack">
            <div class="left" style="display:inline-block; width: 50%">
                <template v-for="item in list">
                    <item v-if="item.check" :ref="item.name + 't'" :key="item.name" :item="item"></item>
                </template>
            </div>
            <div class="right" style="display:inline-block; width: 50%">
                <el-button
                class="item"
                v-for="item in list" :key="item.name"
                @click="changeCheck(item)">{{item.name}}</el-button>

            </div>
        </div>
        <div class="upload">
            <el-button @click="upload">提交</el-button>
        </div>
    </div>
</template>
<script>
import item from '@/components/item';
export default {
    name: 'Form',
    components: { item },
    data () {
        return {
            list: [
                { val: 0, check: false, name: 'jack' },
                { val: 0, check: false, name: 'mack' }
            ]
        };
    },
    computed: {},
    watch: {},
    created () {},
    mounted () {},
    methods: {
        changeCheck (item) {
            item.check = !item.check;
        },
        async upload () {
            const promiseList = [];
            this.list.forEach(val => {
                if (val.check) {
                    const list = this.$refs[val.name + 't'];
                    if (list && list.length) {
                        const cur = list[0];
                        promiseList.push(cur.upload());
                    }
                }
            });
            try {
                const val = await Promise.all(promiseList);
                if (val) {
                    console.log(val);
                }
            } catch (error) {
                this.$message.info(error.message);
            }
            console.log('结束代码');
        }
    }
};
</script>

<style lang='scss' scoped>

</style>
