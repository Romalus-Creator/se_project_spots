//ADD FAKE COMMENT FOR PROJECT 9 BRANCH
import "./index.css";
import {
  settings,
  enableValidation,
  resetValidation,
  disableButton,
} from "../scripts/validation.js";
import { Api } from "../utils/Api.js";

import logoSrc from "../images/logo.svg";
import avatarSrc from "../images/avatar.jpg";
import pencilIconSrc from "../images/pencil_icon.svg";
import plusIconSrc from "../images/plus_icon.svg";

const logoImage = document.getElementById("image-logo");
const avatarImage = document.getElementById("image-avatar");
const pencilIconImage = document.getElementById("image-pencil_icon");
const plusIconImage = document.getElementById("image-plus_icon");

logoImage.src = logoSrc;
avatarImage.src = avatarSrc;
pencilIconImage.src = pencilIconSrc;
plusIconImage.src = plusIconSrc;

const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },

  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },

  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },

  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },

  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },

  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },

  {
    name: "Golden Gate Bridge",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
  },
];

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "c9851f90-cf8f-4cb2-ba1b-6a2d14bb1b1d",
    "Content-Type": "application/json",
  },
});

// api
//   .getInitialCards()
//   .then((cards) => {
//     cards.forEach((element) => {
//       const cardResult = getCardElement(element);
//       cardsList.append(cardResult);
//     });
//   })
//   .catch(console.error);

api
  .getAppInfo()
  .then(([cards, headers]) => {
    cards.forEach((element) => {
      const cardResult = getCardElement(element);
      cardsList.append(cardResult);
    });

    // Handle the user's info
    profileName.textContent = headers.name;
    profileDesc.textContent = headers.about;
    profileImage.src = headers.avatar;
  })
  .catch(console.error);

// ============================= PREVIEW [IMAGE] MODAL =============================
const previewModal = document.querySelector("#preview-modal");
const previewModalCloseBtn = previewModal.querySelector(".modal__close-btn");
const modalImage = previewModal.querySelector(".modal__image");
const modalCaption = previewModal.querySelector(".modal__caption");

// ============================= LOAD POSTS ONTO PAGE =============================
const cardTemplate = document.querySelector("#post-template");
const cardsList = document.querySelector(".posts__list");
const modalSubmitBtns = document.querySelectorAll(".modal__submit-btn");

function getCardElement(initialCard) {
  const cardElement = cardTemplate.content
    .querySelector(".post")
    .cloneNode(true);

  // select the card title and image and store them in variables
  // set the image’s src attribute to the image to the link field of the object
  const cardElementImage = cardElement.querySelector(".post__image");
  const cardElementText = cardElement.querySelector(".post__text");

  // set the image’s src attribute to the image to the link field of the object
  // set the image’s alt text to the name field of the object
  // set the card’s title to the name field of the object, too
  cardElementImage.src = initialCard.link;
  cardElementText.textContent = initialCard.name;
  cardElementImage.alt = initialCard.name;

  //Function to change CSS on 'heart-shaped' Like Icon for each post.
  const cardLikeBtn = cardElement.querySelector(".post__like-btn");
  cardLikeBtn.addEventListener("click", () => {
    cardLikeBtn.classList.toggle("post__like-btn_clicked");
  });

  //Make Trash Can icon delete the respective post.
  const postDeleteBtn = cardElement.querySelector(".post__delete-btn"); // MAY NEED TO CHANGE WHERE THE QUERY SELECTOR STARTS
  postDeleteBtn.addEventListener("click", () => {
    cardElement.remove();
  });

  //Click Event anywhere on the post__image will open the preview-modal to better view the picture.
  cardElementImage.addEventListener("click", () => {
    openModal(previewModal);
    modalImage.src = cardElementImage.src;
    modalImage.alt = cardElementImage.alt;
    modalCaption.textContent = cardElementText.textContent;
    // console.log(previewModal.classList);
  });

  // return the ready HTML element with the filled-in data
  return cardElement;
}

// ============================= ALL MODALS =============================
const mainSection = document.querySelector(".main");
const modals = [...document.querySelectorAll(".modal")];
const closeButtons = document.querySelectorAll(".modal__close-btn");

