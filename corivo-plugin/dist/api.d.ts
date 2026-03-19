/**
 * Corivo API Wrapper
 * 为 Claude Code 提供简单的记忆存储 API
 */
export interface CorivoConfig {
    dataDir: string;
    dbPath: string;
    configPath: string;
}
export interface SaveOptions {
    annotation?: string;
    refs?: string[];
}
export interface QueryResult {
    id: string;
    content: string;
    annotation: string;
    vitality: number;
    created_at: number;
}
export declare class CorivoAPI {
    private config;
    constructor();
    private getConfig;
    /**
     * 检查 Corivo 是否已初始化
     */
    isInitialized(): boolean;
    /**
     * 保存记忆
     */
    save(content: string, options?: SaveOptions): {
        success: boolean;
        id?: string;
        error?: string;
    };
    /**
     * 查询记忆
     */
    query(query: string, options?: {
        limit?: number;
        annotation?: string;
    }): QueryResult[];
    /**
     * 获取统计信息
     */
    getStats(): {
        total: number;
        active: number;
        cooling: number;
        cold: number;
    } | null;
    /**
     * 解析查询输出
     */
    private parseQueryOutput;
    /**
     * 解析统计输出
     */
    private parseStatsOutput;
}
export declare const corivo: CorivoAPI;
//# sourceMappingURL=api.d.ts.map