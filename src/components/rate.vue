<template>
    <div class="rate" :class="{'disabled':disabled}">
        <span v-if="showText" class="text">{{curScore||score}}分</span>
        <div class="star-wrap">
            <i
                v-for="(i, index) in 5"
                :key="index"
                @mouseenter="disabled ? '' : curScore=i"
                @mouseleave="disabled ? '' : curScore=''"
                @click="disabled ? '' : setScore(i)"
                :class="getClass(i)"
                :style="{width: size + 'px',height: size + 'px'}"
            >
                <i
                    v-if="disabled&&i==Math.floor(score)+1"
                    class="icon-star"
                    :style="{width:widthRate,height: size + 'px'}"></i>
            </i>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MyRate',
    props: {
        // 分数，默认0，保留一位小数
        score: {
            type: Number,
            default: 0
        },
        // 是否只读，默认false，鼠标点击可以打分
        disabled: {
            type: Boolean,
            default: false
        },
        // 是否显示分数，默认false
        showText: {
            type: Boolean,
            default: false
        },
        size: {
            type: [String, Number],
            default: 12
        }
    },
    data () {
        return {
            curScore: '',
            widthRate: ''
        };
    },
    created: function () {
        this.getDecimal();
    },
    methods: {
        getClass (i) {
            if (this.curScore === '') {
                return i <= this.score ? 'icon-star' : 'icon-star-o';
            }
            return i <= this.curScore ? 'icon-star' : 'icon-star-o';
        },
        getDecimal () {
            this.widthRate = Number(this.score * 100 - Math.floor(this.score) * 100) + '%';
        },
        setScore (i) {
            this.$emit('update:score', i);
        }
    }
};
</script>
<style lang="scss" scoped>
.rate{
    .text{
        font-size: 18px;
        color: #ff7f2c;
        font-weight: bold;
    }
    .star-wrap{
        line-height: 0;
        .icon-star-o{
            position: relative;
            width:8px;
            height: 8px;
            line-height: 0;
            display: inline-block;
            margin-right: 2px;
            //background: url('../../public/gray.png') 0 0 ~'/' auto 100%;   // 这边是没有选中星星的图片
            background: red;
            .icon-star{
                position: absolute;
                left:0;
                top:0;
            }
        }
        .icon-star{
            width: 8px;
            height: 8px;
            line-height: 0;
            display: inline-block;
            margin-right: 2px;
            //background: url('../../public/yellow.png') 0 0 ~'/' auto 100%;   // 这边是选中之后星星的图片
            background: yellow;
        }
        i:last-child{
            margin-right: 0px;
        }
    }
}
</style>
