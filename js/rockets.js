const rocketURL = "https://api.spacexdata.com/v3/rockets";

fetch(rocketURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    return getRockets(json);
  })
  .catch(function (error) {
    console.log(error);
  });

function getRockets(json) {
  console.dir(json);

  const rockets = document.querySelector(".rocketcard");
  let rocketInfo = "";

  for (let i = 0; i < json.length; i++) {
    const description = `
        <div class="rocketcard">
            <div class="rocketinfo">
             <div class="rockettext">
                 <h3>${json[i].rocket_name}</h3>
                 <p>${json[i].description}</p>
                 <p><span>Height:</span> ${json[i].height.meters} meters</p>
                 <p><span>Diameter:</span> ${json[i].diameter.meters} meters</p>
                 <p><span>Mass:</span> ${json[i].mass.kg} kilos</p>
              </div>
              <div class="rocketimg">
                <img class="rocket" src="${json[i].flickr_images[0]}" alt="The ${json[i].rocket_name} rocket">
                <a href="${json[i].wikipedia}" class="rocketlink">Read more</a>
              </div>
            </div>
        </div>`;

    rocketInfo += description;
  }

  rockets.innerHTML = rocketInfo;
}
