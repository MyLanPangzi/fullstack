import fs from "fs";
import path from "path";

const root = 'C:\\迅雷下载\\新建文件夹 (6)\\镜头13';
fs.readdirSync(root).forEach((e, i) => {
    const file = path.join(root, e);
    const rename = `${root}\\${i.toString()}.jpg`;
    console.log(rename);
    fs.renameSync(file, rename);
});
