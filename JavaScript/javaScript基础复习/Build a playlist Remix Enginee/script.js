// 示例播放列表（题目提供）
const playlists = [
  [
    { trackId: "trk101", artist: "Velvet Comet", title: "Crimson Afterglow", votes: 5, bpm: 122 },
    { trackId: "trk102", artist: "Neon Harbor", title: "Static Horizon", votes: 2, bpm: 108 },
    { trackId: "trk103", artist: "Lunar Arcade", title: "Midnight Frequency", votes: 4, bpm: 128 }
  ],
  [
    { trackId: "trk201", artist: "Solar Echo", title: "Glass Skyline", votes: 3, bpm: 115 },
    { trackId: "trk202", artist: "Velvet Comet", title: "Satellite Hearts", votes: 6, bpm: 124 }
  ]
];

// 1. 扁平化播放列表，添加 source 属性
function flattenPlaylists(playlists) {
  if (!Array.isArray(playlists)) return [];
  const result = [];

  for (let i = 0; i < playlists.length; i++) {
    const list = playlists[i];
    for (let j = 0; j < list.length; j++) {
      result.push({
        ...list[j],
        source: [i, j]
      });
    }
  }
  return result;
}

// 2. 为曲目计算分数
function scoreTracks(tracks) {
  return tracks.map(track => ({
    ...track,
    score: track.votes * 10 - Math.abs(track.bpm - 120)
  }));
}

// 3. 去重：保留第一次出现的 trackId
function dedupeTracks(tracks) {
  const seen = new Set();
  return tracks.filter(track => {
    if (!seen.has(track.trackId)) {
      seen.add(track.trackId);
      return true;
    }
    return false;
  });
}

// 4. 限制每个艺术家最大出现次数
function enforceArtistQuota(tracks, maxPerArtist) {
  const count = {};
  return tracks.filter(track => {
    const artist = track.artist;
    count[artist] = (count[artist] || 0) + 1;
    return count[artist] <= maxPerArtist;
  });
}

// 5. 生成播放调度（slot 从 1 开始）
function buildSchedule(tracks) {
  return tracks.map((track, index) => ({
    slot: index + 1,
    trackId: track.trackId
  }));
}

// 6. 主函数：按顺序执行所有流程
function remixPlaylist(playlists, maxPerArtist) {
  const flat = flattenPlaylists(playlists);
  const scored = scoreTracks(flat);
  const deduped = dedupeTracks(scored);
  const quotaed = enforceArtistQuota(deduped, maxPerArtist);
  return buildSchedule(quotaed);
}