document.getElementById("search-city").addEventListener("keydown", event => {
    if (event.key == "Enter") {
        var city = document.getElementById("search-city").value;
        getData(city);
    }
})

const getData = function (city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7e3f21edee540e6110af347b55eb1ab2`)
        .then(response => response.json())
        .then(value => displayData(value))
        .catch(err => console.log(err));
}

let city = document.getElementsByClassName("city");
let date = document.getElementsByClassName("date");
let temp = document.getElementById("temp");
let hi = document.getElementById("hi");
let low = document.getElementById("low");
let weather = document.getElementsByClassName("weather");

const displayData = function (value) {
    city[0].innerHTML = `${value.name}, ${value.sys.country}`;
    date[0].innerHTML = formatDate();
    temp.innerHTML = `${Math.round(value.main.temp - 273.15)}`;
    hi.innerHTML = `${Math.round(value.main.temp_max - 273.15)}`;
    low.innerHTML = `${Math.round(value.main.temp_min - 273.15)}`;
    weather[0].innerHTML = `${value.weather[0].main}`;
}

function formatDate() {
    let date = new Date();
    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thrusday",
        "Friday",
        "Saturday"
    ];
    let day = days[date.getDay()];
    let month = months[date.getMonth()];
    return `${day} ${date.getDate()} ${month} ${date.getFullYear()}`;
}