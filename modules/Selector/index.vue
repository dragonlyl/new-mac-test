<template>
    <div class="my-selector" v-focus>
        <SelectInput :placeholder='placeholder'></SelectInput>
        <!-- <input
            type="text"
            :placeholder="placeholder"
            @change="handleInput"
            @focus="handleFocus"
            @blur="handleBlur"
            :value="value"
            @input="handleInput"
        >
        <span class="icon">{{iType===1 ? 'x' : 's'}}</span> -->
        <ul style="background:grey" class="menu">
            <li v-for="i in data" :key="i">
                <template>
                    {{i}}
                </template>
            </li>
        </ul>
    </div>
</template>
<script>
import SelectInput from './Input';
import clickOutside from '../click';
import focus from './focus';
export default {
    name: 'MySelector',
    components: { SelectInput },
    props: {
        placeholder: {
            default: '',
            type: String
        },
        data: {
            default: () => [],
            type: Array
        },
        value: {
            default: '',
            type: String
        }
    },
    directives: {
        clickOutside: clickOutside,
        focus: focus
    },
    data () {
        return {
            iType: 0
        };
    },
    // mounted () {
    // },
    methods: {
        handleFocus (event) {
            this.iType = 1;
            console.log(event);
        },
        handleBlur (event) {
            this.iType = 0;
            console.log(event);
        },
        handleInput (event) {
            console.log(this.value, 'value');
            // console.log(event);
        },
        change (event, val) {
            console.log(val, event);
        }
    }
};
</script>
<style scoped lang='scss'>
.my-selector {
    text-align: left;
    input {
        border: 1px solid gray;
    }
    .icon {
        width: 40px;
        height: 40px;
        display: inline-block;
        text-align: center;
        line-height: 40px;
        cursor: pointer;
    }
    .menu {
        display: none;
    }
    .hidden {
        display: none;
    }
}
</style>
