const myURL = "https://api.spacexdata.com/v3/launches/past";

fetch(myURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    return getPrevLaunches(json);
  })
  .catch(function (error) {
    console.log(error);
  });

function getPrevLaunches(json) {
  console.dir(json);

  const prevLaunch = document.querySelector(".prev-launches");
  let fillPrevL = "";

  for (let i = 0; i < json.length; i++) {
    const details = `
       <div class="prev-launches">
            <div id="prev" class="launch">
              <h3>${json[i].mission_name}</h3>
              <img class="launchimg" src="${json[i].links.mission_patch_small}" alt="The ${json[i].mission_name} mission patch">
              <p><span>Rocket:</span> ${json[i].rocket.rocket_name}</p>
              <p><span>Launch Date:</span> ${json[i].launch_date_local}</p>
              <p><span>Launch Site:</span> ${json[i].launch_site.site_name_long}</p>
              <p><span>Payload:</span> ${json[i].rocket.second_stage.payloads[0].payload_type}</p>
              <a href="${json[i].links.video_link}">Launch Video</a>
            </div>
          </div>`;
    fillPrevL += details;
  }
  prevLaunch.innerHTML = fillPrevL;
}
