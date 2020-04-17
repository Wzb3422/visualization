# NCU 数据可视化

## 技术栈

+ [Ant Design Pro](https://pro.ant.design/index-cn)
+ [Antd 4.0](https://ant.design/)
+ [BizCharts - 基于 G2 封装更适合 React](https://bizcharts.net/)
  + 因为 `BizCharts` 是基于 `G2` 封装的，所以在学习它之前请先阅读 `G2` 相关文档，了解其基本思想。
+ [TypeScript](https://www.typescriptlang.org/)
+ [UmiJs](https://umijs.org/zh-CN)

在接手开发前，务必学习过以上*所有的*技术/库。

## 安装依赖

本项目使用 yarn 进行包管理

```bash
yarn
```

### 启动项目

```bash
yarn start
```

### 项目大包

```bash
yarn build
```

### 代码风格检查

本项目**严格执行** `eslint` 规则，并进行 `commit` 自动代码风格检查。
**务必**注意自己的代码风格规范，否则 `commit` 时，你会看到数不清的报错。
**代码符合 `eslint` 规范之后，`git commit` 才能成功。**

```bash
yarn lint
```

你可以使用这个命令来修复一些简单的风格错误

```bash
yarn lint:fix
```

### 代码测试

```bash
yarn test
```

## More
