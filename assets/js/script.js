const submitButton = document.querySelector("#btn-send-message");
const emailErrorLabel = document.querySelector("#email-input");
const subjectErrorLabel = document.querySelector("#subject-input");
const messageErrorLabel = document.querySelector("#message-input");
const emailInput = document.querySelector("#email");
const subjectInput = document.querySelector("#subject");
const messageInput = document.querySelector("#message");

function validateEmail() {
  emailErrorLabel.innerHTML = "";

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(emailInput.value)) {
    emailErrorLabel.innerHTML = "Email tidak valid";
  } else if (emailInput.value == "") {
    emailErrorLabel.innerHTML = "Email Tidak Boleh kosong";
  } else {
    return true;
  }
}

function validateSubject() {
  if (subjectInput.value == "") {
    subjectErrorLabel.innerHTML = "Subject Harus diisi";
  } else {
    subjectErrorLabel.innerHTML = "";
    return true;
  }
}

function validateMessage() {
  if (messageInput.value == "") {
    messageErrorLabel.innerHTML = "Message Harus Terisi";
  } else {
    messageErrorLabel.innerHTML = "";
    return true;
  }
}

emailInput.addEventListener("keyup", validateEmail);
submitButton.addEventListener("click", () => {
  if (!validateEmail() && !validateMessage() && !validateSubject()) {
    alert("Form tidak sesuai");
  } else if (validateEmail() && validateMessage() && validateSubject()) {
    alert("Terima Kasih Atas Pesan Anda 💖✨");
  }
});
