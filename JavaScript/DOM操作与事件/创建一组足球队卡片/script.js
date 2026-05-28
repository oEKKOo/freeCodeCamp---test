// 1. 创建 footballTeam 对象，满足所有要求
const footballTeam = {
  team: "Argentina",
  year: 1986,
  headCoach: "Carlos Bilardo",
  players: [
    { name: "Diego Maradona", position: "midfielder", isCaptain: true },
    { name: "Jorge Burruchaga", position: "forward", isCaptain: false },
    { name: "Oscar Ruggeri", position: "defender", isCaptain: false },
    { name: "Nery Pumpido", position: "goalkeeper", isCaptain: false },
    { name: "Jorge Valdano", position: "forward", isCaptain: false }
  ]
};

// 2. 获取 DOM 元素
const teamElement = document.getElementById("team");
const yearElement = document.getElementById("year");
const headCoachElement = document.getElementById("head-coach");
const playerCardsContainer = document.getElementById("player-cards");
const filterSelect = document.getElementById("players");

// 3. 显示球队基础信息
teamElement.textContent = footballTeam.team;
yearElement.textContent = footballTeam.year;
headCoachElement.textContent = footballTeam.headCoach;

// 4. 渲染球员卡片函数
function renderPlayers(filteredPlayers) {
  // 清空容器
  playerCardsContainer.innerHTML = "";

  // 遍历球员，生成卡片
  filteredPlayers.forEach(player => {
    const card = document.createElement("div");
    card.classList.add("player-card");

    // 标题：如果是队长，显示 (Captain)
    const h2 = document.createElement("h2");
    h2.textContent = player.isCaptain 
      ? `${player.name} (Captain)` 
      : player.name;

    // 位置
    const p = document.createElement("p");
    p.textContent = `Position: ${player.position}`;

    // 组装卡片
    card.appendChild(h2);
    card.appendChild(p);
    playerCardsContainer.appendChild(card);
  });
}

// 5. 过滤球员函数
function filterPlayers(position) {
  if (position === "all") {
    return footballTeam.players;
  }
  return footballTeam.players.filter(player => player.position === position);
}

// 6. 初始渲染所有球员
renderPlayers(footballTeam.players);

// 7. 下拉菜单筛选事件
filterSelect.addEventListener("change", (e) => {
  const selectedPosition = e.target.value;
  const filtered = filterPlayers(selectedPosition);
  renderPlayers(filtered);
});