const apiKey = "83e4e6b1d692eb2df4f880ce5069160a";
const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', () => {
    const city = document.getElementById('city-input').value;
    if(city) fetchWeather(city);
});

async function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    if(data.cod === 200) {
        document.getElementById('weather-info').style.display = 'block';
        document.getElementById('city-name').innerText = data.name;
        const temp = Math.round(data.main.temp);
        document.getElementById('temp').innerText = `${temp}°C`;
        document.getElementById('description').innerText = data.weather[0].main;
        
        generateSuggestion(temp, data.weather[0].main);
    } else {
        alert("City not found!");
    }
}

function generateSuggestion(temp, condition) {
    let advice = "";
    if (condition === "Rain") advice = "It's raining! Best time to stay in and practice Java. ☕💻";
    else if (temp > 30) advice = "Too hot for a run. Maybe try an indoor workout? 🏋️‍♂️";
    else if (temp < 15) advice = "Chilly outside! Perfect for a hot cup of tea and reading. 📖";
    else advice = "Perfect weather for an outdoor walk or cycling! 🚲";
    
    document.getElementById('suggestion').innerText = advice;
}