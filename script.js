const btn = document.getElementById('btn');

const bodyImg =document.getElementById('body');
    const input = document.getElementById('city-name');

// btn.addEventListener('click', temp);

 function temp(){
     console.log('click')
     const bodyImg = document.getElementById('body');
    const input = document.getElementById('city-name');
     const img = document.getElementById('img');
     fetch('https://api.openweathermap.org/data/2.5/weather?q='+ input.value +'&units=imperial&appid=b0a9e830f5f0cb0837b4f95219568274').then(response => response.json()).then(data => {
   console.log(data)
    const Kel = data.main.temp;
    const cel = Math.floor(((Kel-32)*5/9));
    document.getElementById('temp').innerHTML = cel;
     document.getElementById('humi').innerHTML = data.main.humidity+`%`;
     document.getElementById('wind').innerHTML = data.wind.speed+`Km/h`;
     
     const weather = document.getElementById('condition');
     const weatherData = data.weather[0].main;
       weather.innerHTML = weatherData;
     
      if(weatherData.match('Mist')){
        
        img.src="/imgs/mist.gif"
      }if(weatherData.match('Rain')){
      
       img.src="/imgs/raining-rainy-weather.gif"
      }if(weatherData.match('Clouds')){
       
        img.src="/imgs/cloudy.gif";
       }if(weatherData.match('Clear')){
       
        img.src="/imgs/sunny.gif";
       }if(weatherData.match('Drizzle')){
      
      img.src="/imgs/mist.gif"
      }
      
    }).catch(error => console.log("errao"));   
  
  input.value='';
   
}