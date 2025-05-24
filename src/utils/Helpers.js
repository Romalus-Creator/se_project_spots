export function setButtonText(btn, isLoading) {
  const submitBtn = btn.submitter;
  const btnText = submitBtn.textContent;
  const btnTextLoading = `${btnText.substring(0, btnText.length - 1)}ing...`;
  if (isLoading) {
    return (submitBtn.textContent = btnTextLoading);
  } else {
    return (submitBtn.textContent = btnText);
  }
}
