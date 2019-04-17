"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var root = 'C:\\迅雷下载\\新建文件夹 (6)\\镜头13';
fs_1.default.readdirSync(root).forEach(function (e, i) {
    var file = path_1.default.join(root, e);
    var rename = root + "\\" + i.toString() + ".jpg";
    console.log(rename);
    fs_1.default.renameSync(file, rename);
});
