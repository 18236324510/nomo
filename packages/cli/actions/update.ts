import { PKG_NAME, PKG_VERSION } from '../utils/constants'
import { execSync } from 'child_process'
import getNpmType from '../utils/npmType'

const checkLatestVersion = async () => {
    const npmType = await getNpmType
    const latestVersion = execSync(`${npmType} view ${PKG_NAME} version`)
        .toString('utf-8')
        .trim()
    return latestVersion
}
const update = async () => {
    try {
        const latestVersion = await checkLatestVersion()
        console.log('当前为最新版' + latestVersion)
    } catch (error) {}
}

export default update
