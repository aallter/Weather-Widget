fetch('https://api.openweathermap.org/data/2.5/weather?q=Kiev&lang=ru&appid=ddd631045f1c07b448247b414a7829c5')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);

    document.querySelector('.b-w').insertAdjacentHTML('afterbegin', "<img src=\"https://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png\" alt=\"weather\"/>");

    let date = new Date();
    document.querySelector('.date').innerHTML = `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`;
    document.querySelector('.state').innerHTML = data.weather[0].description;
    document.getElementById('city').innerHTML = data.name;
    document.getElementById('temp').innerHTML = `${Math.round(data.main.temp - 273.15)} C&#176`;
    document.getElementById('wind').innerHTML = `Ветер ${data.wind.speed}m/s`;
    document.getElementById('temp').innerHTML = `${Math.round(data.main.temp - 273.15)} C&#176`;
    document.getElementById('water').innerHTML = `Влажность ${data.main.humidity}%`;
    
  });