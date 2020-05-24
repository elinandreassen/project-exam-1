const thisURL = "https://api.spacexdata.com/v3/launches/upcoming";

fetch(thisURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    return getLaunches(json);
  })
  .catch(function (error) {
    console.log(error);
  });

function getLaunches(json){
    console.dir(json);

    const upcLaunch = document.querySelector(".upc-launches");
    let fillUpcL = "";

    for (let i = 0; i < json.length; i++) {
      // Add HTML
      let details = `
       <div class="upc-launches">
          <div id="upc" class="launch">
            <h3>${json[i].mission_name}</h3>
            <img id="launchimg" src="${json[i].links.mission_patch_small}" alt="Mission patch">
            <p><span>Rocket:</span> ${json[i].rocket.rocket_name}</p>
            <p><span>Launch Date:</span> ${json[i].launch_date_local}</p>
            <p><span>Launch Site:</span> ${json[i].launch_site.site_name_long}</p>
            <p><span>Payload:</span> ${json[i].rocket.second_stage.payloads[0].payload_type}</p>
            <a href="${json[i].links.video_link}">Launch Video</a>
          </div>
        </div>`;

      fillUpcL += details;
    }

upcLaunch.innerHTML = fillUpcL;
};






 

 