function openModal(modal) {
  modal.classList.remove("modal_closed");
  document.addEventListener("keydown", handleEscape);
  // console.log(modal.addEventListener("keydown", handleEscape));
}

function closeModal(modal) {
  modal.classList.add("modal_closed");
  // console.log(modal);
  document.removeEventListener("keydown", handleEscape);
}

function handleEscape(evt) {
  modals.forEach((modal) => {
    if (evt.key === "Escape") {
      closeModal(modal);
    }
  });
}

modals.forEach((modal) => {
  modal.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("modal")) {
      closeModal(modal);
    }
  });
});

closeButtons.forEach((button) => {
  const popup = button.closest(".modal");
  button.addEventListener("click", () => closeModal(popup));
});

// ============================= EDIT PROFILE MODAL =============================
const editModal = document.querySelector("#edit-modal");
const editBtn = document.querySelector(".profile__edit-btn");
const editModalCloseBtn = editModal.querySelector(".modal__close-btn");
const profileName = mainSection.querySelector(".profile__name");
const profileDesc = mainSection.querySelector(".profile__description");
const newProfileName = editModal.querySelector("#profile-name-input");
const newProfileDesc = editModal.querySelector("#profile-description-input");
const profileForm = editModal.querySelector(".modal__form");
const profileImage = document.querySelector(".profile__image");

editBtn.addEventListener("click", () => {
  newProfileName.value = profileName.textContent;
  newProfileDesc.value = profileDesc.textContent;
  openModal(editModal);
  resetValidation(editModal, [newProfileName, newProfileDesc], settings);
});

enableValidation(settings);

function submitProfileForm(event) {
  api
    .editUserInfo({ name: newProfileName.value, about: newProfileDesc.value })
    .then((data) => {
      // dta arg instead of input values.
      profileName.textContent = data.name;
      profileDesc.textContent = data.about;
    })
    .catch(console.error);
  event.preventDefault();
  closeModal(editModal);
  // disableButton(modalSubmitBtns);
  disableButton(event.submitter, settings);
}

profileForm.addEventListener("submit", (profileData) => {
  submitProfileForm(profileData);
});

// ============================= NEW POST MODAL =============================
const newPostModal = document.querySelector("#post-modal");
const newPostBtn = document.querySelector(".profile__post-btn");
const newPostModalCloseBtn = newPostModal.querySelector(".modal__close-btn");
const submitNewPostForm = newPostModal.querySelector(".modal__form");
const imageLink = newPostModal.querySelector("#image-link");
const caption = newPostModal.querySelector("#caption");

newPostBtn.addEventListener("click", () => {
  openModal(newPostModal);
});

function submitNewPost(event) {
  api
    .postNewCard({ name: caption.value, link: imageLink.value })
    .then((data) => {
      const newCardResult = getCardElement(data);
      cardsList.prepend(newCardResult);
    })
    .catch(console.error);
  disableButton(event.submitter, settings);
  event.target.reset();
  event.preventDefault();
  closeModal(newPostModal);
}

submitNewPostForm.addEventListener("submit", (event) => {
  submitNewPost(event);
  // Link to an image form unsplash.com that I used to ensure everything works properly:
  // https://plus.unsplash.com/premium_photo-1734543942836-3f9a0c313da4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8
});

/* TASK 3/7 TO DO:
- DONE copy the editProfile's SubmitForm lines of code to the New Post Modal section. Tweak the copied lines to work for the New Post Modal's 'submit' button.
- DONE adjust the editProfile's submitform code to work with the array of querySelectorAll for both submit btns. Similar to how I did the CloseBtn for both Modals.
- DONE prepend the card URL and descriptions to the front of the cardsArray (whatever the name of the new array will be).
*/

/* TASK 4/7 TO DO:
- DONE set listener for like btn. Pass it through getCardElement function to ensure each card gets the listener.
- DONE console.log to ensure listener works on each like btn.
- DONE make CSS for when Like btn is clicked. Ensure it's Figma's designated red color.
- DONE make CSS:hover for when a 'liked' btn is hovered over.
- DONE update listener func to change/add CSS classes to like btn when pressed.
- add delete icon into getCardElement func so each card has the new icon.
*/
