const apiKey="cf3d3a505fe9224a7750a48690072452";
const url="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const  btn=document.querySelector(".search button");
const icon=document.querySelector(".weather-icon")

btn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})


async function checkWeather(city){
    const responce  = await fetch(url + city + "&appid="+apiKey);

    if (responce.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{
        var data=await responce.json();
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML=data.main.humidity+ " km/h";
        document.querySelector(".wind").innerHTML=data.wind.speed + "%";
    
        if (data.weather[0].main == "Clouds") {
            icon.src="./images/clouds.png"
        }
        else if (data.weather[0].main == "Clear") {
            icon.src="./images/clear.png"
        }
        else if (data.weather[0].main == "Rain") {
            icon.src="./images/rain.png"
        }
        else if (data.weather[0].main == "Drizzle") {
            icon.src="./images/drizzle.png"
        }
        else if (data.weather[0].main == "Mist") {
            icon.src="./images/mist.png"
        }
    
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
    }
}