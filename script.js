const apikey = "77a7d9caf65743a80670b2838f5fc663";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".Weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display= "block"
        document.querySelector(".weather").style.display= "none"
    }
    else{
        var data = await response.json()


        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°c" ;
        document.querySelector(".Humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".Wind").innerHTML = data.wind.speed + "Km/h";
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "cloud.jpg"
    
        }
    
            else if(data.weather[0].main == "Clear"){
                weatherIcon.src = "clear.jpg"}
    
                else if(data.weather[0].main == "Rain"){
                    weatherIcon.src = "rain.jpg"}
    
                    else if(data.weather[0].main == "Drizzle"){
                        weatherIcon.src = "drizzle.jpg"}
    
                        else if(data.weather[0].main == "Mist"){
                            weatherIcon.src = "mist.jpg"}
    
           document.querySelector(".weather").style.display ="block"   
           document.querySelector(".error").style.display = "none";
           document.querySelector(".wa").value = ""
           document.body.style.backgroundImage = "none";
           document.body.style.backgroundImage = "url(bgc6.jpg)"

           
    }
               
}

searchbtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value)
})

