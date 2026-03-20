# Contributing to Corivo

感谢你考虑为 Corivo 做贡献！

## 开源协议

本仓库使用 MIT 协议开源。所有贡献的内容也将以 MIT 协议发布。

## 企业代码隔离原则

为了保持 Corivo Core 的简洁和开放性，以下功能**不会**被接受到本仓库：

- 团队协作功能（共享记忆、团队空间）
- 权限管理系统
- 审计日志
- 管理后台
- 企业级 SSO 集成
- 商业版本专属功能

这些企业功能将在独立私有仓库 `corivo-enterprise` 中开发，以商业许可发布。

## 适合贡献的内容

- Bug 修复
- 性能优化
- 新的 AI 工具集成（Cursor、Windsurf 等）
- 文档改进
- 测试用例

## 开发流程

1. Fork 本仓库
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'feat: add AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## Commit 规范

```
<类型>: <描述>

类型：feat / fix / refactor / docs / test
```

---

有问题？请 [提 Issue](https://github.com/xiaolin26/Corivo/issues)
