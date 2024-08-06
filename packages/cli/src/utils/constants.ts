import fs from 'fs'
import path from 'path'
export const pkg = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../../package.json'), 'utf-8')
)

/**
 * 包名
 */
export const PKG_NAME: string = pkg.name

/**
 * 包版本号
 */
export const PKG_VERSION: string = pkg.version

/**
 * 项目类型
 */
export const PROJECT_TYPES: Array<{ name: string; value: string }> = [
    {
        name: '不使用cui',
        value: '1',
    },
    {
        name: '使用cui',
        value: '2',
    },
]
