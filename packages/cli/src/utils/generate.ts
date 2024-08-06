import fs from 'fs'
import path from 'path'
import { globSync } from 'glob'
import ejs from 'ejs'
const generate = async (cwd: string) => {
    const templatePath = path.resolve(__dirname, '../../config')
    const templates = globSync(`**/*.ejs`, { cwd: templatePath })
    for (const name of templates) {
        // 替换文件命名，去掉ejs，把_换成.
        const filepath = path.resolve(
            cwd,
            name.replace(/\.ejs$/, '').replace(/^_/, '.')
        )
        console.log('----------开始写入' + filepath)

        let content = ejs.render(
            fs.readFileSync(path.resolve(templatePath, name), 'utf8'),
            {
                // ...data,
            }
        )
        fs.writeFileSync(filepath, content, { encoding: 'utf-8' })
    }

    // const gitignorePath = path.resolve(cwd, '.gitignore')
    // console.log('---------------开始写入gitignore')
    // fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2))
}
export default generate
