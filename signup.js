// // creating query selector
// const formm = document.querySelector("#signup-form");
// const feedback = document.querySelector(".feedback");
// const SpanEmail = document.querySelector(".span-Email");
// const SpanName = document.querySelector(".span-name");
// const SpanUserName = document.querySelector(".span-Username");
// const SpanPassword = document.querySelector(".span-Password");
// const btnInput = document.querySelector(".button");

// //
// const EmailSignupId = document.querySelector("#EmailSignupId");
// const FullnSignupId = document.querySelector("#FullnSignupId");
// const UsrSignupId = document.querySelector("#UsrSignupId");
// const PwSignupId = document.querySelector("#PwSignupId");
// const imageInput = document.querySelector("#imageInput");

// //
// //

// formm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let Email = formm.EmailSignup.value;
//   let FullName = formm.fullnsignup.value;
//   let UserName = formm.UsrSignup.value;
//   let PassWord = formm.PwSignup.value;
//   let localstorageimage = localStorage.getItem("User");
//   console.log("ahmed ====", Email, FullName, UserName, PassWord);
//   let DetailsObj = {
//     email: Email,
//     fullname: FullName,
//     username: UserName,
//     Password: PassWord,
//     image: localstorageimage,
//   };
//   localStorage.setItem("User", JSON.stringify(DetailsObj));
//   console.log("base64", DetailsObj);
//   location.href = "/login-page/login.html";
// });
// // live Email
// formm.EmailSignup.addEventListener("keyup", (e) => {
//   //   console.log(e.target.value, formm.EmailSignup.value);
//   const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//   if (emailPattern.test(formm.EmailSignup.value)) {
//     console.log(emailPattern.test(formm.EmailSignup.value));
//     console.log("accepted");
//     btnInput.disabled = false;
//     SpanEmail.setAttribute("style", "display:none;");
//     EmailSignupId.classList.add("success");
//   } else if (formm.EmailSignup.value === "") {
//     SpanEmail.setAttribute("style", "display:none;");
//     btnInput.disabled = true;
//   } else {
//     console.log("no accepted");
//     EmailSignupId.classList.add("failed");
//     btnInput.disabled = true;
//     SpanEmail.setAttribute("style", "display:block;");
//   }
// });
// // Live Full Name
// formm.fullnsignup.addEventListener("keyup", (e) => {
//   //   console.log(e.target.value, formm.fullnsignup.value);
//   const fullNamePattern = /^[a-zA-Z\s'-]{2,}$/;

//   if (fullNamePattern.test(formm.fullnsignup.value)) {
//     console.log(fullNamePattern.test(formm.fullnsignup.value));
//     console.log("accepted");
//     btnInput.disabled = false;
//     SpanName.setAttribute("style", "display:none;");
//     FullnSignupId.classList.add("success");
//   } else if (formm.fullnsignup.value === "") {
//     SpanName.setAttribute("style", "display:none;");
//     btnInput.disabled = true;
//   } else {
//     console.log("no accepted");
//     FullnSignupId.classList.add("failed");
//     SpanName.setAttribute("style", "display:block;");
//     btnInput.disabled = true;
//   }
// });
// // Live User Name

// formm.UsrSignup.addEventListener("keyup", (e) => {
//   //   console.log(e.target.value, formm.UsrSignup.value);
//   const usernamePattern = /^[a-zA-Z0-9._-]{5,}$/;
//   if (usernamePattern.test(formm.UsrSignup.value)) {
//     console.log(usernamePattern.test(formm.UsrSignup.value));
//     console.log("accepted");
//     btnInput.disabled = false;
//     SpanUserName.setAttribute("style", "display:none;");
//     UsrSignupId.classList.add("success");
//   } else if (formm.UsrSignup.value === "") {
//     SpanUserName.setAttribute("style", "display:none;");
//     btnInput.disabled = true;
//   } else {
//     console.log("no accepted");
//     UsrSignupId.classList.add("failed");
//     btnInput.disabled = true;

//     SpanUserName.setAttribute("style", "display:block;");
//   }
// });
// // Live password

// formm.PwSignup.addEventListener("keyup", (e) => {
//   //   console.log(e.target.value, formm.PwSignup.value);
//   const passwordPattern =
//     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
//   if (passwordPattern.test(formm.PwSignup.value)) {
//     console.log(passwordPattern.test(formm.PwSignup.value));
//     console.log("accepted");
//     SpanPassword.setAttribute("style", "display:none;");
//     btnInput.disabled = false;
//     PwSignupId.classList.add("success");
//   } else if (formm.PwSignup.value === "") {
//     SpanPassword.setAttribute("style", "display:none;");
//     btnInput.disabled = true;
//   } else {
//     console.log("no accepted");
//     PwSignupId.classList.add("failed");
//     btnInput.disabled = true;
//     SpanPassword.setAttribute("style", "display:block;");
//   }
// });
// imageInput.addEventListener("change", function (event) {
//   const selectedFile = event.target.files[0];
//   console.log(selectedFile);
//   console.log(event.target.files);
//   if (selectedFile) {
//     const reader = new FileReader();
//     reader.onload = function (event) {
//       base64Image = event.target.result;
//       localStorage.setItem("User", base64Image);
//       console.log("Image stored in local storage.");
//     };
//     reader.readAsDataURL(selectedFile);
//   }
// });
// function Putimage() {}
// Putimage();
// creating query selector
const formm = $("#signup-form");
const feedback = $(".feedback");
const SpanEmail = $(".span-Email");
const SpanName = $(".span-name");
const SpanUserName = $(".span-Username");
const SpanPassword = $(".span-Password");
const btnInput = $(".button");

