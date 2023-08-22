//change photo in indexpage
const Changephoto = document.querySelector(".instagram-photo");
const arrphotos = ["instaone.png", "instathree.png", "instatwo.png"];
console.log(arrphotos);
let i = 0;
setInterval(function () {
  Changephoto.classList.add("hide");

  setTimeout(function () {
    const increment = arrphotos[i % arrphotos.length];
    Changephoto.src = `/sign-photos/${increment}`;
    i++;

    Changephoto.classList.remove("hide");
  }, 1500); // Adjust the delay if needed
}, 3500);

// //
// // creating query selector
// const UserIDName = document.querySelector("#UserIDName");
// const PassWordID = document.querySelector("#PassWordID");
// const FormSignIn = document.querySelector("#form-signin");
// const SpanEmail = document.querySelector(".Span-Email");
// const SpanPassword = document.querySelector(".Span-Password");
// const BtnInput = document.querySelector("#Btn-input");

// //
// const storedUserData = JSON.parse(localStorage.getItem("User"));
// console.log(storedUserData);

// FormSignIn.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let UserName = FormSignIn.username.value;
//   let PassWord = FormSignIn.password.value;
//   if (
//     UserName === storedUserData.email &&
//     PassWord === storedUserData.Password
//   ) {
//     console.log("goo...");
//     location.href = "../Home-page/Home.html";
//   }
// });

// FormSignIn.username.addEventListener("keyup", (e) => {
//   //   console.log(e.target.value, FormSignIn.username.value);
//   const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//   if (emailPattern.test(FormSignIn.username.value)) {
//     console.log(emailPattern.test(FormSignIn.username.value));
//     console.log("accepted");
//     // BtnInput.disabled = false;
//     SpanEmail.setAttribute("style", "display:none;");
//     UserIDName.classList.add("success");
//   } else if (FormSignIn.username.value === "") {
//     SpanEmail.setAttribute("style", "display:none;");
//     // BtnInput.disabled = true;
//   } else {
//     console.log("no accepted");
//     UserIDName.classList.add("failed");
//     // BtnInput.disabled = true;
//     SpanEmail.setAttribute("style", "display:block;");
//   }
// });

// // Live Password

// FormSignIn.password.addEventListener("keyup", (e) => {
//   //   console.log(e.target.value, FormSignIn.password.value);
//   const passwordPattern =
//     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
//   if (passwordPattern.test(FormSignIn.password.value)) {
//     console.log(passwordPattern.test(FormSignIn.password.value));
//     console.log("accepted");
//     // BtnInput.disabled = false;
//     SpanPassword.setAttribute("style", "display:none;");
//     PassWordID.classList.add("success");
//   } else if (FormSignIn.password.value === "") {
//     SpanPassword.setAttribute("style", "display:none;");
//     // BtnInput.disabled = true;
//   } else {
//     console.log("no accepted");
//     PassWordID.classList.add("failed");
//     // BtnInput.disabled = true;
//     SpanPassword.setAttribute("style", "display:block;");
//   }
// });

// //change photo in indexpage
// const Changephoto = $(".instagram-photo");
// const arrphotos = ["instaone.png", "instathree.png", "instatwo.png"];
// console.log(arrphotos);
// let i = 0;
// setInterval(function () {
//   Changephoto.addClass("hide");

//   setTimeout(function () {
//     const increment = arrphotos[i % arrphotos.length];
//     Changephoto.src = `/sign-photos/${increment}`;
//     i++;

//     Changephoto.removeClass("hide");
//   }, 1500); // Adjust the delay if needed
// }, 3500);

//
// creating query selector
const UserIDName = $("#UserIDName");
const PassWordID = $("#PassWordID");
const FormSignIn = $("#form-signin");
const SpanEmail = $(".Span-Email");
const SpanPassword = $(".Span-Password");
const BtnInput = $("#Btn-input");

//
const storedUserData = jQuery.parseJSON(localStorage.getItem("User"));
console.log(storedUserData);

FormSignIn.on("submit", (e) => {
  e.preventDefault();
  let UserName = UserIDName.val();
  let PassWord = PassWordID.val();
  if (
    UserName === storedUserData.email &&
    PassWord === storedUserData.Password
  ) {
    console.log("goo...");
    location.href = "../Home-page/Home.html";
  }
});

UserIDName.keyup((e) => {
  //   console.log(e.target.val(), FormSignIn.username.val());
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (emailPattern.test(UserIDName.val())) {
    console.log(emailPattern.test(UserIDName.val()));
    console.log("accepted");
    // BtnInput.disabled = false;
    SpanEmail.attr("style", "display:none;");
    UserIDName.addClass("success");
  } else if (UserIDName.val() === "") {
    SpanEmail.attr("style", "display:none;");
    // BtnInput.disabled = true;
  } else {
    console.log("no accepted");
    UserIDName.addClass("failed");
    // BtnInput.disabled = true;
    SpanEmail.attr("style", "display:block;");
  }
});

// Live Password

PassWordID.keyup((e) => {
  //   console.log(e.target.val(), FormSignIn.password.val());
  const passwordPattern =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  if (passwordPattern.test(PassWordID.val())) {
    console.log(passwordPattern.test(PassWordID.val()));
    console.log("accepted");
    // BtnInput.disabled = false;
    SpanPassword.attr("style", "display:none;");
    PassWordID.addClass("success");
  } else if (PassWordID.val() === "") {
    SpanPassword.attr("style", "display:none;");
    // BtnInput.disabled = true;
  } else {
    console.log("no accepted");
    PassWordID.addClass("failed");
    // BtnInput.disabled = true;
    SpanPassword.attr("style", "display:block;");
  }
});
