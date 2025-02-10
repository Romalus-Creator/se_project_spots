let initialCards = {
  obj1: {
    name: "Val Thorens",
    link: new URL(
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg"
    ),
  },

  obj2: {
    name: "Restaurant terrace",
    link: new URL(
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg"
    ),
  },

  obj3: {
    name: "An outdoor cafe",
    link: new URL(
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg"
    ),
  },

  obj4: {
    name: "A very long bridge, over the forest and through the trees",
    link: new URL(
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg"
    ),
  },

  obj5: {
    name: "Tunnel with morning light",
    link: new URL(
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg"
    ),
  },

  obj6: {
    name: "Mountain house",
    link: new URL(
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg"
    ),
  },
};

//profile__edit-btn .modal__opened
const editProfileForm = document.querySelector("#edit-modal");
const editBtn = document.querySelector(".profile__edit-btn");
const closeBtn = document.querySelector(".modal__close-btn");
//const submitBtn = document.querySelector(".modal__submit-btn");

// function testClick() {
//   console.log("clicked button");
// }

function openModalForm() {
  editProfileForm.classList.remove("modal__closed");
  editProfileForm.classList.add("modal__opened");
}

function closeModalForm() {
  editProfileForm.classList.remove("modal__opened");
  editProfileForm.classList.add("modal__closed");
}

//how to put closeModalForm func inside this func?

editBtn.addEventListener("click", openModalForm);

closeBtn.addEventListener("click", closeModalForm);

// submitBtn.addEventListener("click", function submitModalForm(evt) {
//   editProfileForm.classList.remove("modal__opened");
//   editProfileForm.classList.add("modal__closed");
//   evt.preventDefault();
//   console.log(evt.target);
// });

// console.log(editProfileForm);
// console.log(editBtn);

//need to preventDefault() modal after hitting submitt button -right?