//
const EmailSignupId = $("#EmailSignupId");
const FullnSignupId = $("#FullnSignupId");
const UsrSignupId = $("#UsrSignupId");
const PwSignupId = $("#PwSignupId");
const imageInput = $("#imageInput");

//
//

formm.on("submit", (e) => {
  e.preventDefault();
  let Email = formm.EmailSignup.val();
  let FullName = formm.fullnsignup.val();
  let UserName = formm.UsrSignup.val();
  let PassWord = formm.PwSignup.val();
  let localstorageimage = localStorage.getItem("User");
  console.log("ahmed ====", Email, FullName, UserName, PassWord);
  let DetailsObj = {
    email: Email,
    fullname: FullName,
    username: UserName,
    Password: PassWord,
    image: localstorageimage,
  };
  localStorage.setItem("User", JSON.stringify(DetailsObj));
  console.log("base64", DetailsObj);
  location.href = "/login-page/login.html";
});
// live Email
EmailSignupId.keyup((e) => {
  //   console.log(e.target.val(), formm.EmailSignup.val());
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (emailPattern.test(EmailSignupId.val())) {
    console.log(emailPattern.test(EmailSignupId.val()));
    console.log("accepted");
    btnInput.disabled = false;
    SpanEmail.attr("style", "display:none;");
    EmailSignupId.addClass("success");
  } else if (EmailSignupId.val() === "") {
    SpanEmail.attr("style", "display:none;");
    btnInput.disabled = true;
  } else {
    console.log("no accepted");
    EmailSignupId.addClass("failed");
    btnInput.disabled = true;
    SpanEmail.setAttribute("style", "display:block;");
  }
});
// Live Full Name
FullnSignupId.keyup((e) => {
  //   console.log(e.target.val(), formm.fullnsignup.val());
  const fullNamePattern = /^[a-zA-Z\s'-]{2,}$/;

  if (fullNamePattern.test(FullnSignupId.val())) {
    console.log(fullNamePattern.test(FullnSignupId.val()));
    console.log("accepted");
    btnInput.disabled = false;
    SpanName.attr("style", "display:none;");
    FullnSignupId.addClass("success");
  } else if (FullnSignupId.val() === "") {
    SpanName.attr("style", "display:none;");
    btnInput.disabled = true;
  } else {
    console.log("no accepted");
    FullnSignupId.addClass("failed");
    SpanName.attr("style", "display:block;");
    btnInput.disabled = true;
  }
});
// Live User Name

UsrSignupId.keyup((e) => {
  //   console.log(e.target.val(), formm.UsrSignup.val());
  const usernamePattern = /^[a-zA-Z0-9._-]{5,}$/;
  if (usernamePattern.test(UsrSignupId.val())) {
    console.log(usernamePattern.test(UsrSignupId.val()));
    console.log("accepted");
    btnInput.disabled = false;
    SpanUserName.attr("style", "display:none;");
    UsrSignupId.addClass("success");
  } else if (UsrSignupId.val() === "") {
    SpanUserName.attr("style", "display:none;");
    btnInput.disabled = true;
  } else {
    console.log("no accepted");
    UsrSignupId.addClass("failed");
    btnInput.disabled = true;

    SpanUserName.attr("style", "display:block;");
  }
});
// Live password

PwSignupId.keyup((e) => {
  //   console.log(e.target.val(), formm.PwSignup.val());
  const passwordPattern =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  if (passwordPattern.test(PwSignupId.val())) {
    console.log(passwordPattern.test(PwSignupId.val()));
    console.log("accepted");
    SpanPassword.attr("style", "display:none;");
    btnInput.disabled = false;
    PwSignupId.addClass("success");
  } else if (PwSignupId.val() === "") {
    SpanPassword.attr("style", "display:none;");
    btnInput.disabled = true;
  } else {
    console.log("no accepted");
    PwSignupId.addClass("failed");
    btnInput.disabled = true;
    SpanPassword.attr("style", "display:block;");
  }
});
imageInput.change(function (event) {
  const selectedFile = event.target.files[0];
  console.log(selectedFile);
  console.log(event.target.files);
  if (selectedFile) {
    const reader = new FileReader();
    reader.onload = function (event) {
      base64Image = event.target.result;
      localStorage.setItem("User", base64Image);
      console.log("Image stored in local storage.");
    };
    reader.readAsDataURL(selectedFile);
  }
});
