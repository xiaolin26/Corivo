# Corivo 项目记忆

> **项目**: Corivo - 跨工具数字孪生系统
> **仓库**: https://github.com/xiaolin26/Corivo
> **版本**: v0.5（设计文档阶段）
> **路径**: `/Users/xiaolin/Downloads/同步空间/Corivo/`

---

## 项目概述

Corivo 是一个嵌入用户已有工作流的**数字孪生系统**。不是一个独立的 App，而是寄生在 Claude Code、Cursor、飞书等工具中的后台服务。

**核心价值**：
- v0.2：让 AI 工具能调用你的全部历史上下文
- v0.5：**学习你的决策模式，预测你的选择，代表你的立场**

**护城河**：你的数字自我不属于任何单一工具。ChatGPT 的记忆、Claude 的上下文——Corivo 让它们跨工具共享。

---

## 核心理念

1. **文本是唯一的"源码"** - Agent 能处理，人能直接读
2. **人是主人，Agent 是管家** - 全自动，人只在需要时阅读
3. **自然语言即编程语言** - 零行为改变
4. **主动训练 + 被动学习** - Corivo 从行为中学习，也允许你主动告诉它偏好
5. **安全是基础** - 本地存储、E2EE 同步、开源可审计

---

## v0.5 战略升级

### 定位变化

| v0.2 | v0.5 |
|------|------|
| 个人记忆层 | 数字孪生系统 |
| 采集、存储、检索 | 学习、预测、代理 |

### 新增能力

1. **决策模式提取** - 从决策类 block 中提取决策维度和权重
2. **预测性建议** - 基于历史模式预测用户在新情境下的选择
3. **主动训练** - `corivo train` 命令让用户主动告诉 Corivo 自己的偏好
4. **守护进程模式** - 为无常驻进程的用户提供稳定心跳

### 新增字段

- `pattern` - 决策模式结构（仅决策类 block）
- `prediction_confidence` - 预测置信度

---

## 技术架构

| 层面 | 选型 | 理由 |
|------|------|------|
| 本地存储 | SQLCipher | 全平台、毫秒级、离线可用 |
| 语义搜索 | sqlite-vss / 向量嵌入 | 个人数据量级足够 |
| 模式学习 | LLM 提取 + 结构化存储 | 平衡准确性和成本 |
| 多设备同步 | E2EE 中继服务 | 安全等价 P2P，体验等价云同步 |
| 对外接口 | CLI + MCP Server + IM Bridge | 覆盖全场景 |
| 主动接入 | 规则注入 | 零进程、零协议 |
| 心跳运行 | MCP 宿主 / 独立守护进程（可选） | 默认寄生，可选独立 |

---

## 核心流程

```
采集（无感）──→ 学习（自动）──→ 预测（主动）
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
├── MEMORY.md                     - 项目记忆（本文件）
├── 设计文档 v0.2/                 - v0.2 版本（个人记忆层）
│   ├── README.md
│   ├── 01-block.md
│   ├── 02-memory-lifecycle.md
│   ├── 03-storage.md
│   ├── 04-integration.md
│   ├── 05-ingestion.md
│   ├── 06-heartbeat.md
│   ├── 07-push.md
│   ├── 08-aha-moment.md
│   └── 09-launch-copy.md
└── 设计文档 v0.5/                 - v0.5 版本（数字孪生系统）
    ├── README.md                  - 项目总览
    ├── 01-block.md                - Block 数据模型（新增 pattern 字段）
    ├── 02-memory-lifecycle.md     - 记忆生命周期
    ├── 03-storage.md              - 存储与同步
    ├── 04-integration.md          - 接入架构
    ├── 05-ingestion.md            - 自动采集
    ├── 06-heartbeat.md            - 心跳引擎（新增守护进程模式）
    ├── 07-push.md                 - 主动推送（新增预测触发）
    ├── 08-prediction.md           - 预测性 AI（新增）
    ├── 09-aha-moment.md           - Aha Moment（新增 Aha #6）
    ├── 10-risks.md                - 风险与防御（新增）
    └── 11-launch-copy.md          - 对外文案
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
  ```

