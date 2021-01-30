<template>
    <div class="about">
        <h1>This is an about page</h1>
        <el-table
            :data="tableData"

            style="width: 100%">
            <el-table-column
                prop="date"
                :render-header="render"
                label="日期"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                :render-header="render2"
                width="180">
            </el-table-column>
            <el-table-column
                prop="address"
                :render-header="render3"

                label="地址">
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    data () {
        return {
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }]
        };
    },
    methods: {
        render2 (h, { column, $index }) {
            // return h('span', [
            //     h('span', {
            //         class: {
            //             'red-star': true
            //         }
            //     }, '*'),
            //     h('span', '委托方')
            // ])
            return h(
                'el-button',
                {
                    props: {
                        content: (function () {
                            // const label = column.label
                        })()
                    },
                    class: { foo: true },
                    domProps: {
                        innerHTML: column.label + '<span class="el-icon-question"></span>'
                    }
                }
            );
        },
        showSelect (i) {
            console.log(i);
        },
        render3 (h, { column, $index }) {
            // https://cn.vuejs.org/v2/guide/render-function.html#JSX
            // jsx react 下发教程
            // https://www.runoob.com/react/react-jsx.html
            const cN = 'test';
            // const iN = 1
            const style = {
                height: '100%',
                lineHeight: '0px',
                cursor: 'pointer'
            };
            // 等效于绑定class name 为test
            return (
                <el-dropdown
                    trigger="click"
                    class={cN}
                    style={style}>
                    <span class="el-dropdown-link" style="color:rgb(144,147,153)">
                        状态<i class="el-icon-arrow-down el-icon--right" />
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>
                            <div style="height:100%;width:100%;padding:0 10px"
                                onClick={() => this.showSelect(0)}>
                                全部
                            </div>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <div style="height:100%;width:100%;padding:0 10px"
                                onClick={() => this.showSelect(3)}>
                                已通过
                            </div>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <div style="height:100%;width:100%;padding:0 10px"
                                onClick={() => this.showSelect(2)}>
                                未通过
                            </div>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <div style="height:100%;width:100%;padding:0 10px"
                                onClick={() => this.showSelect(4)}>
                                审核中
                            </div>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            );
        },
        // https://cn.vuejs.org/v2/guide/render-function.html
        render: function (h, { column, $index }) {
            console.log(column, $index);
            return h(
                'el-tooltip',
                {
                    // 组件 prop
                    props: {
                        content: (function () {
                            const label = column.label;
                            switch (label) {
                                case '日期':
                                    return '网站页面上独立访问应用的人数（UV）';
                                case '提交数':
                                    return '网站页面上访客在应用上完成提交的数量';
                                case '成交数':
                                    return '网站页面上最终成功在应用上完成提交的数量';
                                default: return 'ff';
                            }
                        })(),
                        placement: 'top'
                    },
                    domProps: {
                        innerHTML: column.label + '<span class="el-icon-question"></span>'
                    }
                },
                [h('span')]
            );
        }
        // h(param1, param2, param3)里
        // param1是这个元素的标签名，
        // param2是这个元素的属性，class之类
        // param3是这个元素的innerHtml和子元素组成的数组
        // 使用el-tooltip时要添加一个[h('span')]，是el-tooltip和el-button的用法不同造成的
        // el-tooltip中间需要一个带标签的完整元素才能正常生效，el-button中间可以是文本、元素或放空都行
        // <el-tooltip ><span>内容</span></el-tooltip>
        // <el-button>内容</el-button>
        // <el-button><span>内容</span></el-button>
    }
};
</script>
