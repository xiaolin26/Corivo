# Design System — Corivo

## Product Context
- **What this is:** Corivo 是一个融入用户已有工作流的赛博伙伴——自动从 AI 对话和消息中采集信息，持续整理和更新，在合适时机主动提醒用户
- **Who it's for:** 开发者、知识工作者、重度 AI 用户
- **Space/industry:** AI 伴侣 / 记忆管理 / 开发者工具
- **Project type:** 多形态产品（CLI + Web Dashboard + API 文档 + 营销页面）

## Aesthetic Direction
- **Direction:** Organic/Natural（有机自然）
- **Decoration level:** Intentional（有意图的）——微妙纹理、纸张质感、呼吸感
- **Mood:** 「记忆像植物一样生长」——温暖、有人文关怀，不是冷冰冰的数据处理工具
- **Reference sites:** Linear（布局）、Obsidian（可定制性）、Vercel（字体选择）

## Typography
- **Display/Hero:** `Instrument Serif` — 知性、温暖、有人文关怀，在开发者工具中罕见，传达 Corivo 的独特定位
- **Body:** `Instrument Sans` — 与 Display 同家族，保持连贯性，清晰易读
- **UI/Labels:** 同 Body — `Instrument Sans`
- **Data/Tables:** `DM Sans`（tabular-nums variant）— 数据对齐优化，功能性优先
- **Code:** `JetBrains Mono` — 开发者标准，等宽优化
- **Loading:** Google Fonts / Bunny Fonts CDN
- **Scale:**
  - Display: 48px / 36px / 28px / 24px
  - Body: 16px / 14px / 12px
  - Small: 11px / 10px

## Color
- **Approach:** Balanced（琥珀强调 + 暖灰中性色）
- **Primary:**
  - `#d97706`（琥珀主）——强调、CTA、链接
  - `#f59e0b`（亮琥珀）——Hover 状态
  - `#b45309`（深琥珀）——静态、禁用状态
- **Neutrals:** 暖灰系列（避免冷调的蓝灰）
  - Surface: `#1a1915`（深暖灰，像深色纸张）
  - Elevated: `#25241d`（卡片背景）
  - Border: `#32312a`（微妙分隔）
  - Text Primary: `#e8e4dc`（米白，像墨水）
  - Text Secondary: `#a8a498`（暖灰）
  - Text Muted: `#5c5a50`（低对比）
- **Semantic:**
  - Success: `#059669`（深绿，生长隐喻）
  - Warning: `#d97706`（复用琥珀）
  - Error: `#dc2626`（深红）
  - Info: `#0891b2`（深青）
- **Dark mode:** 默认深色，浅色模式可选（背景 `#faf7f2`，主文 `#3d3222`）

## Spacing
- **Base unit:** 8px
- **Density:** Comfortable（不拥挤、不浪费，适合阅读体验）
- **Scale:** 2xs(4) xs(8) sm(16) md(24) lg(32) xl(48) 2xl(64) 3xl(96)

## Layout
- **Approach:** Hybrid（混合）
  - Web Dashboard: Grid-disciplined（12 列，数据密度优先）
  - Marketing: Creative-editorial（不对称网格，品牌故事）
  - CLI: 原生终端体验（不做视觉设计）
- **Grid:** 12 列
- **Max content width:** 1200px（Dashboard），1440px（营销）
- **Dashboard 结构:** 3 列
  - 边栏: 240px（导航）
  - 主内容: 自适应（记忆列表、详情）
  - 右侧: 280px（统计、过滤）
- **Border radius:**
  - sm: 6px（小元素）
  - md: 12px（按钮、输入框）
  - lg: 20px（卡片）
  - full: 9999px（徽章、头像）

## Motion
- **Approach:** Intentional（有意义的状态过渡，不为炫而动）
- **Easing:**
  - Enter: `ease-out-quint`（cubic-bezier(0.22, 1, 0.36, 1)）
  - Exit: `ease-in`（cubic-bezier(0.4, 0, 1, 1)）
  - Move: `ease-in-out`（cubic-bezier(0.4, 0, 0.2, 1)）
- **Duration:**
  - micro: 100ms（hover、focus）
  - short: 200ms（简单过渡）
  - medium: 350ms（复杂动效）
  - long: 500ms（页面切换）

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2025-03-18 | 初始设计系统创建 | 由 /design-consultation 基于 Corivo 产品定位（AI 伙伴/记忆管理）创建 |
| 2025-03-18 | 选择 Organic/Natural 美学 | 与「记忆像植物一样生长」的品牌隐喻一致，区别于冷色调的 AI 工具惯例 |
| 2025-03-18 | 使用 Instrument Serif 作为 Display | 在开发者工具中罕见，传达人文关怀，增强品牌独特性 |
| 2025-03-18 | 琥珀色作为强调色 | 避开 AI slop 的紫/蓝渐变，琥珀色象征「陈年记忆」 |
| 2025-03-18 | 紧凑布局 + 柔和圆角 | 精致紧凑的感觉——信息密度高但不失温度 |
