/**
 * 密码输入工具
 *
 * 提供隐藏的密码输入功能
 */
/**
 * 读取隐藏的密码输入
 *
 * 使用TTY原始模式隐藏输入字符
 *
 * @param prompt - 提示文本
 * @param options - 选项
 * @param options.allowEmpty - 是否允许空密码（用于非交互环境）
 * @returns 用户输入的密码
 */
export declare function readPassword(prompt: string, options?: {
    allowEmpty?: boolean;
}): Promise<string>;
//# sourceMappingURL=password.d.ts.map