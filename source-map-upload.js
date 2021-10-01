const fs = require('fs');
const http = require('http');
const path = require('path');
class SourceMapUploader {
    constructor (options) {
        this.options = options;
    }

    apply (compiler) {
        if (process.env.NODE_ENV === 'production') {
            compiler.hooks.done.tap('sourcemap-uploader', async (status) => {
                // 读取输出目录下的js文件
                // console.log(Object.keys(status.compilation.outputOptions), compiler.options, compiler.outputPath);
                const dir = path.join(compiler.outputPath, '/js/');
                const chunks = fs.readdirSync(dir);
                console.log(chunks, 'chunk');
                const mapFile = chunks.filter((item) => {
                    return item.match(/\.js\.map$/) !== null;
                });
                while (mapFile.length > 0) {
                    const file = mapFile.shift();
                    await this.upload(this.options.url, path.join(dir, file));
                }
            });
        }
    }
    
    upload (url, file) {
        console.log(url, file);
        return new Promise((resolve, reject) => {
            const req = http.request(`${url}?name=${path.basename(file)}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/octet-stream',
                    Connection: 'keep-alive'
                }
            });
            const fileStream = fs.createReadStream(file);
            fileStream.pipe(req, { end: false });
            fileStream.on('end', () => {
                req.end();
                console.log('upload success');
                resolve();
            });
        });
    }
}
module.exports = SourceMapUploader;
