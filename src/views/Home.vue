<template>
    <div class="home-wrapper">
        <div class="user-info">
            <a-card title="身份证识别信息" size="small" class="user-card">
                <div class="user-info">
                    <img src="" class="avatar">
                    <div class="info-floor-outer">
                        <div class="info-floor" v-for="item in aInfoList.slice(0,6)" :key="item.key">
                            <span class="key">{{item.key}}</span>
                            <span class="value">{{item.value}}</span>
                        </div>
                        <div class="line"></div>
                        <div class="info-floor" v-for="item in aInfoList.slice(6)" :key="item.key">
                            <span class="key">{{item.key}}</span>
                            <span class="value">{{item.value}}</span>
                        </div>
                    </div>
                </div>
            </a-card>
        </div>
        <div  class="pic-info">
            <a-card title="人像信息" size="small" class="face-card" :bodyStyle ="{
                padding: '10px'
            }">
                <div class="video-wrapper">
                </div>
            </a-card>
            <!-- <div class="fail message">
                <img src="@/assets/img/message-loading.png" class="icon">
                <img src="@/assets/img/message-fail.png" class="icon">
                <img src="@/assets/img/message-success.png" class="icon">
                <span class="txt">信息对比中... 对比失败 对比成功</span>
            </div> -->
            <a-card title="身份证信息" size="small" class="id-card" :bodyStyle ="{
                padding: '10px'
            }">
                <div class="id-wrapper">
                    <div class="id-list">
                        <div class="id-video">

                        </div>
                        <div class="id-video">

                        </div>
                    </div>
                </div>
            </a-card>
        </div>
            <div class="home-operation">
                <div class="operation-top">
                    <div class="operation-floor">
                        <img src="@/assets/img/pic-user.png">
                        <p>拍摄人像</p>
                    </div>
                    <div class="operation-floor">
                        <img src="@/assets/img/pic-card.png">
                        <p>拍摄身份证</p>
                    </div>
                    <div class="operation-floor">
                        <img src="@/assets/img/pic-concat.png">
                        <p>人像比对</p>
                    </div>
                    <div class="operation-reset">
                        <img src="@/assets/img/pic-reset.png">
                        <span class="key">重置数据</span>
                    </div>
                </div>
                <div class="operation-bottom">
                    <div class="operation-floor">
                        <img src="@/assets/img/pic-view.png">
                        <p>预览结果书</p>
                    </div>
                    <div class="operation-floor">
                        <img src="@/assets/img/pic-print.png">
                        <p>打印结果书</p>
                    </div>
                </div>
            </div>

    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'Home',
    components: {
    },
    data () {
        return {

            aInfoList: [
                { key: '姓      名', value: 'fff' },
                { key: '性      别', value: '' },
                { key: '民      族', value: '' },
                { key: '出      生', value: '' },
                { key: '住      址', value: '' },
                { key: '身份证号', value: '' },
                { key: '签发机关', value: '' },
                { key: '有效期限', value: '' }
            ]
        };
    },
    methods: {

    }
};
</script>
<style scoped lang="scss">
.message {
    box-shadow: 0 6px 30px 0 rgba(0,0,0,0.20);
    border-radius: 30px;
    padding: 10px 20px;
    display: inline-block;
    width: 250px;
    .txt {
        font-size: 16px;
        color: #FFFFFF;
        margin-left: 20px;
        vertical-align: middle;
        letter-spacing: 0;
        font-weight: bold;
    }
    &.loading {
        background: #007AFF;
        .icon {
            width: 36px;
            height: 40px;
            vertical-align: middle;
        }

    }
    &.fail {
        background: #FF4D4F;
    }
    &.success {
        background: #00C372;
    }
    &.fail,&.success {
        padding-top: 15px;
        padding-bottom: 15px;
        .icon {
            width: 30px;
            height: 30px;
        }
    }
}
    .home-wrapper {
        height: 100%;
        display: flex;
        min-height: 712px;
        padding: 10px;
        .user-info {
            flex: 4;
            text-align: center;
            .user-card {
                height: 100%;
            }
            .avatar {
                width: 150px;
                height: 180px;
            }
            .info-floor-outer {
                padding: 0 18px;
                margin: 40px auto;
                text-align: left;
                .info-floor {
                    margin-bottom: 10px;
                    .key {
                        display: inline-block;
                        min-width: 66px;
                        margin-right: 20px;
                        opacity: 0.6;
                        font-size: 14px;
                        color: #373E54;
                        letter-spacing: 0;
                        line-height: 18px;
                    }
                    .value {
                        display: inline-block;
                        font-size: 14px;
                        color: #373E54;
                        letter-spacing: 0;
                        line-height: 18px;
                    }
                }
                .line {
                    position: relative;
                    margin-bottom: 10px;
                    height: 1px;
                    clear: both;
                    &::after{
                        display: block;
                        content: '';
                        left: 0;
                        right: 0;
                        // transform: scaleY(0.5);
                        opacity: 0.16;
                        border: 1px dashed #222735;
                        position: absolute;
                    }
                }
            }
        }
        .pic-info {
            flex: 6;
            margin: 0 10px;
            .face-card {
                .video-wrapper {
                    height: 100%;
                    height: 404px;
                }
            }
            .id-card {
                margin-top: 10px;
                .id-wrapper {
                    height: 170px;
                    .id-list {
                        font-size: 0;
                        height: 100%;
                        .id-video {
                            height: 100%;
                            vertical-align: top;
                            display: inline-block;
                            width: calc(50% - 5px);
                            background-color: #e5e8eb;
                            &+.id-video {
                                margin-left: 10px;
                            }
                        }
                    }
                }
            }
        }
        .home-operation {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            // padding: 10px 0;
            width: 90px;
            height: 100%;
            .operation-floor {
                text-align: center;
                background: #FFFFFF;
                border: 1px solid #D5DCE3;
                border-radius: 2px;
                padding:  14px;
                cursor: pointer;
                margin-bottom: 10px;
                &:hover {
                    opacity: 0.8;
                    background-color: #e5e8eb;
                }
                img {
                    width: 26px;
                    height: 26px;
                }
                p {
                    font-size: 12px;
                    color: #373E54;
                    letter-spacing: 0;
                    margin-top: 9px;
                }
            }
            .operation-reset {
                padding: 6px 0;
                background: #FFFFFF;
                border: 1px solid #D5DCE3;
                border-radius: 2px;
                text-align: center;
                width: 90px;
                cursor: pointer;
                &:hover {
                    opacity: 0.8;
                    background-color: #e5e8eb;
                }
                img {
                    width: 16px ;
                    height: 16px;
                    vertical-align: middle;
                }
                .key {
                    vertical-align: middle;
                    font-size: 12px;
                    color: #373E54;
                    letter-spacing: 0;
                    margin-left: 6px;
                }
            }
            // .operation-top {

            // }
            .operation-bottom {
                .operation-floor {
                    &:last-child {
                        margin-bottom: 0px;
                    }
                }
            }
        }

    }
</style>
