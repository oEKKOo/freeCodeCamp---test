const selectEl = document.querySelector('#city-select');
const btnEl = document.querySelector('#get-weather-btn');

// 工具：空值返回N/A
const getVal = (val) => val === undefined ? 'N/A' : val;

//1. 获取天气接口
async function getWeather(city) {
  try {
    const res = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
}

//2. 渲染天气
async function showWeather(city) {
  const weatherData = await getWeather(city);
  if (!weatherData) {
    alert("Something went wrong, please try again later");
    return;
  }

  // 赋值DOM
  document.querySelector('#weather-icon').src = getVal(weatherData?.weather?.[0]?.icon);
  document.querySelector('#location').textContent = getVal(weatherData.name);
  document.querySelector('#weather-main').textContent = getVal(weatherData?.weather?.[0]?.main);
  document.querySelector('#main-temperature').textContent = getVal(weatherData?.main?.temp);
  document.querySelector('#feels-like').textContent = getVal(weatherData?.main?.feels_like);
  document.querySelector('#humidity').textContent = getVal(weatherData?.main?.humidity);
  document.querySelector('#wind').textContent = getVal(weatherData?.wind?.speed);
  document.querySelector('#wind-gust').textContent = getVal(weatherData?.wind?.gust);
}

//按钮点击
btnEl.addEventListener('click', async () => {
  const selectedCity = selectEl.value.trim();
  if (!selectedCity) return; //空不执行
  await showWeather(selectedCity);
});