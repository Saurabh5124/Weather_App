// https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=13d6cbb5f87e25fda808332cc3b7c858&units=metric

const apiKey = "13d6cbb5f87e25fda808332cc3b7c858";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather_icon")

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

    document.querySelector(".nature").innerHTML = data.weather[0].main;
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C";
    document.querySelector(".humadity").innerHTML = data.main.humidity+" %";
    document.querySelector(".wind").innerHTML = data.wind.speed+" km/hr";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "/images/clouds.png"
    }

    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "/images/clear.png"
    }

    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "/images/drizzle.png"
    }

    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "/images/mist.png"
    }

    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "/images/rain.png"
    }

    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "/images/snow.png"
    }

    document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click",() =>{
    checkWeather(searchBox.value);
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        checkWeather(searchBox.value);
    }
});
