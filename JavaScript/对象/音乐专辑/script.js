const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};


// 核心函数：更新音乐专辑记录
function updateRecords(records, id, prop, value) {
  // 1. 如果 value 为空字符串 → 删除属性
  if (value === "") {
    delete records[id][prop];
  }
  // 2. 如果 prop 不是 tracks → 直接赋值
  else if (prop !== "tracks") {
    records[id][prop] = value;
  }
  // 3. 如果 prop 是 tracks
  else if (prop === "tracks") {
    // 没有 tracks 属性 → 创建数组并添加
    if (!records[id].hasOwnProperty("tracks")) {
      records[id].tracks = [];
    }
    // 添加到 tracks 数组末尾
    records[id].tracks.push(value);
  }

  // 必须返回整个 records 对象
  return records;
}