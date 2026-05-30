// 1. 定义项目状态常量对象
const projectStatus = {
  PENDING: { description: "Pending Execution" },
  SUCCESS: { description: "Executed Successfully" },
  FAILURE: { description: "Execution Failed" }
};

// 2. 定义 ProjectIdea 类
class ProjectIdea {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.status = projectStatus.PENDING;
  }

  // 更新项目状态方法
  updateProjectStatus(newStatus) {
    this.status = newStatus;
  }
}

// 3. 定义 ProjectIdeaBoard 类
class ProjectIdeaBoard {
  constructor(title) {
    this.title = title;
    this.ideas = [];
  }

  // 添加项目创意
  pin(idea) {
    this.ideas.push(idea);
  }

  // 移除项目创意
  unpin(idea) {
    const index = this.ideas.indexOf(idea);
    if (index !== -1) {
      this.ideas.splice(index, 1);
    }
  }

  // 获取项目数量
  count() {
    return this.ideas.length;
  }

  // 格式化输出字符串
  formatToString() {
    let result = `${this.title} has ${this.count()} idea(s)\n`;
    this.ideas.forEach(idea => {
      result += `${idea.title} (${idea.status.description}) - ${idea.description}\n`;
    });
    return result;
  }
}