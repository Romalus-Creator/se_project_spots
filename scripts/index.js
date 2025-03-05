let initialCards = [
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

// ============================= LOAD POSTS ONTO PAGE =============================
const cardTemplate = document.querySelector("#post-template");
const cardsList = document.querySelector(".posts__list");

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
    if (cardLikeBtn.classList[1] == "post__like-btn_clicked") {
      cardLikeBtn.classList.remove("post__like-btn_clicked");
      // console.log(cardLikeBtn.classList);
      // console.log(cardLikeBtn.classList[1]);
    } else {
      cardLikeBtn.classList.add("post__like-btn_clicked");
      // console.log(cardLikeBtn.classList);
    }
  });

  //Make Trash Can icon delete the respective post.
  const postDeleteBtn = cardElement.querySelector(".post__delete-btn"); // MAY NEED TO CHANGE WHERE THE QUERY SELECTOR STARTS
  postDeleteBtn.addEventListener("click", () => {
    cardElement.remove();
  });

  //Click Event anywhere on the post__image will open the preview-modal to better view the picture.
  const postImage = cardElement.querySelector(".post__image");
  const previewModal = document.querySelector("#preview-modal");
  const modalImage = previewModal.querySelector(".modal__image");
  const modalCaption = previewModal.querySelector(".modal__caption");
  postImage.addEventListener("click", () => {
    previewModal.classList.remove("modal_closed");
    modalImage.src = cardElementImage.src;
    modalImage.alt = cardElementImage.alt;
    modalCaption.textContent = cardElementText.textContent;
    // console.log(previewModal.classList);
  });

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
I imagine I need to run down the 'list' of the two div's, search if .modal_closed class is active (or removed?), then return the .modal[i] to pass the close-btn event function to the correct modal.
*/

// ============================= ALL MODALS =============================
const mainSection = document.querySelector(".main");
const modal = [...document.querySelectorAll(".modal")];

function openModalForm(modal) {
  modal.classList.remove("modal_closed");
}

function closeModalForm(modal) {
  modal.classList.add("modal_closed");
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

editBtn.addEventListener("click", () => {
  newProfileName.value = profileName.textContent;
  newProfileDesc.value = profileDesc.textContent;
  openModalForm(editModal);
});

function submitProfileForm(event) {
  event.preventDefault();
  closeModalForm(modal[0]);
}

submitProfileEditForm.addEventListener("submit", () => {
  profileName.textContent = newProfileName.value;
  profileDesc.textContent = newProfileDesc.value;
  submitProfileForm(event);
});

// ============================= NEW POST MODAL =============================
const newPostModal = document.querySelector("#post-modal");
const newPostBtn = document.querySelector(".profile__post-btn");
const newPostModalCloseBtn = [
  ...document.querySelectorAll(".modal__close-btn"),
][1];
const submitNewPostForm = newPostModal.querySelector(".modal__form");
const imageLink = newPostModal.querySelector("#image-link");
const caption = newPostModal.querySelector("#caption");

newPostBtn.addEventListener("click", () => {
  openModalForm(newPostModal);
});

newPostModalCloseBtn.addEventListener("click", () => {
  closeModalForm(modal[1]);
});

function submitNewPost(event) {
  event.preventDefault();
  closeModalForm(modal[1]);
}

submitNewPostForm.addEventListener("submit", () => {
  const newCard = {
    link: imageLink.value,
    name: caption.value,
  };
  submitNewPost(event);

  newCardResult = getCardElement(newCard);
  cardsList.prepend(newCardResult);

  //Remove values to ensure Placeholder text reappears each time the 'New Post' button is clicked.
  imageLink.value = "";
  caption.value = "";

  // Link to an image form unsplash.com that I used to ensure everything works properly:
  // https://plus.unsplash.com/premium_photo-1734543942836-3f9a0c313da4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8
});

// ============================= PREVIEW [IMAGE] MODAL =============================
const previewModalCloseBtn = [
  ...document.querySelectorAll(".modal__close-btn"),
][2];
previewModalCloseBtn.addEventListener("click", () => {
  // console.log(modal);
  modal[2].classList.add("modal_closed");
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
