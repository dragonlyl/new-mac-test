<template>
    <div class="test">
        <h2>name</h2>
        <!-- <img src="http://localhost:8089/images/1598621852938.png" > -->
        <el-upload
            class="upload-demo"
            action="http://localhost:8089/users/upload"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :on-success="handleSuccess"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
        >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
        <div class="test">
            <!-- <div class="block">
                <video src="http://localhost:8089/images/1599490585472.mp4" preload="auto"
                controls="controls" autoplay="autoplay"
                playsinline="true"
                webkit-playsinline="true"
                x5-video-player-type='h5' x5-video-player-fullscreen='true'></video>
            </div> -->
            <div class="block" v-for="item in fileList" :key="item.url">
                <video :src="item.url" v-if="item.name && item.name.includes('.mp4')"></video>
                <img :src="item.url" v-else>
            </div>
        </div>
    </div>
</template>
<script>
import { getUser, saveUser } from '@/common/api'
// import config from '@/config/index'
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    data () {
        return {
            fileList: []
        }
    },
    mounted () {
        getUser({ id: 200 }).then(res => {
            console.log(res)
        })
        saveUser().then(res => {
            console.log(res, 'res')
        })
        // getUser({
        //     params: { id: 200 },
        //     headers: {
        //         'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        //     }
        // }).then(res => {
        //     console.log(res)
        // })
    },
    methods: {
        handlePreview () {

        },
        handleRemove () {

        },
        beforeRemove () {

        },
        handleExceed () {

        },
        handleSuccess (res, file, fileList) {
            console.log(file, fileList)
            console.log(file.name, file.name.includes('.mp4'))
            const list = fileList.map(file => file.response)
            this.fileList = list
        }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// .wrapper {
//     .name {
//     }
// }
.test {
    .block {
        display: inline-block;
        width: 100px;
        height: 100px;
        video {
            width: 100%;
            height: 100%;
        }
        img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>
