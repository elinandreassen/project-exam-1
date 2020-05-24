const thisURL = "https://api.spacexdata.com/v3/launches/upcoming";

fetch(thisURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    return getImages(json);
  })
  .catch(function (error) {
    console.log(error);
  });

function getImages(json) {
  console.dir(json);

  const imageGallery = document.querySelector(".gallerycontainer");
  let fillImages = "";

  for (let i = 0; i < json.length; i++) {
    let code = `
       <section class="gallerycontainer">
          <div class="imggallery">
            <img class="galleryimg" src="">
          </div>
        </section>`;

    fillImages += code;
  }

  imageGallery.innerHTML = fillImages;
}
