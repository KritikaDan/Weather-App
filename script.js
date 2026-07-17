const apiKey ="04bc17e1977166b1c9e054089e8f5908"; 
const searchBtn = document.getElementById("search-btn");
const cityInput = document.getElementById("city-input");

searchBtn.addEventListener("click", () => {
    const city = cityInput.value;
    if (city) {
        getWeather(city);
    }
});

async function getWeather(city) {
    const url = `https://openweathermap.org{city}&appid=${apiKey}&units=metric`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("City not found");
        
        const data = await response.json();
        
        document.getElementById("city").innerText = data.name;
        document.getElementById("temp").innerText = `${Math.round(data.main.temp)}°C`;
        document.getElementById("description").innerText = data.weather[0].description;
        
        document.getElementById("weather-box").style.display = "block";
        document.getElementById("error").style.display = "none";
    } catch (err) {
        document.getElementById("error").style.display = "block";
        document.getElementById("weather-box").style.display = "none";
    }
}

