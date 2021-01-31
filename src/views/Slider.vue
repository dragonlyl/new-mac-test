<template>
    <div class="slider-outer">

        <div class="slider" @mouseover="clearInv" @mouseout="runInv">
            <!-- <img
            v-for="(img,i) in aImgList"
            :key="i"
            :src="img"
            class="icon"> -->
            <div class="img-outer">

                <transition name="slide-trans">
                    <img
                        :src="aImgList[iCurrent]"
                        class="icon"
                        :id="iCurrent"
                        v-if="bShow">
                </transition>
                <transition name="slide-trans-old">
                    <img
                        :src="aImgList[iCurrent]"
                        class="icon"
                        :id="iCurrent"
                        v-if="!bShow">
                </transition>
            </div>
            <div class="img-ul">
                <ul>
                    <li @click="goto(preIndex)">&lt;</li>
                    <li
                        :key="i"
                        @click="goto(i)"
                        v-for="(img,i) in aImgList"
                        :class="{active: iCurrent === i}">{{i+1}}</li>
                    <li @click="goto(nextIndex)">&gt;</li>
                </ul>
            </div>
        </div>
        <div class="surprise">
            <button @click="changeS">惊喜</button>
        </div>
        <transition name="drop">
            <div class="surprise-content" v-if="bShowS">
                惊喜内容
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    data () {
        return {
            aImgList: [
                require('@/assets/img/pic-concat.png'),
                require('@/assets/img/pic-print.png'),
                require('@/assets/img/pic-reset.png')
            ],
            iCurrent: 0,
            bShow: false,
            // iInv: null
            bShowS: false
        };
    },
    computed: {
        nextIndex () {
            if (this.iCurrent === this.aImgList.length - 1) {
                return 0;
            }
            return this.iCurrent + 1;
        },
        preIndex () {
            if (this.iCurrent === 0) {
                return this.aImgList.length - 1;
            }
            return this.iCurrent - 1;
        }
    },
    mounted () {
        // this.goto(this.iCurrent);
        this.runInv();
    },
    methods: {
        runInv () {
            this.iInv = setInterval(() => {
                this.goto(this.nextIndex);
            }, 2000);
        },
        clearInv () {
            clearInterval(this.iInv);
        },
        goto (index) {
            this.bShow = false;
            setTimeout(() => {
                this.iCurrent = index;
                this.bShow = true;
            }, 10);
        },
        changeS () {
            this.bShowS = !this.bShowS;
        }
    }
};
</script>
<style scoped lang='scss'>
.slider {
    width: 240px;
    margin: 0 auto;
    .img-outer {
        width: 100%;
        height: 240px;
        position: relative;
        background-color: wheat;
        font-size: 0;
        .icon {
            width: 100%;
            position: absolute;
            left: 0;
        }
        .slide-trans-enter-active {
            transition: all 500ms;
            // transition-delay: 200ms;
        }
        .slide-trans-enter {
            transform: translateX(200px);
        }
        .slide-trans-old-leave-active {
            transition: all 400ms;
            transform: translateX(-200px);
        }
    }
    .img-ul {
        ul {
            li {
                -moz-user-select: none;
                user-select: none;
                display: inline-block;
                margin:  4px 14px;
                font-size: 24px;
                cursor: pointer;
                &.active {
                    color: violet;
                    opacity: 0.6;
                }
            }
        }
    }
}
.drop-enter-active {
    transition: all ease 100ms;
}
.drop-enter {
    transform: translateY(-500px);
}
.drop-leave-to {
    transform: translateY(-500px);
}
.drop-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.surprise-content {
    display: fixed;
    width: 80px;
    left: 50%;
    display: inline-block;
    height: 80px;
    text-align: center;
    background-color: burlywood;
}
</style>
