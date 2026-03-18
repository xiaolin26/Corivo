/**
 * 规则引擎
 *
 * 从自然语言内容中提取结构化决策模式
 */
/**
 * 规则引擎
 *
 * 管理多个规则，依次尝试匹配并提取模式
 */
export class RuleEngine {
    rules = [];
    /**
     * 注册规则
     */
    register(rule) {
        this.rules.push(rule);
    }
    /**
     * 从内容中提取模式
     *
     * @param content - 自然语言内容
     * @returns 提取的模式，如果没有匹配则返回 null
     */
    extract(content) {
        for (const rule of this.rules) {
            const pattern = rule.extract(content);
            if (pattern) {
                return { ...pattern, _source: 'rule' };
            }
        }
        return null;
    }
    /**
     * 批量提取（用于测试）
     *
     * @param contents - 内容数组
     * @returns 提取的模式数组
     */
    extractAll(contents) {
        return contents.map((c) => this.extract(c));
    }
    /**
     * 获取已注册的规则数量
     */
    get ruleCount() {
        return this.rules.length;
    }
}
//# sourceMappingURL=index.js.map