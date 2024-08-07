document.getElementById('btn').addEventListener('click', getWeather);

function getWeather() {
    const cityName = document.getElementById('city-name').value;
    const apiKey = 'b0a9e830f5f0cb0837b4f95219568274';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => 
            {
                if (!response.ok) {
                    throw new Error('Something went wrong');
                }
                return response.json();
            }
        )
        .then(data =>{ 
          console.log(data);
          updateWeather(data)}
        )
        .catch(error => {
             console.error("Error:", error)
             displayError();
        });
}

function updateWeather(data) {
    const tempElement = document.getElementById('temp');
    const humidityElement = document.getElementById('humi');
    const windElement = document.getElementById('wind');
    const conditionElement = document.getElementById('condition');
    const imgElement = document.getElementById('img');

    const temperature = Math.round(data.main.temp);
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const weatherCondition = data.weather[0].main;

    tempElement.innerHTML = temperature;
    humidityElement.innerHTML = `${humidity}%`;
    windElement.innerHTML = `${windSpeed} Km/h`;
    conditionElement.innerHTML = weatherCondition;
    document.getElementById('city').innerHTML = data.name;

    const weatherImages = {
        Mist: "imgs/mist.gif",
        Rain: "imgs/raining-rainy-weather.gif",
        Clouds: "imgs/cloudy.gif",
        Clear: "imgs/sunny.gif",
        Drizzle: "imgs/mist.gif",
        Thunderstorm : "imgs/thunderstorm.gif",
        Snow:"imgs/snow-winter.gif",
        Haze:"imgs/haze.gif"
    };

    imgElement.src = weatherImages[weatherCondition] || "imgs/defaultimg.jpg";
    imgElement.style.display = 'block';
    document.getElementById('city-name').value = '';

}


function displayError() {
    const tempElement = document.getElementById('temp');
    const humidityElement = document.getElementById('humi');
    const windElement = document.getElementById('wind');
    const conditionElement = document.getElementById('condition');
    const imgElement = document.getElementById('img');

    tempElement.innerHTML = 'Error';
    humidityElement.innerHTML = '-';
    windElement.innerHTML = '-';
    conditionElement.innerHTML = '-';
    document.getElementById('city').innerHTML = '-';

    imgElement.style.display = 'none'; 
}
