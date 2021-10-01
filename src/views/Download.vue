<template>
    <div class="download">
        <button @click="down">按钮</button>
    </div>
</template>
<script>
/* eslint-disable valid-jsdoc */
import JSZip from 'jszip';
import FileSaver from 'file-saver';
export default {
    data () {
        return {
            list: [
                { url: 'https://tools.hikvision.com/TSAPI/doorStation/detailPic/M000039034_zip01.jpeg' },
                { url: 'https://tools.hikvision.com/TSAPI/doorStation/detailPic/M000040983_zip01.jpeg' }
            ]
        };
    },
    // mounted () {
    // },
    methods: {
        down () {
            const zip = new JSZip();
            zip.file('hell.txt', 'helllwwiiw\n');
            // zip.folder("file").file("hello.txt", "Hello World\n");
            // const promise = null;
            zip.generateAsync({ type: 'blob' }).then(content => {
                FileSaver.saveAs(content, 'trst.zip');
            });

            // const blob = new Blob(['Hello, world!'], { type: 'text/plain;charset=utf-8' });
            // FileSaver.saveAs(blob, "hello world.txt");
            // FileSaver.saveAs(promise, 'trst.zip')
        },
        // 安装 jszip 和file-saver
        downloadFile () {
            /**
             * 打包压缩下载
             * @param data  源文件数组
             * @param fileName  压缩文件的名称
             */
            // const compressAndDownload = (data: any[], fileName ?: string) => {
            //     const zip = new JSZip();
            //     const promises: any[] = []; // 用于存储多个promise
            //     data.forEach((item: any) => {
            //         const promise = getFile(item.fileUrl).then((res: any) => {
            //             const fileName = item.fileName;
            //             zip.file(fileName, res, { binary: true });
            //         });
            //         promises.push(promise);
            //     });

            //     Promise.all(promises).then(() => {
            //         zip.generateAsync({
            //             type: 'blob',
            //             compression: 'DEFLATE', // STORE：默认不压缩 DEFLATE：需要压缩
            //             compressionOptions: {
            //                 level: 9 // 压缩等级1~9    1压缩速度最快，9最优压缩方式
            //             }
            //         }).then((res: any) => {
            //             FileSaver.saveAs(res, fileName || '压缩包.zip'); // 利用file-saver保存文件
            //         });
            //     });
            // };
            // 链接：https://juejin.cn/post/6970866355977486349
        }
    }
};
</script>
<style scoped lang='scss'>

</style>
