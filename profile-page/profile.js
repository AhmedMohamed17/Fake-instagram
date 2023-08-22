import GetData from "../helper/Ajax.js";
//

// const ImageContainer = document.querySelector("#image-container");
// const ProfilePicture = document.querySelector("#profile-picture");
// const fullname = document.querySelector("#fullname");
// const Username = document.querySelector("#Username");

// function DisplayData() {
//   const storedImage = localStorage.getItem("User");
//   const storedImageParsed = JSON.parse(storedImage);
//   console.log(storedImageParsed);
//   if (storedImage) {
//     ImageContainer.src = storedImageParsed.image;
//     ProfilePicture.src = storedImageParsed.image;
//     fullname.innerText = storedImageParsed.fullname;
//     Username.innerText = `@${storedImageParsed.username}`;
//   } else {
//     console.log("No stored image found.");
//   }
// }
// DisplayData();

// function DisplayYourPhotosData() {}
// DisplayYourPhotosData();

// const MainDivContainer = document.querySelector("#main-div-container");
// const SmallDiv = document.querySelector("#small-div-container");
// GetData((data) => {
//   console.log(data);
//   for (var i = 1; i < data.length; i++) {
//     for (var k = 0; k < 3; i++) {
//       let htmlimg = ` <img src="${data[i].postphoto}" class="img-fluid" width="50px" height="50px">`;
//       // SmallDiv.append(htmlimg);
//       SmallDiv.insertAdjacentHTML("beforeend", htmlimg);
//       i = i + k;
//       console.log("inner i ===", i);
//     }
//     console.log("outter i =", i);

//     MainDivContainer.insertAdjacentHTML("beforeend", SmallDiv);
//   }
// });

// const displayhtml = `<div class="profile__section__tab__tabcontent__container__image" id="small-div-container">
// </div>`;
const ImageContainer = document.querySelector("#image-container");
const ProfilePicture = document.querySelector("#profile-picture");
const fullname = document.querySelector("#fullname");
const Username = document.querySelector("#Username");

function DisplayData() {
  const storedImage = localStorage.getItem("User");
  const storedImageParsed = JSON.parse(storedImage);
  console.log(storedImageParsed);
  if (storedImage) {
    ImageContainer.src = storedImageParsed.image;
    ProfilePicture.src = storedImageParsed.image;
    fullname.innerText = storedImageParsed.fullname;
    Username.innerText = `@${storedImageParsed.username}`;
  } else {
    console.log("No stored image found.");
  }
}
DisplayData();

function DisplayYourPhotosData() {}
DisplayYourPhotosData();

const MainDivContainer = document.querySelector("#main-div-container");
const SmallDiv = document.querySelector("#small-div-container");
GetData((data) => {
  console.log(data);
  for (var i = 1; i < data.length; i++) {
    for (var k = 0; k < 3; i++) {
      let htmlimg = ` <img src='${data[i].postphoto}' class='img-fluid'>`;
      // SmallDiv.append(htmlimg);
      SmallDiv.insertAdjacentHTML("beforeend", htmlimg);
      // SmallDiv.addClass("profile__section__tab__tabcontent__container__image");
      i = i + k;
      console.log("inner i ===", i);
    }
    console.log("outter i =", i);

    MainDivContainer.insertAdjacentHTML("beforeend", SmallDiv);
  }
});

const displayhtml = `<div class='profile__section__tab__tabcontent__container__image' id='small-div-container'>
</div>`;
