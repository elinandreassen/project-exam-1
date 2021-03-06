// FETCH API FOR COUNTDOWN
const url = "https://api.spacexdata.com/v3/launches/upcoming";

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    return getnextLaunch(json);
  })
  .catch(function (error) {
    console.log(error);
  });


function getnextLaunch(json) {
  console.dir(json)
  let launchDate = json[0];

    setInterval(function() {
    const now = Math.floor(new Date().getTime());
    let countDistance = "";
    let days = "";
    let hours = "";
    let minutes = "";
    let seconds = "";

    countDistance = launchDate.launch_date_unix*1000 - now;
    days = Math.floor(countDistance / (1000 * 60 * 60 * 24)); 
    hours = Math.floor((countDistance % (1000 * 60 * 60)) / (1000 * 60 * 60));
    minutes = Math.floor((countDistance % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((countDistance % (1000 * 60)) / 1000);

    if (countDistance > 0) {
      document.getElementById("days").innerHTML = days;
      document.getElementById("hours").innerHTML = hours;
      document.getElementById("minutes").innerHTML = minutes;
      document.getElementById("seconds").innerHTML = seconds;
    }
}, 1000);
};


