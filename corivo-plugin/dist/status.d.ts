/**
 * Corivo Status Line
 * 显示记忆统计信息
 */
interface StatusContext {
    cwd: string;
    transcript_path?: string;
}
export declare function getCorivoStatus(context: StatusContext): Promise<string>;
export declare function main(): Promise<void>;
export {};
//# sourceMappingURL=status.d.ts.map