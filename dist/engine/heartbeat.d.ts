/**
 * 心跳守护进程
 *
 * 后台运行，自动处理 pending block 和执行衰减
 */
/**
 * 心跳引擎
 */
export declare class Heartbeat {
    private running;
    private db;
    private ruleEngine;
    private timeoutRef;
    constructor();
    /**
     * 启动心跳循环
     */
    start(): Promise<void>;
    /**
     * 主循环
     */
    private run;
    /**
     * 停止心跳
     */
    stop(): Promise<void>;
    /**
     * 处理 pending block
     */
    private processPendingBlocks;
    /**
     * 标注 block
     */
    private annotateBlock;
    /**
     * 处理衰减
     */
    private processVitalityDecay;
    /**
     * 生命力转状态
     */
    private vitalityToStatus;
    /**
     * 延迟函数
     */
    private sleep;
}
//# sourceMappingURL=heartbeat.d.ts.map