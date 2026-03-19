/**
 * CLI 命令 - inject
 *
 * 注入 Corivo 规则到项目配置文件
 */

import fs from 'node:fs/promises';
import path from 'path';
import { ClaudeCodeIngestor } from '../../ingestors/claude-code.js';
import chalk from 'chalk';

export async function injectCommand(options: {
  target?: string;
  eject?: boolean;
}): Promise<void> {
  const ingestor = new ClaudeCodeIngestor();

  if (options.eject) {
    // 移除规则
    await ejectRules(options.target);
    return;
  }

  // 注入规则
  const targetPath = options.target || process.cwd();
  await ingestor.injectRules(targetPath);

  console.log(chalk.cyan('\n📝 下一步：'));
  console.log(chalk.gray('  在 Claude Code 中开始对话，AI 会自动使用 Corivo'));
  console.log(chalk.gray('  查看记忆: corivo query "关键词"'));
  console.log('');
}

/**
 * 移除注入的规则
 */
async function ejectRules(targetPath?: string): Promise<void> {
  const claudeMd = path.join(targetPath || process.cwd(), 'CLAUDE.md');

  try {
    const content = await fs.readFile(claudeMd, 'utf-8');

    // 查找规则段
    const startMarker = '## Corivo 记忆规则';
    const endMarker = '##'; // 下一个二级标题

    const startIndex = content.indexOf(startMarker);
    if (startIndex === -1) {
      console.log('❌ 未找到 Corivo 规则');
      return;
    }

    const endIndex = content.indexOf('\n##', startIndex + 1);
    if (endIndex === -1) {
      // 规则在文件末尾
      const newContent = content.substring(0, startIndex);
      await fs.writeFile(claudeMd, newContent.trimEnd() + '\n');
    } else {
      // 规则在中间
      const before = content.substring(0, startIndex);
      const after = content.substring(endIndex);
      await fs.writeFile(claudeMd, (before + after).trimStart());
    }

    console.log('✅ Corivo 规则已移除');
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      console.log('❌ 文件不存在:', claudeMd);
    } else {
      throw error;
    }
  }
}
