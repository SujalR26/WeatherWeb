let city="Jabalpur"
let weather={
    apiKey:"95c42f4f5a65aa1cf478ed7daa5e46fd",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=95c42f4f5a65aa1cf478ed7daa5e46fd").then((Response)=>Response.json()).then((data)=>this.displayWeather(data))
    },

    displayWeather: function(data){
        const {name}=data;
        const{icon,description}=data.weather[0];
        const{temp,feels_like,humidity,pressure}=data.main;
        const{visibility}=data;
        const{speed,deg}=data.wind;
        const{sunrise,sunset}=data.sys;
        let time1 = new Date(sunrise*1000);
        let time2=new Date(sunset*1000);
        console.log(name,icon,description,temp,feels_like,humidity,pressure,visibility,speed,deg,sunrise,sunset);
        document.querySelector(".main-msg").innerText="Showing Weather for "+name;
        document.querySelector(".humid").innerText=humidity+"%";
        document.querySelector(".pr").innerText=pressure;
        document.querySelector(".sr").innerText=time1.toLocaleTimeString();
        document.querySelector(".ss").innerText=time2.toLocaleTimeString();
        document.querySelector(".temp").innerText=Math.round(temp-273.00)+"°C";
        document.querySelector(".text-info").innerText=description;
        document.querySelector(".feel").innerText=Math.round(feels_like-273)+"°C";
        document.querySelector(".wind-speed").innerText=speed+"KM/H";
        document.querySelector(".deg").innerText=deg;
        document.querySelector(".visible").innerText=visibility/1000+"KM";

        
    },
    search:function(){
        this.fetchWeather(document.querySelector(".search").value);
    }
};

document.querySelector(".search-bar button").addEventListener("click",()=>{
    weather.search();
});
document.querySelector(".search").addEventListener("keyup",(event)=>{
if(event.key=="Enter"){
    weather.search();
}
});//for making search available with enter

weather.fetchWeather("Jabalpur");//this so when you open webpage it will show weather of jabalpur