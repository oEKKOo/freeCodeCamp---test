// 1. 初始化 poll 为 Map 对象
const poll = new Map();

// 2. 添加投票选项函数
function addOption(option) {
    // 判空
    if (!option || option.trim() === "") {
        return "Option cannot be empty.";
    }
    // 判断选项是否已存在
    if (poll.has(option)) {
        return `Option "${option}" already exists.`;
    }
    // 不存在则添加，值为空 Set 存储投票者
    poll.set(option, new Set());
    return `Option "${option}" added to the poll.`;
}

// 3. 投票函数
function vote(option, voterId) {
    // 选项不存在
    if (!poll.has(option)) {
        return `Option "${option}" does not exist.`;
    }
    const voters = poll.get(option);
    // 已投过票
    if (voters.has(voterId)) {
        return `Voter ${voterId} has already voted for "${option}".`;
    }
    // 新增投票
    voters.add(voterId);
    return `Voter ${voterId} voted for "${option}".`;
}

// 4. 展示投票结果函数
function displayResults() {
    let result = "Poll Results:\n";
    poll.forEach((voterSet, option) => {
        const count = voterSet.size;
        result += `${option}: ${count} votes\n`;
    });
    // 去除末尾多余换行（适配格式校验）
    return result.trimEnd();
}

// 初始化数据：满足至少3个选项、至少3票的要求
addOption("Turkey");
addOption("Morocco");
addOption("Spain");

vote("Turkey", "user1");
vote("Turkey", "user2");
vote("Morocco", "user3");