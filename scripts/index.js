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

//profile__edit-btn .modal__opened
const editModal = document.querySelector("#edit-modal");
const editBtn = document.querySelector(".profile__edit-btn");
const closeBtn = document.querySelector(".modal__close-btn");

const mainSection = document.querySelector(".main");
const profileName = mainSection.querySelector(".profile__name");
const profileDesc = mainSection.querySelector(".profile__description");
const newProfileName = editModal.querySelector("#profile-name-input");
const newProfileDesc = editModal.querySelector("#profile-description-input");

const profileFormElement = editModal.querySelector(".modal__form");
const submitForm = editModal.querySelector(".modal__form");

//It already looks cleaner! Thank you for the suggestion, code reviewer!
function fillProfileForm() {
  newProfileName.value = profileName.textContent;
  newProfileDesc.value = profileDesc.textContent;
}

function openModalForm() {
  editModal.classList.remove("modal--closed");
  fillProfileForm();
}

function closeModalForm() {
  editModal.classList.add("modal--closed");
}

function submitModalForm(event) {
  profileName.textContent = newProfileName.value;
  profileDesc.textContent = newProfileDesc.value;
  event.preventDefault();
  closeModalForm();
}

editBtn.addEventListener("click", openModalForm);

closeBtn.addEventListener("click", closeModalForm);

submitForm.addEventListener("submit", submitModalForm);

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
