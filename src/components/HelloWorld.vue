<template>
    <div class="test">
        <h2>name</h2>
        <el-input style="width: 12px"></el-input>
        <!-- <img src="http://localhost:8089/images/1598621852938.png" > -->
        <img src="http://localhost:8089/images/1600788083078.jpeg" >

        <el-upload
            class="upload-demo"
            action="http://localhost:8089/users/upload"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :on-success="handleSuccess"
            :before-remove="beforeRemove"
            list-type="picture-card"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
        >
            <!-- :file-list="fileList" -->

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
import { getUser, saveUser } from '@/common/api';
// import config from '@/config/index'
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    data () {
        return {
            fileList: [
                // {
                //     name: 'food.jpeg',
                //     url: '/images/1600783925820.jpeg'
                // }, {
                //     name: 'tets.mp4',
                //     url: '/images/1600783940360.mp4'
                // }
            ]
        };
    },
    mounted () {
        getUser({ id: 200 }).then(res => {
            console.log(res);
        });
        saveUser().then(res => {
            console.log(res, 'res');
        });
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
            // handlePreview
        },
        handleRemove () {
            // handleRemove
        },
        beforeRemove () {
            // beforeRemove
        },
        handleExceed () {
            console.log('over');
        },
        handleSuccess (res, file, fileList) {
            console.log(res, file.name, file.name.includes('.mp4'));
            if (res && res.url) {
                const list = fileList.map(f => f.response);
                if ((/\.mp4$/i).test(file.name)) {
                    this.$nextTick(() => {
                        this.setVideo(file, fileList);
                    });
                }
                this.fileList = list;
                if (fileList.length > 3) {
                    fileList.pop();
                }
            } else {
                console.log('fail');
            }
        },
        setVideo (file, fileList) {
            this.$nextTick(() => {
                const findIndex = fileList.findIndex(e => e.name === file.name);
                // setTimeout(() => {
                const fileListDom = this.$el.querySelectorAll('.el-upload-list__item');
                if (findIndex >= 0) {
                    const li = fileListDom[findIndex];
                    console.log(li, 'li');
                    this.videoReplaceImg(li, fileList[findIndex] && fileList[findIndex].url);
                }
            // }, 1000);
            });
        },
        videoReplaceImg (li, url) {
            const video = document.createElement('video');
            video.src = url;
            video.onclick = this.showVideoPlayer.bind(null, url);
            video.classList.add('el-upload-list__item-thumbnail');
            const videoImg = document.createElement('span');
            videoImg.classList.add('video-icon');
            videoImg.classList.remove('el-upload-list__item-thumbnail');
            videoImg.onclick = this.showVideoPlayer.bind(null, url);
            li.classList.add('video');
            this.$nextTick(() => {
                const img = li.querySelector('img');
                console.log(li, img, 'img');
                li.replaceChild(video, img);
                li.appendChild(videoImg);
            });
        },
        showVideoPlayer (videoSrc) {
            console.log(videoSrc, 'sero');
            window.open(videoSrc);
        }
    }

};
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
    // >>>  .video-icon {
    //     display: inline-block;
    //     width: 20px;
    //     height: 20px;
    //     background-color: yellow;
    // }
}
</style>
