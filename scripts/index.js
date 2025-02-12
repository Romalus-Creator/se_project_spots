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
const submitBtn = editModal.querySelector(".modal__submit-btn");

function submitModalForm(event) {
  event.preventDefault();
  // console.log("clicked button");
  profileName.textContent = newProfileName.value;
  profileDesc.textContent = newProfileDesc.value;
  closeModalForm();
}

function openModalForm() {
  newProfileName.value = profileName.textContent;
  newProfileDesc.value = profileDesc.textContent;
  editModal.classList.remove("modal__closed");
  editModal.classList.add("modal__opened");
}

function closeModalForm() {
  editModal.classList.remove("modal__opened");
  editModal.classList.add("modal__closed");
}

editBtn.addEventListener("click", openModalForm);

closeBtn.addEventListener("click", closeModalForm);

submitBtn.addEventListener("click", submitModalForm);

const cardTemplate = document.querySelector("#post-template");
const cardsList = document.querySelector(".posts__list");

function getCardElement(initialCards) {
  // console.log(initialCards);
  const cardElement = cardTemplate.content
    .querySelector(".post")
    .cloneNode(true);

  // select the card title and image and store them in variables
  // set the image’s src attribute to the image to the link field of the object
  const cardElementImage = cardElement.querySelector(".post__image");
  const cardElementText = cardElement.querySelector(".post__text");
  const cardElementAlt = cardElement.querySelector(".post__text");

  // set the image’s src attribute to the image to the link field of the object
  // set the image’s alt text to the name field of the object
  // set the card’s title to the name field of the object, too
  cardElementImage.src = initialCards.link;
  cardElementText.textContent = initialCards.name;
  cardElementText.alt = initialCards.name;
  console.log(cardElementImage);
  // console.log(cardElementText);

  // return the ready HTML element with the filled-in data
  return cardElement;
}

for (let i = 0; i < initialCards.length; i++) {
  cardResult = getCardElement(initialCards[i]);
  // Use the appropriate built-in DOM method to add this HTML element to the page.
  cardsList.append(cardResult);
}
