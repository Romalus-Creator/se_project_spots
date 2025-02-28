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
];

// ============================= LOAD POSTS ONTO PAGE =============================
const cardTemplate = document.querySelector("#post-template");
const cardsList = document.querySelector(".posts__list");

function getCardElement(initialCards) {
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
  cardElementImage.src = initialCards.link;
  cardElementText.textContent = initialCards.name;
  cardElementImage.alt = initialCards.name;

  // return the ready HTML element with the filled-in data
  return cardElement;
}

initialCards.forEach((element) => {
  cardResult = getCardElement(element);
  // Use the appropriate built-in DOM method to add this HTML element to the page.
  cardsList.append(cardResult);
});

// OLD FOR LOOP THAT WAS REMOVED FOR THE FOREACH ARRAY FUNCTION.
//  for (let i = 0; i < initialCards.length; i++) {
//   cardResult = getCardElement(initialCards[i]);
//   // Use the appropriate built-in DOM method to add this HTML element to the page.
//   cardsList.append(cardResult);
// }

/* TO DO TASK 2 OF 7:
- DONE I need to 'invert' my functions. I currently have the fillProfileForm func tucked inside the openModalForm func, but it should be the opposite.
- DONE Inverting the func's will allow me to use openModalForm in any fill'x'Form func - like the New Post Form that needs a func to open and close still.
- DONE After checking that this works with the openModalForm func, invert the funcs for the closeModalForm.
- I was able to abstract the open Modal fairly easily, but the close Modal is kicking my butt. I since there are two different div's with .modal class,
I imagine I need to run down the 'list' of the two div's, search if .modal--closed class is active (or removed?), then return the .modal[i] to pass the close-btn event function to the correct modal.
*/

// ============================= ALL MODALS =============================
const mainSection = document.querySelector(".main");
const modal = [...document.querySelectorAll(".modal")];

function openModalForm(modal) {
  modal.classList.remove("modal--closed");
  console.log(modal);
}

function closeModalForm(modal) {
  modal.classList.add("modal--closed");
  // console.log(modal);
}

// ============================= EDIT PROFILE MODAL =============================
const editModal = document.querySelector("#edit-modal");
const editBtn = document.querySelector(".profile__edit-btn");
const editModalCloseBtn = [
  ...document.querySelectorAll(".modal__close-btn"),
][0];
const profileName = mainSection.querySelector(".profile__name");
const profileDesc = mainSection.querySelector(".profile__description");
const newProfileName = editModal.querySelector("#profile-name-input");
const newProfileDesc = editModal.querySelector("#profile-description-input");
const profileFormElement = editModal.querySelector(".modal__form");
const submitProfileEditForm = editModal.querySelector(".modal__form");

editModalCloseBtn.addEventListener("click", () => {
  closeModalForm(modal[0]);
});

function submitProfileForm(event) {
  profileName.textContent = newProfileName.value;
  profileDesc.textContent = newProfileDesc.value;
  event.preventDefault();
  closeModalForm();
}

editBtn.addEventListener("click", () => {
  newProfileName.value = profileName.textContent;
  newProfileDesc.value = profileDesc.textContent;
  openModalForm(editModal);
});

submitProfileEditForm.addEventListener("submit", submitProfileForm);

// ============================= NEW POST MODAL =============================
const newPostModal = document.querySelector("#post-modal");
const newPostBtn = document.querySelector(".profile__post-btn");
const newPostModalCloseBtn = [
  ...document.querySelectorAll(".modal__close-btn"),
][1];

console.log(newPostModalCloseBtn);

newPostBtn.addEventListener("click", () => {
  openModalForm(newPostModal);
});

newPostModalCloseBtn.addEventListener("click", () => {
  closeModalForm(modal[1]);
});

/* TASK 3/7 TO DO:
- copy the editProfile's SubmitForm lines of code to the New Post Modal section. Tweak the copied lines to work for the New Post Modal's 'submit' button.
- adjust the editProfile's submitform code to work with the array of querySelectorAll for both submit btns. Similar to how I did the CloseBtn for both Modals.
- prepend the card URL and descriptions to the front of the cardsArray (whatever the name of the new array will be).

*/
