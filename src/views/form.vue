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
                    v-for="item in list"
                    :key="item.name"
                    @click="changeCheck(item)">{{item.name}}</el-button>

            </div>
        </div>
        <div class="upload">
            {{tets11}}
            <el-button @click="upload">提交</el-button>
        </div>
        <div class="upload">
            <el-button @click="upload1">提交1</el-button>
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
    // created () {},
    // mounted () {},
    methods: {
        changeCheck (obj) {
            obj.a.b = 2;
            // b = 2;
            obj.check = !obj.check;
        },
        async upload () {
            return new Promise((resolve, reject) => {
                reject(new Error('error'));
            });
            // const promiseList = [];
            // this.list.forEach(val => {
            //     if (val.check) {
            //         const list = this.$refs[val.name + 't'];
            //         if (list && list.length) {
            //             const cur = list[0];
            //             promiseList.push(cur.upload());
            //         }
            //     }
            // });
            // try {
            //     const val = await Promise.all(promiseList);
            //     if (val) {
            //         console.log(val);
            //     }
            // } catch (error) {
            //     this.$message.info(error.message);
            // }
            // console.log('结束代码');
        },
        async upload1 () {
            return new Promise((resolve, reject) => {
                reject(new Error('error'));
            });
        }
    }
};
</script>

<style lang='scss' scoped>

</style>
