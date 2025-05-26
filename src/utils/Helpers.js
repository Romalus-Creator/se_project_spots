export function setButtonText(event, isLoading) {
  const submitBtn = event.submitter;
  console.log(event);
  if (isLoading) {
    // Set loading state based on button type
    if (submitBtn.classList.contains("modal__submit-btn_delete")) {
      submitBtn.textContent = "Deleting...";
    } else {
      submitBtn.textContent = "Saving...";
    }
  } else {
    // Reset to original text based on button type
    if (submitBtn.classList.contains("modal__submit-btn_delete")) {
      submitBtn.textContent = "Delete";
    } else {
      submitBtn.textContent = "Save";
    }
  }
}
