# Corivo 项目记忆

> **项目**: Corivo - Agent-first 个人记忆层
> **仓库**: https://github.com/xiaolin26/Corivo
> **版本**: v1.0 (设计文档阶段)
> **路径**: `/Users/xiaolin/Downloads/同步空间/Corivo/`

---

## 项目概述

Corivo 是一个嵌入用户已有工作流的**个人记忆层**。不是一个独立的 App，而是寄生在 Claude Code、Cursor、飞书等工具中的后台服务。

**核心价值**: 让 AI 工具在帮你干活时能调用你的全部历史上下文——你做过的决策、你的偏好、你跟每个人说过的关键内容。

---

## 核心理念

1. **文本是唯一的"源码"** - Agent 能处理，人能直接读
2. **人是读者，Agent 是管家** - 全自动，人只在需要时阅读
3. **自然语言即编程语言** - 零行为改变
4. **安全是基础** - 本地存储、E2EE 同步、开源可审计

---

## 技术架构

| 层面 | 选型 | 理由 |
|------|------|------|
| 本地存储 | SQLCipher | 全平台、毫秒级、离线可用 |
| 语义搜索 | sqlite-vss / LLM | 个人数据量级足够 |
| 多设备同步 | E2EE 中继服务 | 安全等价 P2P，体验等价云同步 |
| 对外接口 | CLI + MCP Server + IM Bridge | 覆盖全场景 |
| 主动接入 | 规则注入 | 零进程、零协议 |

---

## 核心流程

```
采集（无感）──→ 更新（自动）──→ 推送（有感）
                    ↑                  │
              记忆生命周期              │
              （衰减/整合/重构）        │
                                      ↓
        ← 用户在已有工具中自然交互 ←──┘
```

---

## 仓库结构

```
Corivo/
├── .gitignore
└── 构想版0.2/
    ├── README.md              - 项目总览（1263 行文档）
    ├── 01-block.md            - Block 数据模型
    ├── 02-memory-lifecycle.md - 记忆生命周期
    ├── 03-storage.md          - 存储与同步
    ├── 04-integration.md      - 接入架构
    ├── 05-ingestion.md        - 自动采集
    ├── 06-heartbeat.md        - 心跳引擎
    ├── 07-push.md             - 主动推送
    ├── 08-aha-moment.md       - Aha Moment（用户体验）
    └── 09-launch-copy.md      - 对外文案
```

---

## Git 历史

### 2026-03-17 - 仓库初始化

- ✅ 创建 GitHub 公开仓库
- ✅ 初始提交：9 个文档，988 行
  ```
  feat: 初始化 Corivo 技术设计文档仓库
  添加构想版0.2的核心设计文档
  ```

### 2026-03-18 - 新增 Aha Moment 和 Launch Copy

- ✅ 新增 2 个文档：08-aha-moment.md、09-launch-copy.md
- ✅ 更新 README.md
- ✅ 共 1263 行文档
  ```
  feat: 新增 Aha Moment 和 Launch Copy 设计文档
  - 添加 08-aha-moment.md：顿悟时刻捕捉机制
  - 添加 09-launch-copy.md：发布文案策略
  - 更新 README.md：同步最新文档索引
  ```

---

## 待推进事项

### 采集
- [ ] 规则注入模板（Claude Code / Codex / Cursor / Copilot）
- [ ] `corivo init` 安装引导流程
- [ ] 飞书事件订阅采集器
- [ ] ChatGPT/Claude 对话历史批量导入器
- [ ] 本地 Agent 配置文件采集

### 更新（心跳引擎）
- [ ] Heartbeat Loop 核心调度器
- [ ] Ingestion Agent 集成
- [ ] vitality 衰减算法
- [ ] 整合算法（去重、提炼、补链、降温）
- [ ] 重构机制
- [ ] LLM 调用策略

### 推送
- [ ] 上下文匹配触发
- [ ] 时间触发
- [ ] 洞察触发
- [ ] `[corivo]` 品牌标识实现
- [ ] 用户反馈闭环

### 基础设施
- [ ] SQLCipher schema 定义
- [ ] E2EE 中继服务协议
- [ ] 多设备密钥派生
- [ ] corivo CLI 完整命令
- [ ] MCP Server 实现

---

## 产品关系

- **守夜人**：负责感知和行动，Corivo 负责记忆
- **Mesh**：负责跨工具串联，Corivo 提供统一的知识存储

---

## 最后更新

- **日期**: 2026-03-18
- **更新人**: Claude Code + 晓力
- **内容**: 仓库创建、文档补充、记忆系统初始化
