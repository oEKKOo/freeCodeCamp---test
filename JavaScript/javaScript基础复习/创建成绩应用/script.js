// 1. 计算班级平均分
function getAverage(scores) {
  let sum = 0;
  // 累加所有分数
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  // 计算平均分
  return sum / scores.length;
}

// 2. 根据分数获取字母等级
function getGrade(score) {
  if (score === 100) return "A+";
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

// 3. 判断是否及格（使用 getGrade 函数）
function hasPassingGrade(score) {
  const grade = getGrade(score);
  // 不是F就及格
  return grade !== "F";
}

// 4. 生成完整的学生成绩信息
function studentMsg(scores, studentScore) {
  const average = getAverage(scores);
  const grade = getGrade(studentScore);
  const passed = hasPassingGrade(studentScore);

  if (passed) {
    return `Class average: ${average}. Your grade: ${grade}. You passed the course.`;
  } else {
    return `Class average: ${average}. Your grade: ${grade}. You failed the course.`;
  }
}