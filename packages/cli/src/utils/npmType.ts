import { sync as commandExistsSync } from 'command-exists'
// pnpm 类型
const getNpmType: Promise<'npm' | 'pnpm'> = new Promise((resolve) => {
    if (!commandExistsSync('pnpm')) {
        return resolve('npm')
    }
    resolve('pnpm')
})
export default getNpmType
