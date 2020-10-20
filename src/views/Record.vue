<template>
    <div class="record-wrapper">
        <a-card size="small" title="受理记录" class="record-card" :bodyStyle ="{
                padding: '0',height: 'calc(100% - 38px)'
            }">
            <!-- <a slot="extra" href="#">more</a> -->
            <div class="table-wrapper">
                <a-table :columns="aColumns"

                :pagination="false" :data-source="aRecordList">
                    <div slot="view" class="view-btn">
                        <img src="@/assets/img/table-view.png">
                        <span class="key">查看</span>
                    </div>
                </a-table>
            </div>
            <div class="footer">
                <span class="total">共12条</span>
                <a-pagination :default-current="1" :total="10" />
            </div>
        </a-card>
    </div>
</template>
<script>
export default {
    name: 'Record',
    data () {
        return {
            aRecordList: [{
                custom: 'tete',
                22: 'ttt'
            }],
            aColumns: [{
                title: '客户',
                dataIndex: 'custom',
                scopedSlots: { customRender: 'name' }
            }, {
                title: '身份证号',
                dataIndex: '22',
                scopedSlots: { customRender: 'name' }
            }, {
                title: '性别',
                dataIndex: '33',
                scopedSlots: { customRender: 'name' }
            }, {
                title: '受理人',
                dataIndex: '44',
                scopedSlots: { customRender: 'name' }
            }, {
                title: '生成时间',
                dataIndex: '55',
                scopedSlots: { customRender: 'name' }
            }, {
                title: '受理结果书',
                dataIndex: '66',
                scopedSlots: { customRender: 'view' }
            }]
        };
    },
    mounted () {
    },
    methods: {
    }
};
</script>
<style scoped lang='scss'>
.record-wrapper {
    padding: 20px;
    height: 100%;
    .record-card {
        height: 100%;
        .view-btn {
            background-image: linear-gradient(180deg, #FFFFFF 0%, #EFF1F6 100%);
            border: 1px solid #E9EBF2;
            border-radius: 17px;
            display: inline-block;
            padding: 4px 10px;
            cursor: pointer;
            &:hover {
                background-color: #E9EBF2;
                opacity: 0.8;
            }
            img {
                width: 16px;
                height: 16px;
                vertical-align: middle;
            }
            .key {
                font-size: 12px;
                color: #35363B;
                line-height: 18px;
                margin-left: 6px;
                vertical-align: middle;
            }
        }
        .table-wrapper {
            padding: 20px;
            height: calc(100% - 40px);
            flex: 1;
        }
        .footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #FCFCFC;
            box-shadow: 0 -1px 0 0 #E9EBF2;
            border-radius: 0 0 2px 2px;
            padding: 0 20px;
            height: 40px;
            .total {
                font-size: 12px;
                color: #35363B;
            }
        }

    }
}
</style>
