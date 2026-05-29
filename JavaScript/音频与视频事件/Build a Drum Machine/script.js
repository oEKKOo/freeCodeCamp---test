// 音频名称映射（唯一描述文本）
const soundNameMap = {
  Q: "Heater 1",
  W: "Heater 2",
  E: "Heater 3",
  A: "Heater 4",
  S: "Clap",
  D: "Open-HH",
  Z: "Kick-n'-Hat",
  X: "Kick",
  C: "Closed-HH"
};

// 获取DOM元素
const display = document.getElementById("display");
const drumPads = document.querySelectorAll(".drum-pad");

// 播放音频 + 更新显示屏 通用函数
function playSound(key) {
  const audio = document.getElementById(key);
  // 重置播放位置（连续点击可重复播放）
  audio.currentTime = 0;
  audio.play();
  // 更新显示文本
  display.textContent = soundNameMap[key];
}

// 1. 点击鼓垫事件
drumPads.forEach(pad => {
  pad.addEventListener("click", () => {
    const key = pad.textContent.trim();
    playSound(key);
  });
});

// 2. 键盘按键事件
document.addEventListener("keydown", (e) => {
  // 统一转为大写，兼容小写按键
  const key = e.key.toUpperCase();
  // 仅监听指定按键
  if (soundNameMap.hasOwnProperty(key)) {
    playSound(key);
  }
});