### 2026-03-18 - v0.5 数字孪生战略升级

- ✅ 定位升级：从"个人记忆层"到"数字孪生系统"
- ✅ 新增 2 个文档：08-prediction.md、10-risks.md
- ✅ 更新 6 个文档：README、01-block、06-heartbeat、07-push、09-aha-moment、11-launch-copy
- ✅ 22 个文件变更，2320 行新增
  ```
  feat: Corivo v0.5 - 数字孪生战略升级

  新增能力：
  - 决策模式提取
  - 预测性建议
  - 主动训练
  - 守护进程模式
  ```

---

## CEO Review 记录

### 2026-03-18 - CEO Review（SCOPE EXPANSION 模式）

**审查人**: Claude Code + 晓力
**结果**: 战略升级

**关键决策**：
1. ✅ 加入预测性 AI - 从"记忆层"到"数字孪生"
2. ✅ 加入主动训练模式 - 用户可主动告诉偏好
3. ❌ 跳过数据迁移功能（分手功能）

**核心战略**：
- 护城河 = 跨工具数字自我
- 当 OpenAI/Anthropic 推出官方记忆时，Corivo 的价值是跨平台连续性

**保存位置**: `~/.gstack/projects/xiaolin26-Corivo/ceo-plans/2025-03-18-digital-twin-pivot.md`

---

## 待推进事项

### 核心流程

**采集**
- [ ] 规则注入模板（Claude Code / Codex / Cursor / Copilot）
- [ ] `corivo init` 安装引导流程实现
- [ ] 飞书事件订阅采集器（复用 IM Bridge bot）
- [ ] ChatGPT/Claude 对话历史批量导入器
- [ ] 本地 Agent 配置文件采集（文件监听 + 跨项目整合）

**学习（心跳引擎 + Prediction Agent）**
- [ ] Heartbeat Loop 核心调度器（优先级队列 + 批量控制 + 5 秒时间窗口）
- [ ] Ingestion Agent（pending block 标注）集成到心跳循环
- [ ] **Pattern Extraction Agent**：从决策类 block 中提取决策模式
- [ ] **Prediction Agent**：基于模式生成预测性建议
- [ ] `corivo train` 命令实现
- [ ] vitality 衰减算法：按 annotation 类型差异化衰减曲线
- [ ] 整合算法：去重、提炼、补链、降温
- [ ] 重构机制：查询触发的异步准确性审视
- [ ] LLM 调用策略：本地模型 / API Key / 无 LLM 降级

**推送**
- [ ] 上下文匹配触发：查询时附加关联检索
- [ ] **预测性推送**：基于决策模式的主动建议
- [ ] 时间触发：block 中时间信息提取 + 到期检测
- [ ] 洞察触发：整合过程中写入 push block
- [ ] `[corivo]` 品牌标识在各接入点的呈现实现
- [ ] 用户反馈闭环：采纳/忽略/拒绝信号收集

### 基础设施

**存储与同步**
- [ ] 本地 SQLCipher schema 定义（含 pattern 字段、全部生命周期字段 + 向量索引）
- [ ] E2EE 中继服务协议设计和开源实现
- [ ] 多设备密钥派生与设备授权流程

**接入层**
- [ ] corivo CLI 完整命令设计和实现（含 `train` 子命令）
- [ ] MCP Server 实现（CLI 包装 + 心跳宿主 + 上下文推送）
- [ ] IM Bridge 第一个平台适配（飞书 or Telegram）
- [ ] **独立守护进程模式**（可选，为无常驻进程的用户提供）

**工程**
- [ ] 开源仓库初始化、LICENSE、贡献指南
- [ ] 文件锁单实例保证
- [ ] 采集源控制面板（`corivo sources` / `corivo log`）

---

## 产品关系

- **守夜人**：负责感知和行动，Corivo 负责记忆和学习
- **Mesh**：负责跨工具串联，Corivo 提供统一的知识存储

---

## 最后更新

- **日期**: 2026-03-18
- **版本**: v0.5
- **更新人**: Claude Code + 晓力
- **内容**: v0.5 战略升级、CEO Review、新增预测性 AI 能力
