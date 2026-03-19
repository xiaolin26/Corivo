# Corivo Claude Code Plugin

你的赛博伙伴 — 为 Claude Code 提供持久化记忆功能。

## 功能

- **保存记忆** - 将对话中的重要信息保存到数据库
- **查询记忆** - 检索之前保存的信息
- **状态显示** - 在状态栏显示记忆统计

## 安装

### 前置条件

1. 首先安装 Corivo CLI：
```bash
npm install -g corivo
corivo init
```

2. 然后在 Claude Code 中安装插件：
```
/plugin install xiaolin26/corivo
```

## 使用

### 保存记忆

当你说 "保存这个" 或 "记住" 时，Claude 会自动保存重要信息：

```
你: 我叫晓力，是产品经理
Claude: 我来保存这个信息...
```

### 查询记忆

当问 "我之前说过..." 时，Claude 会查询相关记忆：

```
你: 我之前对代码风格有什么要求？
Claude: 根据记忆，你喜欢简洁的代码风格...
```

### 状态栏

状态栏显示记忆统计：
- 总记忆块数
- 健康度百分比
- 活跃/冷却/冷冻状态

## 技能

### corivo-save
保存记忆到数据库。

### corivo-query
从数据库查询记忆。

## 配置

插件使用 `~/.corivo/` 目录存储数据：
- `corivo.db` - SQLite 数据库
- `config.json` - 配置文件

## 开发

```bash
# 构建
npm run build

# 测试
npm test
```

## 许可证

MIT
