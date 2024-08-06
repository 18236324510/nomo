import { InitOptions } from '../type'
import { PROJECT_TYPES } from '../utils/constants'
import inquirer from 'inquirer'
import path from 'path'
import fs from 'fs'
import { execSync } from 'child_process'
import getNpmType from '../utils/npmType'

/**
 * 是否添加cui commitlit
 */
const chooseEslintType = async () => {
    const { type } = await inquirer.prompt({
        type: 'list',
        name: 'type',
        message: 'cui' as any,
        choices: PROJECT_TYPES,
    })

    return type
}

const init = async (options: InitOptions) => {
    const npmType = await getNpmType

    const cwd = options?.cwd || process.cwd()
    const { cui } = options
    const config: Record<string, any> = {}

    // 初始化 commitlint
    config.cui = await chooseEslintType()
    const pkgPath = path.resolve(cwd, 'package.json')
    let pkg = JSON.parse(fs.readFileSync(pkgPath, { encoding: 'utf-8' }))
    pkg['scripts']['commit:lint'] = 'commitlint --edit'
    // 配置husky
    console.log('-------------开始安装husky')
    execSync(`${npmType} add husky -D`)
    console.log('------------------开始初始化husky')
    execSync('npx husky init')
    console.log('----------------开始配置hooks')
    execSync(`echo "${npmType} run commit:lint" > .husky/pre-commit`)
    console.log('---------------开始写入package')
    fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2))
    console.log('完成')
}

export default init
