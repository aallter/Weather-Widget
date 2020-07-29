let cityName = 'London';
/*get lang*/ 
let langUser = navigator.language.split("").splice(0,2).join("");
console.log(navigator);
/*main func weather*/
let Weather=()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=${langUser}&appid=ddd631045f1c07b448247b414a7829c5`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        /*If error*/ 
        if(data.cod=="404"){
            window.location.reload();
        }
        /*body picture fon*/
        let arr_picture_body = [2,4,5,6,7,'houses'];
        let rand_num_picture = arr_picture_body[Math.floor(Math.random()*arr_picture_body.length)];
        document.querySelector('body').style.backgroundImage = "url(img/"+rand_num_picture+".jpg)";
        console.log(rand_num_picture);
        /* weather api*/
        console.log(data);
        document.querySelector('.b-w').insertAdjacentHTML('afterbegin', "<img src=\"https://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png\" alt=\"weather\"/>");
        let date = new Date();

        let day_now = date.getDay();
        let arr_days = ['','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

        /* time if +0*/
        let minutes;
        if(date.getMinutes()<10){
            minutes = `0${date.getMinutes()}`;
        }else{
            minutes = date.getMinutes();
        }
        /*end time if */
        console.log(document.querySelector('img'));
        document.querySelector('.date').innerHTML = `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()} , ${arr_days[day_now]} Time ${date.getHours()}:${date.getMinutes()}`;
        document.querySelector('.state').innerHTML = data.weather[0].description;
        document.getElementById('city').innerHTML = data.name;
        document.getElementById('temp').innerHTML = `${Math.round(data.main.temp - 273.15)} C&#176`;
        document.getElementById('wind').innerHTML = `Ветер ${data.wind.speed}m/s`;
        document.getElementById('temp2').innerHTML = `Max ${Math.round(data.main.temp_max - 273.15)} C&#176 , Min ${Math.round(data.main.temp_min - 273.15)} C&#176 `;
        document.getElementById('water').innerHTML = `Влажность ${data.main.humidity}%`;
    });
}
/*first power */
Weather();

/*search city */
let sub_butt = document.getElementById('button-submit');
let SearchCityFunc=(e)=>{
    /*stop reload */
    e.preventDefault();
    /* delete old icon*/
    document.querySelector('img').remove();
    cityName = document.getElementById('city-name').value;
   
    if(cityName!=""){
        Weather();
        }else{
            window.location.reload();
        }
        /*clean input */
    cityName = document.getElementById('city-name').value="";
}

sub_butt.addEventListener('click',SearchCityFunc);
