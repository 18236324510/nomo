'use strict'
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod }
    }
Object.defineProperty(exports, '__esModule', { value: true })
exports.PROJECT_TYPES =
    exports.PKG_VERSION =
    exports.PKG_NAME =
    exports.pkg =
        void 0
var fs_1 = __importDefault(require('fs'))
var path_1 = __importDefault(require('path'))
exports.pkg = JSON.parse(
    fs_1.default.readFileSync(
        path_1.default.join(__dirname, '../../package.json'),
        'utf-8'
    )
)
/**
 * 包名
 */
exports.PKG_NAME = exports.pkg.name
/**
 * 包版本号
 */
exports.PKG_VERSION = exports.pkg.version
/**
 * 项目类型
 */
exports.PROJECT_TYPES = [
    {
        name: '不使用cui',
        value: '1',
    },
    {
        name: '使用cui',
        value: '2',
    },
]
