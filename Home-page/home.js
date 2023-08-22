import GetData from "../helper/Ajax.js";
// creating query selector
const PostContainer = document.querySelector(".post-container");
const StoriesContainer = document.querySelector("#stories-container");
const ProfileDiv = document.querySelector("#profile-div");
const profileImageNavbar = document.querySelector("#profile-image-navbar");
const imageBottomNavbar = document.querySelector("#image-bottom-navbar");
const imageProfileContainer = document.querySelector(
  "#image-profile-container"
);
const UserNameDetails = document.querySelector("#UserNameDetails");

// get data and display as cards
function DisplayCards() {
  GetData((data) => {
    console.log(data);
    data.forEach((element) => {
      let html = ` <div class="post">
        <div class="post-header">
          <div class="post-info-flex">
            <img
              src=${element.src}
              alt="Profile Picture"
              class="profile-pic"
            />
            <p>${element.name}</p>
            <ul>
              <li class="list-time">8 hrs</li>
            </ul>
          </div>
          <!-- <i class="fas fa-ellipsis-h"></i> -->
          <svg aria-label="More options" class="_ab6-" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
        
        </div>
        <img
          src=${element.postphoto}
          alt="Post Image"
          class="post-img"
        />
        <div class="post-icons">
          <div class="post-icons-left">
            <i data-feather="heart"></i>
            <i data-feather="message-circle"></i>
            <i data-feather="send"></i>
          </div>
          <i data-feather="bookmark"></i>
        </div>
        <p class="likes">100 likes</p>
        <p class="caption">${element.handleuser} Caption goes here...</p>
        <a href="#" class="comments">View all comments</a>
        </div>`;
      PostContainer.insertAdjacentHTML("afterbegin", html);
    });
  });
}
DisplayCards();
// get data and display as Stories

function DisplayStories() {
  GetData((data) => {
    data.forEach((element) => {
      let Displaystories_items = ` <div class="story">
        <div class="gradient-border">
          <img
            src=${element.src}
            alt="Profile Picture"
          />
        </div>
        <p>${element.name}</p>
      </div>`;
      StoriesContainer.insertAdjacentHTML("beforeend", Displaystories_items);
    });
  });
}

DisplayStories();
// get data and display two users

function DisplayRightdiv() {
  GetData((data) => {
    let ah = `<p style="font-size: 0.8rem; color: var(--light-grey)">
  Suggested For You
</p>
<div class="profile">
  <img
    src=${data[0].src}
    alt="Profile Picture"
  />
  <div class="profile-info">
    <strong class="profile-info-Username">${data[0].handleuser}</strong>
    <span class="profile-info-name">${data[0].name}</span>
  </div>
</div>
<div class="profile">
  <img
    src=${data[1].src}
    alt="Profile Picture"
  />
  <div class="profile-info">
    <strong class="profile-info-Username">${data[1].handleuser}</strong>
    <span class="profile-info-name">${data[1].name}</span>
  </div>
</div>
<ul class="profile-list">
  <li>About</li>
  <li>Help</li>
  <li>Press</li>
  <li>API</li>
  <li>Jobs</li>
  <li>Privacy</li>
  <li>Terms</li>
  <li>Locations</li>
  <li>Language</li>
  <li>English</li>
</ul>
<p style="margin: 0; font-size: 0.5rem; color: var(--light-grey)">
  Meta Verified © 2023 INSTAGRAM FROM META
</p>`;
    ProfileDiv.insertAdjacentHTML("beforeend", ah);
  });
}
DisplayRightdiv();
//
function SetProfilePicture() {
  const storedImage = localStorage.getItem("User");
  const storedImageParsed = JSON.parse(storedImage);

  // console.log("ahmed is calling image", storedImageParsed.image);

  if (storedImage) {
    profileImageNavbar.src = storedImageParsed.image;
    imageBottomNavbar.src = storedImageParsed.image;
    imageProfileContainer.src = storedImageParsed.image;

    let html = `    <strong class="profile-info-Username">@${storedImageParsed.username}</strong>
    <span class="profile-info-name">${storedImageParsed.fullname}</span>`;
    // UserNameDetails.append(html);
    UserNameDetails.insertAdjacentHTML("beforeend", html);
  } else {
    console.log("No stored image found.");
  }
}
SetProfilePicture();
