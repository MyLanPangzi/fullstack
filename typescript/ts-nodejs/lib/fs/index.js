"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const root = 'C:\\迅雷下载\\新建文件夹 (6)\\镜头13';
fs_1.default.readdirSync(root).forEach((e, i) => {
    const file = path_1.default.join(root, e);
    const rename = `${root}\\${i.toString()}.jpg`;
    console.log(rename);
    fs_1.default.renameSync(file, rename);
});
