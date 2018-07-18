# pandolajs 开发者规范

pandolajs 旨在打造一套用于 web 开发的套件，包括但不限于各种用于提供开发效率的工具链，组件库，前端框架，后端框架，雄心冉冉，然心有余而力不足，我们期望志同道合者一起加入，但我们又不想让我们的功能质量多元化，所以提供如下开发者规范，期望能辅助开发者，提供风格一致，高质量的开源项目。

> ps: 以下规范为出版，不一定符合业内标准，如有问题，issue 之。

## 文档规范

有人云之：合格的程序员其实只需做两件事：coding & docing. （写码与写文档）

虽然对于程序员 coding 在前，但是对于开源的开发者们，我更推崇 docing 在前，开源项目，你可以没有源码，但是你不能让我看不到你的想法，所以项目启动，文档先行（`Launch a project document first!`）。

正所谓有码无文耍流氓，如果你只负责挖坑，却不符填坑指南，估计你的先人也是不能安息的，不管你是 coding 先，还是 docing 先，文档是必不可少的。

中文技术文档，请参考阮一峰老师的 [中文技术文档写作规范](https://github.com/ruanyf/document-style-guide/blob/master/README.md)

## Javascript 开发规范

建议所有项目中都接入 `eslint`, 并遵守项目中 `eslint rules`, 推荐统一接入 [eslint-config-pandola](https://github.com/pandolajs/eslint-config-pandola).

## Style 开发规范

建议所有项目都接入 `stylelint`, 并遵守项目中 `styleing rules`, 推荐统一接入 [styleling-config-pandora](https://github.com/pandolajs/stylelint-config-pandora).

## 代码注释规范

每个文件头部必须包含如下注释信息：

- fileOverview 文件内容简要说明

- author 作者，提供作者名与联系邮箱

- version 当前文件的版本变更，方便源码阅读者查看文件变更历史，包含 版本号，日期，作者，版本变更说明

模板如下：

```
/**
 * @fileOverview  xxxx
 * @author sizhao | sizhao@pandolajs.com
 * @author cherrylong | cherrylong@pandolajs.com
 * @version 1.0.0 | 2018-06-12 | sizhao         // 初始版本，提供 xxx 功能
 * @version 1.1.0 | 2010-06-12 | cherrylong     // 新增 yyy 功能
 */
```

## npm 发包规范

- 首先要申请加入 npmjs organization: `pandolajs` 

- 包名统一为 `@pandolajs/package-name`, 即 `package.json` 中的 `name` 字段。

- 包的版本号必须遵守 [语义化版本 2.0.0](https://semver.org/lang/zh-CN/)