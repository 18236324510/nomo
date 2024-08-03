**git:** **https://github.com/18236324510/nomo**

# 1、搭建monorepo环境

我们使用`pnpm`当做包管理工具，用`pnpm workspace`来实现`monorepo`。可以看下面参考文章里面的介绍，结合官网有个基础的了解。下面我们正式开始搭建。

```Bash
npm install pnpm -g # 全局安装pnpm
pnpm init # 初始化package.json配置⽂件 私有库
pnpm install vue typescript -D # 全局下添加依赖
```

添加`.npmrc`文件，

```Bash
shamefully-hoist = true  // 作用依赖包都扁平化的安装在node_modules下面
```

在项目根目录下面创建`pnpm-workspace.yaml`配置文件。

```Bash
packages:
  - "packages/**" # 存放所有组件
  - docs # 文档
  - play # 测试组件
```

![](https://gik72endpx.feishu.cn/space/api/box/stream/download/asynccode/?code=N2QyYmM4MTQ4MGM4NWQyMTNiZDUzZGFmNzQ5ODhkMGFfMVdVUEFlZ3JMaGtwakEzZVltQWI5UzVPclZSMUxsS1pfVG9rZW46VEhLVGIxY2Myb1dqQWJ4cDhnYWNNZENDbnVnXzE3MjI2NzM3NzU6MTcyMjY3NzM3NV9WNA)

嗯，让我来解释一下。在pnpm中，如果你在workspace的根目录下运行`pnpm add`命令添加一个包，pnpm会默认在workspace中的其他包中查找这个包。这意味着你不需要显式地添加`@workspace:*`来告诉pnpm在workspace中查找这个包。

所以，如果你在workspace根目录下运行`pnpm add cui-commitlint-config -D`，pnpm会自动在workspace中的其他包中查找并安装`cui-commitlint-config`这个包，而不需要额外添加`@workspace:*`。

**或者重新建个文件夹**

# 2、编写commitlint

```Bash
import { RuleConfigSeverity } from '@commitlint/types'
export default {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            RuleConfigSeverity.Error,
            'always',
            [
                'cui',
                'build',
                'chore',
                'ci',
                'docs',
                'feat',
                'fix',
                'perf',
                'refactor',
                'revert',
                'style',
                'test',
            ],
        ],
    },
}
```

在主包安装引用

```Bash
export default {
    extends: ['@nomo/commitlint'],
}
```

# 3、发布

1. 设置npm源，org的
2. npm log
3. npm whoami
4. Npm publish

![](https://gik72endpx.feishu.cn/space/api/box/stream/download/asynccode/?code=NmU0YTUzYjE5MjkyOWQ4M2ZjYmUxY2U2NWUxN2FkNWJfcE1CZGFXZXp3ZTdsMW5IYm1ZS1lza3ZPbkFJSW0zUE1fVG9rZW46WEtwN2I2MWNob3VqUE94WEl3UWNmTEk2bjNiXzE3MjI2NzM3NzU6MTcyMjY3NzM3NV9WNA)

就是没登陆对

**npm登陆超时，网上大部分方法不靠谱！！！，就是网络原因**

# npm publish包报404，is not in the npm registry错误

出现错误的原因是，我在npm上的用户名是A,而我的包名是 @B/xxxx。

npm规定包名中，@后是用户名，我这里是B，而我的用户名是A。这就是报错的原因。

解决办法也很简单，修改包名，或者用B的账号publish就可以了

### 发布自己@开头的包

https://www.npmjs.cn/misc/scope/

https://docs.npmjs.com/creating-and-publishing-scoped-public-packages

![](https://gik72endpx.feishu.cn/space/api/box/stream/download/asynccode/?code=MmNmOTczNjIxMjAzM2Y1Y2IwYWQ1YWQxMmQ1NjE5YWJfY04zRlhBQWZJZ0ZCQldqeDZhN0NaWEtuck15elVYS3VfVG9rZW46QW5XcWJqZmFTb1FOU3J4Q1EwVmNYb3ZCbkplXzE3MjI2NzM3NzU6MTcyMjY3NzM3NV9WNA)

## npm publish --access public

# 4.搭建文档站点

[VuePress](https://vuepress.vuejs.org/zh/)

启动报错

![](https://gik72endpx.feishu.cn/space/api/box/stream/download/asynccode/?code=N2QyN2M2YzI2NDg1ZjY3ZjQ5ZmVhMzhjZGQ1Y2I4MGVfV3NRYVNlRld0YlM4ZEVNWlYyV21ySFd4TmdFdmxtbFdfVG9rZW46SDJzWmJxMzdrb25tc2l4NUlLdmNFSk5vbkJoXzE3MjI2NzM3NzU6MTcyMjY3NzM3NV9WNA)

https://github.com/vuejs/vuepress/issues/3218

更新完pnpm报错，需要再更新pnpm版本

```Bash
npm install pnpm -g
```
