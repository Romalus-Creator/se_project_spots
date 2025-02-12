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

const cardTemplate = document.querySelector("#card-template");
// const cardImage = cardTemplate.querySelector("post__image");
// const cardText = cardTemplate.querySelector("post__text");

// console.log(cardTemplate);

function getCardElement(data) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);
  return cardElement;
}

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

for (let i = 0; i < initialCards.length; i++) {
  getCardElement(initialCards[i]);
  console.log(cardElement);
}
