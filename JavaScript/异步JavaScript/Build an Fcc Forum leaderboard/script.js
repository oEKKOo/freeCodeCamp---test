const forumLatest =
  'https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json';
const forumTopicUrl = 'https://forum.freecodecamp.org/t/';
const forumCategoryUrl = 'https://forum.freecodecamp.org/c/';
const avatarUrl = 'https://cdn.freecodecamp.org/curriculum/forum-latest';

const allCategories = {
  299: { category: 'Career Advice', className: 'career' },
  409: { category: 'Project Feedback', className: 'feedback' },
  417: { category: 'freeCodeCamp Support', className: 'support' },
  421: { category: 'JavaScript', className: 'javascript' },
  423: { category: 'HTML - CSS', className: 'html-css' },
  424: { category: 'Python', className: 'python' },
  432: { category: 'You Can Do This!', className: 'motivation' },
  560: { category: 'Back-End Development', className: 'backend' }
};

//1. timeAgo
function timeAgo(isoStr) {
  const now = Date.now();
  const target = new Date(isoStr).getTime();
  const diffMs = now - target;
  const diffMin = Math.floor(diffMs / (1000 * 60));
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);

  if (diffMin < 60) return `${diffMin}m ago`;
  else if (diffHour < 24) return `${diffHour}h ago`;
  else return `${diffDay}d ago`;
}

//2.viewCount
function viewCount(num) {
  if (num >= 1000) {
    return `${Math.floor(num / 1000)}k`;
  } else {
    return num;
  }
}

//3.forumCategory
function forumCategory(catId) {
  let catObj;
  if (allCategories.hasOwnProperty(catId)) {
    catObj = allCategories[catId];
  } else {
    catObj = { category: "General", className: "general" };
  }
  const cls = `category ${catObj.className}`;
  const href = `${forumCategoryUrl}${catObj.className}/${catId}`;
  return `<a class="${cls}" href="${href}">${catObj.category}</a>`;
}

//4.avatars(posters数组，users数组)
function avatars(postersArr, usersArr) {
  let imgStr = "";
  postersArr.forEach(posterItem => {
    const uid = posterItem.user_id;
    const findUser = usersArr.find(u => u.id === uid);
    if (!findUser) return;
    let srcPath = findUser.avatar_template.replace("{size}", "30");
    if (srcPath.startsWith("/")) {
      srcPath = avatarUrl + srcPath;
    }
    imgStr += `<img src="${srcPath}" alt="${findUser.name}">`;
  });
  return imgStr;
}

//5.showLatestPosts
function showLatestPosts(dataObj) {
  const { users, topic_list } = dataObj;
  const topics = topic_list.topics;
  let trHtml = "";
  topics.forEach(topic => {
    const { title, slug, id, posters, category_id, posts_count, views, bumped_at } = topic;
    //第一个td：两个a标签
    const linkHref = `${forumTopicUrl}${slug}/${id}`;
    const aTitle = `<a class="post-title" href="${linkHref}">${title}</a>`;
    const aCat = forumCategory(category_id);
    const td1 = `<td>${aTitle}${aCat}</td>`;

    //第二个td avatar-container
    const avatarImgHtml = avatars(posters, users);
    const td2 = `<td><div class="avatar-container">${avatarImgHtml}</div></td>`;

    //第三个td replies = posts_count-1
    const td3 = `<td>${posts_count - 1}</td>`;

    //第四个 views
    const td4 = `<td>${viewCount(views)}</td>`;

    //第五 activity
    const td5 = `<td>${timeAgo(bumped_at)}</td>`;

    trHtml += `<tr>${td1}${td2}${td3}${td4}${td5}</tr>`;
  });
  document.querySelector("#posts-container").innerHTML = trHtml;
}

//6.fetchData 异步
async function fetchData() {
  try {
    const res = await fetch(forumLatest);
    const jsonData = await res.json();
    showLatestPosts(jsonData);
  } catch (err) {
    console.log(err);
  }
}

//页面加载自动请求
fetchData();