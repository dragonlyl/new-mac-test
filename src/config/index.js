const href = window.location.href; // url字符串
const protocol = window.location.protocol; // 协议
const host = window.location.host; // 主机
const port = window.location.port; // 端口
const pathname = window.location.pathname; // 路径部分
const search = window.location.search; // 问号后面
const hash = window.location.hash; // #号后面
const Config = {
    port: port,
    href: href,
    protocol: protocol,
    host: host,
    pathname: pathname,
    search: search,
    hash: hash,
    baseUrl: protocol + '//' + host
};

export default Config;
